# TutorNove JEE Main PYQ Collection & JSON Generator 🎓

Production-grade Previous Year Question (PYQ) collection, PDF extraction, verification, MongoDB bulk import, and online mock examination system for **TutorNove**.

---

## 📌 1. Overview & Architectural Integrity

TutorNove requires a structured, authentic question database for **JEE Main (2021–2025)** covering **Physics, Chemistry, and Mathematics**.

### Core Academic & Engineering Invariants:
1. **Zero Fabrication**: Never invent questions or guess answers. Every question has certified provenance (NTA official PDF, exam date, shift).
2. **Official Final Answer Keys**: Answers are reconciled strictly against official NTA final answer keys. Questions pending key reconciliation remain marked as `pending_verification`.
3. **Year-Accurate Marking Rules**:
   - **2021**: MCQ (+4, -1); Numerical (+4, 0 - no negative marking).
   - **2022, 2023, 2024, 2025**: MCQ (+4, -1); Numerical (+4, -1).
4. **Draft-First Security**: Questions imported via bulk scripts remain unpublished (`isPublished: false`) until approved by an administrator or academic reviewer.
5. **CBT Security**: During active mock tests, correct answers and explanations are **never** delivered to the student frontend until after test submission.

---

## 🗂️ 2. Project Directory Structure

```
tutornove-pyq/
├── sources/                          # Raw official NTA Question Paper PDFs
│   ├── 2021/
│   ├── 2022/
│   ├── 2023/
│   ├── 2024/
│   └── 2025/
├── extracted/                        # Extracted question data & cropped diagrams
│   └── diagrams/                     # Extracted figures and schematics (.png)
├── output/                           # Production JSON databases for MongoDB import
│   ├── jee-main-2021.json
│   ├── jee-main-2022.json
│   ├── jee-main-2023.json
│   ├── jee-main-2024.json
│   ├── jee-main-2025.json
│   └── jee-main-all-2021-2025.json
├── scripts/                          # Automated Python extraction & sync pipeline
│   ├── collect_sources.py            # Catalogs shifts, schedules, and provenance
│   ├── download_papers.py            # Downloads public papers respecting rate limits
│   ├── extract_pdf.py                # High-precision extractor (pdfplumber & PyMuPDF)
│   ├── extract_ocr.py                # OpenCV + Tesseract OCR fallback for scanned papers
│   ├── verify_questions.py           # Reconciles questions with official NTA final answer keys
│   ├── generate_json.py              # Compiles and validates production JSONs
│   └── sync_to_tutornove_db.ts       # Direct bridge to TutorNove platform database
├── mongodb/                          # MongoDB Mongoose integration
│   ├── models/
│   │   └── Question.js               # Mongoose schema with compound indexes
│   └── scripts/
│       └── import_questions.js       # Bulk importer with --dry-run & duplicate protection
├── reports/                          # Audit reports and verification stats
│   ├── sources_catalog.json          # Complete catalog of all official papers
│   ├── missing_sources_report.json   # Audit of papers not yet downloaded
│   ├── sources_summary.md            # Human-readable status markdown report
│   ├── verification_report.json      # Answer key verification status report
│   ├── generation_summary.json       # JSON output generation statistics
│   └── mongo_import_report.json      # MongoDB bulk import execution report
└── README.md                         # Complete documentation
```

---

## 📋 3. Standard JSON Question Schema

Every generated question conforms to the required TutorNove schema:

```json
{
  "exam": "JEE Main",
  "year": 2025,
  "session": "Session 1",
  "date": "2025-01-22",
  "shift": "Shift 1",
  "subject": "Physics",
  "chapter": "Mechanics",
  "questionNumber": 1,
  "questionType": "MCQ",
  "questionText": "A particle of mass m is projected with velocity v at an angle θ with the horizontal. The magnitude of angular momentum of the particle about the point of projection when it reaches the maximum height H is:",
  "options": [
    {"key": "A", "text": "m v³ sin²θ cosθ / (2g)"},
    {"key": "B", "text": "m v³ sin²θ cosθ / g"},
    {"key": "C", "text": "m v³ sinθ cos²θ / (2g)"},
    {"key": "D", "text": "m v³ sinθ cos²θ / g"}
  ],
  "correctAnswer": ["A"],
  "explanation": "At maximum height, vertical velocity is zero and horizontal velocity is v_x = v cosθ. The maximum height is H = (v² sin²θ)/(2g). Angular momentum L about the projection point is L = m * v_x * H = m * (v cosθ) * [(v² sin²θ)/(2g)] = m v³ sin²θ cosθ / (2g).",
  "marks": 4,
  "negativeMarks": -1,
  "source": {
    "pdf": "JEE_Main_2025_Session1_2025-01-22_Shift1.pdf",
    "url": "https://jeemain.nta.nic.in/document/jee-main-2025-session-1-question-papers/"
  },
  "contentType": "PYQ",
  "verificationStatus": "verified",
  "isPublished": false
}
```

