import concurrent.futures
import glob
import json
import os
import re
import time
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple
import pypdfium2 as pdfium
from PIL import Image, ImageDraw

ROOT_DIR = Path(__file__).resolve().parent.parent.parent
DATA_DIR = ROOT_DIR / "data" / "papers"
CROPS_DIR = ROOT_DIR / "client" / "public" / "pyq-crops"
REPAIRED_DIR = ROOT_DIR / "tutornove-pyq" / "output" / "repaired_papers"
AUDIT_REPORT_JSON = ROOT_DIR / "tutornove-pyq" / "reports" / "jee_pdf_repair_report.json"

MONTH_MAP = {
    "january": 1, "february": 2, "march": 3, "april": 4,
    "may": 5, "june": 6, "july": 7, "august": 8, "september": 9,
}

def parse_slug_metadata(year: int, slug: str) -> Dict[str, Any]:
    m = re.search(r"online-(\d+)(?:st|nd|rd|th)-([a-z]+)-(morning|evening)-(shift|slot)", slug)
    if not m:
        return {
            "year": year, "date": f"{year}-01-01", "session": "Session 1",
            "shift": "Shift 1", "slug": slug,
            "paperKey": f"JEE_MAIN_{year}_{slug}".upper(),
        }
    day = int(m.group(1))
    month_name = m.group(2)
    shift_tod = m.group(3)
    month_num = MONTH_MAP.get(month_name, 1)
    date_str = f"{year}-{month_num:02d}-{day:02d}"
    shift_str = "Shift 1" if shift_tod == "morning" else "Shift 2"
    shift_num = 1 if shift_tod == "morning" else 2

    if year == 2021:
        if month_name == "february":
            session_str = "Session 1 (Feb)"
        elif month_name == "march":
            session_str = "Session 2 (Mar)"
        elif month_name == "july":
            session_str = "Session 3 (Jul)"
        else:
            session_str = "Session 4 (Aug-Sep)"
    elif year == 2022:
        session_str = "Session 1 (June)" if month_name == "june" else "Session 2 (July)"
    else:
        session_str = "Session 1 (Jan)" if month_name in ("january", "february") else "Session 2 (Apr)"

    return {
        "year": year,
        "date": date_str,
        "session": session_str,
        "shift": shift_str,
        "slug": slug,
        "paperKey": f"JEE_MAIN_{year}_{month_num:02d}_{day:02d}_SHIFT_{shift_num}",
    }

def clean_block_text(txt: str) -> str:
    txt = txt.replace("\r\n", "\n").replace("\r", "\n")
    txt = txt.replace("\uf0b4", "×").replace("\uf02b", "+").replace("\uf02d", "-")
    txt = re.sub(r"Open solution", "", txt, flags=re.IGNORECASE)
    txt = re.sub(r"Keep practising on the ExamGOAL app.*?(?:\n|$)", "", txt, flags=re.DOTALL | re.IGNORECASE)
    txt = re.sub(r"Chapter-wise PYQs with solutions.*?(?:\n|$)", "", txt, flags=re.IGNORECASE)
    txt = re.sub(r"GET IT ON\s*Google Play", "", txt, flags=re.IGNORECASE)
    txt = re.sub(r"ExamGOAL\s*P?\s*Y?\s*Q?\s*P?\s*D?\s*F?", "", txt)
    txt = re.sub(r"JEE Main 202\d \(Online\).*?Page \d+ / \d+", "", txt)
    txt = re.sub(r"Out of syllabus\s*\d*\s*questions?", "", txt, flags=re.IGNORECASE)
    txt = re.sub(r"\n{3,}", "\n\n", txt)
    return txt.strip()

