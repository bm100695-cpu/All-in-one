import glob, re, pypdfium2 as pdfium

pdfs = sorted(glob.glob("data/papers/202*/*.pdf"))
out_jsons = set(f.replace("jee_main_", "").replace(".json", "") for f in glob.glob("output/papers/*.json"))
print("PDF count:", len(pdfs), "JSON count:", len(out_jsons))

# Inspect answer key pages of 1 PDF per year
for yr in ["2021", "2022", "2023", "2024", "2025"]:
    yr_pdfs = sorted(glob.glob(f"data/papers/{yr}/*.pdf"))
    print(f"\n=== YEAR {yr} ({len(yr_pdfs)} PDFs) sample key page: {yr_pdfs[0]} ===")
    doc = pdfium.PdfDocument(yr_pdfs[0])
    for pg in range(max(0, len(doc)-3), len(doc)):
        txt = doc[pg].get_textpage().get_text_range()
        if "Answer Key" in txt or "Chemistry" in txt:
            print(f"--- Page {pg+1} ---")
            print(txt[:1500])
    doc.close()
