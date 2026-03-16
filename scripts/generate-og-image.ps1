Add-Type -AssemblyName System.Drawing

$inputPath = "public/hero/agra-taj-desktop.jpg"
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
$overlayDark = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(52, 8, 22, 34))
$graphics.FillRectangle($overlayDark, $fullRect)

$leftShade = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  (New-Object System.Drawing.Rectangle(0, 0, 760, $height)),
  ([System.Drawing.Color]::FromArgb(128, 7, 26, 43)),
  ([System.Drawing.Color]::FromArgb(12, 7, 26, 43)),
  0.0
)
$graphics.FillRectangle($leftShade, 0, 0, 760, $height)

$brandFont = New-Object System.Drawing.Font("Segoe UI", 74, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$subBrandFont = New-Object System.Drawing.Font("Segoe UI", 40, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$taglineFont = New-Object System.Drawing.Font("Segoe UI", 40, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$metaFont = New-Object System.Drawing.Font("Segoe UI", 27, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$phoneFont = New-Object System.Drawing.Font("Segoe UI", 35, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$badgeFont = New-Object System.Drawing.Font("Segoe UI", 19, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)

$white = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(245, 249, 253))
$accent = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 236, 178, 76))
$soft = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(232, 218, 230, 244))

$tagBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(144, 19, 54, 82))
$tagRect = New-Object System.Drawing.Rectangle(86, 60, 320, 40)
$graphics.FillRectangle($tagBrush, $tagRect)
$graphics.DrawString("AGRA TOUR AND TAXI", $badgeFont, $accent, 102, 67)

$graphics.DrawString("Shivansh", $brandFont, $white, 84, 118)
$graphics.DrawString("Tour & Travels", $subBrandFont, $accent, 90, 214)
$graphics.DrawString("Book Trusted Taxi Rides", $taglineFont, $white, 84, 326)
$graphics.DrawString("Airport Pickup | Outstation | Tours", $metaFont, $soft, 86, 392)
$graphics.DrawString("Call +91 8865038345", $phoneFont, $accent, 84, 448)

$jpgCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
$encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 92L)
$bitmap.Save($outputPath, $jpgCodec, $encParams)

$brandFont.Dispose()
$subBrandFont.Dispose()
$taglineFont.Dispose()
$metaFont.Dispose()
$phoneFont.Dispose()
$badgeFont.Dispose()
$white.Dispose()
$accent.Dispose()
$soft.Dispose()
$tagBrush.Dispose()
$leftShade.Dispose()
$overlayDark.Dispose()
$bg.Dispose()
$graphics.Dispose()
$bitmap.Dispose()

Write-Output "Generated $outputPath"
