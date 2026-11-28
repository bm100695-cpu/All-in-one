-- Super TET 100 Full-Length Mock Tests extensions
-- Additive only: preserves all existing tests, questions, and attempts across all portals.

ALTER TABLE "Test"
  ADD COLUMN IF NOT EXISTS "mockNumber" INTEGER,
  ADD COLUMN IF NOT EXISTS "difficultyTier" TEXT,
  ADD COLUMN IF NOT EXISTS "premiumLabel" TEXT;

CREATE INDEX IF NOT EXISTS "Test_examId_mockNumber_idx" ON "Test"("examId", "mockNumber");

ALTER TABLE "Question"
  ADD COLUMN IF NOT EXISTS "chapter" TEXT,
  ADD COLUMN IF NOT EXISTS "formulaHi" TEXT,
  ADD COLUMN IF NOT EXISTS "formulaEn" TEXT,
  ADD COLUMN IF NOT EXISTS "grammarRuleHi" TEXT,
  ADD COLUMN IF NOT EXISTS "referenceDate" TEXT;

ALTER TABLE "TestAttempt"
  ADD COLUMN IF NOT EXISTS "fullscreenExitCount" INTEGER NOT NULL DEFAULT 0;

CREATE TABLE IF NOT EXISTS "SuperTetCoreBookmark" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "questionId" TEXT NOT NULL,
  "testId" TEXT,
  "notes" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "SuperTetCoreBookmark_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "SuperTetCoreBookmark_userId_questionId_key"
  ON "SuperTetCoreBookmark"("userId", "questionId");
CREATE INDEX IF NOT EXISTS "SuperTetCoreBookmark_userId_idx"
  ON "SuperTetCoreBookmark"("userId");
CREATE INDEX IF NOT EXISTS "SuperTetCoreBookmark_questionId_idx"
  ON "SuperTetCoreBookmark"("questionId");

ALTER TABLE "SuperTetCoreBookmark"
  ADD CONSTRAINT "SuperTetCoreBookmark_userId_fkey"
  FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "SuperTetCoreBookmark"
  ADD CONSTRAINT "SuperTetCoreBookmark_questionId_fkey"
  FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE IF NOT EXISTS "SuperTetQuestionReport" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "questionId" TEXT NOT NULL,
  "testId" TEXT,
  "attemptId" TEXT,
  "issueType" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "status" TEXT NOT NULL DEFAULT 'OPEN',
  "adminNotes" TEXT,
  "resolvedBy" TEXT,
  "resolvedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "SuperTetQuestionReport_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "SuperTetQuestionReport_questionId_idx"
  ON "SuperTetQuestionReport"("questionId");
CREATE INDEX IF NOT EXISTS "SuperTetQuestionReport_status_idx"
  ON "SuperTetQuestionReport"("status");
CREATE INDEX IF NOT EXISTS "SuperTetQuestionReport_userId_idx"
  ON "SuperTetQuestionReport"("userId");

ALTER TABLE "SuperTetQuestionReport"
  ADD CONSTRAINT "SuperTetQuestionReport_userId_fkey"
  FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "SuperTetQuestionReport"
  ADD CONSTRAINT "SuperTetQuestionReport_questionId_fkey"
  FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;
