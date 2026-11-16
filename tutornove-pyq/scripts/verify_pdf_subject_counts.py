import glob, re, os, pypdfium2 as pdfium

pdfs = sorted(glob.glob("data/papers/202*/*.pdf"))
bad_counts = []
scan_qr_keys = []

for p in pdfs:
    yr = int(re.search(r"202[1-5]", p).group(0))
    doc = pdfium.PdfDocument(p)
    current_subj = None
    counts = {"Physics": {"MCQ": 0, "NUM": 0}, "Chemistry": {"MCQ": 0, "NUM": 0}, "Mathematics": {"MCQ": 0, "NUM": 0}}
    for pg in range(1, len(doc) - 2):
        txt = doc[pg].get_textpage().get_text_range()
        for line in txt.splitlines():
            s = line.strip()
            m_sec = re.match(r"^(Chemistry|Mathematics|Physics)\s+\d+\s+questions", s)
            if m_sec:
                current_subj = m_sec.group(1)
                continue
            m_q = re.match(r"^Q(\d+)\.\s*(.+)$", s)
            if m_q:
                hdr = m_q.group(2)
                subj = current_subj
                for cand in ("Chemistry", "Mathematics", "Physics"):
                    if cand in hdr:
                        subj = cand
                        break
                qtype = "NUM" if "Numerical" in hdr else "MCQ"
                if subj in counts:
                    counts[subj][qtype] += 1
    expected_num = 5 if yr == 2025 else 10
    ok = all(counts[k]["MCQ"] == 20 and counts[k]["NUM"] == expected_num for k in counts)
    if not ok:
        bad_counts.append((os.path.basename(p), counts))

    # Check answer keys for Scan QR / Drop / etc.
    key_txt = "\n".join(doc[pg].get_textpage().get_text_range() for pg in range(max(0, len(doc) - 3), len(doc)))
    for km in re.finditer(r"(\d+)\.\s+([^\r\n]+?)(?=\s+\d+\.\s+|\r?\n|$)", key_txt):
        val = km.group(2).strip()
        if "scan" in val.lower() or "drop" in val.lower() or "bonus" in val.lower():
            scan_qr_keys.append((os.path.basename(p), km.group(1), val))
    doc.close()

print("Non-20+10 / 20+5 PDFs:", len(bad_counts))
for b in bad_counts:
    print(" ", b)
print("Scan QR / Drop / Bonus answer keys:", len(scan_qr_keys))
for sq in scan_qr_keys[:25]:
    print(" ", sq)
