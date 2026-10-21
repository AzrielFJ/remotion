# generate_assets.py - Membuat 8 aset gambar editorial noir/halftone untuk tiap adegan
import os
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

os.makedirs('public/assets', exist_ok=True)
np.random.seed(42)

W, H = 800, 520

def base_noir_canvas(r_tint=28, g_tint=22, b_tint=22):
    # Buat tekstur kertas arsip gelap + film grain + halftone
    arr = np.zeros((H, W, 3), dtype=np.float32)
    y, x = np.ogrid[:H, :W]
    cx, cy = W / 2, H / 2
    dist = np.sqrt(((x - cx) / cx) ** 2 + ((y - cy) / cy) ** 2)
    vig = np.clip(1.25 - dist * 0.75, 0.2, 1.0)

    noise = np.random.normal(0, 14, (H, W))
    # Halftone grid pattern
    ht = (np.sin(x * 0.45) * np.sin(y * 0.45)) * 8

    arr[:, :, 0] = np.clip((r_tint + noise + ht) * vig, 8, 255)
    arr[:, :, 1] = np.clip((g_tint + noise + ht) * vig, 8, 255)
    arr[:, :, 2] = np.clip((b_tint + noise + ht) * vig, 8, 255)

    # Scanlines halus
    arr[::3, :, :] *= 0.88
    return Image.fromarray(arr.astype(np.uint8))

