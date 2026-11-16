import assert from 'assert';

const BASE_URL = 'http://localhost:5000';

async function runTests() {
  console.log('🧪 Starting ExamVerse AI API Integration Test Suite...\n');

  // 1. Health check
  console.log('1. Testing /health endpoint...');
  const healthRes = await fetch(`${BASE_URL}/health`);
  assert.strictEqual(healthRes.status, 200, 'Health endpoint should return 200');
  const healthData = await healthRes.json();
  assert.strictEqual(healthData.status, 'healthy');
  console.log('✅ Health check passed.\n');

  // 2. Authentication: Student login
  console.log('2. Testing Student authentication...');
  const loginRes = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'student@examverse.ai', password: 'Student@123' }),
  });
  assert.strictEqual(loginRes.status, 200, 'Login should return 200');
  const loginData = await loginRes.json();
  assert(loginData.token, 'Token should be returned');
  assert.strictEqual(loginData.user.role, 'STUDENT');
  const studentToken = loginData.token;
  console.log(`✅ Student authenticated as ${loginData.user.name}.\n`);

  // 3. Exam Directory
  console.log('3. Testing Exam Directory and Category search...');
  const examsRes = await fetch(`${BASE_URL}/api/exams/directory?search=JEE`);
  assert.strictEqual(examsRes.status, 200);
  const examsData = await examsRes.json();
  assert(examsData.exams.length > 0, 'Should find at least 1 JEE exam');
  const jeeExam = examsData.exams[0];
  console.log(`✅ Found exam: ${jeeExam.title} (Slug: ${jeeExam.slug}, Coverage: ${jeeExam.verifiedSyllabusCoveragePct}%)\n`);

  // 4. Exam Profile & Syllabus Tree
  console.log('4. Testing Exam Profile and Pattern rules...');
  const profileRes = await fetch(`${BASE_URL}/api/exams/${jeeExam.slug}`);
  assert.strictEqual(profileRes.status, 200);
  const profileData = await profileRes.json();
  assert(profileData.exam.patternVersions.length > 0, 'Exam must have configurable pattern versions');
  const pattern = profileData.exam.patternVersions[0];
  console.log(`✅ Exam Pattern: ${pattern.versionName} (Duration: ${pattern.durationMinutes} min, Marks: ${pattern.totalMarks})\n`);

  // 5. Test Initiation & Timed Runner Payload
  console.log('5. Testing Test session start...');
  const testsRes = await fetch(`${BASE_URL}/api/tests/exam/${jeeExam.id}`);
  const testsData = await testsRes.json();
  assert(testsData.tests.length > 0, 'Should have at least 1 mock test');
  const mockTest = testsData.tests[0];

  const startRes = await fetch(`${BASE_URL}/api/tests/${mockTest.id}/start`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${studentToken}`,
    },
  });
  assert.strictEqual(startRes.status, 200);
  const startData = await startRes.json();
  assert(startData.attemptId, 'Should create or return an attempt ID');
  assert(startData.questions.length > 0, 'Should return test questions');
  // Critical check: Ensure answers are NOT leaked to the student during the exam!
  assert(!startData.questions[0].correctAnswers, 'Answers must be stripped during the live exam!');
  console.log(`✅ Test started successfully. Total questions delivered: ${startData.questions.length}\n`);

  // 6. Test Submission & Evaluation Engine
  console.log('6. Testing Test Submission, Scoring & Negative Marking...');
  const q1 = startData.questions[0];
  const q2 = startData.questions[1];

  // Submit Q1 correctly (opt2 = 15.0 N) and Q2 incorrectly to trigger negative marks
  const submitRes = await fetch(`${BASE_URL}/api/tests/attempts/${startData.attemptId}/submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${studentToken}`,
    },
    body: JSON.stringify({
      responses: [
        { questionId: q1.questionId, selectedOptionIds: ['opt2'], timeSpentSec: 120, status: 'ANSWERED' },
        { questionId: q2.questionId, selectedOptionIds: ['opt3'], timeSpentSec: 95, status: 'ANSWERED' },
      ],
      timeSpentSeconds: 215,
    }),
  });
  assert.strictEqual(submitRes.status, 200);
  const submitData = await submitRes.json();
  assert(submitData.success, 'Submission should succeed');
  console.log(`✅ Test Evaluated: Total Score = ${submitData.score}, Accuracy = ${submitData.accuracyPct}%, Correct = ${submitData.totalCorrect}, Incorrect = ${submitData.totalIncorrect}\n`);

  // 7. Persistent Mistake Journal
  console.log('7. Testing Persistent Mistake Journal...');
  const mistakesRes = await fetch(`${BASE_URL}/api/mistakes`, {
    headers: { Authorization: `Bearer ${studentToken}` },
  });
  assert.strictEqual(mistakesRes.status, 200);
  const mistakesData = await mistakesRes.json();
  assert(mistakesData.mistakes.length > 0, 'Mistake Journal should record the incorrect response');
  console.log(`✅ Mistake Journal verified. Total logged mistakes: ${mistakesData.summary.totalMistakes}\n`);

  // 8. AI Deep Explanation
  console.log('8. Testing AI Bilingual Step-by-Step Explanation...');
  const aiRes = await fetch(`${BASE_URL}/api/ai/deep-explain`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${studentToken}`,
    },
    body: JSON.stringify({ questionId: q1.questionId }),
  });
  assert.strictEqual(aiRes.status, 200);
  const aiData = await aiRes.json();
  assert(aiData.explanation.englishBreakdown, 'Should provide English pedagogical breakdown');
  assert(aiData.explanation.hindiBreakdown, 'Should provide Hindi pedagogical breakdown');
  console.log('✅ AI bilingual pedagogical explanation successfully generated.\n');

  console.log('🎉 ALL INTEGRATION TESTS PASSED CLEANLY!\n');
}

runTests().catch((err) => {
  console.error('❌ Test suite failed:', err);
  process.exit(1);
});
