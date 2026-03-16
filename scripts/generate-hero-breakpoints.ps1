Add-Type -AssemblyName System.Drawing

$manualTargets = @(
  @{
    Name = "agra-taj"
    Source = "public/agra-taxi-service-hero.jpg"
    Title = "Taj Mahal, Agra"
    Alt = "Taj Mahal monument in Agra"
  }
)

$titleOverrides = @{
  "ayodhya-temple" = "Ayodhya Temple"
  "happy-family" = "Family Tour Across India"
  "innova-trip" = "Premium Innova Tours"
  "jaipur-hawa-mahal" = "Hawa Mahal, Jaipur"
  "manali-mountains" = "Manali Mountain Escape"
  "rishikesh-bridge" = "Rishikesh Lakshman Jhula"
  "taj-mahal" = "Taj Mahal Sunrise View"
  "varanasi-ghats" = "Varanasi Ghats"
}

function Convert-ToSlug {
  param([string]$Value)
  $slug = $Value.ToLower() -replace "[^a-z0-9]+", "-"
  return $slug.Trim("-")
}

function Convert-ToTitle {
  param([string]$Slug)
  (($Slug -split "-" | Where-Object { $_ }) |
    ForEach-Object { $_.Substring(0, 1).ToUpper() + $_.Substring(1) }) -join " "
}

function Escape-TsString {
  param([string]$Value)
  return $Value.Replace("\", "\\").Replace('"', '\"')
}

$script:targets = @()
$script:usedNames = @{}

function Add-HeroTarget {
  param(
    [string]$Name,
    [string]$Source,
    [string]$Title,
    [string]$Alt
  )

  if (-not (Test-Path $Source)) {
    return
  }

  $finalName = $Name
  $suffix = 2
  while ($script:usedNames.ContainsKey($finalName)) {
    $finalName = "$Name-$suffix"
    $suffix += 1
  }
  $script:usedNames[$finalName] = $true

  $script:targets += @{
    Name = $finalName
    Source = $Source
    Title = $Title
    Alt = $Alt
  }
}

foreach ($target in $manualTargets) {
  Add-HeroTarget -Name $target.Name -Source $target.Source -Title $target.Title -Alt $target.Alt
}

$galleryDir = "src/assets/gallery"
$supportedExtensions = @(".jpg", ".jpeg", ".png", ".webp")

if (Test-Path $galleryDir) {
  $galleryFiles = Get-ChildItem -Path $galleryDir -File |
    Where-Object { $supportedExtensions -contains $_.Extension.ToLower() } |
    Sort-Object Name

  foreach ($file in $galleryFiles) {
    $baseSlug = Convert-ToSlug -Value $file.BaseName
    if ([string]::IsNullOrWhiteSpace($baseSlug)) {
      continue
    }

    $title = if ($titleOverrides.ContainsKey($baseSlug)) {
      $titleOverrides[$baseSlug]
    }
    else {
      Convert-ToTitle -Slug $baseSlug
    }

    Add-HeroTarget -Name $baseSlug -Source ("src/assets/gallery/" + $file.Name) -Title $title -Alt ("" + $title + " destination view in India")
  }
}

$sizes = @(
  @{ Suffix = "desktop"; Width = 1920; Height = 1080; Quality = 88L },
  @{ Suffix = "tablet"; Width = 1280; Height = 900; Quality = 84L },
  @{ Suffix = "mobile"; Width = 900; Height = 1400; Quality = 80L }
)

$outputDir = "public/hero"
if (-not (Test-Path $outputDir)) {
  New-Item -Path $outputDir -ItemType Directory | Out-Null
}

$jpgCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }

foreach ($target in $script:targets) {
  $src = [System.Drawing.Image]::FromFile($target.Source)

  foreach ($size in $sizes) {
    $bitmap = New-Object System.Drawing.Bitmap($size.Width, $size.Height)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

    # Cover resize with centered crop so hero always fills viewport dimensions.
    $scale = [Math]::Max($size.Width / $src.Width, $size.Height / $src.Height)
    $drawWidth = [int][Math]::Ceiling($src.Width * $scale)
    $drawHeight = [int][Math]::Ceiling($src.Height * $scale)
    $offsetX = [int](($size.Width - $drawWidth) / 2)
    $offsetY = [int](($size.Height - $drawHeight) / 2)

    $graphics.DrawImage($src, $offsetX, $offsetY, $drawWidth, $drawHeight)

    $outPath = Join-Path $outputDir "$($target.Name)-$($size.Suffix).jpg"
    $encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $size.Quality)
    $bitmap.Save($outPath, $jpgCodec, $encParams)

    $encParams.Dispose()
    $graphics.Dispose()
    $bitmap.Dispose()
  }

  $src.Dispose()
}

$heroSlidesTsPath = "src/lib/heroSlides.ts"
$lines = @(
  "export type HeroSlide = {",
  "  title: string;",
  "  alt: string;",
  "  desktopImage: string;",
  "  tabletImage: string;",
  "  mobileImage: string;",
  "};",
  "",
  "export const heroSlides: HeroSlide[] = ["
)

foreach ($target in $script:targets) {
  $safeTitle = Escape-TsString -Value $target.Title
  $safeAlt = Escape-TsString -Value $target.Alt

  $lines += "  {"
  $lines += "    title: `"$safeTitle`","
  $lines += "    alt: `"$safeAlt`","
  $lines += "    desktopImage: `"/hero/$($target.Name)-desktop.jpg`","
  $lines += "    tabletImage: `"/hero/$($target.Name)-tablet.jpg`","
  $lines += "    mobileImage: `"/hero/$($target.Name)-mobile.jpg`","
  $lines += "  },"
}

$lines += "];"
Set-Content -Path $heroSlidesTsPath -Value ($lines -join [Environment]::NewLine) -Encoding UTF8

Write-Output "Generated hero breakpoint images in $outputDir"
Write-Output "Updated hero slide data in $heroSlidesTsPath"
