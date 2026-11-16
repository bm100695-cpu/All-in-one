/**
 * TutorNove JEE Main PYQ - Bulk MongoDB Importer
 * 
 * Capabilities:
 * - Reads generated JSON files (single year or all-in-one).
 * - Validates schema constraints and required fields.
 * - Prevents duplicate imports using unique composite identifiers.
 * - Supports --dry-run mode to verify data without modifying the database.
 * - Strictly enforces isPublished = false.
 * - Generates comprehensive import audit reports.
 * 
 * Usage:
 *   node import_questions.js --file ../../output/jee-main-2025.json
 *   node import_questions.js --all --dry-run
 */

const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

// Relative paths
const OUTPUT_DIR = path.resolve(__dirname, '../../output');
const REPORTS_DIR = path.resolve(__dirname, '../../reports');
const Question = require('../models/Question');

// Default MongoDB URI
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/tutornove';

// Argument parsing
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const isAll = args.includes('--all');
const fileIndex = args.indexOf('--file');
const specificFile = fileIndex !== -1 ? args[fileIndex + 1] : null;

function validateQuestion(q, index) {
  const errors = [];
  if (!q.exam) errors.push('Missing "exam"');
  if (!q.year || typeof q.year !== 'number') errors.push('Missing or invalid "year"');
  if (!q.session) errors.push('Missing "session"');
  if (!q.date) errors.push('Missing "date"');
  if (!q.shift) errors.push('Missing "shift"');
  if (!q.subject) errors.push('Missing "subject"');
  if (!q.chapter) errors.push('Missing "chapter"');
  if (q.questionNumber == null) errors.push('Missing "questionNumber"');
  if (!q.questionType) errors.push('Missing "questionType"');
  if (!q.questionText || q.questionText.trim().length === 0) errors.push('Empty "questionText"');
  if (q.questionType === 'MCQ') {
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      errors.push(`MCQ must contain exactly 4 options. Found: ${q.options ? q.options.length : 0}`);
    }
  }
  if (!q.source || !q.source.pdf) errors.push('Missing source provenance metadata');

  return {
    isValid: errors.length === 0,
    errors,
  };
}

async function runImporter() {
  console.log('='.repeat(60));
  console.log(' TutorNove JEE Main PYQ - MongoDB Bulk Importer');
  console.log('='.repeat(60));
  console.log(`Dry Run Mode: ${isDryRun ? 'ENABLED (Database will not be modified)' : 'DISABLED'}`);
  console.log(`Target MongoDB URI: ${MONGO_URI}`);

  // Collect files to import
  let targetFiles = [];
  if (specificFile) {
    targetFiles.push(path.resolve(process.cwd(), specificFile));
  } else if (isAll) {
    const allFile = path.join(OUTPUT_DIR, 'jee-main-all-2021-2025.json');
    if (fs.existsSync(allFile)) {
      targetFiles.push(allFile);
    } else {
      for (const yr of [2021, 2022, 2023, 2024, 2025]) {
        const yf = path.join(OUTPUT_DIR, `jee-main-${yr}.json`);
        if (fs.existsSync(yf)) targetFiles.push(yf);
      }
    }
  } else {
    // Default to all-in-one file if exists, else year files
    const allFile = path.join(OUTPUT_DIR, 'jee-main-all-2021-2025.json');
    if (fs.existsSync(allFile)) {
      targetFiles.push(allFile);
    } else {
      console.error('Error: Please specify --file <path> or run with --all');
      process.exit(1);
    }
  }

  let dbConnected = false;
  if (!isDryRun) {
    try {
      await mongoose.connect(MONGO_URI, {
        serverSelectionTimeoutMS: 4000,
      });
      dbConnected = true;
      console.log('Connected to MongoDB successfully.');
    } catch (err) {
      console.warn(`\n[Warning] Could not connect to MongoDB at ${MONGO_URI}: ${err.message}`);
      console.warn('Switching execution to DRY RUN validation mode.\n');
    }
  }

  const importStats = {
    timestamp: new Date().toISOString(),
    dryRun: isDryRun || !dbConnected,
    totalFiles: targetFiles.length,
    totalProcessed: 0,
    validQuestions: 0,
    insertedCount: 0,
    duplicateSkippedCount: 0,
    validationFailedCount: 0,
    failures: [],
  };

  for (const filePath of targetFiles) {
    console.log(`\nProcessing file: ${path.basename(filePath)}`);
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      continue;
    }

    const rawData = fs.readFileSync(filePath, 'utf-8');
    let questions = [];
    try {
      questions = JSON.parse(rawData);
    } catch (e) {
      console.error(`JSON Parse Error in ${filePath}:`, e.message);
      importStats.failures.push({ file: filePath, reason: `Invalid JSON: ${e.message}` });
      continue;
    }

    console.log(`Found ${questions.length} question records.`);

    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      importStats.totalProcessed++;

      // Validate schema
      const validation = validateQuestion(q, i);
      if (!validation.isValid) {
        importStats.validationFailedCount++;
        importStats.failures.push({
          index: i,
          year: q.year,
          subject: q.subject,
          questionNumber: q.questionNumber,
          errors: validation.errors,
        });
        continue;
      }

      importStats.validQuestions++;

      // Security Invariant: Always unpublished on initial bulk import
      q.isPublished = false;

      if (!isDryRun && dbConnected) {
        try {
          // Check for duplicate
          const existing = await Question.findOne({
            exam: q.exam,
            year: q.year,
            session: q.session,
            date: q.date,
            shift: q.shift,
            questionNumber: q.questionNumber,
          });

          if (existing) {
            importStats.duplicateSkippedCount++;
          } else {
            await Question.create(q);
            importStats.insertedCount++;
          }
        } catch (dbErr) {
          importStats.validationFailedCount++;
          importStats.failures.push({
            questionNumber: q.questionNumber,
            reason: `DB Error: ${dbErr.message}`,
          });
        }
      } else {
        // Dry run simulated insert
        importStats.insertedCount++;
      }
    }
  }

  if (dbConnected) {
    await mongoose.disconnect();
  }

  // Write Import Audit Report
  if (!fs.existsSync(REPORTS_DIR)) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
  }
  const reportPath = path.join(REPORTS_DIR, 'mongo_import_report.json');
  fs.writeFileSync(reportPath, JSON.stringify(importStats, null, 2), 'utf-8');

  console.log('\n' + '='.repeat(60));
  console.log(' MongoDB Import Summary');
  console.log('='.repeat(60));
  console.log(`Total Question Records Read: ${importStats.totalProcessed}`);
  console.log(`Valid Questions:             ${importStats.validQuestions}`);
  console.log(`Simulated / Actual Inserts:  ${importStats.insertedCount}`);
  console.log(`Duplicates Skipped:          ${importStats.duplicateSkippedCount}`);
  console.log(`Validation Failures:         ${importStats.validationFailedCount}`);
  console.log(`Report written to:           ${reportPath}`);
  console.log('='.repeat(60));
}

runImporter().catch((err) => {
  console.error('Fatal import error:', err);
  process.exit(1);
});

