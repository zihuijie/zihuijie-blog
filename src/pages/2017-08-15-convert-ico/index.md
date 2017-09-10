---
path: "/convert-ico"
date: "2017-08-15"
title: "How to convert a SVG to all-size ICO?"
tags: ["icon", "image", "png","ico", "inkscape", "svg"]
---
I was developing my own blog, I need icon file to fit different size of device. Then I fount an answer on [Stack Overflow](https://graphicdesign.stackexchange.com/questions/77359/how-to-convert-a-square-svg-to-all-size-ico).
My icon is not squre. So I gave it a try. The following are the steps.
1. Designed my icon in Inkscape.
2. Saved as the svg file to png , named master.png.
3. Execute the following command did convert.
```
convert master.png -resize 16x10 16.png
convert master.png -resize 32x20 32.png
convert master.png -resize 36x22 36.png
convert master.png -resize 48x30 48.png
convert master.png -resize 72x45 72.png
convert master.png -resize 96x61 96.png
convert master.png -resize 114x72 114.png
convert master.png -resize 144x91 144.png
convert master.png -resize 180x114 180.png
convert master.png -resize 192x122 192.png
convert master.png -resize 256x163 256.png
convert 16.png 32.png 36.png 48.png 72.png 96.png 114.png 144.png 180.png 192.png 256.png icon.ico
```
Then validate the ico file.
```
identify icon.ico
```
Then I got the following results:
```
icon.ico[0] ICO 16x10 16x10+0+0 32-bit sRGB 491KB 0.010u 0:00.019
icon.ico[1] ICO 31x20 31x20+0+0 32-bit sRGB 491KB 0.010u 0:00.019
icon.ico[2] ICO 34x22 34x22+0+0 32-bit sRGB 491KB 0.010u 0:00.019
icon.ico[3] ICO 47x30 47x30+0+0 32-bit sRGB 491KB 0.010u 0:00.019
icon.ico[4] ICO 71x45 71x45+0+0 32-bit sRGB 491KB 0.010u 0:00.009
icon.ico[5] ICO 96x61 96x61+0+0 32-bit sRGB 491KB 0.010u 0:00.009
icon.ico[6] ICO 113x72 113x72+0+0 32-bit sRGB 491KB 0.010u 0:00.009
icon.ico[7] ICO 143x91 143x91+0+0 32-bit sRGB 491KB 0.010u 0:00.009
icon.ico[8] ICO 179x114 179x114+0+0 32-bit sRGB 491KB 0.010u 0:00.009
icon.ico[9] ICO 191x122 191x122+0+0 32-bit sRGB 491KB 0.010u 0:00.009
icon.ico[10] ICO 256x163 256x163+0+0 32-bit sRGB 491KB 0.010u 0:00.009
```