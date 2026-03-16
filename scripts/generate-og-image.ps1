Add-Type -AssemblyName System.Drawing

$inputPath = "public/agra-taxi-service-hero.jpg"
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
$overlay = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  $fullRect,
  ([System.Drawing.Color]::FromArgb(178, 8, 32, 52)),
  ([System.Drawing.Color]::FromArgb(118, 15, 66, 102)),
  20.0
)
$graphics.FillRectangle($overlay, $fullRect)

$leftPanelRect = New-Object System.Drawing.Rectangle(68, 84, 620, 466)
$leftPanelBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(126, 5, 20, 34))
$panelBorder = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(130, 120, 175, 215), 2)
$carPanelRect = New-Object System.Drawing.Rectangle(708, 84, 424, 466)
$carPanelBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(112, 5, 20, 34))
$carFramePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(120, 255, 255, 255), 2)
$groundPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(170, 235, 240, 245), 3)
$goldPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(220, 246, 190, 84), 4)
$goldPen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round

$graphics.FillRectangle($leftPanelBrush, $leftPanelRect)
$graphics.DrawRectangle($panelBorder, $leftPanelRect)
$graphics.FillRectangle($carPanelBrush, $carPanelRect)
$graphics.DrawRectangle($carFramePen, $carPanelRect)

$car = [System.Drawing.Image]::FromFile($carPath)
$carInnerWidth = 392
$carInnerHeight = 360
$carScale = [Math]::Min($carInnerWidth / $car.Width, $carInnerHeight / $car.Height)
$carDrawWidth = [int][Math]::Floor($car.Width * $carScale)
$carDrawHeight = [int][Math]::Floor($car.Height * $carScale)
$carDrawX = [int]($carPanelRect.X + (($carPanelRect.Width - $carDrawWidth) / 2))
$carDrawY = [int]($carPanelRect.Y + 44 + (($carInnerHeight - $carDrawHeight) / 2))
$graphics.DrawImage($car, $carDrawX, $carDrawY, $carDrawWidth, $carDrawHeight)

$groundY = $carPanelRect.Y + $carPanelRect.Height - 64
$graphics.DrawLine($groundPen, $carPanelRect.X + 32, $groundY, $carPanelRect.X + $carPanelRect.Width - 32, $groundY)

$accentPath = New-Object System.Drawing.Drawing2D.GraphicsPath
$accentPath.StartFigure()
$accentPath.AddLine(730, 126, 1110, 126)
$accentPath.AddLine(1110, 126, 1074, 164)
$graphics.DrawPath($goldPen, $accentPath)

$brandFont = New-Object System.Drawing.Font("Segoe UI", 72, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$subBrandFont = New-Object System.Drawing.Font("Segoe UI", 40, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$taglineFont = New-Object System.Drawing.Font("Segoe UI", 34, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$metaFont = New-Object System.Drawing.Font("Segoe UI", 27, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$phoneFont = New-Object System.Drawing.Font("Segoe UI", 31, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$carLabelFont = New-Object System.Drawing.Font("Segoe UI", 25, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)

$white = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(245, 249, 253))
$accent = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 236, 178, 76))
$soft = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(220, 218, 230, 244))

$graphics.DrawString("Shivansh", $brandFont, $white, 110, 124)
$graphics.DrawString("Tour & Travels", $subBrandFont, $accent, 114, 216)
$graphics.DrawString("Book Trusted Taxi Rides Across India", $taglineFont, $white, 110, 308)
$graphics.DrawString("Airport Pickup | Outstation | Tours", $metaFont, $soft, 110, 364)
$graphics.DrawString("Call +91 8865038345", $phoneFont, $accent, 110, 422)

$graphics.DrawString("CLEAN CARS", $carLabelFont, $white, 760, 486)
$graphics.DrawString("Verified drivers | 24x7", $metaFont, $soft, 760, 522)

$jpgCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
$encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 92L)
$bitmap.Save($outputPath, $jpgCodec, $encParams)

$brandFont.Dispose()
$subBrandFont.Dispose()
$taglineFont.Dispose()
$metaFont.Dispose()
$phoneFont.Dispose()
$carLabelFont.Dispose()
$white.Dispose()
$accent.Dispose()
$soft.Dispose()
$leftPanelBrush.Dispose()
$carPanelBrush.Dispose()
$panelBorder.Dispose()
$carFramePen.Dispose()
$groundPen.Dispose()
$goldPen.Dispose()
$accentPath.Dispose()
$overlay.Dispose()
$car.Dispose()
$bg.Dispose()
$graphics.Dispose()
$bitmap.Dispose()

Write-Output "Generated $outputPath"
