# ExamVerse AI 🚀
### Production-Oriented Full-Stack AI Exam Preparation Platform for Indian Competitive Examinations

ExamVerse AI is an enterprise-grade, evidence-backed exam preparation platform engineered specifically for Indian competitive, entrance, civil services, technical placement, and government recruitment exams.

---

## 🌟 Core Differentiation & Innovations

1. **Transparent Verified Exam Coverage Maps**:
   - Zero fabricated past papers or unsubstantiated claims.
   - Every question contains certified provenance (e.g. *"Official NTA JEE Main 2024 Session 1 Jan 27 Shift 1"*), public domain license citations, reviewer timestamps, and academic sign-offs.
   - Interactive syllabus hierarchy (Subject → Unit → Chapter → Topic) with exact weightage percentages.

2. **Persistent Mistake Journal & Active Spaced Repetition**:
   - Every test submission automatically catalogs incorrect questions into a permanent student mistake notebook.
   - Categorizes errors by cognitive root cause:
     - 🔴 **Conceptual Gap** (Theoretical misconception)
     - 🟡 **Calculation Error** (Arithmetic / sign / unit error)
     - 🟠 **Silly Mistake** (Correct understanding, rushed option marking)
     - 🔵 **Misread Question** (Missed "NOT", "INCORRECT", or boundary constraints)
     - 🟣 **Time Crunch** (Could be solved with 2 extra minutes)
     - ⚪ **Blind Guess** (Random guess)
   - Built-in **Re-solve Mode**: Students can re-attempt their mistakes directly inside the journal without seeing the answer. Successfully solving upgrades status to *Revising* and *Mastered*.
   - Editable self-reflection notes ("Why I made this mistake").

3. **Evidence-Based Readiness Analytics & Predictive Score Range**:
   - Percentile is **only** reported when a statistically valid comparison cohort (≥ 3 attempts) exists, preventing misleading claims.
   - Transparent, formula-driven Readiness Index (0–100) combining:
     - **35% Syllabus Practice Coverage**
     - **35% Test Stability & Mean Accuracy**
     - **20% Mistake Remediation Rate**
     - **10% Time Discipline**
   - Predicted Score Range (Lower Bound, Expected Central Score, Upper Bound).

4. **Authentic Indian Computer-Based Test (CBT) Runner**:
   - Built to mirror NTA / TCS iON national examination systems.
   - Authentic 5-state question palette:
     1. ⚪ Not Visited
     2. 🟠 Not Answered
     3. 🟢 Answered
     4. 🟣 Marked for Review
     5. 🟣🟢 Answered & Marked for Review
   - Section tabs (Physics, Chemistry, Mathematics / Quant, Reasoning, English, GA).
   - Real-time countdown timer with critical warning alert (< 5 min).
   - Question-level bilingual switcher: Instantly toggle questions between **English** and **Hindi**.
   - Heartbeat autosave (every 25 seconds) to prevent data loss.
   - Configurable exam pattern versions by effective date: duration, positive marks (+4), negative marking (-1), unattempted penalty, sectional locks.

5. **Academic Governance & Admin/Reviewer Portal**:
   - Strict separation between Official PYQ content and AI-generated practice.
   - AI Practice Question Synthesizer with schema validation, duplicate hash check, and mandatory flagging for human review (`UNDER_REVIEW`).
   - Content reviewer queue with audit logging (`APPROVED`, `REJECTED`, `CHANGES_REQUESTED`).

---

## 🏛️ Supported Indian Competitive Exams

| Exam Code | Exam Name | Conducting Body | Total Marks | Duration | Negative Marking |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **JEE Main** | Joint Entrance Examination (Main) | NTA | 300 | 180 min | +4 / -1 |
| **NEET UG** | National Eligibility cum Entrance Test | NTA | 720 | 200 min | +4 / -1 |
| **UPSC CSE** | Civil Services Examination (Prelims GS 1) | UPSC | 200 | 120 min | +2 / -0.66 |
| **SSC CGL** | Combined Graduate Level (Tier 1) | SSC | 200 | 60 min | +2 / -0.5 |
| **GATE CS** | Graduate Aptitude Test in Engineering | IISc / IITs | 100 | 180 min | +1/-0.33, +2/-0.66 |
| **CAT** | Common Admission Test (MBA) | IIMs | 198 | 120 min | +3 / -1 (Sectional Lock) |