For numerical questions:
```json
{
  "questionType": "NUMERICAL",
  "options": [],
  "correctAnswer": ["40"],
  "marks": 4,
  "negativeMarks": -1
}
```

---

## ⚙️ 4. How to Run the Python Extraction Pipeline

### 4.1 Prerequisites
Python 3.12+ installed with the following packages:
```bash
pip install pdfplumber pymupdf opencv-python pytesseract requests beautifulsoup4 pydantic
```

### 4.2 Step 1: Catalog & Scan Sources
Scans the local filesystem and builds the source provenance catalog:
```bash
python tutornove-pyq/scripts/collect_sources.py
```
Outputs:
- `tutornove-pyq/reports/sources_catalog.json`
- `tutornove-pyq/reports/missing_sources_report.json`
- `tutornove-pyq/reports/sources_summary.md`

### 4.3 Step 2: Download Papers (Ethical Crawler)
```bash
# Dry run check
python tutornove-pyq/scripts/download_papers.py --dry-run

# Download papers for a specific year
python tutornove-pyq/scripts/download_papers.py --year 2025
```

### 4.4 Step 3: Extract Questions from PDFs
```bash
python tutornove-pyq/scripts/extract_pdf.py tutornove-pyq/sources/2025/JEE_Main_2025_Session1_2025-01-22_Shift1.pdf --year 2025
```
Extracts:
- Question text and options (A, B, C, D)
- High-resolution diagrams to `tutornove-pyq/extracted/diagrams/`
- Mathematical expressions and symbols
- Confidence flags for manual review

### 4.5 Step 4: Reconcile Answer Keys
```bash
python tutornove-pyq/scripts/verify_questions.py
```

### 4.6 Step 5: Generate Production JSON Files
```bash
python tutornove-pyq/scripts/generate_json.py
```
Generates all year-wise files in `tutornove-pyq/output/`.

---

## 🍃 5. MongoDB Import Instructions

### 5.1 Model Definition
The model is located at `tutornove-pyq/mongodb/models/Question.js`.
Includes:
- Unique compound index: `{ exam: 1, year: 1, session: 1, date: 1, shift: 1, questionNumber: 1 }`
- Performance index: `{ exam: 1, year: 1, subject: 1, chapter: 1 }`
- Approval index: `{ verificationStatus: 1, isPublished: 1 }`

### 5.2 Dry-Run Validation
Verify all questions without modifying the database:
```bash
node tutornove-pyq/mongodb/scripts/import_questions.js --all --dry-run
```

### 5.3 Production Import
Set `MONGODB_URI` and run:
```bash
export MONGODB_URI="mongodb+srv://<user>:<password>@cluster.mongodb.net/tutornove"
node tutornove-pyq/mongodb/scripts/import_questions.js --all
```
Or import a single year:
```bash
node tutornove-pyq/mongodb/scripts/import_questions.js --file tutornove-pyq/output/jee-main-2025.json
```

---

## 🖥️ 6. TutorNove Admin Portal & Student CBT Interface

### 6.1 Admin Dashboard (`/admin` -> JEE Main PYQ Database)
- **Year & Subject Filtering**: Filter questions by Year (2021–2025), Subject (Physics, Chemistry, Math), and Verification Status.
- **In-Place Question Editor**: Edit question text, edit options A–D, change correct answers, and update step-by-step explanations.
- **Verification Sign-Off**: 1-click verification of official keys.
- **Publish / Unpublish Controls**: Strictly keep unreviewed questions hidden from students.
- **JSON Exporter**: 1-click download of verified questions matching the exact format.

### 6.2 Student Online Mock Examination Station
- **Zero PDF Downloads**: Students cannot download raw paper PDFs; papers are served through the authentic Computer-Based Test (CBT) Runner.
- **Interactive Year Selector**: Students choose year (2025, 2024, 2023, 2022, 2021) and shift.
- **Authentic NTA CBT Features**:
  - 180-minute live countdown timer with critical warning alert.
  - Section tabs (Physics, Chemistry, Mathematics).
  - 5-state authentic question palette.
  - "Mark for Review" and "Save & Next" controls.
  - Question-level English/Hindi language toggle.
- **Zero Answer Leakage**: Answers and explanations are withheld on the server until student completes test submission.

---

## 🚀 7. Running the Platform Locally

1. **Install dependencies**:
   ```bash
   npm run install:all
   ```
2. **Start Backend Server**:
   ```bash
   npm run dev:server
   # Accessible at http://localhost:5000
   ```
3. **Start Frontend Web App**:
   ```bash
   npm run dev:client
   # Accessible at http://localhost:5173
   ```
4. **Sync PYQs into Live Platform**:
   ```bash
   npx tsx tutornove-pyq/scripts/sync_to_tutornove_db.ts
   ```