def extract_sequential_mcq_options(body: str) -> Tuple[str, List[Dict[str, str]], bool]:
    """
    Finds (A), (B), (C), (D) in strict order near line starts so in-text '(a)'/'(A)' doesn't corrupt keys.
    Returns (stem, options, had_visual_options).
    """
    pattern = re.compile(r"(?:^|\n)\s*\(([A-D])\)\s*", re.MULTILINE)
    all_matches = list(pattern.finditer(body))

    # Find last valid sequence A -> B -> C -> D (options live at bottom of block)
    chosen: List[re.Match] = []
    for i in range(len(all_matches) - 1, -1, -1):
        if all_matches[i].group(1) == "A":
            seq = [all_matches[i]]
            expected = ["B", "C", "D"]
            exp_idx = 0
            for j in range(i + 1, len(all_matches)):
                if exp_idx < 3 and all_matches[j].group(1) == expected[exp_idx]:
                    seq.append(all_matches[j])
                    exp_idx += 1
            if len(seq) == 4:
                chosen = seq
                break

    if len(chosen) != 4:
        # Try inline fallback "(A) ... (B) ... (C) ... (D)"
        inline = re.search(
            r"\(A\)\s*(.*?)\s*\(B\)\s*(.*?)\s*\(C\)\s*(.*?)\s*\(D\)\s*(.*)$",
            body,
            re.DOTALL,
        )
        if inline:
            stem = body[: inline.start()].strip()
            raw_opts = [inline.group(k).strip() for k in range(1, 5)]
            had_vis = any(len(t) == 0 for t in raw_opts)
            opts = [
                {
                    "id": k,
                    "textEn": t if t else f"Option {k} (Refer to official question figure)",
                }
                for k, t in zip(["A", "B", "C", "D"], raw_opts)
            ]
            return stem, opts, had_vis
        # Unable to split options reliably -> preserve full body & mark visual options
        return (
            body.strip(),
            [
                {"id": k, "textEn": f"Option {k} (Refer to official question figure)"}
                for k in ["A", "B", "C", "D"]
            ],
            True,
        )

    stem = body[: chosen[0].start()].strip()
    opts: List[Dict[str, str]] = []
    had_vis = False
    for idx, k in enumerate(["A", "B", "C", "D"]):
        start = chosen[idx].end()
        end = chosen[idx + 1].start() if idx + 1 < 4 else len(body)
        opt_txt = re.sub(r"[ \t]+", " ", body[start:end].replace("\n", " ")).strip()
        if not opt_txt:
            had_vis = True
            opt_txt = f"Option {k} (Refer to official question figure)"
        opts.append({"id": k, "textEn": opt_txt})

    return stem, opts, had_vis

def parse_answer_keys(doc: pdfium.PdfDocument) -> Dict[int, str]:
    answers: Dict[int, str] = {}
    n_pages = len(doc)
    for pg in range(max(0, n_pages - 4), n_pages):
        txt = doc[pg].get_textpage().get_text_range()
        if "Answer Key" not in txt and not re.search(r"\b1\.\s+[A-D0-9]", txt):
            continue
        # Remove footer
        txt = re.sub(r"For numerical answers given as a range.*", "", txt, flags=re.DOTALL)
        # Match "<num>. <val>" up to next "<num>." or newline
        for m in re.finditer(
            r"(?:^|\s)(\d{1,2})\.\s+(Scan QR|[A-Za-z]+|\-?\d+(?:\.\d+)?(?:\s*(?:or|to|-)\s*\-?\d+(?:\.\d+)?)?)(?=\s+\d{1,2}\.\s|\r?\n|$)",
            txt,
            re.IGNORECASE,
        ):
            qnum = int(m.group(1))
            val = m.group(2).strip()
            if 1 <= qnum <= 90:
                answers[qnum] = val
    return answers

def trim_bottom_whitespace(img: Image.Image) -> Image.Image:
    gray = img.convert("L")
    w, h = gray.size
    pixels = gray.load()
    bottom = h
    for y in range(h - 1, 20, -1):
        # Check if row has dark pixels (<240) excluding bottom border rule
        non_white = 0
        for x in range(10, w - 10, 4):
            if pixels[x, y] < 238:
                non_white += 1
                if non_white >= 3:
                    break
        if non_white >= 3:
            bottom = min(h, y + 10)
            break
    if bottom < h - 4:
        return img.crop((0, 0, w, bottom))
    return img

def mask_qr_column(img: Image.Image) -> Image.Image:
    """White-masks ONLY the ExamGOAL QR code + 'Open solution' box in top-right (>= 86% width, top 155px)."""
    w, h = img.size
    draw = ImageDraw.Draw(img)
    qr_x0 = int(w * 0.862)
    qr_y1 = min(h, 165)
    draw.rectangle([qr_x0, 0, w, qr_y1], fill=(255, 255, 255))
    return img

