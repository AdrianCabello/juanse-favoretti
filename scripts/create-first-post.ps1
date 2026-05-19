Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$inputPath = Join-Path $root "public\assets\instagram\juanse-process-main.png"
$outputDir = Join-Path $root "social"
$outputPath = Join-Path $outputDir "primer-post-haircut-and-chill.png"

New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

$canvasWidth = 1080
$canvasHeight = 1350
$canvas = New-Object System.Drawing.Bitmap $canvasWidth, $canvasHeight
$graphics = [System.Drawing.Graphics]::FromImage($canvas)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

$image = [System.Drawing.Image]::FromFile($inputPath)

$scale = [Math]::Max($canvasWidth / $image.Width, $canvasHeight / $image.Height)
$scaledWidth = [int]($image.Width * $scale)
$scaledHeight = [int]($image.Height * $scale)
$x = [int](($canvasWidth - $scaledWidth) / 2)
$y = [int](($canvasHeight - $scaledHeight) / 2)

$graphics.DrawImage($image, $x, $y, $scaledWidth, $scaledHeight)

function Add-OverlayRectangle($graphics, $rect, $color) {
  $brush = New-Object System.Drawing.SolidBrush $color
  $graphics.FillRectangle($brush, $rect)
  $brush.Dispose()
}

for ($i = 0; $i -lt 760; $i++) {
  $alpha = [int](205 * (1 - ($i / 760)))
  $color = [System.Drawing.Color]::FromArgb($alpha, 5, 6, 8)
  Add-OverlayRectangle $graphics (New-Object System.Drawing.Rectangle 0, $i, $canvasWidth, 1) $color
}

for ($i = 0; $i -lt 620; $i++) {
  $alpha = [int](225 * ($i / 620))
  $color = [System.Drawing.Color]::FromArgb($alpha, 5, 6, 8)
  Add-OverlayRectangle $graphics (New-Object System.Drawing.Rectangle 0, ($canvasHeight - 620 + $i), $canvasWidth, 1) $color
}

$amber = [System.Drawing.Color]::FromArgb(255, 201, 147, 84)
$gold = [System.Drawing.Color]::FromArgb(255, 225, 176, 110)
$white = [System.Drawing.Color]::FromArgb(255, 247, 247, 244)
$softWhite = [System.Drawing.Color]::FromArgb(230, 247, 247, 244)
$muted = [System.Drawing.Color]::FromArgb(205, 216, 214, 207)
$black = [System.Drawing.Color]::FromArgb(255, 18, 16, 13)

$fontFamily = "Arial"
$brandFont = New-Object System.Drawing.Font $fontFamily, 31, ([System.Drawing.FontStyle]::Bold)
$smallFont = New-Object System.Drawing.Font $fontFamily, 25, ([System.Drawing.FontStyle]::Regular)
$headlineFont = New-Object System.Drawing.Font $fontFamily, 72, ([System.Drawing.FontStyle]::Bold)
$bodyFont = New-Object System.Drawing.Font $fontFamily, 29, ([System.Drawing.FontStyle]::Regular)
$ctaFont = New-Object System.Drawing.Font $fontFamily, 34, ([System.Drawing.FontStyle]::Bold)

$whiteBrush = New-Object System.Drawing.SolidBrush $white
$softBrush = New-Object System.Drawing.SolidBrush $softWhite
$mutedBrush = New-Object System.Drawing.SolidBrush $muted
$amberBrush = New-Object System.Drawing.SolidBrush $amber
$goldBrush = New-Object System.Drawing.SolidBrush $gold
$blackBrush = New-Object System.Drawing.SolidBrush $black
$pen = New-Object System.Drawing.Pen $gold, 8

$safeX = 76
$safeW = 928

$graphics.DrawString("HAIRCUT & CHILL", $brandFont, $whiteBrush, $safeX, 72)
$graphics.DrawString("JuanSe Favoretti - Tandil", $smallFont, $mutedBrush, $safeX, 118)
$graphics.DrawLine($pen, $safeX, 178, 204, 178)

$headlineFormat = New-Object System.Drawing.StringFormat
$headlineFormat.LineAlignment = [System.Drawing.StringAlignment]::Near
$headlineFormat.Alignment = [System.Drawing.StringAlignment]::Near

$graphics.DrawString("Donde el corte", $headlineFont, $whiteBrush, (New-Object System.Drawing.RectangleF $safeX, 890, $safeW, 86), $headlineFormat)
$graphics.DrawString("relaja", $headlineFont, $whiteBrush, (New-Object System.Drawing.RectangleF $safeX, 970, $safeW, 86), $headlineFormat)
$graphics.DrawString("Corte, barba, cejas, peinados y detalles con linea propia.", $bodyFont, $softBrush, (New-Object System.Drawing.RectangleF $safeX, 1078, 820, 92), $headlineFormat)

$graphics.DrawLine($pen, $safeX, 1203, 336, 1203)
$graphics.DrawString("hcpeluqueria.com", $ctaFont, $whiteBrush, $safeX, 1226)

$canvas.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$pen.Dispose()
$brandFont.Dispose()
$smallFont.Dispose()
$headlineFont.Dispose()
$bodyFont.Dispose()
$ctaFont.Dispose()
$whiteBrush.Dispose()
$softBrush.Dispose()
$mutedBrush.Dispose()
$amberBrush.Dispose()
$goldBrush.Dispose()
$blackBrush.Dispose()
$image.Dispose()
$graphics.Dispose()
$canvas.Dispose()

Write-Output $outputPath
