/**
 * TutorNove JEE Main PYQ - MongoDB All-Shift Importer
 * Bulk imports all 110 shift papers into MongoDB Question and MockTest collections.
 * 
 * Usage:
 *   node import_all_to_mongodb.js [--dry-run]
 */

const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const PAPERS_DIR = path.resolve(__dirname, '../../output/papers');
const Question = require('../models/Question');
const MockTest = require('../models/MockTest');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/tutornove';
const isDryRun = process.argv.includes('--dry-run');

async function importAll() {
  console.log('='.repeat(70));
  console.log('  TutorNove: Bulk Importing All JEE Main PYQs into MongoDB');
  console.log('='.repeat(70));

  if (!fs.existsSync(PAPERS_DIR)) {
    console.error(`Directory not found: ${PAPERS_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(PAPERS_DIR).filter((f) => f.endsWith('.json'));
  console.log(`Found ${files.length} paper JSON files.`);

  if (isDryRun) {
    console.log('[DRY RUN] Validating all files without database connection...');
    let totalQs = 0;
    for (const f of files) {
      const data = JSON.parse(fs.readFileSync(path.join(PAPERS_DIR, f), 'utf-8'));
      totalQs += (data.questions || []).length;
    }
    console.log(`[DRY RUN] All ${files.length} papers validated successfully (${totalQs} total questions).`);
    return;
  }

  try {
    await mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 3000 });
    console.log(`Connected to MongoDB at ${MONGO_URI}`);
  } catch (err) {
    console.warn(`MongoDB not currently reachable at ${MONGO_URI}. (Skipping live Mongo insert; files and models are ready).`);
    return;
  }

  let totalPapers = 0;
  let totalQuestions = 0;

  for (const f of files) {
    const paper = JSON.parse(fs.readFileSync(path.join(PAPERS_DIR, f), 'utf-8'));
    
    // Save questions
    const qIds = [];
    for (const q of paper.questions) {
      const qDoc = await Question.findOneAndUpdate(
        { questionId: q.questionId },
        {
          exam: q.exam,
          year: q.year,
          session: q.session,
          date: q.date,
          shift: q.shift,
          paperType: q.paperType || 'Paper 1',
          subject: q.subject,
          chapter: q.chapter,
          questionId: q.questionId,
          questionNumber: q.questionNumber,
          questionType: q.questionType,
          questionText: q.questionText,
          options: q.options || [],
          correctAnswer: q.correctAnswer || [],
          explanation: q.explanation || '',
          marks: q.marks || 4,
          negativeMarks: q.negativeMarks ?? -1,
          source: {
            pdf: q.source?.paperPdf || f,
            url: q.source?.paperUrl || '',
            answerKeySource: q.source?.answerKeyUrl || 'Official NTA Final Answer Key',
          },
          isPublished: true,
        },
        { upsert: true, new: true }
      );
      qIds.push(qDoc._id);
      totalQuestions++;
    }

    // Save MockTest
    await MockTest.findOneAndUpdate(
      { testId: paper.testId },
      {
        testId: paper.testId,
        title: paper.title,
        exam: paper.exam,
        paperType: paper.paperType,
        year: paper.year,
        session: paper.session,
        date: paper.date,
        shift: paper.shift,
        durationMinutes: paper.durationMinutes || 180,
        totalMarks: paper.totalMarks || 300,
        totalQuestions: paper.totalQuestions || paper.questions.length,
        subjects: paper.subjects || ['Physics', 'Chemistry', 'Mathematics'],
        markingScheme: paper.markingScheme,
        questionIds: qIds,
        provenance: paper.provenance,
        isPublished: true,
      },
      { upsert: true, new: true }
    );

    totalPapers++;
  }

  console.log(`MongoDB sync completed: ${totalPapers} mock tests, ${totalQuestions} questions.`);
  await mongoose.disconnect();
}

importAll().catch(console.error);

