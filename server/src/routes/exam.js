const ExamHistory = require('../models/ExamHistory');

// Jab student exam submit kare
router.post('/submit-exam', verifyStudentAuth, async (req, res) => {
  try {
    const { examId, examTitle, score, totalMarks } = req.body;
    
    // req.user me logged-in student ki details hongi (Auth middleware se)
    const newHistory = new ExamHistory({
      studentId: req.user._id,
      studentName: req.user.name,
      studentEmail: req.user.email,
      examId,
      examTitle,
      score,
      totalMarks,
      status: 'Completed'
    });

    await newHistory.save();
    res.status(200).json({ success: true, message: 'Exam history saved successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});