---

## 🛠️ Technology Stack

- **Frontend**: React 19, Vite 5, TypeScript, Tailwind CSS, Lucide React, Canvas Confetti.
- **Backend API**: Node.js, Express, TypeScript, Prisma ORM.
- **Database**: SQLite (`dev.db`) for instant zero-dependency local setup, seamlessly switchable to PostgreSQL via Prisma schema datasource.
- **Security & Auth**: JWT (JSON Web Tokens), bcrypt password hashing, Role-Based Access Control (RBAC).
- **Testing**: Native integration test suite verifying health, authentication, CBT runner, scoring engine, negative marking, and AI explanations.

---

## 🚀 Quickstart & Setup Instructions

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (v24.x tested)
- **npm**: v9.0.0 or higher

### 2. Install Dependencies
```bash
# In the project root:
npm run install:all
```

### 3. Initialize & Seed Database
```bash
# Push schema to SQLite and seed authentic exam data:
cd server
npx prisma db push
npm run prisma:seed
```

The seed script creates ready-to-test accounts for all four platform roles

*Note: The UI also includes a 1-click Demo Role Switcher in the top right header for instant role switching during pairing and demonstrations.*

### 4. Run Integration Test Suite
```bash
cd server
npm test
```
Verifies health, authentication, CBT exam generation, negative marking evaluation, persistent mistake notebook entry, and AI explanation generation.

### 5. Start Servers Locally

**Backend API (Port 5000)**:
```bash
cd server
npm run dev
```

**Frontend React Web App (Port 3000)**:
```bash
cd client
npm run dev
```

Open `http://localhost:3000` in your web browser.

---

## 🔌 Switching to PostgreSQL for Production

In `server/prisma/schema.prisma`:
1. Change datasource provider:
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```
2. Update `server/.env`:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/examverse?schema=public"
```
3. Run migrations:
```bash
npx prisma migrate dev --name init_postgres
npx prisma db seed
```

---

## 📋 Completed Features & Verified Deliverables

- [x] **Full-Stack Architecture**: Clean React + Vite + TypeScript frontend and Express + TypeScript API with Prisma ORM.
- [x] **Secure Authentication & RBAC**: Roles for Student, Admin, Content Reviewer, and Institution.
- [x] **Exam Directory & Category Filtering**: Searchable directory covering Engineering, Medical, Civil Services, Government & Technical exams.
- [x] **Configurable Exam Patterns**: Versioned by effective dates (duration, marks, positive/negative marking, sectional timers).
- [x] **Authentic CBT Test Runner**: 5-color NTA/TCS iON palette, timer countdown, bilingual English/Hindi toggle, autosave heartbeat.
- [x] **Evaluation Engine**: Automated scoring, negative marking deduction, section breakdown, and empirical cohort percentile calculation.
- [x] **Persistent Mistake Journal**: Automatically logs errors, tags cognitive root cause, stores self-reflection notes, and supports interactive re-solve mode.
- [x] **Evidence-Based Readiness Analytics**: Readiness score derived from transparent weighted indicators (coverage, accuracy, remediation rate, time discipline) + predicted score ranges.
- [x] **Academic Reviewer & Admin Portal**: Question verification queue, audit logging, and AI practice question synthesizer with schema validation.
- [x] **Automated Integration Tests**: End-to-end verification passing 100%.

---

## 🌐 Pending Integrations for Subsequent Phases

1. **Direct LLM Provider Webhook**: Pluggable integration with live hosted Gemini 1.5 Pro API keys using streaming responses (`GEMINI_API_KEY`).
2. **Offline Practice PWA Service Worker**: IndexedDB cache for offline test runner in low-bandwidth regions.
3. **Institutional Batch Analytics**: Cohort comparison dashboards for school and coaching academy administrators.
