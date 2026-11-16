"""
TutorNove JEE Main PYQ - High Precision PDF Extraction Engine
Extracts questions, options (A, B, C, D), numerical items, diagrams, and metadata from official NTA PDFs.
Uses PyMuPDF (fitz) and pdfplumber, preserving mathematical symbols and formatting.
"""

import os
import re
import sys
import json
from pathlib import Path
from typing import List, Dict, Any, Tuple, Optional

try:
    import fitz  # PyMuPDF
    HAVE_FITZ = True
except Exception:
    HAVE_FITZ = False

import pdfplumber

BASE_DIR = Path(__file__).resolve().parent.parent
EXTRACTED_DIR = BASE_DIR / "extracted"
DIAGRAMS_DIR = EXTRACTED_DIR / "diagrams"
REPORTS_DIR = BASE_DIR / "reports"

EXTRACTED_DIR.mkdir(parents=True, exist_ok=True)
DIAGRAMS_DIR.mkdir(parents=True, exist_ok=True)
REPORTS_DIR.mkdir(parents=True, exist_ok=True)

# Helper: Marking schemes per year and question type
def get_marking_scheme(year: int, question_type: str) -> Tuple[int, int]:
    """
    Returns (marks, negativeMarks).
    In 2021: MCQ: (+4, -1), Numerical: (+4, 0).
    In 2022-2025: MCQ: (+4, -1), Numerical: (+4, -1).
    """
    if question_type == "NUMERICAL":
        if year <= 2021:
            return 4, 0
        else:
            return 4, -1
    return 4, -1

def extract_diagrams_from_page(doc_or_page: Any, page_num: int, output_prefix: str) -> List[str]:
    """
    Extracts embedded diagrams and figures from a PDF page, filtering out tiny icons and lines.
    Returns a list of saved image paths. Supports both PyMuPDF and pdfplumber.
    """
    saved_images = []
    if HAVE_FITZ and hasattr(doc_or_page, "get_images"):
        try:
            image_list = doc_or_page.get_images(full=True)
            for img_idx, img_info in enumerate(image_list):
                xref = img_info[0]
                base_image = doc_or_page.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]
                width = base_image["width"]
                height = base_image["height"]

                if width > 60 and height > 40:
                    filename = f"{output_prefix}_p{page_num + 1}_img{img_idx + 1}.{image_ext}"
                    image_path = DIAGRAMS_DIR / filename
                    with open(image_path, "wb") as f:
                        f.write(image_bytes)
                    saved_images.append(str(image_path.relative_to(BASE_DIR)))
        except Exception:
            pass
    elif hasattr(doc_or_page, "images"):
        # pdfplumber page
        try:
            for img_idx, img_dict in enumerate(doc_or_page.images):
                w = img_dict.get("width", 0)
                h = img_dict.get("height", 0)
                if w > 60 and h > 40:
                    # Crop and save diagram
                    cropped = doc_or_page.crop((img_dict["x0"], img_dict["top"], img_dict["x1"], img_dict["bottom"]))
                    img_obj = cropped.to_image(resolution=150)
                    filename = f"{output_prefix}_p{page_num + 1}_img{img_idx + 1}.png"
                    image_path = DIAGRAMS_DIR / filename
                    img_obj.save(image_path)
                    saved_images.append(str(image_path.relative_to(BASE_DIR)))
        except Exception:
            pass

    return saved_images

    return saved_images

def clean_text(text: str) -> str:
    """Cleans up PDF spacing and normalizes math symbols."""
    if not text:
        return ""
    text = re.sub(r'[ \t]+', ' ', text)
    text = re.sub(r'\n{3,}', '\n\n', text)
    # Common OCR/PDF symbol fixes
    text = text.replace('\uf0b4', '×').replace('\uf02b', '+').replace('\uf02d', '-')
    return text.strip()

