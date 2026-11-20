-- Canonical free/premium policy for mock tests.
-- Map all existing paid/premium tests to premium so their current behaviour is
-- retained; every other legacy state remains free, as it was before this field.
ALTER TABLE "Test"
ADD COLUMN IF NOT EXISTS "access_type" TEXT NOT NULL DEFAULT 'free';

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
