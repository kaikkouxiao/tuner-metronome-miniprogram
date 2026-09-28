# tools/gen_images.py 生成 images/ 下全部 7 张图片（pillow）
# 用法：python tools/gen_images.py
from PIL import Image, ImageDraw, ImageFont
import os, math

OUT = os.path.join(os.path.dirname(__file__), '..', 'images')
os.makedirs(OUT, exist_ok=True)
GRAY = (138, 133, 126, 255)
AMBER = (232, 176, 75, 255)

def tuner_icon(color):
    img = Image.new('RGBA', (81, 81), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.arc([10, 16, 71, 77], start=180, end=360, fill=color, width=5)
    d.line([40, 46, 40, 22], fill=color, width=5)
    for ang in (-40, 40):
        x = 40 + 26 * math.sin(math.radians(ang)); y = 46 - 26 * math.cos(math.radians(ang))
        d.line([40, 46, x, y], fill=color, width=3)
    d.ellipse([36, 42, 44, 50], fill=color)
    return img

def record_icon(color):
    img = Image.new('RGBA', (81, 81), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([18, 12, 63, 70], radius=6, outline=color, width=5)
    d.rounded_rectangle([30, 6, 51, 16], radius=4, fill=color)
    for y in (30, 42, 54):
        d.line([27, y, 54, y], fill=color, width=4)
    return img

tuner_icon(GRAY).save(f'{OUT}/tab-tuner.png')
tuner_icon(AMBER).save(f'{OUT}/tab-tuner-active.png')
record_icon(GRAY).save(f'{OUT}/tab-record.png')
record_icon(AMBER).save(f'{OUT}/tab-record-active.png')

FONT = '/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc'  # 换成你机器上的中文字体
banners = [('标准调弦 EADGBE', '吉他 · 从六弦到一弦'),
           ('节拍器 ♩ = 60–208', 'BPM 与拍号自由设置'),
           ('半音阶调音', '任何乐器都能校')]
for i, (title, sub) in enumerate(banners, 1):
    img = Image.new('RGB', (1380, 520), (38, 34, 31))
    d = ImageDraw.Draw(img)
    d.arc([1000, 90, 1360, 450], start=180, end=360, fill=(90, 84, 78), width=8)
    d.line([1180, 270, 1180, 130], fill=(232, 176, 75), width=8)
    d.ellipse([1168, 258, 1192, 282], fill=(232, 176, 75))
    ft = ImageFont.truetype(FONT, 110, index=2)
    fs = ImageFont.truetype(FONT, 52, index=2)
    d.text((90, 150), title, font=ft, fill=(232, 176, 75))
    d.text((95, 310), sub, font=fs, fill=(200, 193, 184))
    img.save(f'{OUT}/banner{i}.png')
print('7 张图片已生成到 images/')
