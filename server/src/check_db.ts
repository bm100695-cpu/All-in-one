import { prisma } from './prisma';

async function test() {
  const uptet = await prisma.test.findFirst({
    where: { exam: { slug: 'uptet' }, testQuestions: { some: {} } },
    include: { testQuestions: true }
  });
  console.log('UPTET test:', uptet?.id, uptet?.title, 'QCount:', uptet?.testQuestions.length);

  const supertet = await prisma.test.findFirst({
    where: { exam: { slug: 'super-tet' }, testQuestions: { some: {} } },
    include: { testQuestions: true }
  });
  console.log('SUPER TET test:', supertet?.id, supertet?.title, 'QCount:', supertet?.testQuestions.length);

  // Check which tests under UPTET and SUPER TET have 0 questions
  const zeroQTests = await prisma.test.findMany({
    where: {
      exam: { slug: { in: ['uptet', 'super-tet'] } },
      testQuestions: { none: {} }
    },
    select: { id: true, title: true, exam: { select: { slug: true } } }
  });
  console.log('Tests with 0 questions in UPTET/SUPER TET:', JSON.stringify(zeroQTests, null, 2));
}

test().catch(console.error).finally(() => prisma.$disconnect());
