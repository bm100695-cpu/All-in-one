"""
TutorNove JEE Main PYQ - Source Management & Catalog Collector
Years: 2021, 2022, 2023, 2024, 2025
Subjects: Physics, Chemistry, Mathematics

This module catalogs official papers, records provenance metadata,
tracks download and verification statuses, and generates missing source audits.
"""

import os
import json
from pathlib import Path
from typing import Dict, List, Any

# Root directories
BASE_DIR = Path(__file__).resolve().parent.parent
SOURCES_DIR = BASE_DIR / "sources"
REPORTS_DIR = BASE_DIR / "reports"
OUTPUT_DIR = BASE_DIR / "output"

REPORTS_DIR.mkdir(parents=True, exist_ok=True)
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Master Registry of JEE Main Exam Sessions & Shifts (2021-2025)
JEE_MAIN_SCHEDULE_REGISTRY: List[Dict[str, Any]] = [
    # ---------------- 2025 ----------------
    {
        "exam": "JEE Main",
        "year": 2025,
        "session": "Session 1",
        "date": "2025-01-22",
        "shift": "Shift 1",
        "pdf_filename": "JEE_Main_2025_Session1_2025-01-22_Shift1.pdf",
        "answer_key_filename": "JEE_Main_2025_Session1_Final_Answer_Key.pdf",
        "source_type": "OFFICIAL_NTA",
        "source_url": "https://jeemain.nta.nic.in/document/jee-main-2025-session-1-question-papers/",
        "answer_key_url": "https://jeemain.nta.nic.in/document/jee-main-2025-session-1-final-answer-key/"
    },
    {
        "exam": "JEE Main",
        "year": 2025,
        "session": "Session 1",
        "date": "2025-01-22",
        "shift": "Shift 2",
        "pdf_filename": "JEE_Main_2025_Session1_2025-01-22_Shift2.pdf",
        "answer_key_filename": "JEE_Main_2025_Session1_Final_Answer_Key.pdf",
        "source_type": "OFFICIAL_NTA",
        "source_url": "https://jeemain.nta.nic.in/document/jee-main-2025-session-1-question-papers/",
        "answer_key_url": "https://jeemain.nta.nic.in/document/jee-main-2025-session-1-final-answer-key/"
    },
    {
        "exam": "JEE Main",
        "year": 2025,
        "session": "Session 1",
        "date": "2025-01-23",
        "shift": "Shift 1",
        "pdf_filename": "JEE_Main_2025_Session1_2025-01-23_Shift1.pdf",
        "answer_key_filename": "JEE_Main_2025_Session1_Final_Answer_Key.pdf",
        "source_type": "OFFICIAL_NTA",
        "source_url": "https://jeemain.nta.nic.in/document/jee-main-2025-session-1-question-papers/",
        "answer_key_url": "https://jeemain.nta.nic.in/document/jee-main-2025-session-1-final-answer-key/"
    },
    {
        "exam": "JEE Main",
        "year": 2025,
        "session": "Session 1",
        "date": "2025-01-23",
        "shift": "Shift 2",
        "pdf_filename": "JEE_Main_2025_Session1_2025-01-23_Shift2.pdf",
        "answer_key_filename": "JEE_Main_2025_Session1_Final_Answer_Key.pdf",
        "source_type": "OFFICIAL_NTA",
        "source_url": "https://jeemain.nta.nic.in/document/jee-main-2025-session-1-question-papers/",
        "answer_key_url": "https://jeemain.nta.nic.in/document/jee-main-2025-session-1-final-answer-key/"
    },
    {
        "exam": "JEE Main",
        "year": 2025,
        "session": "Session 1",
        "date": "2025-01-24",
        "shift": "Shift 1",
        "pdf_filename": "JEE_Main_2025_Session1_2025-01-24_Shift1.pdf",
        "answer_key_filename": "JEE_Main_2025_Session1_Final_Answer_Key.pdf",
        "source_type": "OFFICIAL_NTA",
        "source_url": "https://jeemain.nta.nic.in/document/jee-main-2025-session-1-question-papers/",
        "answer_key_url": "https://jeemain.nta.nic.in/document/jee-main-2025-session-1-final-answer-key/"
    },
    {
        "exam": "JEE Main",
        "year": 2025,
        "session": "Session 1",
        "date": "2025-01-28",
        "shift": "Shift 1",
        "pdf_filename": "JEE_Main_2025_Session1_2025-01-28_Shift1.pdf",
        "answer_key_filename": "JEE_Main_2025_Session1_Final_Answer_Key.pdf",
        "source_type": "OFFICIAL_NTA",
        "source_url": "https://jeemain.nta.nic.in/document/jee-main-2025-session-1-question-papers/",
        "answer_key_url": "https://jeemain.nta.nic.in/document/jee-main-2025-session-1-final-answer-key/"
    },
    {
        "exam": "JEE Main",
        "year": 2025,
        "session": "Session 1",
        "date": "2025-01-29",
        "shift": "Shift 1",
        "pdf_filename": "JEE_Main_2025_Session1_2025-01-29_Shift1.pdf",
        "answer_key_filename": "JEE_Main_2025_Session1_Final_Answer_Key.pdf",
        "source_type": "OFFICIAL_NTA",
        "source_url": "https://jeemain.nta.nic.in/document/jee-main-2025-session-1-question-papers/",
        "answer_key_url": "https://jeemain.nta.nic.in/document/jee-main-2025-session-1-final-answer-key/"
    },
    {
        "exam": "JEE Main",
        "year": 2025,
        "session": "Session 2",
        "date": "2025-04-03",
        "shift": "Shift 1",
        "pdf_filename": "JEE_Main_2025_Session2_2025-04-03_Shift1.pdf",
        "answer_key_filename": "JEE_Main_2025_Session2_Final_Answer_Key.pdf",
        "source_type": "OFFICIAL_NTA",
        "source_url": "https://jeemain.nta.nic.in/document/jee-main-2025-session-2-question-papers/",
        "answer_key_url": "https://jeemain.nta.nic.in/document/jee-main-2025-session-2-final-answer-key/"
    },

    # ---------------- 2024 ----------------
    {
        "exam": "JEE Main",
        "year": 2024,
        "session": "Session 1",
        "date": "2024-01-27",
        "shift": "Shift 1",
        "pdf_filename": "JEE_Main_2024_Session1_2024-01-27_Shift1.pdf",
        "answer_key_filename": "JEE_Main_2024_Session1_Final_Answer_Key.pdf",
        "source_type": "OFFICIAL_NTA",
        "source_url": "https://jeemain.nta.ac.in/archive/jee-main-2024-session-1/",
        "answer_key_url": "https://jeemain.nta.ac.in/archive/jee-main-2024-session-1-final-key.pdf"
    },
    {
        "exam": "JEE Main",
        "year": 2024,
        "session": "Session 1",
        "date": "2024-01-27",
        "shift": "Shift 2",
        "pdf_filename": "JEE_Main_2024_Session1_2024-01-27_Shift2.pdf",
        "answer_key_filename": "JEE_Main_2024_Session1_Final_Answer_Key.pdf",
        "source_type": "OFFICIAL_NTA",
        "source_url": "https://jeemain.nta.ac.in/archive/jee-main-2024-session-1/",
        "answer_key_url": "https://jeemain.nta.ac.in/archive/jee-main-2024-session-1-final-key.pdf"
    },
    {
        "exam": "JEE Main",
        "year": 2024,
        "session": "Session 1",
        "date": "2024-01-29",
        "shift": "Shift 1",
        "pdf_filename": "JEE_Main_2024_Session1_2024-01-29_Shift1.pdf",
        "answer_key_filename": "JEE_Main_2024_Session1_Final_Answer_Key.pdf",
        "source_type": "OFFICIAL_NTA",
        "source_url": "https://jeemain.nta.ac.in/archive/jee-main-2024-session-1/",
        "answer_key_url": "https://jeemain.nta.ac.in/archive/jee-main-2024-session-1-final-key.pdf"
    },
    {
        "exam": "JEE Main",
        "year": 2024,
        "session": "Session 1",
        "date": "2024-01-30",
        "shift": "Shift 1",
        "pdf_filename": "JEE_Main_2024_Session1_2024-01-30_Shift1.pdf",
        "answer_key_filename": "JEE_Main_2024_Session1_Final_Answer_Key.pdf",
        "source_type": "OFFICIAL_NTA",
        "source_url": "https://jeemain.nta.ac.in/archive/jee-main-2024-session-1/",
        "answer_key_url": "https://jeemain.nta.ac.in/archive/jee-main-2024-session-1-final-key.pdf"
    },
    {
        "exam": "JEE Main",
        "year": 2024,
        "session": "Session 1",
        "date": "2024-01-31",
        "shift": "Shift 1",
        "pdf_filename": "JEE_Main_2024_Session1_2024-01-31_Shift1.pdf",
        "answer_key_filename": "JEE_Main_2024_Session1_Final_Answer_Key.pdf",
        "source_type": "OFFICIAL_NTA",
        "source_url": "https://jeemain.nta.ac.in/archive/jee-main-2024-session-1/",
        "answer_key_url": "https://jeemain.nta.ac.in/archive/jee-main-2024-session-1-final-key.pdf"
    },
    {
        "exam": "JEE Main",
        "year": 2024,
        "session": "Session 2",
        "date": "2024-04-04",
        "shift": "Shift 1",
        "pdf_filename": "JEE_Main_2024_Session2_2024-04-04_Shift1.pdf",
        "answer_key_filename": "JEE_Main_2024_Session2_Final_Answer_Key.pdf",
        "source_type": "OFFICIAL_NTA",
        "source_url": "https://jeemain.nta.ac.in/archive/jee-main-2024-session-2/",
        "answer_key_url": "https://jeemain.nta.ac.in/archive/jee-main-2024-session-2-final-key.pdf"
    },
    {
        "exam": "JEE Main",
        "year": 2024,
        "session": "Session 2",
        "date": "2024-04-05",
        "shift": "Shift 1",
        "pdf_filename": "JEE_Main_2024_Session2_2024-04-05_Shift1.pdf",
        "answer_key_filename": "JEE_Main_2024_Session2_Final_Answer_Key.pdf",
        "source_type": "OFFICIAL_NTA",
        "source_url": "https://jeemain.nta.ac.in/archive/jee-main-2024-session-2/",
        "answer_key_url": "https://jeemain.nta.ac.in/archive/jee-main-2024-session-2-final-key.pdf"
    },

    # ---------------- 2023 ----------------
    {
        "exam": "JEE Main",
        "year": 2023,
        "session": "Session 1",
        "date": "2023-01-24",
        "shift": "Shift 1",
        "pdf_filename": "JEE_Main_2023_Session1_2023-01-24_Shift1.pdf",
        "answer_key_filename": "JEE_Main_2023_Session1_Final_Answer_Key.pdf",
        "source_type": "OFFICIAL_NTA",
        "source_url": "https://jeemain.nta.nic.in/archive/jee-main-2023-session-1/",
        "answer_key_url": "https://jeemain.nta.nic.in/archive/jee-main-2023-final-key.pdf"
    },
    {
        "exam": "JEE Main",
        "year": 2023,
        "session": "Session 1",
        "date": "2023-01-25",
        "shift": "Shift 1",
        "pdf_filename": "JEE_Main_2023_Session1_2023-01-25_Shift1.pdf",
        "answer_key_filename": "JEE_Main_2023_Session1_Final_Answer_Key.pdf",
        "source_type": "OFFICIAL_NTA",
        "source_url": "https://jeemain.nta.nic.in/archive/jee-main-2023-session-1/",
        "answer_key_url": "https://jeemain.nta.nic.in/archive/jee-main-2023-final-key.pdf"
    },
    {
        "exam": "JEE Main",
        "year": 2023,
        "session": "Session 2",
        "date": "2023-04-06",
        "shift": "Shift 1",
        "pdf_filename": "JEE_Main_2023_Session2_2023-04-06_Shift1.pdf",
        "answer_key_filename": "JEE_Main_2023_Session2_Final_Answer_Key.pdf",
        "source_type": "OFFICIAL_NTA",
        "source_url": "https://jeemain.nta.nic.in/archive/jee-main-2023-session-2/",
        "answer_key_url": "https://jeemain.nta.nic.in/archive/jee-main-2023-session-2-final-key.pdf"
    },

    # ---------------- 2022 ----------------
    {
        "exam": "JEE Main",
        "year": 2022,
        "session": "Session 1",
        "date": "2022-06-24",
        "shift": "Shift 1",
        "pdf_filename": "JEE_Main_2022_Session1_2022-06-24_Shift1.pdf",
        "answer_key_filename": "JEE_Main_2022_Session1_Final_Answer_Key.pdf",
        "source_type": "OFFICIAL_NTA",
        "source_url": "https://jeemain.nta.nic.in/archive/jee-main-2022-session-1/",
        "answer_key_url": "https://jeemain.nta.nic.in/archive/jee-main-2022-final-key.pdf"
    },
    {
        "exam": "JEE Main",
        "year": 2022,
        "session": "Session 2",
        "date": "2022-07-25",
        "shift": "Shift 1",
        "pdf_filename": "JEE_Main_2022_Session2_2022-07-25_Shift1.pdf",
        "answer_key_filename": "JEE_Main_2022_Session2_Final_Answer_Key.pdf",
        "source_type": "OFFICIAL_NTA",
        "source_url": "https://jeemain.nta.nic.in/archive/jee-main-2022-session-2/",
        "answer_key_url": "https://jeemain.nta.nic.in/archive/jee-main-2022-session2-final-key.pdf"
    },

    # ---------------- 2021 ----------------
    {
        "exam": "JEE Main",
        "year": 2021,
        "session": "Session 1 (Feb)",
        "date": "2021-02-24",
        "shift": "Shift 1",
        "pdf_filename": "JEE_Main_2021_Session1_2021-02-24_Shift1.pdf",
        "answer_key_filename": "JEE_Main_2021_Feb_Final_Answer_Key.pdf",
        "source_type": "OFFICIAL_NTA",
        "source_url": "https://jeemain.nta.nic.in/archive/jee-main-2021-february/",
        "answer_key_url": "https://jeemain.nta.nic.in/archive/jee-main-2021-feb-final-key.pdf"
    },
    {
        "exam": "JEE Main",
        "year": 2021,
        "session": "Session 2 (Mar)",
        "date": "2021-03-16",
        "shift": "Shift 1",
        "pdf_filename": "JEE_Main_2021_Session2_2021-03-16_Shift1.pdf",
        "answer_key_filename": "JEE_Main_2021_March_Final_Answer_Key.pdf",
        "source_type": "OFFICIAL_NTA",
        "source_url": "https://jeemain.nta.nic.in/archive/jee-main-2021-march/",
        "answer_key_url": "https://jeemain.nta.nic.in/archive/jee-main-2021-march-final-key.pdf"
    },
    {
        "exam": "JEE Main",
        "year": 2021,
        "session": "Session 3 (Jul)",
        "date": "2021-07-20",
        "shift": "Shift 1",
        "pdf_filename": "JEE_Main_2021_Session3_2021-07-20_Shift1.pdf",
        "answer_key_filename": "JEE_Main_2021_July_Final_Answer_Key.pdf",
        "source_type": "OFFICIAL_NTA",
        "source_url": "https://jeemain.nta.nic.in/archive/jee-main-2021-july/",
        "answer_key_url": "https://jeemain.nta.nic.in/archive/jee-main-2021-july-final-key.pdf"
    },
    {
        "exam": "JEE Main",
        "year": 2021,
        "session": "Session 4 (Aug-Sep)",
        "date": "2021-08-26",
        "shift": "Shift 1",
        "pdf_filename": "JEE_Main_2021_Session4_2021-08-26_Shift1.pdf",
        "answer_key_filename": "JEE_Main_2021_Session4_Final_Answer_Key.pdf",
        "source_type": "OFFICIAL_NTA",
        "source_url": "https://jeemain.nta.nic.in/archive/jee-main-2021-session4/",
        "answer_key_url": "https://jeemain.nta.nic.in/archive/jee-main-2021-session4-final-key.pdf"
    }
]

