Add-Type -AssemblyName System.Drawing

function New-BrandBitmap {
  param(
    [int]$Size
  )

  $bmp = New-Object System.Drawing.Bitmap($Size, $Size)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

  $rect = New-Object System.Drawing.Rectangle(0, 0, $Size, $Size)
  $radius = [int]([Math]::Round($Size * 0.25))

  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $path.StartFigure()
  $path.AddArc(0, 0, $radius, $radius, 180, 90)
  $path.AddArc($Size - $radius, 0, $radius, $radius, 270, 90)
  $path.AddArc($Size - $radius, $Size - $radius, $radius, $radius, 0, 90)
  $path.AddArc(0, $Size - $radius, $radius, $radius, 90, 90)
  $path.CloseFigure()

  $bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    $rect,
    ([System.Drawing.Color]::FromArgb(14, 56, 88)),
    ([System.Drawing.Color]::FromArgb(7, 34, 55)),
    90.0
  )
  $g.FillPath($bgBrush, $path)

  $goldBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    $rect,
    ([System.Drawing.Color]::FromArgb(247, 201, 106)),
    ([System.Drawing.Color]::FromArgb(230, 169, 62)),
    35.0
  )

  $carTop = [int]([Math]::Round($Size * 0.42))
  $carLeft = [int]([Math]::Round($Size * 0.17))
  $carRight = [int]([Math]::Round($Size * 0.83))
  $carBottom = [int]([Math]::Round($Size * 0.73))

  $bodyPath = New-Object System.Drawing.Drawing2D.GraphicsPath
  $bodyPath.StartFigure()
  $bodyPath.AddLine($carLeft, $carTop + [int]($Size * 0.14), $carLeft + [int]($Size * 0.16), $carTop - [int]($Size * 0.03))
  $bodyPath.AddLine($carLeft + [int]($Size * 0.16), $carTop - [int]($Size * 0.03), $carRight - [int]($Size * 0.16), $carTop - [int]($Size * 0.03))
  $bodyPath.AddLine($carRight - [int]($Size * 0.16), $carTop - [int]($Size * 0.03), $carRight, $carTop + [int]($Size * 0.14))
  $bodyPath.AddLine($carRight, $carTop + [int]($Size * 0.14), $carRight, $carBottom)
  $bodyPath.AddLine($carRight, $carBottom, $carLeft, $carBottom)
  $bodyPath.CloseFigure()
  $g.FillPath($goldBrush, $bodyPath)

  $windowBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(232, 242, 252))
  $windowPath = New-Object System.Drawing.Drawing2D.GraphicsPath
  $windowPath.StartFigure()
  $windowPath.AddLine($carLeft + [int]($Size * 0.19), $carTop + [int]($Size * 0.02), $carRight - [int]($Size * 0.19), $carTop + [int]($Size * 0.02))
  $windowPath.AddLine($carRight - [int]($Size * 0.19), $carTop + [int]($Size * 0.02), $carRight - [int]($Size * 0.09), $carTop + [int]($Size * 0.14))
  $windowPath.AddLine($carRight - [int]($Size * 0.09), $carTop + [int]($Size * 0.14), $carLeft + [int]($Size * 0.09), $carTop + [int]($Size * 0.14))
  $windowPath.CloseFigure()
  $g.FillPath($windowBrush, $windowPath)

  $linePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(220, 255, 255, 255), [Math]::Max(1, [int]($Size * 0.04)))
  $linePen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $linePen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
  $g.DrawLine($linePen, $carLeft, $carBottom, $carRight, $carBottom)

  $wheelColor = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(11, 22, 32))
  $hubColor = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(215, 222, 234))
  $wheelR = [int]([Math]::Round($Size * 0.085))
  $hubR = [int]([Math]::Round($Size * 0.032))
  $wheelY = $carBottom + [int]([Math]::Round($Size * 0.03))
  $leftWheelX = $carLeft + [int]([Math]::Round($Size * 0.18))
  $rightWheelX = $carRight - [int]([Math]::Round($Size * 0.18))

  $g.FillEllipse($wheelColor, $leftWheelX - $wheelR, $wheelY - $wheelR, $wheelR * 2, $wheelR * 2)
  $g.FillEllipse($wheelColor, $rightWheelX - $wheelR, $wheelY - $wheelR, $wheelR * 2, $wheelR * 2)
  $g.FillEllipse($hubColor, $leftWheelX - $hubR, $wheelY - $hubR, $hubR * 2, $hubR * 2)
  $g.FillEllipse($hubColor, $rightWheelX - $hubR, $wheelY - $hubR, $hubR * 2, $hubR * 2)

  $bgBrush.Dispose()
  $goldBrush.Dispose()
  $bodyPath.Dispose()
  $windowBrush.Dispose()
  $windowPath.Dispose()
  $linePen.Dispose()
  $wheelColor.Dispose()
  $hubColor.Dispose()
  $path.Dispose()
  $g.Dispose()

  return $bmp
}

$favicon16 = New-BrandBitmap -Size 16
$favicon16.Save("public/favicon-16x16.png", [System.Drawing.Imaging.ImageFormat]::Png)
$favicon16.Dispose()

$favicon32 = New-BrandBitmap -Size 32
$favicon32.Save("public/favicon-32x32.png", [System.Drawing.Imaging.ImageFormat]::Png)
$favicon32.Dispose()

$apple180 = New-BrandBitmap -Size 180
$apple180.Save("public/apple-touch-icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$apple180.Dispose()

Write-Output "Generated favicon-16x16.png, favicon-32x32.png, and apple-touch-icon.png"
