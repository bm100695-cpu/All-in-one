const ExamHistory = require('../models/ExamHistory');

// Admin saare bacho ki exam history dekh sake
router.get('/students-exam-history', verifyAdminAuth, async (req, res) => {
  try {
    const historyList = await ExamHistory.find().sort({ submittedAt: -1 }); // Nayi history sabse upar
    res.status(200).json({ success: true, history: historyList });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});