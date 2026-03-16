Add-Type -AssemblyName System.Drawing

$targets = @(
  @{ Name = "agra-taj"; Source = "public/agra-taxi-service-hero.jpg" },
  @{ Name = "jaipur-hawa-mahal"; Source = "src/assets/gallery/jaipur-hawa-mahal.jpg" },
  @{ Name = "varanasi-ghats"; Source = "src/assets/gallery/varanasi-ghats.jpg" },
  @{ Name = "ayodhya-temple"; Source = "src/assets/gallery/ayodhya-temple.jpg" },
  @{ Name = "manali-mountains"; Source = "src/assets/gallery/manali-mountains.jpg" },
  @{ Name = "rishikesh-bridge"; Source = "src/assets/gallery/rishikesh-bridge.jpg" },
  @{ Name = "tour-happy-family"; Source = "src/assets/gallery/happy-family.jpg" },
  @{ Name = "innova-tour"; Source = "src/assets/gallery/innova-trip.jpg" }
)

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

foreach ($target in $targets) {
  if (-not (Test-Path $target.Source)) {
    throw "Source image not found: $($target.Source)"
  }

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

Write-Output "Generated hero breakpoint images in $outputDir"
