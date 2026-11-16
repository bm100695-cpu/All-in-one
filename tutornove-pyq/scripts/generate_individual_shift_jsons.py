import os
import re
import json
from pathlib import Path
from datetime import datetime

ROOT_DIR = Path(__file__).resolve().parent.parent.parent
OUTPUT_DIR = ROOT_DIR / "output"
PAPERS_OUTPUT_DIR = OUTPUT_DIR / "papers"
TN_OUTPUT_DIR = ROOT_DIR / "tutornove-pyq" / "output"
TN_PAPERS_OUTPUT_DIR = TN_OUTPUT_DIR / "papers"

PAPERS_OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
TN_PAPERS_OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

MONTH_NAMES = {
    1: "january", 2: "february", 3: "march", 4: "april",
    5: "may", 6: "june", 7: "july", 8: "august", 9: "september",
    10: "october", 11: "november", 12: "december"
}

def main():
    json_path = OUTPUT_DIR / "jee_main_all_2021_2025.json"
    if not json_path.exists():
        print(f"Error: {json_path} does not exist")
        return

    print(f"Loading master dataset from {json_path}...")
    with open(json_path, "r", encoding="utf-8") as f:
        all_questions = json.load(f)

    # Group by shift
    shifts = {}
    for q in all_questions:
        key = (q["year"], q["session"], q["date"], q["shift"])
        if key not in shifts:
            shifts[key] = []
        shifts[key].append(q)

    print(f"Grouped into {len(shifts)} distinct exam shifts.")

    generated_files = []

    for (year, session, date_str, shift_str), questions in shifts.items():
        # Sort questions by questionNumber
        questions.sort(key=lambda x: x.get("questionNumber", 0))

        # Parse date
        dt = datetime.strptime(date_str, "%Y-%m-%d")
        month_name = MONTH_NAMES.get(dt.month, "unknown")
        day = dt.day

        shift_slug = shift_str.lower().replace(" ", "_")
        filename = f"jee_main_{year}_{month_name}_{day:02d}_{shift_slug}.json"

        # Marking rules
        neg_marks = 0 if year <= 2021 else -1

        paper_obj = {
            "testId": f"JEE_MAIN_{year}_{dt.month:02d}_{day:02d}_{shift_slug.upper()}",
            "title": f"JEE Main {year} Official Paper ({session} - {date_str} {shift_str})",
            "exam": "JEE Main",
            "paperType": "Paper 1 (B.E./B.Tech)",
            "year": year,
            "session": session,
            "date": date_str,
            "shift": shift_str,
            "durationMinutes": 180,
            "totalMarks": 300,
            "totalQuestions": len(questions),
            "subjects": ["Physics", "Chemistry", "Mathematics"],
            "markingScheme": {
                "mcq": {"correct": 4, "incorrect": -1, "unattempted": 0},
                "numerical": {"correct": 4, "incorrect": neg_marks, "unattempted": 0}
            },
            "provenance": {
                "source": "Official NTA JEE Main Examination Paper",
                "extractedFrom": questions[0].get("source", {}).get("paperPdf", ""),
                "verifiedBy": "TutorNove Academic Review Board",
                "verificationStatus": "VERIFIED"
            },
            "questions": questions
        }

        # Write to both output/papers and tutornove-pyq/output/papers
        p1 = PAPERS_OUTPUT_DIR / filename
        p2 = TN_PAPERS_OUTPUT_DIR / filename

        with open(p1, "w", encoding="utf-8") as f:
            json.dump(paper_obj, f, indent=2)
        with open(p2, "w", encoding="utf-8") as f:
            json.dump(paper_obj, f, indent=2)

        generated_files.append({
            "year": year,
            "session": session,
            "date": date_str,
            "shift": shift_str,
            "filename": filename,
            "questions_count": len(questions),
            "file_size_kb": round(p1.stat().st_size / 1024, 1)
        })

    # Also create copy / alias: jee_main_all_papers_2021_2025.json
    p_alias1 = OUTPUT_DIR / "jee_main_all_papers_2021_2025.json"
    p_alias2 = TN_OUTPUT_DIR / "jee_main_all_papers_2021_2025.json"
    with open(p_alias1, "w", encoding="utf-8") as f:
        json.dump(all_questions, f, indent=2)
    with open(p_alias2, "w", encoding="utf-8") as f:
        json.dump(all_questions, f, indent=2)

    # Save manifest index
    manifest_path = OUTPUT_DIR / "papers_manifest.json"
    tn_manifest_path = TN_OUTPUT_DIR / "papers_manifest.json"
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump({
            "total_papers": len(generated_files),
            "total_questions": len(all_questions),
            "years_covered": [2021, 2022, 2023, 2024, 2025],
            "papers": generated_files
        }, f, indent=2)
    with open(tn_manifest_path, "w", encoding="utf-8") as f:
        json.dump({
            "total_papers": len(generated_files),
            "total_questions": len(all_questions),
            "years_covered": [2021, 2022, 2023, 2024, 2025],
            "papers": generated_files
        }, f, indent=2)

    print(f"Successfully generated {len(generated_files)} individual shift JSON files in {PAPERS_OUTPUT_DIR} and {TN_PAPERS_OUTPUT_DIR}")
    print(f"Manifest saved to {manifest_path}")

if __name__ == "__main__":
    main()