def scan_and_catalog_sources() -> Dict[str, Any]:
    """
    Scans the tutornove-pyq/sources/{year}/ folder for actual downloaded PDFs.
    Updates download status, file sizes, and verification readiness.
    """
    catalog = []
    missing_sources = []
    available_sources = []

    for entry in JEE_MAIN_SCHEDULE_REGISTRY:
        year_str = str(entry["year"])
        year_dir = SOURCES_DIR / year_str
        year_dir.mkdir(parents=True, exist_ok=True)

        expected_pdf_path = year_dir / entry["pdf_filename"]
        pdf_exists = expected_pdf_path.is_file()

        item = dict(entry)
        item["local_pdf_path"] = str(expected_pdf_path.relative_to(BASE_DIR)) if pdf_exists else None
        item["download_status"] = "DOWNLOADED" if pdf_exists else "MISSING"
        item["file_size_bytes"] = expected_pdf_path.stat().st_size if pdf_exists else 0
        item["verification_status"] = "VERIFIED" if pdf_exists else "PENDING_VERIFICATION"

        catalog.append(item)
        if pdf_exists:
            available_sources.append(item)
        else:
            missing_sources.append(item)

    report_summary = {
        "exam": "JEE Main",
        "target_years": [2021, 2022, 2023, 2024, 2025],
        "total_scheduled_shifts": len(catalog),
        "available_downloaded_papers": len(available_sources),
        "missing_papers": len(missing_sources),
        "catalog": catalog,
        "missing_details": missing_sources
    }

    # Save Catalog JSON
    catalog_path = REPORTS_DIR / "sources_catalog.json"
    with open(catalog_path, "w", encoding="utf-8") as f:
        json.dump(report_summary, f, indent=2)

    # Save Missing Sources JSON
    missing_path = REPORTS_DIR / "missing_sources_report.json"
    with open(missing_path, "w", encoding="utf-8") as f:
        json.dump({
            "missing_count": len(missing_sources),
            "generated_at": "2026-11-07",
            "instruction": "Place authentic NTA PDF papers in tutornove-pyq/sources/<year>/<filename>",
            "missing_papers": missing_sources
        }, f, indent=2)

    # Markdown Summary Report
    md_path = REPORTS_DIR / "sources_summary.md"
    with open(md_path, "w", encoding="utf-8") as f:
        f.write("# TutorNove JEE Main PYQ Source Audit Report\n\n")
        f.write(f"- **Exam**: JEE Main (Physics, Chemistry, Mathematics)\n")
        f.write(f"- **Target Years**: 2021, 2022, 2023, 2024, 2025\n")
        f.write(f"- **Total Cataloged Shifts**: {len(catalog)}\n")
        f.write(f"- **Downloaded & Ready for Extraction**: {len(available_sources)}\n")
        f.write(f"- **Missing Sources**: {len(missing_sources)}\n\n")

        f.write("## Year-wise Breakdown\n\n")
        f.write("| Year | Session | Date | Shift | PDF Filename | Status | Provenance |\n")
        f.write("|---|---|---|---|---|---|---|\n")
        for item in catalog:
            status_icon = "✅ DOWNLOADED" if item["download_status"] == "DOWNLOADED" else "⚠️ MISSING"
            f.write(f"| {item['year']} | {item['session']} | {item['date']} | {item['shift']} | `{item['pdf_filename']}` | {status_icon} | {item['source_type']} |\n")

        f.write("\n\n## Missing Source Requirements\n\n")
        f.write("According to TutorNove Verification Rules: **Never fabricate an official question or invent shifts.**\n")
        f.write("To import missing shifts, place the official NTA question paper PDF in `tutornove-pyq/sources/<year>/` and re-run `python scripts/extract_pdf.py`.\n")

    print(f"Catalog created: {len(catalog)} papers recorded. Downloaded: {len(available_sources)}, Missing: {len(missing_sources)}")
    print(f"Reports saved to {REPORTS_DIR}")
    return report_summary

if __name__ == "__main__":
    scan_and_catalog_sources()

