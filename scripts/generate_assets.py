#!/usr/bin/env python3
"""
Generate favicon (32x32, 64x64, .ico) and OG image for ShilajitPrice.com
"""
import math
import struct
import zlib
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

# ── colour palette ────────────────────────────────────────────────────────────
EMERALD     = (16, 185, 129)        # #10B981
DARK_BG     = (13, 31, 20)          # #0D1F14
GRID        = (24, 43, 31)          # #182B1F
MINT        = (232, 245, 236)       # #E8F5EC
SUBTEXT     = (158, 201, 173)       # #9EC9AD

PUBLIC = Path("/Users/danieltorres/shilajit-price/public")
APP    = Path("/Users/danieltorres/shilajit-price/app")
PUBLIC.mkdir(exist_ok=True)


# ── font helpers ──────────────────────────────────────────────────────────────
def _load_font(size: int, bold: bool = True) -> ImageFont.FreeTypeFont:
    """Try various macOS system font paths, fall back to default."""
    candidates = []
    if bold:
        candidates = [
            "/System/Library/Fonts/HelveticaNeue.ttc",
            "/System/Library/Fonts/Helvetica.ttc",
            "/System/Library/Fonts/SFNSDisplay-Bold.otf",
            "/System/Library/Fonts/SFCompactDisplay-Bold.otf",
            "/Library/Fonts/Arial Bold.ttf",
            "/System/Library/Fonts/SFNSText.ttf",
            "/System/Library/Fonts/SFNS.ttf",
        ]
    else:
        candidates = [
            "/System/Library/Fonts/HelveticaNeue.ttc",
            "/Library/Fonts/Arial.ttf",
            "/System/Library/Fonts/SFNSText.ttf",
            "/System/Library/Fonts/SFNS.ttf",
        ]
    for path in candidates:
        try:
            return ImageFont.truetype(path, size)
        except Exception:
            pass
    return ImageFont.load_default()


# ── shared: rounded-rectangle mask ───────────────────────────────────────────
def rounded_rect(draw: ImageDraw.ImageDraw, xy, radius: int, fill):
    x0, y0, x1, y1 = xy
    draw.rounded_rectangle([x0, y0, x1, y1], radius=radius, fill=fill)


# ── shared: resin-drop polygon ────────────────────────────────────────────────
def _drop_points(cx: float, cy: float, w: float, h: float, steps: int = 80):
    """
    A teardrop / resin-drop shape.
    Flat top, rounded body, pointed bottom tip.
    """
    pts = []
    # Top half – ellipse from π to 2π (top half of ellipse = flat top → round sides)
    # We actually build: upper arc (top-centre → right → bottom-centre) then a V to the tip
    rx, ry_top = w / 2, h * 0.45
    ry_bot      = h * 0.55

    half = steps // 2

    # Upper arc: left side across the top to right, then curves down
    for i in range(half + 1):
        angle = math.pi + (math.pi * i / half)  # π → 2π
        x = cx + rx * math.cos(angle)
        y = (cy - ry_bot * 0.15) + ry_top * math.sin(angle)
        pts.append((x, y))

    # Lower portion: right → tip
    tip_y = cy + ry_bot
    mid_y = cy + ry_bot * 0.3
    right_x = cx + rx

    for i in range(half + 1):
        t = i / half  # 0 → 1
        # Bézier-style blend from (right_x, mid_y) to (cx, tip_y)
        x = right_x * (1 - t) + cx * t
        ease = t ** 1.6
        y = mid_y + (tip_y - mid_y) * ease
        pts.append((x, y))

    # Left side: tip → left
    left_x = cx - rx
    for i in range(half + 1):
        t = i / half
        x = cx + (left_x - cx) * t
        ease = (1 - t) ** 1.6
        y = tip_y - (tip_y - mid_y) * ease
        pts.append((x, y))

    return pts


# ─────────────────────────────────────────────────────────────────────────────
# 1.  FAVICON  (32 and 64 px)
# ─────────────────────────────────────────────────────────────────────────────
def make_favicon(size: int) -> Image.Image:
    scale = 4                            # super-sample for antialiasing
    s     = size * scale
    img   = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    d     = ImageDraw.Draw(img)

    radius = int(s * 0.20)              # ~20 % corner radius

    # Background rounded square
    rounded_rect(d, (0, 0, s - 1, s - 1), radius, EMERALD + (255,))

    # Resin drop (mint)
    cx, cy = s / 2, s / 2 - s * 0.02
    dw, dh = s * 0.50, s * 0.62
    pts = _drop_points(cx, cy, dw, dh)
    d.polygon(pts, fill=MINT + (255,))

    # "SP" text on top of drop
    font_size = int(s * 0.22)
    font = _load_font(font_size, bold=True)
    text = "SP"
    bbox = d.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    tx = cx - tw / 2 - bbox[0]
    ty = cy - th / 2 - bbox[1] - s * 0.05
    d.text((tx, ty), text, font=font, fill=EMERALD + (255,))

    # Down-sample
    return img.resize((size, size), Image.LANCZOS)


