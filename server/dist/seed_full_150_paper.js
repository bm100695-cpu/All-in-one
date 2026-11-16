"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedFull150Paper = seedFull150Paper;
const prisma_1 = require("./prisma");
const uptet_cdp_30_1 = require("./data/uptet_cdp_30");
const uptet_hindi_30_1 = require("./data/uptet_hindi_30");
const uptet_english_30_1 = require("./data/uptet_english_30");
const uptet_math_30_1 = require("./data/uptet_math_30");
const uptet_evs_30_1 = require("./data/uptet_evs_30");
async function seedFull150Paper() {
    console.log('=== SEEDING FULL 150-QUESTION UPTET PAPER ===');
    const uptetExam = await prisma_1.prisma.exam.findUnique({
        where: { slug: 'uptet' },
    });
    if (!uptetExam) {
        throw new Error('UPTET exam record not found in database!');
    }
    // Combined 150 questions strictly in 5 parts:
    // Part 1: CDP (30)
    // Part 2: Hindi (30)
    // Part 3: English (30)
    // Part 4: Math (30)
    // Part 5: EVS (30)
    const full150Def = [
        ...uptet_cdp_30_1.uptetCdpQuestions.map((q, idx) => ({ ...q, sectionName: 'Child Development & Pedagogy (बाल विकास एवं शिक्षण विधि)', qNum: idx + 1 })),
        ...uptet_hindi_30_1.uptetHindiQuestions.map((q, idx) => ({ ...q, sectionName: 'Language 1 - Hindi (भाषा 1 - हिन्दी)', qNum: idx + 31 })),
        ...uptet_english_30_1.uptetEnglishQuestions.map((q, idx) => ({ ...q, sectionName: 'Language 2 - English (भाषा 2 - अंग्रेज़ी)', qNum: idx + 61 })),
        ...uptet_math_30_1.uptetMathQuestions.map((q, idx) => ({ ...q, sectionName: 'Mathematics (गणित)', qNum: idx + 91 })),
        ...uptet_evs_30_1.uptetEvsQuestions.map((q, idx) => ({ ...q, sectionName: 'Environmental Studies (पर्यावरण अध्ययन - EVS)', qNum: idx + 121 })),
    ];
    console.log(`Prepared ${full150Def.length} questions for full 150-question mock test.`);
    // Upsert or fetch Question records
    const dbQuestions = [];
    for (const q of full150Def) {
        let existingQ = await prisma_1.prisma.question.findFirst({
            where: {
                examId: uptetExam.id,
                contentHi: q.contentHi,
            },
        });
        const optionsJson = JSON.stringify(q.options);
        const correctAnswerJson = JSON.stringify([q.correctAnswer]);
        if (!existingQ) {
            existingQ = await prisma_1.prisma.question.create({
                data: {
                    examId: uptetExam.id,
                    questionType: q.questionType,
                    contentHi: q.contentHi,
                    contentEn: q.contentEn,
                    optionsJson,
                    correctAnswerJson,
                    officialAnswer: q.correctAnswer,
                    tutorNoveAnswer: q.correctAnswer,
                    explanationHi: q.explanationHi,
                    explanationEn: q.explanationEn,
                    difficulty: q.difficulty,
                    subject: q.subject,
                    topic: q.topic,
                    isPYQ: true,
                    sourceProvenance: 'Official UP Examination Regulatory Authority (PNP) Prayagraj Archive',
                    sourceLicense: 'Educational Fair Use',
                    verificationStatus: 'VERIFIED',
                    isPublished: true,
                    sourceReference: q.sourceReference,
                    translationLabel: 'All in One English Translation',
                },
            });
        }
        else {
            existingQ = await prisma_1.prisma.question.update({
                where: { id: existingQ.id },
                data: {
                    contentEn: q.contentEn,
                    optionsJson,
                    correctAnswerJson,
                    officialAnswer: q.correctAnswer,
                    tutorNoveAnswer: q.correctAnswer,
                    explanationHi: q.explanationHi,
                    explanationEn: q.explanationEn,
                    difficulty: q.difficulty,
                    subject: q.subject,
                    topic: q.topic,
                    sourceReference: q.sourceReference,
                },
            });
        }
        dbQuestions.push({
            questionId: existingQ.id,
            sectionName: q.sectionName,
            qNum: q.qNum,
        });
    }
    console.log(`Verified and populated ${dbQuestions.length} Questions in DB.`);
    // Find all Paper 1 tests to map all 150 questions
    const paper1Tests = await prisma_1.prisma.test.findMany({
        where: {
            examId: uptetExam.id,
            paperType: 'PAPER_1',
        },
    });
    console.log(`Found ${paper1Tests.length} Paper 1 tests to upgrade to full 150 questions.`);
    for (const test of paper1Tests) {
        // Delete existing testQuestion associations
        await prisma_1.prisma.testQuestion.deleteMany({
            where: { testId: test.id },
        });
        // Delete existing in-progress attempts so student gets the fresh 150-question paper
        await prisma_1.prisma.testAttempt.deleteMany({
            where: {
                testId: test.id,
                status: 'IN_PROGRESS',
            },
        });
        // Create 150 TestQuestion associations in exact order 1 to 150
        for (const qItem of dbQuestions) {
            await prisma_1.prisma.testQuestion.create({
                data: {
                    testId: test.id,
                    questionId: qItem.questionId,
                    sectionName: qItem.sectionName,
                    questionNumber: qItem.qNum,
                    marks: 1.0,
                    negativeMarks: 0.0,
                },
            });
        }
        // Update test metadata
        await prisma_1.prisma.test.update({
            where: { id: test.id },
            data: {
                totalQuestions: 150,
                totalMarks: 150.0,
                totalAvailableQuestions: 150,
            },
        });
        console.log(`Test "${test.title}" upgraded to 150 Questions!`);
    }
    console.log('=== FULL 150-QUESTION UPTET PAPER SEED COMPLETE ===');
}
if (require.main === module) {
    seedFull150Paper()
        .catch(console.error)
        .finally(() => prisma_1.prisma.$disconnect());
}
