/**
 * TutorNove JEE Main PYQ - Mongoose MockTest Model
 * Production-ready schema for MongoDB.
 * 
 * Represents an individual exam mock test (e.g. JEE Main 2024 Jan 27 Shift 1)
 * with full section breakdown, marking rules, question references, and CBT metadata.
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;

const MockTestSchema = new Schema(
  {
    testId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    exam: {
      type: String,
      required: true,
      default: 'JEE Main',
      trim: true,
    },
    paperType: {
      type: String,
      required: true,
      default: 'Paper 1 (B.E./B.Tech)',
      trim: true,
    },
    year: {
      type: Number,
      required: true,
      min: 2021,
      max: 2030,
      index: true,
    },
    session: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: String, // YYYY-MM-DD
      required: true,
      trim: true,
    },
    shift: {
      type: String,
      required: true,
      enum: ['Shift 1', 'Shift 2'],
      trim: true,
    },
    durationMinutes: {
      type: Number,
      default: 180,
    },
    totalMarks: {
      type: Number,
      default: 300,
    },
    totalQuestions: {
      type: Number,
      required: true,
    },
    subjects: {
      type: [String],
      default: ['Physics', 'Chemistry', 'Mathematics'],
    },
    markingScheme: {
      mcq: {
        correct: { type: Number, default: 4 },
        incorrect: { type: Number, default: -1 },
        unattempted: { type: Number, default: 0 },
      },
      numerical: {
        correct: { type: Number, default: 4 },
        incorrect: { type: Number, default: -1 },
        unattempted: { type: Number, default: 0 },
      },
    },
    questionIds: [{
      type: Schema.Types.ObjectId,
      ref: 'Question',
    }],
    provenance: {
      source: { type: String, default: 'Official NTA JEE Main Examination Paper' },
      extractedFrom: { type: String },
      verifiedBy: { type: String, default: 'TutorNove Academic Review Board' },
      verificationStatus: {
        type: String,
        enum: ['VERIFIED', 'UNDER_REVIEW', 'FLAGGED'],
        default: 'VERIFIED',
      },
    },
    isPublished: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  {
    timestamps: true,
    collection: 'mock_tests',
  }
);

MockTestSchema.index({ year: 1, date: 1, shift: 1 });
MockTestSchema.index({ isPublished: 1, year: -1 });

module.exports = mongoose.models.MockTest || mongoose.model('MockTest', MockTestSchema);

