"""
TutorNove JEE Main PYQ - Paper Downloader
Downloads question paper PDFs and official answer keys from legitimate public NTA sources.
Strictly respects terms, authentication checks, and download restrictions.
"""

import os
import sys
import json
import time
from pathlib import Path
from typing import Optional, Dict, Any
import requests

BASE_DIR = Path(__file__).resolve().parent.parent
SOURCES_DIR = BASE_DIR / "sources"
REPORTS_DIR = BASE_DIR / "reports"

HEADERS = {
    "User-Agent": "TutorNove-Academic-PYQ-Collector/1.0 (Educational Assessment System; mailto:support@tutornove.in)",
    "Accept": "application/pdf,application/octet-stream,*/*"
}

def verify_pdf_magic_bytes(file_path: Path) -> bool:
    """Checks if the file begins with the standard %PDF magic header."""
    try:
        with open(file_path, "rb") as f:
            header = f.read(4)
            return header == b"%PDF"
    except Exception:
        return False

def download_file(url: str, dest_path: Path, max_retries: int = 2) -> Dict[str, Any]:
    """
    Downloads a PDF file safely.
    Validates content type and magic bytes.
    Does not attempt to bypass access controls or CAPTCHAs.
    """
    if dest_path.exists() and dest_path.stat().st_size > 1024:
        if verify_pdf_magic_bytes(dest_path):
            return {"status": "ALREADY_EXISTS", "size": dest_path.stat().st_size, "path": str(dest_path)}

    dest_path.parent.mkdir(parents=True, exist_ok=True)

    for attempt in range(max_retries):
        try:
            response = requests.get(url, headers=HEADERS, timeout=20, stream=True)
            
            # Check access control / authentication gates
            if response.status_code in [401, 403]:
                return {
                    "status": "ACCESS_RESTRICTED",
                    "error": f"HTTP {response.status_code}: Access denied or authentication required. Cannot bypass.",
                    "url": url
                }
            if response.status_code == 404:
                return {
                    "status": "NOT_FOUND",
                    "error": f"HTTP 404: Remote file not found at {url}",
                    "url": url
                }

            if response.status_code == 200:
                temp_path = dest_path.with_suffix(".tmp")
                with open(temp_path, "wb") as f:
                    for chunk in response.iter_content(chunk_size=8192):
                        if chunk:
                            f.write(chunk)
                
                # Verify PDF integrity
                if verify_pdf_magic_bytes(temp_path):
                    temp_path.replace(dest_path)
                    return {
                        "status": "SUCCESS",
                        "size": dest_path.stat().st_size,
                        "path": str(dest_path)
                    }
                else:
                    temp_path.unlink(missing_ok=True)
                    return {
                        "status": "INVALID_FORMAT",
                        "error": "Downloaded content is not a valid PDF (magic bytes check failed)",
                        "url": url
                    }

        except requests.exceptions.RequestException as e:
            time.sleep(1)
            if attempt == max_retries - 1:
                return {"status": "NETWORK_ERROR", "error": str(e), "url": url}

    return {"status": "FAILED", "error": "Unknown download failure", "url": url}

def download_papers_for_catalog(dry_run: bool = False, year_filter: Optional[int] = None):
    """
    Iterates over the registered JEE Main catalog and downloads missing papers.
    """
    catalog_path = REPORTS_DIR / "sources_catalog.json"
    if not catalog_path.exists():
        from collect_sources import scan_and_catalog_sources
        scan_and_catalog_sources()

    with open(catalog_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    catalog = data.get("catalog", [])
    download_results = []

    print(f"Starting paper download check. Filter Year: {year_filter or 'ALL'}. Dry run: {dry_run}")

    for item in catalog:
        year = item["year"]
        if year_filter and year != year_filter:
            continue

        year_dir = SOURCES_DIR / str(year)
        dest_pdf = year_dir / item["pdf_filename"]

        print(f"Checking {item['year']} {item['session']} {item['date']} {item['shift']} -> {item['pdf_filename']}")

        if dry_run:
            exists = dest_pdf.exists()
            download_results.append({
                "item": item,
                "status": "EXISTS" if exists else "WOULD_DOWNLOAD",
                "path": str(dest_pdf)
            })
            continue

        result = download_file(item["source_url"], dest_pdf)
        download_results.append({
            "item": item,
            "result": result
        })
        time.sleep(0.5)

    # Save download summary report
    report_file = REPORTS_DIR / "download_report.json"
    with open(report_file, "w", encoding="utf-8") as f:
        json.dump(download_results, f, indent=2)

    print(f"Download check completed. Summary written to {report_file}")
    return download_results

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="TutorNove JEE Main PDF Downloader")
    parser.add_argument("--year", type=int, help="Filter by year (2021-2025)")
    parser.add_argument("--dry-run", action="store_true", help="Perform dry run without downloading")
    args = parser.parse_args()

    download_papers_for_catalog(dry_run=args.dry_run, year_filter=args.year)
