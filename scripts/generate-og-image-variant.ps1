Add-Type -AssemblyName System.Drawing

$inputPath = "public/hero/agra-taj-desktop.jpg"
$outputPath = "public/og-image-variant.jpg"
$width = 1200
$height = 630

$bitmap = New-Object System.Drawing.Bitmap($width, $height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
$graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

$bg = [System.Drawing.Image]::FromFile($inputPath)
$scale = [Math]::Max($width / $bg.Width, $height / $bg.Height)
$drawWidth = [int][Math]::Ceiling($bg.Width * $scale)
$drawHeight = [int][Math]::Ceiling($bg.Height * $scale)
$offsetX = [int](($width - $drawWidth) / 2)
$offsetY = [int](($height - $drawHeight) / 2)
$graphics.DrawImage($bg, $offsetX, $offsetY, $drawWidth, $drawHeight)

# Lighter treatment to keep Taj Mahal details visible.
$topOverlay = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(54, 8, 24, 40))
$graphics.FillRectangle($topOverlay, 0, 0, $width, $height)

$leftFade = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  (New-Object System.Drawing.Rectangle(0, 0, 700, $height)),
  ([System.Drawing.Color]::FromArgb(150, 8, 24, 40)),
  ([System.Drawing.Color]::FromArgb(18, 8, 24, 40)),
  0.0
)
$graphics.FillRectangle($leftFade, 0, 0, 700, $height)

$bottomBand = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  (New-Object System.Drawing.Rectangle(0, 430, $width, 200)),
  ([System.Drawing.Color]::FromArgb(10, 8, 24, 40)),
  ([System.Drawing.Color]::FromArgb(130, 8, 24, 40)),
  90.0
)
$graphics.FillRectangle($bottomBand, 0, 430, $width, 200)

$brandFont = New-Object System.Drawing.Font("Segoe UI", 76, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$subFont = New-Object System.Drawing.Font("Segoe UI", 42, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$taglineFont = New-Object System.Drawing.Font("Segoe UI", 47, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$metaFont = New-Object System.Drawing.Font("Segoe UI", 29, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$phoneFont = New-Object System.Drawing.Font("Segoe UI", 36, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$badgeFont = New-Object System.Drawing.Font("Segoe UI", 20, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)

$white = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(246, 249, 252))
$accent = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 234, 176, 70))
$soft = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(230, 214, 226, 242))
$badgeFill = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(155, 12, 44, 70))

$badgeRect = New-Object System.Drawing.Rectangle(80, 52, 300, 42)
$graphics.FillRectangle($badgeFill, $badgeRect)
$graphics.DrawString("AGRA TOURS AND TAXI", $badgeFont, $accent, 95, 60)

$graphics.DrawString("Shivansh", $brandFont, $white, 80, 116)
$graphics.DrawString("Tour & Travels", $subFont, $accent, 86, 214)
$graphics.DrawString("Book Trusted", $taglineFont, $white, 80, 304)
$graphics.DrawString("Taxi Rides", $taglineFont, $white, 80, 360)
$graphics.DrawString("Airport Pickup | Outstation | Tours", $metaFont, $soft, 82, 428)
$graphics.DrawString("Call +91 8865038345", $phoneFont, $accent, 80, 484)

$graphics.DrawString("Clean cars | Verified drivers", $metaFont, $white, 730, 520)

$jpgCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
$encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 92L)
$bitmap.Save($outputPath, $jpgCodec, $encParams)

$brandFont.Dispose()
$subFont.Dispose()
$taglineFont.Dispose()
$metaFont.Dispose()
$phoneFont.Dispose()
$badgeFont.Dispose()
$white.Dispose()
$accent.Dispose()
$soft.Dispose()
$badgeFill.Dispose()
$topOverlay.Dispose()
$leftFade.Dispose()
$bottomBand.Dispose()
$bg.Dispose()
$graphics.Dispose()
$bitmap.Dispose()

Write-Output "Generated $outputPath"
