/**
 * TutorNove JEE Main PYQ - Mongoose Question Model
 * Production-ready schema for MongoDB.
 * 
 * Includes all exam metadata, question content, options, answers,
 * step-by-step explanations, marking schemes, provenance tracking,
 * and high-performance compound indexes.
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;

const OptionSchema = new Schema(
  {
    key: {
      type: String,
      required: true,
      enum: ['A', 'B', 'C', 'D'],
      uppercase: true,
      trim: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false }
);

const SourceSchema = new Schema(
  {
    pdf: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
    },
    answerKeySource: {
      type: String,
      trim: true,
      default: 'Official NTA Final Answer Key',
    },
    diagrams: {
      type: [String],
      default: [],
    },
  },
  { _id: false }
);

const QuestionSchema = new Schema(
  {
    exam: {
      type: String,
      required: [true, 'Exam name is required (e.g. JEE Main)'],
      trim: true,
      index: true,
    },
    year: {
      type: Number,
      required: [true, 'Exam year is required (e.g. 2025)'],
      min: 2000,
      max: 2099,
      index: true,
    },
    session: {
      type: String,
      required: [true, 'Exam session is required (e.g. Session 1)'],
      trim: true,
      index: true,
    },
    date: {
      type: String,
      required: [true, 'Exam date is required (YYYY-MM-DD)'],
      match: [/^\d{4}-\d{2}-\d{2}$/, 'Date must follow YYYY-MM-DD format'],
      index: true,
    },
    shift: {
      type: String,
      required: [true, 'Exam shift is required (e.g. Shift 1)'],
      trim: true,
      index: true,
    },
    subject: {
      type: String,
      required: [true, 'Subject is required (Physics, Chemistry, Mathematics)'],
      enum: ['Physics', 'Chemistry', 'Mathematics'],
      index: true,
    },
    chapter: {
      type: String,
      required: [true, 'Chapter is required (e.g. Mechanics, Calculus)'],
      trim: true,
      index: true,
    },
    questionNumber: {
      type: Number,
      required: [true, 'Question number is required'],
      min: 1,
      max: 100,
    },
    questionType: {
      type: String,
      required: [true, 'Question type is required'],
      enum: ['MCQ', 'NUMERICAL'],
      default: 'MCQ',
    },
    questionText: {
      type: String,
      required: [true, 'Question text cannot be blank'],
      trim: true,
    },
    options: {
      type: [OptionSchema],
      validate: {
        validator: function (val) {
          // If MCQ, exactly 4 options required. If NUMERICAL, options should be empty.
          if (this.questionType === 'MCQ') {
            return Array.isArray(val) && val.length === 4;
          }
          return Array.isArray(val);
        },
        message: 'MCQ questions must include exactly 4 options (A, B, C, D).',
      },
      default: [],
    },
    correctAnswer: {
      type: [String],
      default: [],
      // Stored as an array e.g. ["B"], ["25"], or ["A", "C"] if multiple keys accepted
    },
    explanation: {
      type: String,
      default: '',
      trim: true,
    },
    marks: {
      type: Number,
      required: true,
      default: 4,
    },
    negativeMarks: {
      type: Number,
      required: true,
      default: -1, // Note: In 2021 numerical questions, this is 0
    },
    source: {
      type: SourceSchema,
      required: true,
    },
    contentType: {
      type: String,
      enum: ['PYQ', 'AI_PRACTICE'],
      default: 'PYQ',
      index: true,
    },
    verificationStatus: {
      type: String,
      enum: ['verified', 'pending_verification', 'rejected', 'under_review'],
      default: 'pending_verification',
      index: true,
    },
    isPublished: {
      type: Boolean,
      default: false, // Strict safety: Never publish automatically without admin review
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// High-Performance Compound Indexes for Filtering and Querying
// 1. Unique constraint to prevent duplicate questions from being imported
QuestionSchema.index(
  { exam: 1, year: 1, session: 1, date: 1, shift: 1, questionNumber: 1 },
  { unique: true }
);

// 2. Querying by year and subject for mock tests
QuestionSchema.index({ exam: 1, year: 1, subject: 1 });

// 3. Querying by syllabus chapter
QuestionSchema.index({ exam: 1, year: 1, subject: 1, chapter: 1 });

// 4. Admin approval queue index
QuestionSchema.index({ verificationStatus: 1, isPublished: 1 });

module.exports = mongoose.model('Question', QuestionSchema);

