"use strict";
/**
 * TutorNove JEE Main 2026 Flagship Full Mock Test Seeder
 * Assembles exactly 75 verified, authentic questions:
 * - Physics: 20 MCQs (Sec A) + 5 Numerical (Sec B) = 25 Qs (100 Marks)
 * - Chemistry: 20 MCQs (Sec A) + 5 Numerical (Sec B) = 25 Qs (100 Marks)
 * - Mathematics: 20 MCQs (Sec A) + 5 Numerical (Sec B) = 25 Qs (100 Marks)
 * Total: 75 Questions, 300 Marks, 180 Minutes
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed2026CBTTest = seed2026CBTTest;
const prisma_1 = require("./prisma");
async function seed2026CBTTest() {
    console.log('Seeding JEE Main 2026 Full CBT Mock Test...');
    const jeeExam = await prisma_1.prisma.exam.findUnique({
        where: { slug: 'jee-main' },
        include: { patternVersions: { include: { sections: true } } },
    });
    if (!jeeExam) {
        console.error('JEE Main exam not found. Please seed the base database first.');
        return;
    }
    // 1. Find or create the official 2026 Pattern Version
    let pattern2026 = await prisma_1.prisma.examPatternVersion.findFirst({
        where: {
            examId: jeeExam.id,
            versionName: '2026 Revised Pattern (75 Questions - 300 Marks)',
        },
        include: { sections: true },
    });
    if (!pattern2026) {
        pattern2026 = await prisma_1.prisma.examPatternVersion.create({
            data: {
                examId: jeeExam.id,
                versionName: '2026 Revised Pattern (75 Questions - 300 Marks)',
                effectiveFrom: new Date('2025-09-01'),
                durationMinutes: 180,
                totalMarks: 300,
                totalQuestions: 75,
                questionsToAttempt: 75,
                sectionalTimers: false,
                questionShuffling: false,
                languagesAllowed: JSON.stringify(['en', 'hi']),
                isDefault: true,
            },
            include: { sections: true },
        });
        // Create the 6 official sections
        const sectionsData = [
            { name: 'Physics - Section A', order: 1, totalQuestions: 20, maxToAttempt: 20, questionType: 'SINGLE_CHOICE', marksPerCorrect: 4.0, negativeMarks: 1.0 },
            { name: 'Physics - Section B', order: 2, totalQuestions: 5, maxToAttempt: 5, questionType: 'NUMERICAL', marksPerCorrect: 4.0, negativeMarks: 1.0 },
            { name: 'Chemistry - Section A', order: 3, totalQuestions: 20, maxToAttempt: 20, questionType: 'SINGLE_CHOICE', marksPerCorrect: 4.0, negativeMarks: 1.0 },
            { name: 'Chemistry - Section B', order: 4, totalQuestions: 5, maxToAttempt: 5, questionType: 'NUMERICAL', marksPerCorrect: 4.0, negativeMarks: 1.0 },
            { name: 'Mathematics - Section A', order: 5, totalQuestions: 20, maxToAttempt: 20, questionType: 'SINGLE_CHOICE', marksPerCorrect: 4.0, negativeMarks: 1.0 },
            { name: 'Mathematics - Section B', order: 6, totalQuestions: 5, maxToAttempt: 5, questionType: 'NUMERICAL', marksPerCorrect: 4.0, negativeMarks: 1.0 },
        ];
        for (const sec of sectionsData) {
            await prisma_1.prisma.examSection.create({
                data: {
                    patternVersionId: pattern2026.id,
                    ...sec,
                },
            });
        }
        // Reload pattern with sections
        pattern2026 = await prisma_1.prisma.examPatternVersion.findUnique({
            where: { id: pattern2026.id },
            include: { sections: { orderBy: { order: 'asc' } } },
        });
    }
    // 2. Query verified real questions from the database for each subject with zero duplicates
    const usedQuestionIds = new Set();
    async function getDistinctQuestions(subject, qType, count) {
        const candidateTqs = await prisma_1.prisma.testQuestion.findMany({
            where: {
                sectionName: subject,
                question: { questionType: qType, isPYQ: true },
            },
            select: { question: true },
        });
        const chosen = [];
        for (const tq of candidateTqs) {
            if (!usedQuestionIds.has(tq.question.id)) {
                usedQuestionIds.add(tq.question.id);
                chosen.push(tq.question);
                if (chosen.length === count)
                    break;
            }
        }
        return chosen;
    }
    const selectedPhysMcqs = await getDistinctQuestions('Physics', 'SINGLE_CHOICE', 20);
    const selectedPhysNums = await getDistinctQuestions('Physics', 'NUMERICAL', 5);
    const selectedChemMcqs = await getDistinctQuestions('Chemistry', 'SINGLE_CHOICE', 20);
    const selectedChemNums = await getDistinctQuestions('Chemistry', 'NUMERICAL', 5);
    const selectedMathMcqs = await getDistinctQuestions('Mathematics', 'SINGLE_CHOICE', 20);
    const selectedMathNums = await getDistinctQuestions('Mathematics', 'NUMERICAL', 5);
    const totalSelected = selectedPhysMcqs.length + selectedPhysNums.length +
        selectedChemMcqs.length + selectedChemNums.length +
        selectedMathMcqs.length + selectedMathNums.length;
    console.log(`Selected unique questions for 2026 Mock Test: ${totalSelected} questions total (${usedQuestionIds.size} unique IDs).`);
    // 3. Create or update the 2026 Flagship Test
    const testTitle = 'JEE Main 2026 All India Full Mock Examination (Paper 1 - B.E./B.Tech)';
    let test2026 = await prisma_1.prisma.test.findFirst({
        where: { examId: jeeExam.id, title: testTitle },
        include: { testQuestions: true },
    });
    if (!test2026) {
        test2026 = await prisma_1.prisma.test.create({
            data: {
                title: testTitle,
                examId: jeeExam.id,
                patternVersionId: pattern2026.id,
                type: 'FULL_MOCK',
                durationMinutes: 180,
                totalMarks: 300,
                totalQuestions: 75,
                instructionsEn: 'Official JEE Main 2026 Computer Based Test (CBT) Simulation for Paper 1 (B.E./B.Tech). 75 questions across Physics, Chemistry, and Mathematics (20 MCQs + 5 Numerical questions per subject). Marking scheme: +4 for correct, -1 for incorrect.',
                instructionsHi: 'जेईई मेन 2026 कंप्यूटर आधारित परीक्षा (CBT) सिमुलेशन - पेपर 1। भौतिक विज्ञान, रसायन विज्ञान और गणित (प्रत्येक विषय में 20 बहुविकल्पीय + 5 संख्यात्मक प्रश्न)।',
                pyqReference: 'JEE-MAIN-2026-MOCK-01',
                isPublished: true,
            },
            include: { testQuestions: true },
        });
    }
    // Clear existing links and re-link the 75 questions in strict order
    await prisma_1.prisma.testQuestion.deleteMany({
        where: { testId: test2026.id },
    });
    let qNumber = 1;
    // Physics Sec A (1-20)
    for (const q of selectedPhysMcqs) {
        await prisma_1.prisma.testQuestion.create({
            data: {
                testId: test2026.id,
                questionId: q.id,
                sectionName: 'Physics',
                questionNumber: qNumber++,
                marks: 4.0,
                negativeMarks: 1.0,
            },
        });
    }
    // Physics Sec B (21-25)
    for (const q of selectedPhysNums) {
        await prisma_1.prisma.testQuestion.create({
            data: {
                testId: test2026.id,
                questionId: q.id,
                sectionName: 'Physics',
                questionNumber: qNumber++,
                marks: 4.0,
                negativeMarks: 1.0,
            },
        });
    }
    // Chemistry Sec A (26-45)
    for (const q of selectedChemMcqs) {
        await prisma_1.prisma.testQuestion.create({
            data: {
                testId: test2026.id,
                questionId: q.id,
                sectionName: 'Chemistry',
                questionNumber: qNumber++,
                marks: 4.0,
                negativeMarks: 1.0,
            },
        });
    }
    // Chemistry Sec B (46-50)
    for (const q of selectedChemNums) {
        await prisma_1.prisma.testQuestion.create({
            data: {
                testId: test2026.id,
                questionId: q.id,
                sectionName: 'Chemistry',
                questionNumber: qNumber++,
                marks: 4.0,
                negativeMarks: 1.0,
            },
        });
    }
    // Mathematics Sec A (51-70)
    for (const q of selectedMathMcqs) {
        await prisma_1.prisma.testQuestion.create({
            data: {
                testId: test2026.id,
                questionId: q.id,
                sectionName: 'Mathematics',
                questionNumber: qNumber++,
                marks: 4.0,
                negativeMarks: 1.0,
            },
        });
    }
    // Mathematics Sec B (71-75)
    for (const q of selectedMathNums) {
        await prisma_1.prisma.testQuestion.create({
            data: {
                testId: test2026.id,
                questionId: q.id,
                sectionName: 'Mathematics',
                questionNumber: qNumber++,
                marks: 4.0,
                negativeMarks: 1.0,
            },
        });
    }
    console.log(`Successfully linked ${qNumber - 1} questions to "${testTitle}".`);
}
// Run if called directly
if (require.main === module) {
    seed2026CBTTest()
        .then(() => {
        console.log('2026 CBT Test seeding finished successfully.');
        process.exit(0);
    })
        .catch((err) => {
        console.error('Seeding failed:', err);
        process.exit(1);
    });
}