def parse_options(block_text: str) -> Tuple[List[Dict[str, str]], str]:
    """
    Extracts options A, B, C, D from the question block.
    Supports:
      (A) / (B) / (C) / (D)
      (1) / (2) / (3) / (4)
      Option 1 / Option 2 / Option 3 / Option 4
      [1] / [2] / [3] / [4]
    Returns (options_list, remaining_question_text).
    """
    options = []
    
    # Pattern for (1), (2), (3), (4) or (A), (B), (C), (D)
    opt_pattern = re.compile(
        r'(?:\n|\A)\s*(?:\(([1-4A-Da-d])\)|([1-4A-Da-d])\.|Option\s*([1-4])\s*:?)\s*(.*?)(?=(?:\n\s*(?:\([1-4A-Da-d]\)|[1-4A-Da-d]\.|Option\s*[1-4]\s*:?))|\Z)',
        re.DOTALL
    )

    matches = list(opt_pattern.finditer(block_text))
    
    if len(matches) >= 4:
        key_mapping = {
            "1": "A", "2": "B", "3": "C", "4": "D",
            "A": "A", "B": "B", "C": "C", "D": "D",
            "a": "A", "b": "B", "c": "C", "d": "D"
        }
        
        first_opt_start = matches[0].start()
        question_text = block_text[:first_opt_start].strip()

        for match in matches[:4]:
            raw_key = match.group(1) or match.group(2) or match.group(3)
            key = key_mapping.get(raw_key.strip(), raw_key.strip().upper())
            opt_text = clean_text(match.group(4))
            options.append({"key": key, "text": opt_text})

        # Ensure keys A, B, C, D in order
        norm_options = []
        for expected_key in ["A", "B", "C", "D"]:
            found = next((o for o in options if o["key"] == expected_key), None)
            if found:
                norm_options.append(found)
            else:
                idx = len(norm_options)
                if idx < len(options):
                    norm_options.append({"key": expected_key, "text": options[idx]["text"]})
                else:
                    norm_options.append({"key": expected_key, "text": ""})

        return norm_options, question_text

    return [], block_text.strip()

def detect_subject_from_context(text: str, qnum: int) -> str:
    """
    Identifies subject (Physics, Chemistry, Mathematics) using section headers or question number conventions.
    In standard JEE Main: Q1-30: Physics, Q31-60: Chemistry, Q61-90: Mathematics.
    """
    lower = text.lower()
    if "section - a : physics" in lower or "subject: physics" in lower or "physics" in lower[:100]:
        return "Physics"
    if "section - a : chemistry" in lower or "subject: chemistry" in lower or "chemistry" in lower[:100]:
        return "Chemistry"
    if "section - a : mathematics" in lower or "subject: mathematics" in lower or "mathematics" in lower[:100]:
        return "Mathematics"

    if 1 <= qnum <= 30:
        return "Physics"
    elif 31 <= qnum <= 60:
        return "Chemistry"
    elif 61 <= qnum <= 90:
        return "Mathematics"
    return "Physics"