# 1. Ambisi 25 Tahun (Siluet Podium & Bintang Jenderal Noir)
img1 = base_noir_canvas(36, 30, 24)
d1 = ImageDraw.Draw(img1)
for r in range(220, 40, -35):
    d1.ellipse([W//2 - r, H//2 - r, W//2 + r, H//2 + r], outline=(180, 140, 45), width=2)
# Siluet bahu & podium
d1.polygon([(260, 520), (310, 320), (490, 320), (540, 520)], fill=(18, 20, 19), outline=(201, 162, 39))
d1.ellipse([345, 170, 455, 290], fill=(18, 20, 19), outline=(201, 162, 39), width=3)
# Years watermark
for i, yr in enumerate(['2004', '2009', '2014', '2019', '2024']):
    d1.rectangle([45 + i*145, 40, 165 + i*145, 95], fill=(24, 26, 25), outline=(140, 110, 35), width=2)
img1.save('public/assets/asset_ambition.jpg', quality=92)

# 2. Operasi Mawar 1998 (Dokumen Rahasia DKP & Redacted Lines)
img2 = base_noir_canvas(42, 18, 18)
d2 = ImageDraw.Draw(img2)
# Kertas dokumen miring
d2.rectangle([90, 40, 710, 480], fill=(32, 28, 26), outline=(180, 50, 45), width=3)
# Baris-baris teks disensor (redacted black bars)
for row in range(85, 430, 38):
    d2.rectangle([130, row, 460, row + 18], fill=(12, 12, 12))
    d2.rectangle([480, row, 660, row + 18], fill=(80, 30, 30) if row % 76 == 0 else (15, 15, 15))
# Siluet mawar merah gelap
d2.ellipse([500, 160, 650, 310], fill=(160, 30, 28), outline=(220, 80, 70), width=3)
d2.line([(575, 310), (575, 460)], fill=(120, 40, 35), width=6)
img2.save('public/assets/asset_mawar98.jpg', quality=92)

# 3. Kabinet 109 Pejabat (Barisan Kursi Kekuasaan Padat)
img3 = base_noir_canvas(38, 22, 20)
d3 = ImageDraw.Draw(img3)
for r in range(6):
    for c in range(14):
        x0 = 45 + c * 52
        y0 = 55 + r * 72
        col = (190, 55, 45) if (r + c) % 3 == 0 else (90, 75, 55)
        d3.ellipse([x0 + 10, y0, x0 + 34, y0 + 24], fill=col)
        d3.RoundedRectangle = d3.rectangle([x0 + 4, y0 + 26, x0 + 40, y0 + 58], fill=col, outline=(20, 20, 20))
img3.save('public/assets/asset_cabinet.jpg', quality=92)

# 4. Ilusi MBG (Nampan Stainless & Garis Pemangkasan)
img4 = base_noir_canvas(24, 34, 28)
d4 = ImageDraw.Draw(img4)
d4.rectangle([80, 60, 720, 460], fill=(38, 44, 41), outline=(120, 140, 130), width=4)
d4.rectangle([110, 90, 420, 280], fill=(22, 26, 24), outline=(80, 95, 88), width=3)
d4.rectangle([445, 90, 690, 280], fill=(22, 26, 24), outline=(80, 95, 88), width=3)
d4.rectangle([110, 305, 690, 430], fill=(22, 26, 24), outline=(80, 95, 88), width=3)
# Garis potong merah diagonal
d4.line([(70, 450), (730, 70)], fill=(200, 55, 45), width=10)
img4.save('public/assets/asset_mbg.jpg', quality=92)

# 5. Palu Pajak PPN 12% (Struk Belanja Membengkak & Rantai)
img5 = base_noir_canvas(45, 18, 18)
d5 = ImageDraw.Draw(img5)
d5.rectangle([200, 30, 600, 490], fill=(38, 34, 32), outline=(200, 55, 45), width=3)
for y in range(70, 440, 32):
    d5.line([(235, y), (565, y)], fill=(95, 85, 80), width=4)
d5.rectangle([230, 350, 570, 440], fill=(160, 35, 30))
img5.save('public/assets/asset_tax.jpg', quality=92)

# 6. IHSG Crash (Layar Terminal Bursa Merah Darah)
img6 = base_noir_canvas(40, 15, 15)
d6 = ImageDraw.Draw(img6)
for x in range(40, 760, 60):
    d6.line([(x, 0), (x, H)], fill=(55, 25, 25), width=1)
for y in range(40, 480, 60):
    d6.line([(0, y), (W, y)], fill=(55, 25, 25), width=1)
# Candlestick merah anjlok
heights = [80, 110, 95, 150, 210, 190, 270, 330, 390, 430]
for i, h_val in enumerate(heights):
    cx = 90 + i * 68
    d6.line([(cx, h_val - 40), (cx, h_val + 65)], fill=(230, 65, 55), width=3)
    d6.rectangle([cx - 18, h_val - 15, cx + 18, h_val + 40], fill=(200, 45, 38), outline=(255, 100, 90))
img6.save('public/assets/asset_ihsg.jpg', quality=92)

# 7. Karhutla & Food Estate Mangkrak (Pohon Hangus & Bara Api)
img7 = base_noir_canvas(48, 24, 14)
d7 = ImageDraw.Draw(img7)
# Langit bara merah-oranye
for y in range(H):
    c_r = int(40 + (y / H) * 140)
    c_g = int(15 + (y / H) * 45)
    d7.line([(0, y), (W, y)], fill=(c_r, c_g, 12))
# Siluet batang pohon mati hangus
for tx in [110, 230, 370, 510, 660]:
    d7.rectangle([tx - 12, 120, tx + 12, 520], fill=(14, 12, 11))
    d7.line([(tx, 220), (tx - 45, 160)], fill=(14, 12, 11), width=10)
    d7.line([(tx, 260), (tx + 50, 190)], fill=(14, 12, 11), width=8)
img7.save('public/assets/asset_karhutla.jpg', quality=92)

# 8. Utang Rp 800T & BBM (Menara Beban Fiskal)
img8 = base_noir_canvas(35, 24, 18)
d8 = ImageDraw.Draw(img8)
for i in range(8):
    bx = 70 + i * 85
    bh = 120 + i * 45
    col = (200, 55, 45) if i >= 5 else (180, 140, 40)
    d8.rectangle([bx, H - bh, bx + 58, H - 30], fill=col, outline=(240, 220, 190), width=2)
img8.save('public/assets/asset_debt_bbm.jpg', quality=92)

print('All 8 noir editorial assets created successfully in public/assets/!')
