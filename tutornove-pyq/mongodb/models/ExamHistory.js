const mongoose = require('mongoose');

const examHistorySchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  studentName: { type: String, required: true },
  studentEmail: { type: String, required: true },
  examTitle: { type: String, required: true },
  examId: { type: String, required: true },
  score: { type: Number, default: 0 },
  totalMarks: { type: Number, default: 0 },
  status: { type: String, enum: ['Completed', 'In-Progress'], default: 'Completed' },
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ExamHistory', examHistorySchema);