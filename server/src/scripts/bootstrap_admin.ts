import bcrypt from 'bcryptjs';
import { prisma } from '../prisma';

async function main() {
  console.log('--- ExamVerse / All in One Admin Bootstrap ---');

  // This is an explicitly invoked recovery/bootstrap command. Never supply a
  // default account or password that could silently become an administrator.
  const targetEmail = (process.env.ADMIN_BOOTSTRAP_EMAIL || process.argv[2] || '').toLowerCase().trim();
  const targetPassword = process.env.ADMIN_BOOTSTRAP_PASSWORD || process.argv[3] || '';
  const targetName = process.env.ADMIN_BOOTSTRAP_NAME || 'Brijesh Maurya (Admin)';

  if (!targetEmail || !targetPassword) {
    console.error('Usage: tsx src/scripts/bootstrap_admin.ts <email> <password>');
    process.exit(1);
  }

  const passwordHash = await bcrypt.hash(targetPassword, 10);

  const existing = await prisma.user.findUnique({
    where: { email: targetEmail },
  });

  if (existing) {
    const updated = await prisma.user.update({
      where: { id: existing.id },
      data: {
        role: 'ADMIN',
        name: existing.name || targetName,
        passwordHash: existing.passwordHash || passwordHash,
      },
      select: { id: true, email: true, name: true, role: true },
    });
    console.log(`[Bootstrap Admin] Successfully verified & promoted user to ADMIN:`, updated);
  } else {
    const created = await prisma.user.create({
      data: {
        email: targetEmail,
        name: targetName,
        role: 'ADMIN',
        passwordHash,
        authProvider: 'local',
      },
      select: { id: true, email: true, name: true, role: true },
    });
    console.log(`[Bootstrap Admin] Successfully created new master administrator:`, created);
  }
}

main()
  .catch((err) => {
    console.error('[Bootstrap Admin Error]:', err.message);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
