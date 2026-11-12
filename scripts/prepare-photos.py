"""Turn the originals/ folder into web-ready photos in public/photos/.

For every JPEG in originals/ this writes two WebP sizes (1000px and 2000px wide),
strips all metadata (camera data and GPS location), and prints the size of each file.
Optional crops live in CROPS so the original file is never changed.

Run:  python3 scripts/prepare-photos.py
"""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC, OUT = ROOT / "originals", ROOT / "public" / "photos"
WIDTHS = (1000, 2000)
# name -> (left, top, right, bottom) as fractions of the image
CROPS = {"haystack": (0, 0, 0.795, 1)}  # removes the blurred hand on the right edge

OUT.mkdir(parents=True, exist_ok=True)
for src in sorted(SRC.glob("*.jp*g")):
    im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
    if src.stem in CROPS:
        l, t, r, b = CROPS[src.stem]
        w, h = im.size
        im = im.crop((int(l * w), int(t * h), int(r * w), int(b * h)))
    for width in WIDTHS:
        w = min(width, im.width)
        out = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
        dest = OUT / f"{src.stem}-{width}.webp"
        out.save(dest, "WEBP", quality=82, method=6)  # saved without any metadata
        print(f"{dest.name:28} {out.width}x{out.height}  {dest.stat().st_size // 1024} KB")
