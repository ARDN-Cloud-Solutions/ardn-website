"""Re-letter baked-in UI text in product screenshots (e.g. enquiry -> inquiry).

For each job: find the ink of the original line inside the OCR box, fit Inter
to it, inpaint everything from the changed word to the end of the line, then
redraw that tail in the new spelling with the same size, weight and colour.
Run with a Python that has Pillow, numpy and opencv (the EasyOCR venv).
"""
import sys
import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont

FONTS = sys.argv[1]  # folder holding Inter-*.ttf
W = {"regular": "Inter-Regular.ttf", "medium": "Inter-Medium.ttf", "semibold": "Inter-SemiBold.ttf", "bold": "Inter-Bold.ttf"}

# (file, ocr box x0,y0,x1,y1, original line, word to replace, replacement, weight, tracking_em[, (dx, dy) nudge])
JOBS = [
    ("public/images/golf/corporate-dashboard.webp", (252, 359, 1976, 401),
     # whole line redrawn: the wavy background throws off partial alignment
     "Every club side by side: enquiries, conversion, SLA compliance, pipeline value, new members, events booked and room utilization.",
     "Every club side by side: enquiries, conversion, SLA compliance, pipeline value, new members, events booked and room utilization.", "Every club side by side: inquiries, conversion, SLA compliance, pipeline value, new members, events booked and room utilization.", "regular", 0, (4, 10)),
    ("public/images/golf/corporate-dashboard.webp", (310, 875, 443, 904), "ENQUIRIES", "ENQUIRIES", "INQUIRIES", "semibold", 0.08),
    ("public/images/golf/corporate-dashboard.webp", (1419, 1149, 1683, 1193), "Enquiries vs Won", "Enquiries", "Inquiries", "semibold", 0),
    ("public/images/golf/corporate-dashboard.webp", (1963, 1685, 2068, 1718), "Enquiries", "Enquiries", "Inquiries", "regular", 0),
    *[("public/images/golf/sales-pipeline.webp", b, "enquiry", "enquiry", "inquiry", "semibold", 0) for b in [
        (255, 1077, 369, 1116), (728, 1077, 842, 1116), (1200, 1077, 1312, 1116), (1673, 1077, 1785, 1116),
        (2142, 1074, 2258, 1117), (255, 1437, 369, 1474), (728, 1434, 842, 1474), (1200, 1437, 1312, 1474), (1671, 1504, 1785, 1542)]],
    ("public/images/nonprofit/reports-analytics.webp", (607, 817, 1106, 848), "Enquiry volume month by month, by source.", "Enquiry", "Inquiry", "regular", 0),
    ("public/images/nonprofit/reports-analytics.webp", (606, 1149, 1220, 1185), "Where enquiries come from, with contact volume and", "enquiries", "inquiries", "regular", 0),
]

def text_width(font, s, track):
    if not track: return font.getlength(s)
    return sum(font.getlength(c) for c in s) + track * font.size * (len(s) - 1)

def draw_text(d, xy, s, font, fill, track):
    if not track: d.text(xy, s, font=font, fill=fill); return
    x, y = xy
    for c in s:
        d.text((x, y), c, font=font, fill=fill); x += font.getlength(c) + track * font.size

def process(img, job):
    (_, (x0, y0, x1, y1), line, old, new, weight, track, *rest) = job
    dx, dy = rest[0] if rest else (0, 0)
    pad = 14
    X0, Y0, X1, Y1 = max(0, x0 - pad), max(0, y0 - pad), min(img.shape[1], x1 + pad), min(img.shape[0], y1 + pad)
    reg = img[Y0:Y1, X0:X1].astype(np.int16)
    # measure only inside the OCR box so neighbouring lines don't count
    bx0, by0, bx1, by1 = x0 - X0, y0 - Y0, x1 - X0, y1 - Y0
    box = reg[by0:by1, bx0:bx1]
    border = np.concatenate([box[0], box[-1], box[:, 0], box[:, -1]])
    bg = np.median(border, axis=0)
    diff = np.abs(reg - bg).sum(axis=2)
    inbox = np.zeros(diff.shape, bool); inbox[by0:by1, bx0:bx1] = True
    ink = (diff > 60) & inbox
    ys, xs = np.nonzero(ink)
    ix0, ix1, iy0, iy1 = xs.min(), xs.max(), ys.min(), ys.max()
    far = diff > np.percentile(diff[ink], 70)
    color = tuple(int(v) for v in np.median(reg[far], axis=0))
    path = f"{FONTS}/{W[weight]}"
    # fit font size to the ink width of the whole original line
    lo, hi = 6.0, 200.0
    for _ in range(40):
        mid = (lo + hi) / 2
        f = ImageFont.truetype(path, mid)
        (lo, hi) = (mid, hi) if text_width(f, line, track) < (ix1 - ix0 + 1) else (lo, mid)
    font = ImageFont.truetype(path, round((lo + hi) / 2))
    i = line.index(old)
    prefix, tail_new = line[:i], new + line[i + len(old):]
    start = ix0 + (text_width(font, prefix + " ", track) - text_width(font, " ", track) if prefix else 0)
    # erase from the changed word to the end of the line ink
    mask = np.zeros(ink.shape, np.uint8)
    mask[by0:by1, int(start) - 1:] = 1
    mask = (mask & ink).astype(np.uint8) * 255
    mask = cv2.dilate(mask, np.ones((5, 5), np.uint8))
    sub = cv2.inpaint(np.ascontiguousarray(img[Y0:Y1, X0:X1]), mask, 5, cv2.INPAINT_TELEA)
    pil = Image.fromarray(sub)
    d = ImageDraw.Draw(pil)
    # align vertically on the ink of the part being replaced (ignores strays
    # from neighbouring lines that fall inside the OCR box)
    tys = ys[xs >= int(start)]
    tail_old = line[i:]
    y = (tys.min() if len(tys) else iy0) - font.getbbox(tail_old)[1]
    draw_text(d, (start - font.getbbox(tail_new[0])[0] + font.getbbox(old[0])[0] + dx, y + dy), tail_new, font, color, track)
    img[Y0:Y1, X0:X1] = np.array(pil)

if __name__ == "__main__":
    files = {}
    for j in JOBS: files.setdefault(j[0], []).append(j)
    for f, jobs in files.items():
        img = np.array(Image.open(f).convert("RGB"))
        for j in jobs: process(img, j)
        Image.fromarray(img).save(f, "WEBP", quality=92)
        print("fixed", f, len(jobs))