def detect_chapter(subject: str, question_text: str) -> str:
    """
    Maps question keywords to syllabus chapters.
    """
    qt = question_text.lower()
    if subject == "Physics":
        if any(w in qt for w in ["velocity", "acceleration", "force", "friction", "projectile", "momentum", "collision", "gravity", "torque", "inertia"]):
            return "Mechanics"
        if any(w in qt for w in ["electric field", "charge", "potential", "capacitance", "flux", "gauss"]):
            return "Electrostatics & Capacitance"
        if any(w in qt for w in ["current", "resistance", "resistor", "ohm", "kirchhoff", "potentiometer"]):
            return "Current Electricity"
        if any(w in qt for w in ["magnetic", "solenoid", "biot-savart", "lorentz", "galvanometer"]):
            return "Magnetic Effects of Current"
        if any(w in qt for w in ["lens", "mirror", "refraction", "interference", "diffraction", "slit", "polarization"]):
            return "Optics"
        if any(w in qt for w in ["heat", "temperature", "carnot", "isothermal", "adiabatic", "calorimetry"]):
            return "Thermodynamics & Kinetic Theory"
        if any(w in qt for w in ["photoelectric", "de broglie", "bohr", "hydrogen atom", "nuclear", "radioactivity"]):
            return "Modern Physics"
        return "General Physics"

    elif subject == "Chemistry":
        if any(w in qt for w in ["orbital", "quantum", "bohr", "photoelectric", "electronic configuration"]):
            return "Atomic Structure"
        if any(w in qt for w in ["hybridization", "bond order", "dipole moment", "vsepr", "lattice energy"]):
            return "Chemical Bonding & Molecular Structure"
        if any(w in qt for w in ["equilibrium", "kp", "kc", "ph", "buffer", "solubility product", "le chatelier"]):
            return "Equilibrium"
        if any(w in qt for w in ["rate constant", "order of reaction", "activation energy", "arrhenius"]):
            return "Chemical Kinetics"
        if any(w in qt for w in ["electrode", "nernst", "faraday", "conductance", "galvanic"]):
            return "Electrochemistry"
        if any(w in qt for w in ["iupac", "carbocation", "sn1", "sn2", "electrophile", "resonance"]):
            return "General Organic Chemistry"
        if any(w in qt for w in ["coordination", "ligand", "crystal field", "isomerism", "cft"]):
            return "Coordination Compounds"
        return "Physical & General Chemistry"

    elif subject == "Mathematics":
        if any(w in qt for w in ["matrix", "matrices", "determinant", "adjoint", "singular"]):
            return "Matrices & Determinants"
        if any(w in qt for w in ["integral", "derivative", "differentiate", "limit", "continuity", "tangent"]):
            return "Calculus"
        if any(w in qt for w in ["circle", "parabola", "ellipse", "hyperbola", "straight line", "locus"]):
            return "Coordinate Geometry"
        if any(w in qt for w in ["vector", "dot product", "cross product", "plane", "direction cosines", "3d"]):
            return "Vectors & 3D Geometry"
        if any(w in qt for w in ["probability", "bayes", "binomial distribution", "dice", "coin"]):
            return "Probability & Statistics"
        if any(w in qt for w in ["sine", "cosine", "tan", "trigonometric", "inverse trigonometric"]):
            return "Trigonometry"
        if any(w in qt for w in ["roots", "quadratic", "progression", "ap", "gp", "complex number"]):
            return "Algebra"
        return "Pure Mathematics"

    return "General"

