import { prisma } from './prisma';

async function seedLiveSchedules() {
  console.log('Seeding Weekly Live Mock Test Schedules...');

  // Find exams
  const jeeExam = await prisma.exam.findFirst({ where: { slug: 'jee-main' } });
  const superTetExam = await prisma.exam.findFirst({ where: { slug: 'super-tet' } });
  const uptetExam = await prisma.exam.findFirst({ where: { slug: 'uptet' } });

  if (!jeeExam || !superTetExam || !uptetExam) {
    console.error('Core exams not found');
    return;
  }

  // Find tests with questions
  const jeeTest = await prisma.test.findFirst({
    where: { examId: jeeExam.id },
    include: { testQuestions: true },
    orderBy: { createdAt: 'desc' },
  });

  const superTetTest = await prisma.test.findFirst({
    where: { examId: superTetExam.id },
    include: { testQuestions: true },
    orderBy: { createdAt: 'desc' },
  });

  const uptetTest = await prisma.test.findFirst({
    where: { examId: uptetExam.id },
    include: { testQuestions: true },
    orderBy: { createdAt: 'desc' },
  });

  if (!jeeTest || !superTetTest || !uptetTest) {
    console.error('Base tests with questions not found');
    return;
  }

  const now = new Date();

  // Test 1: LIVE NOW Test (Active right now for immediate student testing!)
  const liveNowStart = new Date(now.getTime() - 15 * 60 * 1000); // Started 15 mins ago
  const liveNowEnd = new Date(now.getTime() + 165 * 60 * 1000); // 165 mins remaining
  const liveNowSnapshot = JSON.stringify(jeeTest.testQuestions.slice(0, 30));

  await prisma.liveTestSchedule.upsert({
    where: { id: 'live_test_jee_now_active' },
    create: {
      id: 'live_test_jee_now_active',
      examId: jeeExam.id,
      testId: jeeTest.id,
      title: 'JEE Main 2026 — All-India Live National CBT Mock (Session A)',
      description: 'Official NTA 300-mark pattern live simulation (+4/-1). Live all-India percentile ranking & instant scorecard upon exam conclusion.',
      instructions: jeeTest.instructionsEn,
      date: now.toISOString().split('T')[0],
      startAt: liveNowStart,
      endAt: liveNowEnd,
      durationMinutes: 180,
      registrationOpenAt: new Date(now.getTime() - 48 * 3600 * 1000),
      registrationCloseAt: new Date(now.getTime() + 30 * 60 * 1000), // Late registration open
      timezone: 'Asia/Kolkata',
      maxCapacity: 500,
      isPaid: false,
      price: 0.0,
      status: 'PUBLISHED',
      lateEntryAllowed: true,
      lateEntryMinutes: 30,
      allowEarlySubmission: true,
      allowDisconnectionResume: true,
      resultPublishType: 'IMMEDIATE',
      isLeaderboardEnabled: true,
      lockedQuestionsSnapshot: liveNowSnapshot,
    },
    update: {
      startAt: liveNowStart,
      endAt: liveNowEnd,
      status: 'PUBLISHED',
    },
  });

  // Test 2: UPCOMING Weekly Live Test — SUPER TET 150-Q Sunday Test
  // Next Sunday at 10:00 AM IST
  const nextSunday = new Date(now);
  const day = nextSunday.getDay();
  const daysUntilSunday = (7 - day) % 7 || 7;
  nextSunday.setDate(nextSunday.getDate() + daysUntilSunday);
  nextSunday.setHours(4, 30, 0, 0); // 04:30 UTC is 10:00 AM IST!
  const sundayEnd = new Date(nextSunday.getTime() + 150 * 60 * 1000);

  const superTetSnapshot = JSON.stringify(superTetTest.testQuestions.slice(0, 50));

  await prisma.liveTestSchedule.upsert({
    where: { id: 'live_test_supertet_sunday' },
    create: {
      id: 'live_test_supertet_sunday',
      examId: superTetExam.id,
      testId: superTetTest.id,
      title: 'SUPER TET 2026 — Weekly Sunday Live State Ranker Mock (150 Questions)',
      description: 'Authentic 150-mark Primary Teacher Recruitment full CBT paper covering all 14 official subjects (+1 correct, 0 negative marking). State merit rank calculation.',
      instructions: superTetTest.instructionsEn,
      date: nextSunday.toISOString().split('T')[0],
      startAt: nextSunday,
      endAt: sundayEnd,
      durationMinutes: 150,
      registrationOpenAt: new Date(now.getTime() - 24 * 3600 * 1000),
      registrationCloseAt: nextSunday,
      timezone: 'Asia/Kolkata',
      maxCapacity: 1000,
      isPaid: false,
      price: 0.0,
      status: 'PUBLISHED',
      lateEntryAllowed: true,
      lateEntryMinutes: 15,
      allowEarlySubmission: true,
      allowDisconnectionResume: true,
      resultPublishType: 'IMMEDIATE',
      isLeaderboardEnabled: true,
      lockedQuestionsSnapshot: superTetSnapshot,
    },
    update: {
      startAt: nextSunday,
      endAt: sundayEnd,
      status: 'PUBLISHED',
    },
  });

  // Test 3: UPTET Saturday Evening Live Mock Test
  const nextSaturday = new Date(now);
  const daysUntilSaturday = (6 - day + 7) % 7 || 7;
  nextSaturday.setDate(nextSaturday.getDate() + daysUntilSaturday);
  nextSaturday.setHours(12, 30, 0, 0); // 12:30 UTC is 06:00 PM IST
  const satEnd = new Date(nextSaturday.getTime() + 150 * 60 * 1000);

  await prisma.liveTestSchedule.upsert({
    where: { id: 'live_test_uptet_saturday' },
    create: {
      id: 'live_test_uptet_saturday',
      examId: uptetExam.id,
      testId: uptetTest.id,
      title: 'UPTET 2026 — Saturday Grand Live Mock Test (Paper 1)',
      description: 'Full official 150-minute mock test across Child Pedagogy, Hindi, Sanskrit/English, Maths, and EVS.',
      instructions: uptetTest.instructionsEn,
      date: nextSaturday.toISOString().split('T')[0],
      startAt: nextSaturday,
      endAt: satEnd,
      durationMinutes: 150,
      registrationOpenAt: new Date(now.getTime() - 12 * 3600 * 1000),
      registrationCloseAt: nextSaturday,
      timezone: 'Asia/Kolkata',
      maxCapacity: 750,
      isPaid: false,
      price: 0.0,
      status: 'PUBLISHED',
      lateEntryAllowed: true,
      lateEntryMinutes: 15,
      allowEarlySubmission: true,
      allowDisconnectionResume: true,
      resultPublishType: 'IMMEDIATE',
      isLeaderboardEnabled: true,
      lockedQuestionsSnapshot: JSON.stringify(uptetTest.testQuestions.slice(0, 30)),
    },
    update: {
      startAt: nextSaturday,
      endAt: satEnd,
      status: 'PUBLISHED',
    },
  });

  console.log('✅ Weekly Live Mock Test schedules seeded successfully.');
}

seedLiveSchedules()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
