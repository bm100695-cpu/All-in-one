-- Canonical free/premium policy for mock tests.
-- Map all existing paid/premium tests to premium so their current behaviour is
-- retained; every other legacy state remains free, as it was before this field.
ALTER TABLE "Test"
ADD COLUMN IF NOT EXISTS "access_type" TEXT NOT NULL DEFAULT 'free';

ALTER TABLE "Test"
ADD COLUMN IF NOT EXISTS "description" TEXT NOT NULL DEFAULT '';

-- Older production databases also predate the admin publishing workflow.
-- These are additive fields only; published records are retained as published
-- but inactive until an administrator explicitly makes them live.
ALTER TABLE "Test" ADD COLUMN IF NOT EXISTS "status" TEXT NOT NULL DEFAULT 'INACTIVE';
ALTER TABLE "Test" ADD COLUMN IF NOT EXISTS "isActive" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "Test" ADD COLUMN IF NOT EXISTS "availableFrom" TIMESTAMP(3);
ALTER TABLE "Test" ADD COLUMN IF NOT EXISTS "availableTo" TIMESTAMP(3);
ALTER TABLE "Test" ADD COLUMN IF NOT EXISTS "activatedAt" TIMESTAMP(3);
ALTER TABLE "Test" ADD COLUMN IF NOT EXISTS "deactivatedAt" TIMESTAMP(3);

UPDATE "Test"
SET "status" = CASE WHEN "isPublished" THEN 'PUBLISHED' ELSE 'DRAFT' END
WHERE "status" = 'INACTIVE';

UPDATE "Test"
SET "access_type" = CASE
  WHEN "accessLevel" IN ('PREMIUM', 'PAID') OR "accessMode" IN ('PREMIUM', 'PAID') THEN 'premium'
  ELSE 'free'
END;

ALTER TABLE "Test"
DROP CONSTRAINT IF EXISTS "Test_access_type_check";

ALTER TABLE "Test"
ADD CONSTRAINT "Test_access_type_check"
CHECK ("access_type" IN ('free', 'premium'));