fav32 = make_favicon(32)
fav64 = make_favicon(64)

fav32.save(PUBLIC / "favicon-32x32.png", "PNG")
fav64.save(PUBLIC / "favicon-64x64.png", "PNG")
print("✓  favicon-32x32.png")
print("✓  favicon-64x64.png")

# ICO bundles both sizes
ico_path = PUBLIC / "favicon.ico"
fav32.save(ico_path, format="ICO", sizes=[(32, 32), (64, 64)],
           append_images=[fav64])
print("✓  favicon.ico  →  public/")

# Also write to app/ for Next.js App Router browser-tab support
import shutil
shutil.copy(ico_path, APP / "favicon.ico")
print("✓  favicon.ico  →  app/")


# ─────────────────────────────────────────────────────────────────────────────
# 2.  OG IMAGE  (1200 × 630)
# ─────────────────────────────────────────────────────────────────────────────
W, H = 1200, 630
og = Image.new("RGB", (W, H), DARK_BG)
d  = ImageDraw.Draw(og)

# --- subtle grid lines ---------------------------------------------------
GRID_STEP = 60
for x in range(0, W, GRID_STEP):
    d.line([(x, 0), (x, H)], fill=GRID, width=1)
for y in range(0, H, GRID_STEP):
    d.line([(0, y), (W, y)], fill=GRID, width=1)

# --- large decorative drop (right side, low opacity) ---------------------
drop_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
dd = ImageDraw.Draw(drop_layer)
dcx, dcy = W * 0.78, H * 0.44
ddw, ddh = 380, 480
drop_pts = _drop_points(dcx, dcy, ddw, ddh, steps=120)
dd.polygon(drop_pts, fill=EMERALD + (38,))   # ~15 % opacity
og.paste(Image.alpha_composite(Image.new("RGBA", (W, H), (0,0,0,0)), drop_layer).convert("RGB"),
         mask=drop_layer.split()[3])

# --- left accent bar -----------------------------------------------------
d.rectangle([(0, 0), (6, H)], fill=EMERALD)

# --- small logo square (top-left) ----------------------------------------
LOGO_SIZE = 72
logo = make_favicon(LOGO_SIZE)
logo_x, logo_y = 48, 48
og.paste(logo, (logo_x, logo_y), logo)

# --- "SHILAJITPRICE.COM" label -------------------------------------------
label_font = _load_font(15, bold=True)
label_text = "SHILAJITPRICE.COM"
d.text((logo_x, logo_y + LOGO_SIZE + 10), label_text,
       font=label_font, fill=SUBTEXT, spacing=4)

# --- headline block ------------------------------------------------------
HEAD_X = 48
HEAD_Y = 200

headline1_font = _load_font(72, bold=False)
headline2_font = _load_font(72, bold=True)

d.text((HEAD_X, HEAD_Y),      "Find the Best",  font=headline1_font, fill=MINT)
d.text((HEAD_X, HEAD_Y + 84), "Shilajit Price", font=headline2_font, fill=EMERALD)

# --- subline -------------------------------------------------------------
sub_font = _load_font(26, bold=False)
d.text((HEAD_X, HEAD_Y + 84 + 82), "Independent lab-verified price comparison",
       font=sub_font, fill=SUBTEXT)

# --- badge pills ---------------------------------------------------------
badges = ["Lab Verified COAs", "Independent & Unbiased", "Altai · Himalayan · Siberian"]
pill_font  = _load_font(19, bold=True)
pill_y     = H - 80
pill_x     = HEAD_X
PAD_X, PAD_Y = 18, 9
RADIUS     = 8

for badge in badges:
    bbox = d.textbbox((0, 0), badge, font=pill_font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    pw = tw + PAD_X * 2
    ph = th + PAD_Y * 2
    # pill background
    d.rounded_rectangle(
        [pill_x, pill_y, pill_x + pw, pill_y + ph],
        radius=RADIUS, fill=GRID, outline=EMERALD, width=1
    )
    # text centred in pill
    d.text(
        (pill_x + PAD_X - bbox[0], pill_y + PAD_Y - bbox[1]),
        badge, font=pill_font, fill=EMERALD
    )
    pill_x += pw + 16

# --- thin emerald bar at very bottom -------------------------------------
d.rectangle([(0, H - 4), (W, H)], fill=EMERALD)

og.save(PUBLIC / "og-image.png", "PNG", optimize=True)
print("✓  og-image.png  →  public/")
print("\nAll assets generated successfully.")
