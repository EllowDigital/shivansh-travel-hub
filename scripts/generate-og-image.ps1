Add-Type -AssemblyName System.Drawing

$inputPath = "public/hero/agra-taj-desktop.jpg"
$carPath = "src/assets/swift-dzire.png"
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
$overlayDark = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(90, 8, 22, 34))
$graphics.FillRectangle($overlayDark, $fullRect)

$leftShade = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  (New-Object System.Drawing.Rectangle(0, 0, 760, $height)),
  ([System.Drawing.Color]::FromArgb(205, 7, 26, 43)),
  ([System.Drawing.Color]::FromArgb(30, 7, 26, 43)),
  0.0
)
$graphics.FillRectangle($leftShade, 0, 0, 760, $height)

$carPanelRect = New-Object System.Drawing.Rectangle(700, 86, 430, 458)
$carPanelBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(112, 6, 20, 34))
$carBorderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(150, 205, 224, 240), 2)
$graphics.FillRectangle($carPanelBrush, $carPanelRect)
$graphics.DrawRectangle($carBorderPen, $carPanelRect)

$car = [System.Drawing.Image]::FromFile($carPath)
$carInnerWidth = 382
$carInnerHeight = 280
$carScale = [Math]::Min($carInnerWidth / $car.Width, $carInnerHeight / $car.Height)
$carDrawWidth = [int][Math]::Floor($car.Width * $carScale)
$carDrawHeight = [int][Math]::Floor($car.Height * $carScale)
$carDrawX = [int]($carPanelRect.X + (($carPanelRect.Width - $carDrawWidth) / 2))
$carDrawY = [int]($carPanelRect.Y + 110 + (($carInnerHeight - $carDrawHeight) / 2))

$shadowBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(110, 8, 12, 18))
$shadowWidth = [int]($carDrawWidth * 0.72)
$shadowHeight = 24
$shadowX = [int]($carDrawX + (($carDrawWidth - $shadowWidth) / 2))
$shadowY = [int]($carDrawY + $carDrawHeight - 8)
$graphics.FillEllipse($shadowBrush, $shadowX, $shadowY, $shadowWidth, $shadowHeight)

$graphics.DrawImage($car, $carDrawX, $carDrawY, $carDrawWidth, $carDrawHeight)

$brandFont = New-Object System.Drawing.Font("Segoe UI", 74, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$subBrandFont = New-Object System.Drawing.Font("Segoe UI", 42, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$taglineFont = New-Object System.Drawing.Font("Segoe UI", 46, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$metaFont = New-Object System.Drawing.Font("Segoe UI", 30, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$phoneFont = New-Object System.Drawing.Font("Segoe UI", 36, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$panelTitleFont = New-Object System.Drawing.Font("Segoe UI", 27, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$panelMetaFont = New-Object System.Drawing.Font("Segoe UI", 22, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)

$white = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(245, 249, 253))
$accent = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 236, 178, 76))
$soft = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(232, 218, 230, 244))

$tagBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(170, 19, 54, 82))
$tagRect = New-Object System.Drawing.Rectangle(86, 60, 344, 44)
$graphics.FillRectangle($tagBrush, $tagRect)
$graphics.DrawString("AGRA TAXI SERVICE", (New-Object System.Drawing.Font("Segoe UI", 20, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)), $accent, 102, 69)

$graphics.DrawString("Shivansh", $brandFont, $white, 84, 118)
$graphics.DrawString("Tour & Travels", $subBrandFont, $accent, 90, 214)
$graphics.DrawString("Book Trusted", $taglineFont, $white, 84, 306)
$graphics.DrawString("Taxi Rides", $taglineFont, $white, 84, 360)
$graphics.DrawString("Airport Pickup | Outstation | Tours", $metaFont, $soft, 86, 430)
$graphics.DrawString("Call +91 8865038345", $phoneFont, $accent, 84, 486)

$graphics.DrawString("Clean Cars", $panelTitleFont, $white, 742, 474)
$graphics.DrawString("Verified drivers | 24x7 support", $panelMetaFont, $soft, 742, 514)

$jpgCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
$encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 92L)
$bitmap.Save($outputPath, $jpgCodec, $encParams)

$brandFont.Dispose()
$subBrandFont.Dispose()
$taglineFont.Dispose()
$metaFont.Dispose()
$phoneFont.Dispose()
$panelTitleFont.Dispose()
$panelMetaFont.Dispose()
$white.Dispose()
$accent.Dispose()
$soft.Dispose()
$tagBrush.Dispose()
$carPanelBrush.Dispose()
$carBorderPen.Dispose()
$leftShade.Dispose()
$overlayDark.Dispose()
$shadowBrush.Dispose()
$car.Dispose()
$bg.Dispose()
$graphics.Dispose()
$bitmap.Dispose()

Write-Output "Generated $outputPath"
