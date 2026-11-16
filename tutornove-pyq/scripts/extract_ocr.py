"""
TutorNove JEE Main PYQ - OCR Extraction Engine
Fallback for scanned or image-only PDF question papers.
Combines OpenCV image preprocessing with Tesseract OCR to accurately extract text and math expressions.
"""

import os
import sys
from pathlib import Path
from typing import List, Dict, Any, Optional
import cv2
import numpy as np
import pdfplumber
import pytesseract

BASE_DIR = Path(__file__).resolve().parent.parent
EXTRACTED_DIR = BASE_DIR / "extracted"
DIAGRAMS_DIR = EXTRACTED_DIR / "diagrams"

# Configure tesseract executable path on Windows if installed in Program Files
TESSERACT_COMMON_PATHS = [
    r"C:\Program Files\Tesseract-OCR\tesseract.exe",
    r"C:\Program Files (x86)\Tesseract-OCR\tesseract.exe",
    r"C:\Users\ADMIN\AppData\Local\Tesseract-OCR\tesseract.exe"
]
for p in TESSERACT_COMMON_PATHS:
    if os.path.exists(p):
        pytesseract.pytesseract.tesseract_cmd = p
        break

def preprocess_image_for_ocr(np_image: np.ndarray) -> np.ndarray:
    """
    Applies OpenCV preprocessing pipeline:
    1. Grayscale conversion
    2. Bilateral filtering / Gaussian blur to remove scanner noise
    3. Otsu thresholding for crisp character borders
    """
    if len(np_image.shape) == 3:
        gray = cv2.cvtColor(np_image, cv2.COLOR_BGR2GRAY)
    else:
        gray = np_image

    # Contrast enhancement using CLAHE
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    enhanced = clahe.apply(gray)

    # Adaptive or Otsu thresholding
    _, thresh = cv2.threshold(enhanced, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    return thresh

def deskew_image(image: np.ndarray) -> np.ndarray:
    """Detects tilt angle and rotates image to upright position."""
    coords = np.column_stack(np.where(image > 0))
    if len(coords) < 100:
        return image
    angle = cv2.minAreaRect(coords)[-1]
    if angle < -45:
        angle = -(90 + angle)
    else:
        angle = -angle
    
    # If slight skew (<15 deg), rotate
    if abs(angle) > 0.5 and abs(angle) < 15:
        (h, w) = image.shape[:2]
        center = (w // 2, h // 2)
        M = cv2.getRotationMatrix2D(center, angle, 1.0)
        rotated = cv2.warpAffine(image, M, (w, h), flags=cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)
        return rotated
    return image

def ocr_pdf_page(page: pdfplumber.page.Page, page_index: int, prefix: str) -> Dict[str, Any]:
    """
    Renders a PDF page to image and runs OCR preprocessing.
    """
    # Render page to high-res PIL Image (300 DPI)
    pil_img = page.to_image(resolution=300).original
    open_cv_image = np.array(pil_img)
    if len(open_cv_image.shape) == 3:
        open_cv_image = cv2.cvtColor(open_cv_image, cv2.COLOR_RGB2BGR)

    preprocessed = preprocess_image_for_ocr(open_cv_image)
    deskewed = deskew_image(preprocessed)

    # OCR text extraction
    tess_config = r'--oem 3 --psm 6'
    try:
        extracted_text = pytesseract.image_to_string(deskewed, config=tess_config)
    except pytesseract.TesseractNotFoundError:
        extracted_text = "[Tesseract OCR engine binary not installed in standard path. Please install Tesseract-OCR for scanned PDFs.]"

    return {
        "page_number": page_index + 1,
        "ocr_text": extracted_text,
        "width": deskewed.shape[1],
        "height": deskewed.shape[0]
    }

def ocr_extract_pdf(pdf_path: Path) -> List[Dict[str, Any]]:
    """
    Extracts text page-by-page from scanned PDF using pdfplumber & OpenCV & Tesseract.
    """
    results = []
    prefix = pdf_path.stem
    with pdfplumber.open(pdf_path) as pdf:
        for idx, page in enumerate(pdf.pages):
            page_data = ocr_pdf_page(page, idx, prefix)
            results.append(page_data)
    return results

if __name__ == "__main__":
    if len(sys.argv) > 1:
        p = Path(sys.argv[1])
        if p.exists():
            data = ocr_extract_pdf(p)
            print(f"Processed {len(data)} pages with OCR.")
        else:
            print("File not found.")
    else:
        print("Usage: python extract_ocr.py <path_to_scanned_pdf>")

