-- SSC CGL source verification and server-timed session support.
-- Additive only: no existing records or examination portals are changed.
ALTER TABLE "Test"
  ADD COLUMN "sourcePaperKey" TEXT,
  ADD COLUMN "examShift" TEXT,
  ADD COLUMN "sourceReference" TEXT,
  ADD COLUMN "sourceVerifiedAt" TIMESTAMP(3),
  ADD COLUMN "isSourceVerified" BOOLEAN NOT NULL DEFAULT false;

CREATE UNIQUE INDEX "Test_sourcePaperKey_key" ON "Test"("sourcePaperKey");

ALTER TABLE "TestAttempt"
  ADD COLUMN "confirmedAt" TIMESTAMP(3),
  ADD COLUMN "expiresAt" TIMESTAMP(3),
  ADD COLUMN "tabSwitchCount" INTEGER NOT NULL DEFAULT 0;
