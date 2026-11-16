import glob
import os
import re
import time
import pypdfium2 as pdfium

def test_one():
    t0 = time.time()
    p = sorted(glob.glob("data/papers/2025/*22nd*morning*.pdf"))[0]
    doc = pdfium.PdfDocument(p)
    out_dir = "client/public/pyq-crops/_test_sample"
    os.makedirs(out_dir, exist_ok=True)

    total_bytes = 0
    saved = []

    for pg_idx in range(1, len(doc) - 2):
        page = doc[pg_idx]
        tp = page.get_textpage()
        pw, ph = page.get_size()
        txt = tp.get_text_range()

        # Find exact "Qn. " markers at start of lines
        markers = []
        for m in re.finditer(r"(?:^|\n)(Q\d+\.\s*(?:MCQ|Numerical))", txt):
            needle = m.group(1)[:14]
            srch = tp.search(needle)
            pos = srch.get_next()
            if pos:
                char_idx = pos[0]
                rect = tp.get_charbox(char_idx) # (left, bottom, right, top) bottom-up PDF coords
                qnum = int(re.search(r"Q(\d+)", m.group(1)).group(1))
                markers.append((qnum, rect[3]))

        if not markers:
            continue

        # Deduplicate & sort top-to-bottom (highest PDF y first)
        markers.sort(key=lambda x: -x[1])
        # Find footer top to cap bottom crop
        footer_y = 48.0
        for f_needle in ["Keep practising on the ExamGOAL", "JEE Main 20"]:
            fs = tp.search(f_needle)
            fpos = fs.get_next()
            if fpos:
                frect = tp.get_charbox(fpos[0])
                if frect[3] > footer_y and frect[3] < markers[-1][1]:
                    footer_y = max(footer_y, frect[3] + 4)

        pil = page.render(scale=1.7).to_pil()
        w, h = pil.size

        for i, (qnum, top_pdf) in enumerate(markers):
            next_top = markers[i + 1][1] if i + 1 < len(markers) else footer_y
            y0_px = max(0, int((ph - top_pdf - 6) * (h / ph)))
            y1_px = min(h, int((ph - next_top - 4) * (h / ph)))
            if y1_px > y0_px + 25:
                crop = pil.crop((int(w * 0.03), y0_px, int(w * 0.97), y1_px))
                outp = os.path.join(out_dir, f"q{qnum}.webp")
                crop.save(outp, "WEBP", quality=80)
                total_bytes += os.path.getsize(outp)
                saved.append(outp)

    doc.close()
    print(f"File: {os.path.basename(p)}")
    print(f"Rendered {len(saved)} question crops in {round(time.time() - t0, 2)}s | Total KB: {round(total_bytes / 1024, 1)}")

if __name__ == "__main__":
    test_one()
