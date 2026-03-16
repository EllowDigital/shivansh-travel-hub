Add-Type -AssemblyName System.Drawing

$inputPath = "public/agra-taxi-service-hero.jpg"
$outputPath = "public/og-image.jpg"
$width = 1200
$height = 630

$bitmap = New-Object System.Drawing.Bitmap($width, $height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

$bg = [System.Drawing.Image]::FromFile($inputPath)
$scale = [Math]::Max($width / $bg.Width, $height / $bg.Height)
$drawWidth = [int][Math]::Ceiling($bg.Width * $scale)
$drawHeight = [int][Math]::Ceiling($bg.Height * $scale)
$offsetX = [int](($width - $drawWidth) / 2)
$offsetY = [int](($height - $drawHeight) / 2)
$graphics.DrawImage($bg, $offsetX, $offsetY, $drawWidth, $drawHeight)

$fullRect = New-Object System.Drawing.Rectangle(0, 0, $width, $height)
$overlay = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  $fullRect,
  ([System.Drawing.Color]::FromArgb(180, 8, 32, 52)),
  ([System.Drawing.Color]::FromArgb(120, 15, 66, 102)),
  20.0
)
$graphics.FillRectangle($overlay, $fullRect)

$panelRect = New-Object System.Drawing.Rectangle(70, 90, 1060, 450)
$panelBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(120, 5, 20, 34))
$panelBorder = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(130, 120, 175, 215), 2)
$graphics.FillRectangle($panelBrush, $panelRect)
$graphics.DrawRectangle($panelBorder, $panelRect)

$brandFont = New-Object System.Drawing.Font("Segoe UI", 70, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$subBrandFont = New-Object System.Drawing.Font("Segoe UI", 38, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$taglineFont = New-Object System.Drawing.Font("Segoe UI", 42, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$metaFont = New-Object System.Drawing.Font("Segoe UI", 28, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)

$white = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(245, 249, 253))
$accent = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 236, 178, 76))

$graphics.DrawString("Shivansh", $brandFont, $white, 120, 130)
$graphics.DrawString("Tour & Travels", $subBrandFont, $accent, 126, 220)
$graphics.DrawString("Trusted Taxi & Tour Services", $taglineFont, $white, 120, 320)
$graphics.DrawString("Trusted taxi and tour services across India", $metaFont, $white, 120, 390)
$graphics.DrawString("Call +91 8865038345", $metaFont, $accent, 120, 440)

$jpgCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
$encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 92L)
$bitmap.Save($outputPath, $jpgCodec, $encParams)

$brandFont.Dispose()
$subBrandFont.Dispose()
$taglineFont.Dispose()
$metaFont.Dispose()
$white.Dispose()
$accent.Dispose()
$panelBrush.Dispose()
$panelBorder.Dispose()
$overlay.Dispose()
$bg.Dispose()
$graphics.Dispose()
$bitmap.Dispose()

Write-Output "Generated $outputPath"
