import glob
import json
import os
import re
import time
import pypdfium2 as pdfium

def inspect_all_pdfs():
    t0 = time.time()
    all_pdfs = sorted(glob.glob("data/papers/202*/*.pdf"))
    print(f"Found {len(all_pdfs)} PDFs")
    summary = []
    anomalies = []

    for idx, p in enumerate(all_pdfs):
        yr_match = re.search(r"202[1-5]", p)
        yr = int(yr_match.group(0)) if yr_match else 0
        try:
            doc = pdfium.PdfDocument(p)
            n_pages = len(doc)
            q_pages_txt = []
            for pg in range(1, max(1, n_pages - 2)):
                q_pages_txt.append(doc[pg].get_textpage().get_text_range())
            joined = "\n".join(q_pages_txt)

            # Match Q1. MCQ ... or Q21. Numerical ...
            qs = re.findall(r"(?:^|\r?\n)Q(\d+)\.\s*([^\r\n]+)", joined)
            mcq_cnt = sum(1 for _, tp in qs if "mcq" in tp.lower() or "single" in tp.lower() or "multiple" in tp.lower())
            num_cnt = sum(1 for _, tp in qs if "numerical" in tp.lower())

            # Answer keys on last 2-3 pages
            key_txt = "\n".join(
                doc[pg].get_textpage().get_text_range()
                for pg in range(max(0, n_pages - 3), n_pages)
            )
            keys = re.findall(r"(?:^|\s)(\d+)\.\s+([A-Za-z0-9.\-/]+)", key_txt)
            # Filter out page footers like "Page 2 / 25"
            valid_keys = {}
            for knum_s, kval in keys:
                knum = int(knum_s)
                if 1 <= knum <= 90 and kval not in ("/", "questions"):
                    valid_keys[knum] = kval

            rec = {
                "file": os.path.basename(p),
                "year": yr,
                "pages": n_pages,
                "qs": len(qs),
                "mcq": mcq_cnt,
                "num": num_cnt,
                "keys": len(valid_keys),
            }
            summary.append(rec)

            expected_qs = 75 if yr == 2025 else 90
            expected_mcq = 60
            expected_num = 15 if yr == 2025 else 30
            if len(qs) != expected_qs or mcq_cnt != expected_mcq or num_cnt != expected_num or len(valid_keys) < expected_qs:
                anomalies.append(rec)
            doc.close()
        except Exception as e:
            anomalies.append({"file": os.path.basename(p), "error": str(e)})
        if (idx + 1) % 25 == 0:
            print(f"Processed {idx + 1}/{len(all_pdfs)} PDFs...")

    print(f"Scanned {len(all_pdfs)} PDFs in {round(time.time() - t0, 2)}s")
    print(f"Exact expected format matches: {len(all_pdfs) - len(anomalies)} / {len(all_pdfs)}")
    print(f"Anomalies ({len(anomalies)}):")
    for a in anomalies:
        print(" ", a)

if __name__ == "__main__":
    inspect_all_pdfs()