def process_single_pdf(pdf_path_str: str) -> Dict[str, Any]:
    pdf_path = Path(pdf_path_str)
    yr = int(re.search(r"202[1-5]", pdf_path_str).group(0))
    slug = pdf_path.stem.replace(f"jee_main_{yr}_", "")
    meta = parse_slug_metadata(yr, slug)
    paper_key = meta["paperKey"]

    crop_folder = CROPS_DIR / paper_key
    crop_folder.mkdir(parents=True, exist_ok=True)

    doc = pdfium.PdfDocument(str(pdf_path))
    n_pages = len(doc)
    answers_map = parse_answer_keys(doc)

    # Locate question pages (stop before Answer Key page)
    key_start_pg = n_pages
    for pg in range(max(1, n_pages - 4), n_pages):
        t = doc[pg].get_textpage().get_text_range()
        if "Answer Key" in t:
            key_start_pg = pg
            break

    raw_questions: List[Dict[str, Any]] = []
    current_subj = "Chemistry"

    for pg in range(1, key_start_pg):
        page = doc[pg]
        tp = page.get_textpage()
        pw, ph = page.get_size()
        txt = tp.get_text_range().replace("\r\n", "\n").replace("\r", "\n")

        # Identify section headers on page with their character offsets
        lines = txt.split("\n")
        # Find all question header matches in txt with offsets
        q_pattern = re.compile(r"(?:^|\n)(Q(\d+)\.\s*([^\n]+))")
        q_matches = list(q_pattern.finditer(txt))
        if not q_matches:
            # Update current_subj if a bare section header appeared
            for ln in lines:
                ms = re.match(r"^(Chemistry|Mathematics|Physics)\s+\d+\s+questions", ln.strip())
                if ms:
                    current_subj = ms.group(1)
            continue

        # Track section headings & find PDF Y positions for cropping
        markers: List[Tuple[int, float]] = []
        pil_page = None

        for idx_m, m in enumerate(q_matches):
            # Scan text between previous question & this question for a Subject header
            scan_start = q_matches[idx_m - 1].end() if idx_m > 0 else 0
            pre_txt = txt[scan_start : m.start()]
            for ms in re.finditer(r"(?:^|\n)(Chemistry|Mathematics|Physics)\s+\d+\s+questions", pre_txt):
                current_subj = ms.group(1)

            qnum = int(m.group(2))
            hdr = m.group(3).strip()

            # Explicit subject tag on Out-of-syllabus lines overrides current_subj
            q_subj = current_subj
            for cand in ("Chemistry", "Mathematics", "Physics"):
                if cand in hdr:
                    q_subj = cand
                    break

            q_type = "NUMERICAL" if "numerical" in hdr.lower() else "SINGLE_CHOICE"

            # Extract block text until next Q marker on page
            block_start = m.end()
            block_end = q_matches[idx_m + 1].start() if idx_m + 1 < len(q_matches) else len(txt)
            raw_body = clean_block_text(txt[block_start:block_end])

            # Locate Y coordinate in PDF for crop
            needle = m.group(1)[:15]
            srch = tp.search(needle)
            pos = srch.get_next()
            y_top = ph - 40.0
            if pos:
                rect = tp.get_charbox(pos[0])
                y_top = rect[3]
            markers.append((qnum, y_top))

            # Process options & stem
            if q_type == "SINGLE_CHOICE":
                stem, options, had_vis_opts = extract_sequential_mcq_options(raw_body)
            else:
                stem = raw_body.strip()
                options = []
                had_vis_opts = False

            if not stem or len(stem) < 8:
                stem = f"JEE Main {yr} ({meta['session']} {meta['shift']}) {q_subj} Question {qnum} — See official question figure."

            # Answer & verification status
            raw_ans = answers_map.get(qnum, "").strip()
            verification = "VERIFIED"
            correct_arr: List[str] = []
            num_ans: Optional[float] = None

            if not raw_ans or "scan" in raw_ans.lower():
                verification = "NEEDS_VERIFICATION"
                correct_arr = []
            elif "bonus" in raw_ans.lower() or "drop" in raw_ans.lower():
                verification = "VERIFIED"
                correct_arr = ["BONUS"]
            elif q_type == "SINGLE_CHOICE":
                clean_k = re.sub(r"[^A-D,]", "", raw_ans.upper())
                if clean_k in ("A", "B", "C", "D"):
                    correct_arr = [clean_k]
                elif "," in clean_k:
                    correct_arr = [x for x in clean_k.split(",") if x in ("A", "B", "C", "D")]
                else:
                    verification = "NEEDS_VERIFICATION"
            else:
                # Numerical value: handle "8 or 6", "12 to 13", "-113", "2.5"
                nums = re.findall(r"\-?\d+(?:\.\d+)?", raw_ans)
                if nums:
                    num_ans = float(nums[0])
                    correct_arr = [raw_ans]
                else:
                    verification = "NEEDS_VERIFICATION"

            raw_questions.append({
                "originalQNum": qnum,
                "pageIndex": pg,
                "subject": q_subj,
                "questionType": q_type,
                "contentEn": stem,
                "options": options,
                "hadVisualOptions": had_vis_opts,
                "correctAnswer": correct_arr,
                "numericalAnswer": num_ans,
                "rawAnswerKey": raw_ans,
                "verificationStatus": verification,
                "diagramUrl": f"/pyq-crops/{paper_key}/q{qnum}.webp",
                "sourcePage": pg + 1,
                "yTop": y_top,
            })

        # Render page once & save all question crops on this page
        if markers:
            # Find footer top to cap last crop
            footer_y = 48.0
            for f_needle in ("Keep practising on the ExamGOAL", "JEE Main 20"):
                fs = tp.search(f_needle)
                fpos = fs.get_next()
                if fpos:
                    fr = tp.get_charbox(fpos[0])
                    if fr[3] < markers[-1][1]:
                        footer_y = max(footer_y, fr[3] + 6.0)

            pil_page = page.render(scale=1.55).to_pil()
            w, h = pil_page.size
            for i_m, (qnum, top_pdf) in enumerate(markers):
                next_top = markers[i_m + 1][1] if i_m + 1 < len(markers) else footer_y
                y0_px = max(0, int((ph - top_pdf - 6) * (h / ph)))
                y1_px = min(h, int((ph - next_top - 4) * (h / ph)))
                if y1_px > y0_px + 20:
                    crop = pil_page.crop((int(w * 0.03), y0_px, int(w * 0.96), y1_px))
                    crop = mask_qr_column(crop)
                    crop = trim_bottom_whitespace(crop)
                    crop.save(crop_folder / f"q{qnum}.webp", "WEBP", quality=80)

    doc.close()

    # Reorder canonically: Physics (A:20, B:10/5), Chemistry (A:20, B:10/5), Mathematics (A:20, B:10/5)
    ordered_questions: List[Dict[str, Any]] = []
    q_counter = 1
    for subj in ("Physics", "Chemistry", "Mathematics"):
        mcqs = sorted(
            [q for q in raw_questions if q["subject"] == subj and q["questionType"] == "SINGLE_CHOICE"],
            key=lambda x: x["originalQNum"],
        )
        nums = sorted(
            [q for q in raw_questions if q["subject"] == subj and q["questionType"] == "NUMERICAL"],
            key=lambda x: x["originalQNum"],
        )
        for q in mcqs:
            q["questionNumber"] = q_counter
            q["sectionName"] = f"{subj} - Section A"
            q["marks"] = 4
            q["negativeMarks"] = 1
            ordered_questions.append(q)
            q_counter += 1
        for q in nums:
            q["questionNumber"] = q_counter
            q["sectionName"] = f"{subj} - Section B"
            q["marks"] = 4
            q["negativeMarks"] = 0 if yr <= 2021 else 1
            ordered_questions.append(q)
            q_counter += 1

    # Save paper JSON
    REPAIRED_DIR.mkdir(parents=True, exist_ok=True)
    out_json = {
        "paperKey": paper_key,
        "year": yr,
        "session": meta["session"],
        "date": meta["date"],
        "shift": meta["shift"],
        "pdfFilename": pdf_path.name,
        "totalQuestions": len(ordered_questions),
        "needsVerificationCount": sum(1 for q in ordered_questions if q["verificationStatus"] == "NEEDS_VERIFICATION"),
        "questions": ordered_questions,
    }
    with open(REPAIRED_DIR / f"{paper_key}.json", "w", encoding="utf-8") as f:
        json.dump(out_json, f, indent=2)

    return {
        "paperKey": paper_key,
        "year": yr,
        "pdfFilename": pdf_path.name,
        "totalQuestions": len(ordered_questions),
        "needsVerification": out_json["needsVerificationCount"],
        "counts": {
            s: {
                "A": sum(1 for q in ordered_questions if q["subject"] == s and q["questionType"] == "SINGLE_CHOICE"),
                "B": sum(1 for q in ordered_questions if q["subject"] == s and q["questionType"] == "NUMERICAL"),
            }
            for s in ("Physics", "Chemistry", "Mathematics")
        },
    }

def main():
    t0 = time.time()
    pdfs = sorted(glob.glob(str(DATA_DIR / "202*" / "*.pdf")))
    print(f"Repairing {len(pdfs)} official JEE Main PDFs using parallel workers...")
    results = []
    with concurrent.futures.ProcessPoolExecutor(max_workers=6) as ex:
        for idx, res in enumerate(ex.map(process_single_pdf, pdfs), 1):
            results.append(res)
            if idx % 15 == 0 or idx == len(pdfs):
                print(f"  Completed {idx}/{len(pdfs)} PDFs in {round(time.time() - t0, 1)}s")

    AUDIT_REPORT_JSON.parent.mkdir(parents=True, exist_ok=True)
    with open(AUDIT_REPORT_JSON, "w", encoding="utf-8") as f:
        json.dump({"elapsedSeconds": round(time.time() - t0, 2), "papers": results}, f, indent=2)

    total_qs = sum(r["totalQuestions"] for r in results)
    total_nv = sum(r["needsVerification"] for r in results)
    print(f"ALL DONE in {round(time.time() - t0, 2)}s! Papers: {len(results)}, Questions: {total_qs}, NeedsVerification: {total_nv}")

if __name__ == "__main__":
    main()