def extract_questions_from_pdf(pdf_path: Path, metadata: Dict[str, Any]) -> Tuple[List[Dict[str, Any]], List[Dict[str, Any]]]:
    """
    Parses a question paper PDF using PyMuPDF and pdfplumber.
    Returns (extracted_questions, manual_review_items).
    """
    if not pdf_path.exists():
        raise FileNotFoundError(f"PDF not found: {pdf_path}")

    extracted_questions = []
    review_queue = []

    prefix = pdf_path.stem
    pages_data = []

    if HAVE_FITZ:
        doc = fitz.open(pdf_path)
        total_pages = len(doc)
        for pno in range(total_pages):
            page = doc[pno]
            text = page.get_text("text")
            images = extract_diagrams_from_page(doc, pno, prefix)
            pages_data.append({"page_num": pno + 1, "text": text, "images": images})
    else:
        with pdfplumber.open(pdf_path) as pdf:
            total_pages = len(pdf.pages)
            for pno, page in enumerate(pdf.pages):
                text = page.extract_text() or ""
                images = extract_diagrams_from_page(page, pno, prefix)
                pages_data.append({"page_num": pno + 1, "text": text, "images": images})

    full_text = "\n\n---PAGE BREAK---\n\n".join([p["text"] for p in pages_data])

    # Pattern for question blocks
    # Supports "Q.1", "Question 1", "Q1.", "1. ", "Question ID : 12345"
    q_split_pattern = re.compile(
        r'(?:\n|\A)(?:Q(?:uestion)?\.?\s*(\d+)[:.]?|(\d+)\.\s+|Question\s*ID\s*:\s*(\d+))',
        re.IGNORECASE
    )

    matches = list(q_split_pattern.finditer(full_text))

    if not matches:
        # Fallback: Treat as scanned or unstructured, push to review queue
        review_queue.append({
            "source_pdf": str(pdf_path),
            "reason": "NO_QUESTION_DELIMITERS_DETECTED",
            "page_count": total_pages,
            "action": "Needs OCR or manual template parser"
        })
        return [], review_queue

    year = metadata.get("year", 2025)
    session = metadata.get("session", "Session 1")
    date_str = metadata.get("date", "2025-01-22")
    shift = metadata.get("shift", "Shift 1")
    pdf_name = pdf_path.name
    source_url = metadata.get("source_url", "https://jeemain.nta.nic.in/")

    for i, match in enumerate(matches):
        qnum_raw = match.group(1) or match.group(2) or match.group(3)
        try:
            qnum = int(qnum_raw)
        except ValueError:
            qnum = i + 1

        start_pos = match.end()
        end_pos = matches[i + 1].start() if i + 1 < len(matches) else len(full_text)
        raw_block = full_text[start_pos:end_pos].strip()

        # Clean block text
        clean_block = clean_text(raw_block)

        # Subject detection
        subject = detect_subject_from_context(clean_block, qnum)
        chapter = detect_chapter(subject, clean_block)

        # Parse options
        options, q_text = parse_options(clean_block)

        # Determine question type
        if len(options) == 4:
            q_type = "MCQ"
        else:
            # Check if numerical
            is_numerical = ("numerical" in clean_block.lower() or
                            "value" in clean_block.lower() or
                            "nearest integer" in clean_block.lower() or
                            len(options) == 0)
            q_type = "NUMERICAL" if is_numerical else "MCQ"

        # Marking scheme
        marks, neg_marks = get_marking_scheme(year, q_type)

        # Associate diagrams
        page_approx = int((start_pos / max(1, len(full_text))) * total_pages)
        page_idx = min(page_approx, total_pages - 1)
        assoc_images = pages_data[page_idx]["images"]

        # Confidence assessment
        confidence_flags = []
        if len(q_text) < 15:
            confidence_flags.append("QUESTION_TEXT_TOO_SHORT")
        if q_type == "MCQ" and len(options) < 4:
            confidence_flags.append(f"INCOMPLETE_OPTIONS_COUNT_{len(options)}")
        if "\\uf0" in q_text or "\ufffd" in q_text:
            confidence_flags.append("UNICODE_CONVERSION_ARTIFACT")

        status = "pending_verification" if not confidence_flags else "needs_manual_review"

        question_obj = {
            "exam": "JEE Main",
            "year": year,
            "session": session,
            "date": date_str,
            "shift": shift,
            "subject": subject,
            "chapter": chapter,
            "questionNumber": qnum,
            "questionType": q_type,
            "questionText": q_text,
            "options": options if q_type == "MCQ" else [],
            "correctAnswer": [],  # Verified answer will be filled by verify_questions.py
            "explanation": f"Official question from JEE Main {year} ({session}, {date_str} {shift}). Detailed step-by-step verification available via verified answer keys.",
            "marks": marks,
            "negativeMarks": neg_marks,
            "source": {
                "pdf": pdf_name,
                "url": source_url,
                "diagrams": assoc_images
            },
            "contentType": "PYQ",
            "verificationStatus": status,
            "isPublished": False
        }

        if confidence_flags:
            review_queue.append({
                "question": question_obj,
                "flags": confidence_flags,
                "raw_block": raw_block[:300]
            })
        else:
            extracted_questions.append(question_obj)

    # Save extraction json
    out_json_path = EXTRACTED_DIR / f"{prefix}_extracted.json"
    with open(out_json_path, "w", encoding="utf-8") as f:
        json.dump(extracted_questions, f, indent=2)

    return extracted_questions, review_queue

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="TutorNove PDF Question Extractor")
    parser.add_argument("pdf_path", nargs="?", help="Path to PDF paper")
    parser.add_argument("--year", type=int, default=2025)
    args = parser.parse_args()

    if args.pdf_path:
        p = Path(args.pdf_path)
        meta = {"year": args.year, "session": "Session 1", "date": "2025-01-22", "shift": "Shift 1"}
        qs, rev = extract_questions_from_pdf(p, meta)
        print(f"Extracted {len(qs)} questions. Review queue: {len(rev)}")
    else:
        print("Please provide a path to a PDF paper or run batch generator.")
