-- Preserve legacy INR display values while introducing integer paise as the
-- authoritative amount for all future admin edits and Cashfree orders.
ALTER TABLE "Test" ADD COLUMN IF NOT EXISTS "price_paise" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "SubscriptionPlan" ADD COLUMN IF NOT EXISTS "price_paise" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "SubscriptionPlan" ADD COLUMN IF NOT EXISTS "original_price_paise" INTEGER;
ALTER TABLE "Payment" ADD COLUMN IF NOT EXISTS "amount_paise" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "Payment" ADD COLUMN IF NOT EXISTS "original_price_paise" INTEGER;
ALTER TABLE "Payment" ADD COLUMN IF NOT EXISTS "discount_amount_paise" INTEGER NOT NULL DEFAULT 0;

-- Backfill snapshots without changing any recorded INR amounts or access.
UPDATE "Test" SET "price_paise" = ROUND("price" * 100)::INTEGER
WHERE "price_paise" = 0 AND "price" > 0;
UPDATE "SubscriptionPlan" SET "price_paise" = ROUND("price" * 100)::INTEGER
WHERE "price_paise" = 0 AND "price" > 0;
UPDATE "SubscriptionPlan" SET "original_price_paise" = ROUND("originalPrice" * 100)::INTEGER
WHERE "original_price_paise" IS NULL AND "originalPrice" IS NOT NULL;
UPDATE "Payment" SET "amount_paise" = ROUND("amount" * 100)::INTEGER
WHERE "amount_paise" = 0 AND "amount" > 0;
UPDATE "Payment" SET "original_price_paise" = ROUND("originalPrice" * 100)::INTEGER
WHERE "original_price_paise" IS NULL AND "originalPrice" IS NOT NULL;
UPDATE "Payment" SET "discount_amount_paise" = ROUND("discountAmount" * 100)::INTEGER
WHERE "discount_amount_paise" = 0 AND "discountAmount" > 0;
