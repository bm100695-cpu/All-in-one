-- Audit timestamps for successful student sign-ins and authenticated visits.
-- These fields are additive and nullable so existing user records remain intact.
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "lastLoginAt" TIMESTAMP(3);
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "lastSeenAt" TIMESTAMP(3);

CREATE INDEX IF NOT EXISTS "User_role_lastSeenAt_idx" ON "User" ("role", "lastSeenAt");
