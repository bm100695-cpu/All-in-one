import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  Upload,
  Edit3,
  Save,
  X,
  Plus,
  FileCheck,
  ShieldCheck,
  RefreshCw,
  Eye,
  EyeOff,
  History,
} from 'lucide-react';
import { api } from '../api';
import { SuperTetExam, SuperTetQuestion, SuperTetImportReport } from '../types';

export const AdminSuperTetManager: React.FC = () => {
  const [exams, setExams] = useState<SuperTetExam[]>([]);
  const [selectedYear, setSelectedYear] = useState<number>(2019);
  const [isPracticeTab, setIsPracticeTab] = useState<boolean>(false);
  const [auditData, setAuditData] = useState<{
    exam: SuperTetExam;
    actualQuestionsCount: number;
    expectedQuestions: number;
    missingNumbers: number[];
    textDuplicates: Array<{ snippet: string; questionNumbers: number[] }>;
    questions: SuperTetQuestion[];
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Import Modal / Drawer State
  const [showImportBox, setShowImportBox] = useState<boolean>(false);
  const [importSource, setImportSource] = useState<string>('Official PNP Booklet & Revised Answer Key');
  const [importPayloadText, setImportPayloadText] = useState<string>('');
  const [importReport, setImportReport] = useState<SuperTetImportReport | null>(null);
  const [importing, setImporting] = useState<boolean>(false);

  // Add Year Form State
  const [showYearForm, setShowYearForm] = useState<boolean>(false);
  const [newYearForm, setNewYearForm] = useState({
    examYear: 2025,
    examName: 'SUPER TET 2025 Examination',
    examDate: 'TBA',
    notificationDate: 'Official notice unavailable',
    expectedQuestions: 150,
    totalMarks: 150,
    duration: 150,
    verificationStatus: 'AUTHENTIC_SOURCE_VERIFICATION_PENDING',
    paperSource: '',
    answerKeySource: '',
  });

  // Edit Question Modal State
  const [editingQuestion, setEditingQuestion] = useState<SuperTetQuestion | null>(null);
  const [revisionReason, setRevisionReason] = useState<string>('');

  useEffect(() => {
    loadExamsList();
  }, []);

  useEffect(() => {
    loadYearAudit(selectedYear, isPracticeTab);
  }, [selectedYear, isPracticeTab]);

  const loadExamsList = async () => {
    try {
      const res = await api.getSuperTetExams(true);
      setExams(res.exams || []);
    } catch (err) {
      console.error('Failed to fetch SUPER TET exams:', err);
    }
  };

  const loadYearAudit = async (yr: number, isPractice: boolean) => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const res = await api.getSuperTetAdminAudit(yr, isPractice);
      setAuditData(res);
    } catch (err: any) {
      setAuditData(null);
      setErrorMsg(err.message || `No record found for ${yr}`);
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePublish = async (allowPartial = false) => {
    if (!auditData) return;
    setErrorMsg(null);
    setStatusMsg(null);
    try {
      const nextState = !auditData.exam.isPublished;
      const res = await api.publishSuperTetExam(selectedYear, nextState, isPracticeTab, allowPartial);
      setStatusMsg(res.message);
      await loadExamsList();
      await loadYearAudit(selectedYear, isPracticeTab);
    } catch (err: any) {
      setErrorMsg(err.message || 'Publish check failed');
    }
  };

  const parseCsvToQuestions = (csvText: string): any[] => {
    const lines = csvText.split(/\r?\n/).filter((l) => l.trim());
    if (lines.length < 2) return [];
    const headers = lines[0].split(',').map((h) => h.trim());
    const result: any[] = [];

    for (let i = 1; i < lines.length; i++) {
      const cols = lines[i].split(',').map((c) => c.trim());
      const row: any = {};
      headers.forEach((h, idx) => {
        row[h] = cols[idx] || '';
      });
      result.push({
        questionNumber: Number(row.questionNumber || i),
        subject: row.subject || 'General Knowledge & Current Affairs',
        topic: row.topic || row.subject || 'General',
        questionHindi: row.questionHindi || '',
        questionEnglish: row.questionEnglish || '',
        options: [
          { id: 'A', textHi: row.optionA_Hi || row.optionA || '', textEn: row.optionA_En || row.optionA || '' },
          { id: 'B', textHi: row.optionB_Hi || row.optionB || '', textEn: row.optionB_En || row.optionB || '' },
          { id: 'C', textHi: row.optionC_Hi || row.optionC || '', textEn: row.optionC_En || row.optionC || '' },
          { id: 'D', textHi: row.optionD_Hi || row.optionD || '', textEn: row.optionD_En || row.optionD || '' },
        ],
        correctAnswer: row.correctAnswer || 'PENDING',
        explanationHindi: row.explanationHindi || '',
        explanationEnglish: row.explanationEnglish || '',
        difficulty: row.difficulty || 'MEDIUM',
        sourceUrl: row.sourceUrl || importSource,
      });
    }
    return result;
  };

  const handleRunImport = async () => {
    setErrorMsg(null);
    setImportReport(null);
    let parsedQuestions: any[] = [];
    const raw = importPayloadText.trim();
    if (!raw) {
      setErrorMsg('Please paste a valid JSON array or CSV content to import.');
      return;
    }

    try {
      if (raw.startsWith('[') || raw.startsWith('{')) {
        const obj = JSON.parse(raw);
        parsedQuestions = Array.isArray(obj) ? obj : obj.questions || [];
      } else {
        parsedQuestions = parseCsvToQuestions(raw);
      }
    } catch (e: any) {
      setErrorMsg('Invalid JSON/CSV syntax: ' + e.message);
      return;
    }

    if (parsedQuestions.length === 0) {
      setErrorMsg('No questions detected in import payload.');
      return;
    }

    setImporting(true);
    try {
      const res = await api.importSuperTetQuestions({
        examYear: selectedYear,
        isPracticePaper: isPracticeTab,
        source: importSource,
        questions: parsedQuestions,
        publishIfComplete: false,
      });
      setImportReport(res.importReport);
      setStatusMsg(`Import workflow completed for SUPER TET ${selectedYear}.`);
      await loadYearAudit(selectedYear, isPracticeTab);
      await loadExamsList();
    } catch (err: any) {
      setErrorMsg(err.message || 'Import execution failed');
    } finally {
      setImporting(false);
    }
  };

  const handleSaveYearRecord = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    try {
      await api.upsertSuperTetYear(newYearForm);
      setStatusMsg(`Saved SUPER TET ${newYearForm.examYear} exam record.`);
      setShowYearForm(false);
      await loadExamsList();
      setSelectedYear(newYearForm.examYear);
      setIsPracticeTab(false);
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to save exam year');
    }
  };

  const handleSaveEditedQuestion = async () => {
    if (!editingQuestion) return;
    try {
      await api.updateSuperTetQuestion(editingQuestion.id, {
        questionHindi: editingQuestion.questionHindi,
        questionEnglish: editingQuestion.questionEnglish,
        correctAnswer: editingQuestion.correctAnswer,
        explanationHindi: editingQuestion.explanationHindi,
        explanationEnglish: editingQuestion.explanationEnglish,
        subject: editingQuestion.subject,
        topic: editingQuestion.topic,
        sourceUrl: editingQuestion.sourceUrl,
        verificationStatus: editingQuestion.verificationStatus,
        revisionReason: revisionReason || 'Editorial update by Admin',
      });
      setEditingQuestion(null);
      setRevisionReason('');
      setStatusMsg(`Question #${editingQuestion.questionNumber} updated (revision history preserved).`);
      await loadYearAudit(selectedYear, isPracticeTab);
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to update question');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="bg-white rounded-xl border border-tn-border p-5 shadow-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-bold text-tn-navy flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
            SUPER TET (2012–2025) PYQ & Import Manager
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Verify question counts, detect missing numbers/duplicates, import validated JSON/CSV papers, and maintain official answer key revisions.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setShowYearForm(!showYearForm)}
            className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5 text-indigo-600" />
            <span>Add / Edit Exam Year</span>
          </button>
          <button
            onClick={() => setShowImportBox(!showImportBox)}
            className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Import Questions (JSON/CSV)</span>
          </button>
        </div>
      </div>

      {statusMsg && (
        <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center justify-between">
          <span className="font-semibold flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            {statusMsg}
          </span>
          <button onClick={() => setStatusMsg(null)} className="text-emerald-700 cursor-pointer"><X className="w-3.5 h-3.5" /></button>
        </div>
      )}

      {errorMsg && (
        <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center justify-between">
          <span className="font-semibold flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-red-600" />
            {errorMsg}
          </span>
          <button onClick={() => setErrorMsg(null)} className="text-red-600 cursor-pointer"><X className="w-3.5 h-3.5" /></button>
        </div>
      )}

      {/* Year / Paper Switcher */}
      <div className="bg-white rounded-xl border border-tn-border p-4 shadow-subtle flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-slate-600 mr-2">Select Record:</span>
        {exams.map((ex) => {
          const active = selectedYear === ex.examYear && isPracticeTab === ex.isPracticePaper;
          return (
            <button
              key={ex.id}
              onClick={() => {
                setSelectedYear(ex.examYear);
                setIsPracticeTab(ex.isPracticePaper);
              }}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                active
                  ? 'bg-indigo-700 text-white border-indigo-700'
                  : ex.totalQuestions > 0
                  ? 'bg-emerald-50 text-emerald-900 border-emerald-200 hover:bg-emerald-100'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {ex.isPracticePaper ? `Practice (${ex.examYear})` : ex.examYear} ({ex.totalQuestions}/{ex.expectedQuestions})
            </button>
          );
        })}
      </div>

      {/* Add/Edit Exam Year Modal Form */}
      {showYearForm && (
        <form onSubmit={handleSaveYearRecord} className="bg-white rounded-xl border border-indigo-200 p-5 shadow-sm space-y-4 text-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h3 className="font-bold text-tn-navy text-sm">Add or Update SUPER TET Exam Cycle</h3>
            <button type="button" onClick={() => setShowYearForm(false)} className="text-slate-400 hover:text-slate-600 cursor-pointer"><X className="w-4 h-4" /></button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Exam Year</label>
              <input type="number" value={newYearForm.examYear} onChange={(e) => setNewYearForm({ ...newYearForm, examYear: Number(e.target.value) })} className="w-full px-3 py-2 border rounded-lg" required />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Exam Title</label>
              <input type="text" value={newYearForm.examName} onChange={(e) => setNewYearForm({ ...newYearForm, examName: e.target.value })} className="w-full px-3 py-2 border rounded-lg" required />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Exam Date</label>
              <input type="text" value={newYearForm.examDate} onChange={(e) => setNewYearForm({ ...newYearForm, examDate: e.target.value })} className="w-full px-3 py-2 border rounded-lg" required />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Expected Questions</label>
              <input type="number" value={newYearForm.expectedQuestions} onChange={(e) => setNewYearForm({ ...newYearForm, expectedQuestions: Number(e.target.value) })} className="w-full px-3 py-2 border rounded-lg" required />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Duration (Minutes)</label>
              <input type="number" value={newYearForm.duration} onChange={(e) => setNewYearForm({ ...newYearForm, duration: Number(e.target.value) })} className="w-full px-3 py-2 border rounded-lg" required />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Verification Status</label>
              <select value={newYearForm.verificationStatus} onChange={(e) => setNewYearForm({ ...newYearForm, verificationStatus: e.target.value })} className="w-full px-3 py-2 border rounded-lg bg-white">
                <option value="VERIFIED_OFFICIAL_PYQ">Verified Official PYQ</option>
                <option value="VERIFIED_PAPER_KEY_PENDING">Verified Paper – Answer Key Pending</option>
                <option value="AUTHENTIC_SOURCE_VERIFICATION_PENDING">Authentic Source – Verification Pending</option>
                <option value="PRACTICE_QUESTIONS_ONLY">Practice Questions Only</option>
                <option value="NO_CONFIRMED_EXAM_RECORD">No Confirmed Examination Record</option>
              </select>
            </div>
          </div>
          <button type="submit" className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-bold cursor-pointer">Save Examination Year</button>
        </form>
      )}

      {/* Validated Import Box */}
      {showImportBox && (
        <div className="bg-white rounded-xl border border-indigo-200 p-5 shadow-sm space-y-4 text-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h3 className="font-bold text-tn-navy text-sm">
              Import & Validate Questions for SUPER TET {selectedYear} {isPracticeTab ? '(Practice)' : ''}
            </h3>
            <button onClick={() => setShowImportBox(false)} className="text-slate-400 hover:text-slate-600 cursor-pointer"><X className="w-4 h-4" /></button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Source Provenance</label>
              <input type="text" value={importSource} onChange={(e) => setImportSource(e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
            </div>
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Paste Validated JSON Array or CSV (headers: questionNumber, subject, topic, questionHindi, questionEnglish, optionA_Hi, optionB_Hi, optionC_Hi, optionD_Hi, correctAnswer)
            </label>
            <textarea
              rows={6}
              value={importPayloadText}
              onChange={(e) => setImportPayloadText(e.target.value)}
              placeholder='[{"questionNumber": 6, "subject": "Hindi", "topic": "विलोम", "questionHindi": "...", "questionEnglish": "...", "options": [{"id":"A","textHi":"...","textEn":"..."}, ...], "correctAnswer": "A"}]'
              className="w-full p-3 border rounded-lg font-mono text-[11px]"
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleRunImport}
              disabled={importing}
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold cursor-pointer disabled:opacity-50"
            >
              {importing ? 'Validating & Importing...' : 'Run Validated Import & Generate Report'}
            </button>
          </div>

          {importReport && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-bold text-tn-navy text-xs uppercase tracking-wider">Import Validation Report</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                <div className="p-2 bg-white rounded border">Exam Year: <strong>{importReport.examYear}</strong></div>
                <div className="p-2 bg-white rounded border">Expected: <strong>{importReport.expectedQuestions}</strong></div>
                <div className="p-2 bg-white rounded border">Imported Total: <strong>{importReport.importedQuestions}</strong></div>
                <div className="p-2 bg-white rounded border">Missing Qs: <strong className="text-amber-700">{importReport.missingQuestionsCount}</strong></div>
                <div className="p-2 bg-white rounded border">Duplicates: <strong className="text-red-600">{importReport.duplicateQuestionsCount}</strong></div>
                <div className="p-2 bg-white rounded border">Verified Keys: <strong className="text-emerald-700">{importReport.verifiedAnswers}</strong></div>
                <div className="p-2 bg-white rounded border">Pending Keys: <strong>{importReport.pendingAnswers}</strong></div>
                <div className="p-2 bg-white rounded border">Status: <strong>{importReport.finalPublicationStatus}</strong></div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Year Audit & Question Management Table */}
      {loading ? (
        <div className="p-8 text-center text-xs text-slate-500 bg-white rounded-xl border">Loading SUPER TET audit...</div>
      ) : auditData && (
        <div className="bg-white rounded-xl border border-tn-border p-5 shadow-subtle space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-sm font-bold text-tn-navy">{auditData.exam.examName}</h3>
              <p className="text-xs text-slate-500">
                Imported: <strong>{auditData.actualQuestionsCount}</strong> / Expected: <strong>{auditData.expectedQuestions}</strong> • Missing Question Numbers: <strong>{auditData.missingNumbers.length}</strong> • Duplicates Detected: <strong>{auditData.textDuplicates.length}</strong>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleTogglePublish(true)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer ${
                  auditData.exam.isPublished
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-slate-100 text-slate-700 border border-slate-300'
                }`}
              >
                {auditData.exam.isPublished ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                <span>{auditData.exam.isPublished ? 'Published (Click to Unpublish)' : 'Unpublished (Publish)'}</span>
              </button>
            </div>
          </div>

          {auditData.missingNumbers.length > 0 && (
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900">
              <strong>Missing Question Numbers ({auditData.missingNumbers.length}):</strong>{' '}
              <span className="font-mono text-[11px]">
                {auditData.missingNumbers.slice(0, 35).join(', ')}
                {auditData.missingNumbers.length > 35 ? ` ... (+${auditData.missingNumbers.length - 35} more)` : ''}
              </span>
            </div>
          )}

          {/* Questions List */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-50 text-slate-600 font-semibold border-y border-slate-200">
                <tr>
                  <th className="p-2.5">Q#</th>
                  <th className="p-2.5">Subject / Topic</th>
                  <th className="p-2.5">Question (Bilingual)</th>
                  <th className="p-2.5">Key</th>
                  <th className="p-2.5">Status</th>
                  <th className="p-2.5 text-right">Edit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {auditData.questions.map((q) => (
                  <tr key={q.id} className="hover:bg-slate-50/70">
                    <td className="p-2.5 font-bold text-indigo-900">#{q.questionNumber}</td>
                    <td className="p-2.5">
                      <span className="font-semibold text-slate-800 block">{q.subject}</span>
                      <span className="text-[10px] text-slate-500">{q.topic}</span>
                    </td>
                    <td className="p-2.5 max-w-md">
                      <p className="font-medium text-slate-900 line-clamp-1">{q.questionHindi}</p>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{q.questionEnglish}</p>
                    </td>
                    <td className="p-2.5">
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">{q.correctAnswer}</span>
                    </td>
                    <td className="p-2.5">
                      <span className="text-[10px] font-semibold text-slate-600">{q.answerKeyStatus}</span>
                    </td>
                    <td className="p-2.5 text-right">
                      <button
                        onClick={() => setEditingQuestion(q)}
                        className="p-1.5 rounded bg-slate-100 hover:bg-indigo-100 text-slate-700 hover:text-indigo-700 cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Edit Bilingual Question & Key Revision Modal */}
      {editingQuestion && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 space-y-4 text-xs">
            <div className="flex items-center justify-between border-b pb-2">
              <h3 className="font-bold text-sm text-tn-navy">
                Edit Question #{editingQuestion.questionNumber} ({editingQuestion.examYear})
              </h3>
              <button onClick={() => setEditingQuestion(null)} className="cursor-pointer"><X className="w-4 h-4" /></button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold mb-1">Subject</label>
                <input type="text" value={editingQuestion.subject} onChange={(e) => setEditingQuestion({ ...editingQuestion, subject: e.target.value })} className="w-full px-3 py-1.5 border rounded" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Topic</label>
                <input type="text" value={editingQuestion.topic} onChange={(e) => setEditingQuestion({ ...editingQuestion, topic: e.target.value })} className="w-full px-3 py-1.5 border rounded" />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1">Question (Hindi)</label>
              <textarea rows={2} value={editingQuestion.questionHindi} onChange={(e) => setEditingQuestion({ ...editingQuestion, questionHindi: e.target.value })} className="w-full p-2 border rounded" />
            </div>

            <div>
              <label className="block font-semibold mb-1">Question (English)</label>
              <textarea rows={2} value={editingQuestion.questionEnglish} onChange={(e) => setEditingQuestion({ ...editingQuestion, questionEnglish: e.target.value })} className="w-full p-2 border rounded" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold mb-1">Official Answer Key</label>
                <select value={editingQuestion.correctAnswer} onChange={(e) => setEditingQuestion({ ...editingQuestion, correctAnswer: e.target.value })} className="w-full px-3 py-1.5 border rounded bg-white">
                  <option value="A">Option A</option>
                  <option value="B">Option B</option>
                  <option value="C">Option C</option>
                  <option value="D">Option D</option>
                  <option value="PENDING">PENDING</option>
                  <option value="DISPUTED">DISPUTED</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-1">Revision Reason (if changing key)</label>
                <input type="text" value={revisionReason} onChange={(e) => setRevisionReason(e.target.value)} placeholder="e.g. Revised per PNP High Court order" className="w-full px-3 py-1.5 border rounded" />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1">Explanation (Hindi)</label>
              <textarea rows={2} value={editingQuestion.explanationHindi} onChange={(e) => setEditingQuestion({ ...editingQuestion, explanationHindi: e.target.value })} className="w-full p-2 border rounded" />
            </div>

            <div>
              <label className="block font-semibold mb-1">Explanation (English)</label>
              <textarea rows={2} value={editingQuestion.explanationEnglish} onChange={(e) => setEditingQuestion({ ...editingQuestion, explanationEnglish: e.target.value })} className="w-full p-2 border rounded" />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button onClick={() => setEditingQuestion(null)} className="px-4 py-2 rounded border cursor-pointer">Cancel</button>
              <button onClick={handleSaveEditedQuestion} className="px-5 py-2 rounded bg-indigo-600 text-white font-bold flex items-center gap-1.5 cursor-pointer">
                <Save className="w-3.5 h-3.5" /> Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

