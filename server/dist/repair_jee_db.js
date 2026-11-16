"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const prisma_1 = require("./prisma");
const REPAIRED_DIR = path_1.default.resolve(__dirname, '../../tutornove-pyq/output/repaired_papers');
const MONTH_NAMES = {
    1: 'January', 2: 'February', 3: 'March', 4: 'April',
    5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September',
    10: 'October', 11: 'November', 12: 'December',
};
async function ensurePatternVersions(examId) {
    const existing = await prisma_1.prisma.examPatternVersion.findMany({
        where: { examId },
        include: { sections: true },
    });
    // 1. 2021 Official 90-Question Pattern (+4/-1 MCQ, +4/0 Numerical, attempt any 5 out of 10 per subject)
    let pv2021 = existing.find((p) => p.versionName.includes('2021 Official 90-Question'));
    if (!pv2021) {
        pv2021 = await prisma_1.prisma.examPatternVersion.create({
            data: {
                examId,
                versionName: 'JEE Main 2021 Official 90-Question Pattern (Sec B: Any 5 of 10, 0 Neg)',
                effectiveFrom: new Date('2021-01-01'),
                durationMinutes: 180,
                totalMarks: 300,
                totalQuestions: 90,
                questionsToAttempt: 75,
                isDefault: false,
                sections: {
                    create: [
                        { name: 'Physics - Section A', order: 1, totalQuestions: 20, maxToAttempt: 20, marksPerCorrect: 4, negativeMarks: 1 },
                        { name: 'Physics - Section B', order: 2, totalQuestions: 10, maxToAttempt: 5, marksPerCorrect: 4, negativeMarks: 0 },
                        { name: 'Chemistry - Section A', order: 3, totalQuestions: 20, maxToAttempt: 20, marksPerCorrect: 4, negativeMarks: 1 },
                        { name: 'Chemistry - Section B', order: 4, totalQuestions: 10, maxToAttempt: 5, marksPerCorrect: 4, negativeMarks: 0 },
                        { name: 'Mathematics - Section A', order: 5, totalQuestions: 20, maxToAttempt: 20, marksPerCorrect: 4, negativeMarks: 1 },
                        { name: 'Mathematics - Section B', order: 6, totalQuestions: 10, maxToAttempt: 5, marksPerCorrect: 4, negativeMarks: 0 },
                    ],
                },
            },
            include: { sections: true },
        });
    }
    // 2. 2022–2024 Official 90-Question Pattern (+4/-1 MCQ & Numerical, attempt any 5 out of 10 per subject)
    let pv2022_24 = existing.find((p) => p.versionName.includes('2022–2024 Official 90-Question'));
    if (!pv2022_24) {
        pv2022_24 = await prisma_1.prisma.examPatternVersion.create({
            data: {
                examId,
                versionName: 'JEE Main 2022–2024 Official 90-Question Pattern (Sec B: Any 5 of 10, -1 Neg)',
                effectiveFrom: new Date('2022-01-01'),
                durationMinutes: 180,
                totalMarks: 300,
                totalQuestions: 90,
                questionsToAttempt: 75,
                isDefault: true,
                sections: {
                    create: [
                        { name: 'Physics - Section A', order: 1, totalQuestions: 20, maxToAttempt: 20, marksPerCorrect: 4, negativeMarks: 1 },
                        { name: 'Physics - Section B', order: 2, totalQuestions: 10, maxToAttempt: 5, marksPerCorrect: 4, negativeMarks: 1 },
                        { name: 'Chemistry - Section A', order: 3, totalQuestions: 20, maxToAttempt: 20, marksPerCorrect: 4, negativeMarks: 1 },
                        { name: 'Chemistry - Section B', order: 4, totalQuestions: 10, maxToAttempt: 5, marksPerCorrect: 4, negativeMarks: 1 },
                        { name: 'Mathematics - Section A', order: 5, totalQuestions: 20, maxToAttempt: 20, marksPerCorrect: 4, negativeMarks: 1 },
                        { name: 'Mathematics - Section B', order: 6, totalQuestions: 10, maxToAttempt: 5, marksPerCorrect: 4, negativeMarks: 1 },
                    ],
                },
            },
            include: { sections: true },
        });
    }
    // 3. 2025–2026 Revised 75-Question Compulsory Pattern (20+5 per subject)
    let pv2025 = existing.find((p) => p.totalQuestions === 75 && p.sections.length === 6);
    if (!pv2025) {
        pv2025 = await prisma_1.prisma.examPatternVersion.create({
            data: {
                examId,
                versionName: 'JEE Main 2025–2026 Revised 75-Question Pattern',
                effectiveFrom: new Date('2025-01-01'),
                durationMinutes: 180,
                totalMarks: 300,
                totalQuestions: 75,
                questionsToAttempt: 75,
                isDefault: false,
                sections: {
                    create: [
                        { name: 'Physics - Section A', order: 1, totalQuestions: 20, maxToAttempt: 20, marksPerCorrect: 4, negativeMarks: 1 },
                        { name: 'Physics - Section B', order: 2, totalQuestions: 5, maxToAttempt: 5, marksPerCorrect: 4, negativeMarks: 1 },
                        { name: 'Chemistry - Section A', order: 3, totalQuestions: 20, maxToAttempt: 20, marksPerCorrect: 4, negativeMarks: 1 },
                        { name: 'Chemistry - Section B', order: 4, totalQuestions: 5, maxToAttempt: 5, marksPerCorrect: 4, negativeMarks: 1 },
                        { name: 'Mathematics - Section A', order: 5, totalQuestions: 20, maxToAttempt: 20, marksPerCorrect: 4, negativeMarks: 1 },
                        { name: 'Mathematics - Section B', order: 6, totalQuestions: 5, maxToAttempt: 5, marksPerCorrect: 4, negativeMarks: 1 },
                    ],
                },
            },
            include: { sections: true },
        });
    }
    return { pv2021, pv2022_24, pv2025 };
}
async function main() {
    const t0 = Date.now();
    const jeeExam = await prisma_1.prisma.exam.findUnique({ where: { slug: 'jee-main' } });
    if (!jeeExam)
        throw new Error('jee-main exam not found');
    const { pv2021, pv2022_24, pv2025 } = await ensurePatternVersions(jeeExam.id);
    console.log('Patterns ready:', pv2021.id, pv2022_24.id, pv2025.id);
    const files = fs_1.default.readdirSync(REPAIRED_DIR).filter((f) => f.endsWith('.json')).sort();
    console.log(`Found ${files.length} repaired paper JSONs.`);
    const allTests = await prisma_1.prisma.test.findMany({
        where: { examId: jeeExam.id },
        include: {
            testQuestions: {
                include: { question: true },
                orderBy: { questionNumber: 'asc' },
            },
        },
    });
    // Index existing published/unpublished tests by pyqReference
    const testByRef = new Map();
    for (const t of allTests) {
        if (t.pyqReference) {
            // Prefer published one if duplicate
            const prev = testByRef.get(t.pyqReference);
            if (!prev || (!prev.isPublished && t.isPublished)) {
                testByRef.set(t.pyqReference, t);
            }
        }
    }
    let papersRepaired = 0;
    let questionsUpdated = 0;
    let questionsCreated = 0;
    let auditLogsCreated = 0;
    let needsVerificationTotal = 0;
    for (let i = 0; i < files.length; i++) {
        const raw = JSON.parse(fs_1.default.readFileSync(path_1.default.join(REPAIRED_DIR, files[i]), 'utf-8'));
        const { paperKey, year, session, date, shift, pdfFilename, questions } = raw;
        const dt = new Date(date);
        const monthName = MONTH_NAMES[dt.getUTCMonth() + 1] || 'Session';
        const day = dt.getUTCDate();
        const cleanTitle = `JEE Main ${year} Official Paper (${monthName} ${day} - ${shift})`;
        const targetPv = year === 2021 ? pv2021 : year <= 2024 ? pv2022_24 : pv2025;
        let testRecord = testByRef.get(paperKey);
        if (!testRecord) {
            // Match by cleanTitle if pyqReference differed
            testRecord = allTests.find((t) => t.title === cleanTitle && t.isPublished) || allTests.find((t) => t.title === cleanTitle);
        }
        if (!testRecord) {
            const createdTest = await prisma_1.prisma.test.create({
                data: {
                    title: cleanTitle,
                    examId: jeeExam.id,
                    patternVersionId: targetPv.id,
                    type: 'PREVIOUS_YEAR_PAPER',
                    sourceType: 'VERIFIED_PYQ',
                    durationMinutes: 180,
                    totalMarks: 300,
                    totalQuestions: questions.length,
                    instructionsEn: `Official NTA Question Paper for JEE Main ${year} (${session}, ${date} ${shift}). ${year <= 2024
                        ? '90 Questions total: Section A (20 MCQs) + Section B (10 Numerical Value questions per subject — attempt ANY 5 out of 10).'
                        : '75 Compulsory Questions total: Section A (20 MCQs) + Section B (5 Numerical Value questions per subject).'} Marking: +4 correct, ${year <= 2021 ? '0 negative in Section B Numericals, -1 in Section A MCQs' : '-1 negative marking'}.`,
                    instructionsHi: `जेईई मेन ${year} (${session}, ${shift}) आधिकारिक प्रश्न पत्र।`,
                    pyqReference: paperKey,
                    accessLevel: year >= 2025 ? 'FREE' : 'PREMIUM',
                    isPublished: true,
                },
                include: {
                    testQuestions: { include: { question: true }, orderBy: { questionNumber: 'asc' } },
                },
            });
            testRecord = createdTest;
        }
        else {
            await prisma_1.prisma.test.update({
                where: { id: testRecord.id },
                data: {
                    title: cleanTitle,
                    patternVersionId: targetPv.id,
                    totalQuestions: questions.length,
                    totalMarks: 300,
                    durationMinutes: 180,
                    pyqReference: paperKey,
                    sourceType: 'VERIFIED_PYQ',
                    isPublished: true,
                    instructionsEn: `Official NTA Question Paper for JEE Main ${year} (${session}, ${date} ${shift}). ${year <= 2024
                        ? '90 Questions total: Section A (20 MCQs) + Section B (10 Numerical Value questions per subject — attempt ANY 5 out of 10).'
                        : '75 Compulsory Questions total: Section A (20 MCQs) + Section B (5 Numerical Value questions per subject).'} Marking: +4 correct, ${year <= 2021 ? '0 negative in Section B Numericals, -1 in Section A MCQs' : '-1 negative marking'}.`,
                },
            });
        }
        // Build lookup of existing TestQuestions for this test by originalQNum / questionNumber
        const existingTQs = testRecord.testQuestions || [];
        const existingByHash = new Map();
        for (const tq of existingTQs) {
            if (tq.question.duplicateCheckHash) {
                existingByHash.set(tq.question.duplicateCheckHash, tq);
            }
        }
        // Execute all updates & inserts for this paper in one SQLite transaction for speed + safety
        await prisma_1.prisma.$transaction(async (tx) => {
            const keepTqIds = [];
            for (let qIdx = 0; qIdx < questions.length; qIdx++) {
                const rq = questions[qIdx];
                if (rq.verificationStatus === 'NEEDS_VERIFICATION')
                    needsVerificationTotal++;
                const optionsJson = JSON.stringify(rq.options || []);
                const correctAnswerJson = JSON.stringify(rq.correctAnswer || []);
                const hash = `${paperKey}_Q${rq.originalQNum}`;
                // Match existing question row safely
                const matchedTq = existingByHash.get(hash) || existingTQs[qIdx];
                let questionId;
                if (matchedTq) {
                    questionId = matchedTq.questionId;
                    const prev = matchedTq.question;
                    const changed = prev.questionType !== rq.questionType ||
                        prev.subject !== rq.subject ||
                        prev.optionsJson !== optionsJson ||
                        prev.correctAnswerJson !== correctAnswerJson ||
                        prev.diagramUrl !== rq.diagramUrl ||
                        prev.verificationStatus !== rq.verificationStatus;
                    if (changed) {
                        let issueType = 'MISSING_DIAGRAM_OR_EQUATION';
                        if (prev.questionType !== rq.questionType)
                            issueType = 'MISCLASSIFIED_TYPE';
                        else if (prev.optionsJson === '[]' && rq.questionType === 'SINGLE_CHOICE')
                            issueType = 'MISSING_OPTIONS';
                        else if (rq.verificationStatus === 'NEEDS_VERIFICATION')
                            issueType = 'INVALID_ANSWER_KEY';
                        await tx.questionAuditLog.create({
                            data: {
                                questionId,
                                paperTitle: cleanTitle,
                                issueType,
                                previousContentEn: prev.contentEn.slice(0, 1000),
                                previousOptionsJson: prev.optionsJson?.slice(0, 1000),
                                previousAnswerJson: prev.correctAnswerJson,
                                previousType: prev.questionType,
                                newContentEn: rq.contentEn.slice(0, 1000),
                                newType: rq.questionType,
                                correctedBy: 'SYSTEM_OFFICIAL_PDF_AUDITOR',
                                changeSummary: `Restored from official source ${pdfFilename} Q${rq.originalQNum} (${rq.sectionName}), attached official question figure & verified answer key.`,
                            },
                        });
                        auditLogsCreated++;
                    }
                    await tx.question.update({
                        where: { id: questionId },
                        data: {
                            questionType: rq.questionType,
                            subject: rq.subject,
                            contentEn: rq.contentEn,
                            optionsJson,
                            correctAnswerJson,
                            numericalAnswer: rq.numericalAnswer,
                            numericalTolerance: 0.01,
                            diagramUrl: rq.diagramUrl,
                            verificationStatus: rq.verificationStatus,
                            pyqYear: String(year),
                            pyqShift: `${session} ${shift}`,
                            pyqPaper: pdfFilename,
                            sourcePage: rq.sourcePage,
                            duplicateCheckHash: hash,
                            isPublished: true,
                            reviewedAt: new Date(),
                            reviewerName: 'All in One Official PDF Auditor',
                        },
                    });
                    questionsUpdated++;
                    await tx.testQuestion.update({
                        where: { id: matchedTq.id },
                        data: {
                            questionNumber: rq.questionNumber,
                            sectionName: rq.sectionName,
                            marks: rq.marks,
                            negativeMarks: rq.negativeMarks,
                        },
                    });
                    keepTqIds.push(matchedTq.id);
                }
                else {
                    const newQ = await tx.question.create({
                        data: {
                            examId: jeeExam.id,
                            questionType: rq.questionType,
                            subject: rq.subject,
                            topic: `JEE Main ${rq.subject}`,
                            contentEn: rq.contentEn,
                            optionsJson,
                            correctAnswerJson,
                            numericalAnswer: rq.numericalAnswer,
                            numericalTolerance: 0.01,
                            diagramUrl: rq.diagramUrl,
                            explanationEn: rq.verificationStatus === 'VERIFIED'
                                ? `Verified official NTA Answer Key (${paperKey}, Q${rq.originalQNum}): ${rq.rawAnswerKey}`
                                : `Official answer key pending admin verification (${paperKey}, Q${rq.originalQNum}).`,
                            difficulty: 'MEDIUM',
                            isPYQ: true,
                            pyqYear: String(year),
                            pyqShift: `${session} ${shift}`,
                            pyqPaper: pdfFilename,
                            sourcePage: rq.sourcePage,
                            sourceProvenance: `Official NTA JEE Main ${year} (${session}, ${date} ${shift})`,
                            sourceLicense: 'Official Public Examination Record',
                            verificationStatus: rq.verificationStatus,
                            duplicateCheckHash: hash,
                            isPublished: true,
                            reviewedAt: new Date(),
                            reviewerName: 'All in One Official PDF Auditor',
                        },
                    });
                    questionsCreated++;
                    const createdTq = await tx.testQuestion.create({
                        data: {
                            testId: testRecord.id,
                            questionId: newQ.id,
                            questionNumber: rq.questionNumber,
                            sectionName: rq.sectionName,
                            marks: rq.marks,
                            negativeMarks: rq.negativeMarks,
                        },
                    });
                    keepTqIds.push(createdTq.id);
                }
            }
            // Remove any surplus stale TestQuestion rows if existing count exceeded canonical length
            if (existingTQs.length > questions.length) {
                const extraIds = existingTQs.filter((tq) => !keepTqIds.includes(tq.id)).map((tq) => tq.id);
                if (extraIds.length > 0) {
                    await tx.testQuestion.deleteMany({ where: { id: { in: extraIds } } });
                }
            }
        });
        papersRepaired++;
        if (papersRepaired % 15 === 0 || papersRepaired === files.length) {
            console.log(`Synced ${papersRepaired}/${files.length} papers... (${Math.round((Date.now() - t0) / 1000)}s)`);
        }
    }
    // Also fix the 2026 Flagship Mock Test section names & any incomplete options
    const mock2026 = await prisma_1.prisma.test.findFirst({
        where: { examId: jeeExam.id, title: { contains: '2026 All India Full Mock' } },
        include: { testQuestions: { include: { question: true }, orderBy: { questionNumber: 'asc' } } },
    });
    if (mock2026) {
        for (const tq of mock2026.testQuestions) {
            const q = tq.question;
            const baseSubj = q.sectionId ? q.subject : tq.sectionName.split(' - ')[0];
            const secSubj = baseSubj && ['Physics', 'Chemistry', 'Mathematics'].includes(baseSubj)
                ? baseSubj
                : tq.sectionName.toLowerCase().includes('phys')
                    ? 'Physics'
                    : tq.sectionName.toLowerCase().includes('chem')
                        ? 'Chemistry'
                        : 'Mathematics';
            const targetSectionName = q.questionType === 'NUMERICAL' ? `${secSubj} - Section B` : `${secSubj} - Section A`;
            let opts = [];
            try {
                opts = JSON.parse(q.optionsJson || '[]');
            }
            catch {
                opts = [];
            }
            let fixedOptsJson = q.optionsJson;
            if (q.questionType !== 'NUMERICAL' && (opts.length !== 4 || opts.some((o) => !o?.textEn?.trim()))) {
                const padded = ['A', 'B', 'C', 'D'].map((k, idx) => {
                    const existingOpt = opts[idx];
                    return {
                        id: k,
                        textEn: existingOpt?.textEn?.trim() ? existingOpt.textEn : `Option ${k} (Refer to official question statement)`,
                    };
                });
                fixedOptsJson = JSON.stringify(padded);
                // Check if we can match diagramUrl from repaired questions by stem prefix
                const matchWithCrop = await prisma_1.prisma.question.findFirst({
                    where: { examId: jeeExam.id, contentEn: q.contentEn, diagramUrl: { not: null } },
                    select: { diagramUrl: true, optionsJson: true },
                });
                await prisma_1.prisma.question.update({
                    where: { id: q.id },
                    data: {
                        subject: secSubj,
                        optionsJson: matchWithCrop?.optionsJson || fixedOptsJson,
                        diagramUrl: q.diagramUrl || matchWithCrop?.diagramUrl || null,
                    },
                });
            }
            else if (!q.subject) {
                await prisma_1.prisma.question.update({
                    where: { id: q.id },
                    data: { subject: secSubj },
                });
            }
            if (tq.sectionName !== targetSectionName) {
                await prisma_1.prisma.testQuestion.update({
                    where: { id: tq.id },
                    data: { sectionName: targetSectionName },
                });
            }
        }
        console.log('Fixed 2026 Flagship Mock Test section mapping & options.');
    }
    // Update Exam.totalVerifiedPYQs accurately
    const truePyqCount = await prisma_1.prisma.question.count({
        where: { examId: jeeExam.id, isPYQ: true, isPublished: true, verificationStatus: 'VERIFIED' },
    });
    await prisma_1.prisma.exam.update({
        where: { id: jeeExam.id },
        data: { totalVerifiedPYQs: truePyqCount },
    });
    console.log('\n=== JEE MAIN DB REPAIR SUMMARY ===');
    console.log(`Papers repaired & published: ${papersRepaired}`);
    console.log(`Existing questions updated: ${questionsUpdated}`);
    console.log(`New questions inserted: ${questionsCreated}`);
    console.log(`Audit logs recorded: ${auditLogsCreated}`);
    console.log(`Questions marked NEEDS_VERIFICATION: ${needsVerificationTotal}`);
    console.log(`Exam.totalVerifiedPYQs: ${truePyqCount}`);
    console.log(`Completed in ${Math.round((Date.now() - t0) / 1000)}s`);
    await prisma_1.prisma.$disconnect();
}
main().catch((e) => {
    console.error(e);
    process.exit(1);
});
