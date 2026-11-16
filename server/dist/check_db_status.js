"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("./prisma");
async function main() {
    const tests = await prisma_1.prisma.test.findMany({
        select: {
            id: true,
            title: true,
            type: true,
            pyqReference: true,
            totalQuestions: true,
            isPublished: true,
        },
        orderBy: { createdAt: 'desc' },
    });
    console.log(`Total tests in DB: ${tests.length}`);
    console.log('Sample tests:');
    for (const t of tests.slice(0, 15)) {
        console.log(`- [${t.id}] ${t.title} (pyqRef: ${t.pyqReference}, Qs: ${t.totalQuestions})`);
    }
    const questionCount = await prisma_1.prisma.question.count();
    const testQuestionCount = await prisma_1.prisma.testQuestion.count();
    const attempts = await prisma_1.prisma.testAttempt.findMany({ select: { id: true, testId: true, status: true, totalScore: true } });
    console.log(`Total questions in DB: ${questionCount}`);
    console.log(`Total test-question links in DB: ${testQuestionCount}`);
    console.log(`Total test attempts in DB: ${attempts.length}`);
    for (const a of attempts) {
        console.log(`- Attempt [${a.id}] Test: ${a.testId}, Status: ${a.status}, Score: ${a.totalScore}`);
    }
}
main().catch(console.error).finally(() => prisma_1.prisma.$disconnect());
