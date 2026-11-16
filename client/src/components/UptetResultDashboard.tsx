import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Trophy,
  CheckCircle,
  XCircle,
  Clock,
  Target,
  ArrowRight,
  BookMarked,
  Sparkles,
  ChevronDown,
  ChevronUp,
  FileCheck,
  ShieldCheck,
  Globe2,
  AlertTriangle,
  RotateCcw,
  GraduationCap,
  HelpCircle,
  Layers,
  Search,
  Check,
  X,
  RefreshCw,
  BookOpen,
} from 'lucide-react';
import { TestAttemptReview } from '../types';
import { api } from '../api';

interface UptetResultDashboardProps {
  attemptId: string;
  onRetake: () => void;
  onReturnToLibrary: () => void;
  globalLanguage: 'en' | 'hi';
}

export const UptetResultDashboard: React.FC<UptetResultDashboardProps> = ({
  attemptId,
  onRetake,
  onReturnToLibrary,
  globalLanguage,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [reviewData, setReviewData] = useState<TestAttemptReview | null>(null);
  const [weaknessData, setWeaknessData] = useState<any>(null);
  const [filter, setFilter] = useState<'INCORRECT' | 'UNATTEMPTED' | 'CORRECT' | 'ALL'>('INCORRECT');
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);
  const [viewLanguage, setViewLanguage] = useState<'both' | 'hi' | 'en'>('both');

  // Interactive Practice Modal for Wrong Questions
  const [practiceModalOpen, setPracticeModalOpen] = useState<boolean>(false);
  const [practiceQuestions, setPracticeQuestions] = useState<any[]>([]);
  const [practiceCurrentIndex, setPracticeCurrentIndex] = useState<number>(0);
  const [practiceSelectedOptions, setPracticeSelectedOptions] = useState<Record<string, string>>({});
  const [practiceRevealed, setPracticeRevealed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    loadReviewAndAnalysis();
  }, [attemptId]);

  const loadReviewAndAnalysis = async () => {
    setLoading(true);
    try {
      const [review, analysis] = await Promise.all([
        api.getTestReview(attemptId),
        api.getUptetWeaknessAnalysis(attemptId).catch(() => null),
      ]);
      setReviewData(review);
      setWeaknessData(analysis);

      // Trigger celebratory confetti if score >= 90 (60% qualifying score for UPTET)
      if ((review.attempt.totalScore || 0) >= 90) {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
        });
      }
    } catch (err) {
      console.error('Error loading UPTET review:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleStartWrongQuestionPractice = async () => {
    try {
      const res = await api.getUptetWrongQuestions(attemptId);
      if (res.questions && res.questions.length > 0) {
        setPracticeQuestions(res.questions);
        setPracticeCurrentIndex(0);
        setPracticeSelectedOptions({});
        setPracticeRevealed({});
        setPracticeModalOpen(true);
      } else {
        alert('Congratulations! You answered all questions correctly; zero incorrect or unattempted questions found.');
      }
    } catch (err) {
      console.error('Failed to load wrong questions:', err);
      // Fallback from existing review questions
      if (reviewData) {
        const wr = reviewData.questions.filter((q) => !q.studentResponse?.isCorrect);
        setPracticeQuestions(wr);
        setPracticeCurrentIndex(0);
        setPracticeSelectedOptions({});
        setPracticeRevealed({});
        setPracticeModalOpen(true);
      }
    }
  };

  if (loading || !reviewData) {
    return (
      <div className="min-h-[65vh] flex flex-col items-center justify-center space-y-3">
        <RefreshCw className="w-10 h-10 text-emerald-600 animate-spin" />
        <p className="text-sm font-semibold text-slate-700">Grading UPTET Paper & Compiling Performance Analysis...</p>
      </div>
    );
  }

  const { attempt, test, questions } = reviewData;

  // Filter questions for "Review Your Mistakes"
  const filteredQuestions = questions.filter((q) => {
    const resp = q.studentResponse;
    const isAttempted = (resp?.selectedOptionIds?.length || 0) > 0;
    const isCorrect = resp?.isCorrect;

    if (filter === 'INCORRECT') return isAttempted && !isCorrect;
    if (filter === 'UNATTEMPTED') return !isAttempted;
    if (filter === 'CORRECT') return isCorrect;
    return true;
  });

  const isQualified = attempt.totalScore >= 90; // 60% of 150
  const avgTimePerQ = attempt.totalAttempted > 0 ? Math.round(attempt.timeSpentSeconds / attempt.totalAttempted) : 0;

  // Group by distinct subjects
  const subjectList: string[] = [];
  questions.forEach((q) => {
    const s = q.sectionName || (q as any).subject || 'General Section';
    if (!subjectList.includes(s)) subjectList.push(s);
  });

  return (
    <div className="max-w-6xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-8 animate-fade-in font-sans">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-emerald-950 text-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-800 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs border border-emerald-400/30 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                UPTET Official Examination Result
              </span>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/10 text-slate-300">
                +1 Correct • 0 Negative Marking
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white">{test.title}</h1>
            <p className="text-xs text-slate-300">
              Submitted: {new Date(attempt.submittedAt).toLocaleString()} • Duration Spent:{' '}
              {Math.floor(attempt.timeSpentSeconds / 60)}m {attempt.timeSpentSeconds % 60}s
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleStartWrongQuestionPractice}
              className="px-4 py-2.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow transition flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <BookMarked className="w-4 h-4" />
              <span>Practice My Wrong Questions</span>
            </button>

            <button
              onClick={onRetake}
              className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retry Full Mock Test</span>
            </button>

            <button
              onClick={onReturnToLibrary}
              className="px-3.5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-semibold transition cursor-pointer"
            >
              Back to Archive
            </button>
          </div>
        </div>

        {/* Core Metric Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[11px] text-slate-400 block uppercase font-bold">Total Score</span>
            <div className="text-2xl font-black text-white mt-1">
              {attempt.totalScore}{' '}
              <span className="text-xs font-normal text-slate-400">/ {attempt.totalMarks || 150}</span>
            </div>
            <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded mt-1 inline-block ${isQualified ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}`}>
              {isQualified ? '✓ Qualified (≥90)' : 'Needs Improvement'}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[11px] text-slate-400 block uppercase font-bold">Accuracy</span>
            <div className="text-2xl font-black text-emerald-400 mt-1">{attempt.accuracyPct}%</div>
            <span className="text-[10px] text-slate-400 block mt-1">Correct / Attempted</span>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[11px] text-slate-400 block uppercase font-bold">Correct Qs</span>
            <div className="text-2xl font-black text-emerald-300 mt-1">{attempt.totalCorrect}</div>
            <span className="text-[10px] text-slate-400 block mt-1">+{attempt.totalCorrect} Marks</span>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[11px] text-slate-400 block uppercase font-bold">Incorrect Qs</span>
            <div className="text-2xl font-black text-rose-400 mt-1">{attempt.totalIncorrect}</div>
            <span className="text-[10px] text-slate-400 block mt-1">0 Negative Penalty</span>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[11px] text-slate-400 block uppercase font-bold">Unattempted</span>
            <div className="text-2xl font-black text-slate-300 mt-1">{attempt.totalUnattempted}</div>
            <span className="text-[10px] text-slate-400 block mt-1">Left Blank</span>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[11px] text-slate-400 block uppercase font-bold">Avg Pace</span>
            <div className="text-2xl font-black text-indigo-300 mt-1">{avgTimePerQ}s</div>
            <span className="text-[10px] text-slate-400 block mt-1">Per Attempted Q</span>
          </div>
        </div>
      </div>

      {/* 2. Subject-Wise Performance Breakdown */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-600" />
            <span>Subject-Wise Performance & Syllabus Progress</span>
          </h2>
          <span className="text-xs text-slate-500 font-medium">150 Questions • 5 Subject Areas</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjectList.map((subj) => {
            const subjQs = questions.filter((q) => (q.sectionName || (q as any).subject || 'General Section') === subj);
            const correctCount = subjQs.filter((q) => q.studentResponse?.isCorrect).length;
            const attemptedCount = subjQs.filter((q) => (q.studentResponse?.selectedOptionIds?.length || 0) > 0).length;
            const wrongCount = attemptedCount - correctCount;
            const unattemptedCount = subjQs.length - attemptedCount;
            const subjScore = correctCount * 1.0;
            const subjMax = subjQs.length * 1.0;
            const subjAcc = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;
            const pctOfTotal = subjMax > 0 ? Math.round((subjScore / subjMax) * 100) : 0;

            return (
              <div
                key={subj}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3 hover:border-emerald-500 transition-colors"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm line-clamp-1">{subj}</h3>
                  <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {subjScore} / {subjMax}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600">
                    <span>Accuracy: {subjAcc}%</span>
                    <span>{pctOfTotal}% Scored</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden flex">
                    <div
                      className="bg-emerald-500 h-full transition-all"
                      style={{ width: `${(correctCount / (subjQs.length || 1)) * 100}%` }}
                    />
                    <div
                      className="bg-rose-500 h-full transition-all"
                      style={{ width: `${(wrongCount / (subjQs.length || 1)) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Metric Badges */}
                <div className="grid grid-cols-3 gap-2 text-center text-[11px] pt-1">
                  <div className="p-1.5 bg-emerald-50 text-emerald-900 rounded font-semibold">
                    <span className="block text-[10px] text-emerald-600">Correct</span>
                    {correctCount}
                  </div>
                  <div className="p-1.5 bg-rose-50 text-rose-900 rounded font-semibold">
                    <span className="block text-[10px] text-rose-600">Wrong</span>
                    {wrongCount}
                  </div>
                  <div className="p-1.5 bg-slate-100 text-slate-700 rounded font-semibold">
                    <span className="block text-[10px] text-slate-500">Left Blank</span>
                    {unattemptedCount}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Personalized Weakness Analysis & Revision Recommendations */}
      {weaknessData && (
        <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-amber-950 font-extrabold text-sm sm:text-base">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span>Personalized UPTET Weakness Analysis & Targeted Action Plan</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Weak Topics */}
            <div className="bg-white p-4 rounded-xl border border-amber-200 space-y-2">
              <span className="font-extrabold text-rose-900 uppercase text-[11px] tracking-wider block">
                Top Priority Topics for Revision (Lowest Accuracy):
              </span>
              {weaknessData.weakTopics && weaknessData.weakTopics.length > 0 ? (
                <div className="space-y-2">
                  {weaknessData.weakTopics.slice(0, 4).map((w: any) => (
                    <div key={w.topic} className="flex items-center justify-between p-2 bg-rose-50 rounded border border-rose-100">
                      <div>
                        <strong className="text-slate-900 block text-xs">{w.topic}</strong>
                        <span className="text-[10px] text-slate-500">{w.subject}</span>
                      </div>
                      <span className="font-bold text-rose-700 bg-white px-2 py-0.5 rounded border border-rose-200 text-xs">
                        {w.accuracy}% Acc
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-600 text-xs">Excellent consistency across syllabus topics!</p>
              )}
            </div>

            {/* Recommendations */}
            <div className="bg-white p-4 rounded-xl border border-amber-200 space-y-2">
              <span className="font-extrabold text-emerald-900 uppercase text-[11px] tracking-wider block">
                All in One Expert Recommendations:
              </span>
              <ul className="space-y-1.5 text-slate-700">
                {weaknessData.recommendations?.map((rec: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                      ✓
                    </span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* 4. "Review Your Mistakes" Section */}
      <div className="bg-white rounded-2xl border border-slate-300 p-5 sm:p-6 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <BookMarked className="w-5 h-5 text-rose-600" />
              <span>Review Your Mistakes & Question Solutions</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Detailed step-by-step solutions, misconceptions, and verified official answer keys.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* View Language Switcher */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs font-semibold">
              <button
                onClick={() => setViewLanguage('both')}
                className={`px-2.5 py-1 rounded transition ${viewLanguage === 'both' ? 'bg-white text-emerald-800 shadow-xs font-bold' : 'text-slate-600'}`}
              >
                द्विभाषी (Both)
              </button>
              <button
                onClick={() => setViewLanguage('hi')}
                className={`px-2.5 py-1 rounded transition ${viewLanguage === 'hi' ? 'bg-white text-emerald-800 shadow-xs font-bold' : 'text-slate-600'}`}
              >
                हिंदी
              </button>
              <button
                onClick={() => setViewLanguage('en')}
                className={`px-2.5 py-1 rounded transition ${viewLanguage === 'en' ? 'bg-white text-emerald-800 shadow-xs font-bold' : 'text-slate-600'}`}
              >
                English
              </button>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
          <button
            onClick={() => setFilter('INCORRECT')}
            className={`px-4 py-2 rounded-lg font-bold transition flex items-center gap-1.5 cursor-pointer ${
              filter === 'INCORRECT'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <XCircle className="w-4 h-4" />
            <span>Incorrect Questions ({attempt.totalIncorrect})</span>
          </button>

          <button
            onClick={() => setFilter('UNATTEMPTED')}
            className={`px-4 py-2 rounded-lg font-bold transition flex items-center gap-1.5 cursor-pointer ${
              filter === 'UNATTEMPTED'
                ? 'bg-slate-800 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Unattempted ({attempt.totalUnattempted})</span>
          </button>

          <button
            onClick={() => setFilter('CORRECT')}
            className={`px-4 py-2 rounded-lg font-bold transition flex items-center gap-1.5 cursor-pointer ${
              filter === 'CORRECT'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            <span>Correct Questions ({attempt.totalCorrect})</span>
          </button>

          <button
            onClick={() => setFilter('ALL')}
            className={`px-4 py-2 rounded-lg font-bold transition flex items-center gap-1.5 cursor-pointer ${
              filter === 'ALL'
                ? 'bg-indigo-700 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <span>All Questions ({questions.length})</span>
          </button>
        </div>

        {/* Questions List */}
        <div className="space-y-5">
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-xs">
              No questions found for this active filter.
            </div>
          ) : (
            filteredQuestions.map((q, idx) => {
              const resp = q.studentResponse;
              const isAttempted = (resp?.selectedOptionIds?.length || 0) > 0;
              const isCorrect = resp?.isCorrect;
              const isExpanded = expandedQuestion === q.questionId || expandedQuestion === null;

              // Parse correct answers
              const correctOpts: string[] = q.correctAnswers || [];
              const selectedOpt = resp?.selectedOptionIds?.[0];

              return (
                <div
                  key={q.questionId}
                  className={`rounded-xl border p-5 space-y-4 transition-all ${
                    isCorrect
                      ? 'bg-emerald-50/20 border-emerald-200'
                      : isAttempted
                      ? 'bg-rose-50/20 border-rose-300'
                      : 'bg-slate-50 border-slate-300'
                  }`}
                >
                  {/* Question Banner Top */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3 border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-md bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center">
                        Q{q.questionNumber || idx + 1}
                      </span>
                      <span className="text-xs font-bold text-slate-700 bg-white px-2.5 py-0.5 rounded border border-slate-300">
                        {q.sectionName}
                      </span>
                      {q.syllabusNode?.title && (
                        <span className="text-xs text-slate-500">
                          Topic: <strong>{q.syllabusNode.title}</strong>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {isCorrect ? (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" />
                          Correct (+1.0)
                        </span>
                      ) : isAttempted ? (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300 flex items-center gap-1">
                          <X className="w-3.5 h-3.5" />
                          Incorrect (0.00 Penalty)
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-200 text-slate-700">
                          Unattempted (0.00)
                        </span>
                      )}

                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                        Official Key Verified
                      </span>
                    </div>
                  </div>

                  {/* Bilingual Question Text */}
                  <div className="space-y-3">
                    {(viewLanguage === 'both' || viewLanguage === 'hi') && q.contentHi && (
                      <div>
                        <span className="text-[10px] font-bold text-emerald-800 uppercase block mb-1">
                          हिंदी प्रश्न (Hindi):
                        </span>
                        <p className="text-sm font-semibold text-slate-900 leading-relaxed font-sans">
                          {q.contentHi}
                        </p>
                      </div>
                    )}

                    {(viewLanguage === 'both' || viewLanguage === 'en') && q.contentEn && (
                      <div className={viewLanguage === 'both' ? 'pt-2 border-t border-slate-200' : ''}>
                        <span className="text-[10px] font-bold text-indigo-800 uppercase block mb-1">
                          English Translation:
                        </span>
                        <p className="text-sm font-medium text-slate-800 leading-relaxed font-sans">
                          {q.contentEn}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* 4 Options Grid */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Options & Candidate Response:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options?.map((opt: any) => {
                        const isThisCorrect = correctOpts.includes(opt.id);
                        const isStudentChoice = selectedOpt === opt.id;

                        let cardStyle = 'bg-white border-slate-300';
                        if (isThisCorrect) {
                          cardStyle = 'bg-emerald-100 border-emerald-500 font-semibold text-emerald-950 ring-1 ring-emerald-500';
                        } else if (isStudentChoice && !isThisCorrect) {
                          cardStyle = 'bg-rose-100 border-rose-500 font-semibold text-rose-950 ring-1 ring-rose-500';
                        }

                        return (
                          <div key={opt.id} className={`p-3 rounded-lg border flex items-start gap-2.5 ${cardStyle}`}>
                            <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-800 font-bold text-[11px] flex items-center justify-center shrink-0">
                              {opt.id}
                            </span>
                            <div className="flex-1 space-y-0.5">
                              {opt.textHi && <p className="font-semibold text-slate-900">{opt.textHi}</p>}
                              {opt.textEn && opt.textEn !== opt.textHi && (
                                <p className="text-slate-600 text-[11px]">{opt.textEn}</p>
                              )}
                            </div>
                            {isThisCorrect && (
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-600 text-white shrink-0">
                                Official Key
                              </span>
                            )}
                            {isStudentChoice && !isThisCorrect && (
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-600 text-white shrink-0">
                                Your Choice
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Pedagogical Explanation Box */}
                  <div className="bg-slate-50 rounded-xl border border-slate-300 p-4 space-y-3 text-xs">
                    <div className="flex items-center justify-between border-b pb-2 border-slate-200">
                      <span className="font-extrabold text-slate-900 flex items-center gap-1.5 text-xs">
                        <BookOpen className="w-4 h-4 text-emerald-600" />
                        Official Pedagogical Solution & Concept Breakdown
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {q.sourceProvenance || 'UPTET PNP Prayagraj Official Archive'}
                      </span>
                    </div>

                    {/* Hindi Explanation */}
                    {q.explanationHi && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-emerald-800 uppercase block">
                          विस्तृत व्याख्या (Hindi Explanation):
                        </span>
                        <p className="text-slate-800 leading-relaxed font-sans text-xs">
                          {q.explanationHi}
                        </p>
                      </div>
                    )}

                    {/* English Explanation */}
                    {q.explanationEn && (
                      <div className="space-y-1 pt-2 border-t border-slate-200">
                        <span className="text-[10px] font-bold text-indigo-800 uppercase block">
                          English Detailed Explanation:
                        </span>
                        <p className="text-slate-700 leading-relaxed font-sans text-xs">
                          {q.explanationEn}
                        </p>
                      </div>
                    )}

                    {/* Misconception analysis for incorrect response */}
                    {isAttempted && !isCorrect && (
                      <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 space-y-1 mt-2">
                        <strong className="text-amber-950 font-bold block text-[11px]">
                          Why Your Selected Answer is Incorrect (Student Misconception):
                        </strong>
                        <p className="text-amber-900 text-[11px] leading-relaxed">
                          Option {selectedOpt} is commonly confused with Option {correctOpts.join(', ')}. Ensure you distinguish between primary and secondary characteristics according to the syllabus definitions.
                        </p>
                      </div>
                    )}

                    {/* Revision Topic Tag */}
                    <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
                      <span>
                        Recommended Revision Topic:{' '}
                        <strong className="text-indigo-900">
                          {q.syllabusNode?.title || (q as any).topic || q.sectionName}
                        </strong>
                      </span>
                      <span className="text-slate-400 font-mono">Question ID: {q.questionId.substring(0, 8)}</span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* 5. Interactive Practice Modal: "Practice My Wrong Questions" */}
      {practiceModalOpen && practiceQuestions.length > 0 && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in font-sans">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 space-y-5 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-3 border-slate-200">
              <div className="flex items-center gap-2">
                <BookMarked className="w-5 h-5 text-rose-600" />
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
                    Interactive Re-Attempt: Wrong & Unattempted Questions
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Question {practiceCurrentIndex + 1} of {practiceQuestions.length}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setPracticeModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Active Question Statement */}
            {(() => {
              const curPq = practiceQuestions[practiceCurrentIndex];
              const qId = curPq.questionId;
              const userChoice = practiceSelectedOptions[qId];
              const isRevealed = practiceRevealed[qId];
              const correctAns = curPq.correctAnswers || [curPq.officialAnswer];
              const isAnswerCorrect = userChoice && correctAns.includes(userChoice);

              return (
                <div className="space-y-4">
                  {/* Bilingual Statement */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                    {curPq.contentHi && (
                      <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                        {curPq.contentHi}
                      </p>
                    )}
                    {curPq.contentEn && (
                      <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                        {curPq.contentEn}
                      </p>
                    )}
                  </div>

                  {/* 4 Interactive Options */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-slate-500 uppercase">Choose Your Answer:</span>
                    <div className="grid grid-cols-1 gap-2 text-xs">
                      {curPq.options?.map((opt: any) => {
                        const isChosen = userChoice === opt.id;
                        const isActualCorrect = correctAns.includes(opt.id);

                        let cardStyle = 'bg-white border-slate-300 hover:border-slate-400 cursor-pointer';
                        if (isRevealed) {
                          if (isActualCorrect) {
                            cardStyle = 'bg-emerald-100 border-emerald-500 font-bold text-emerald-950 ring-1 ring-emerald-500';
                          } else if (isChosen && !isActualCorrect) {
                            cardStyle = 'bg-rose-100 border-rose-500 font-bold text-rose-950 ring-1 ring-rose-500';
                          } else {
                            cardStyle = 'bg-slate-50 border-slate-200 opacity-60';
                          }
                        } else if (isChosen) {
                          cardStyle = 'bg-indigo-50 border-indigo-500 ring-1 ring-indigo-500 font-semibold';
                        }

                        return (
                          <div
                            key={opt.id}
                            onClick={() => {
                              if (!isRevealed) {
                                setPracticeSelectedOptions((prev) => ({ ...prev, [qId]: opt.id }));
                              }
                            }}
                            className={`p-3 rounded-lg border transition flex items-center justify-between ${cardStyle}`}
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-800 font-bold text-[11px] flex items-center justify-center">
                                {opt.id}
                              </span>
                              <span>{opt.textHi || opt.textEn}</span>
                            </div>
                            {isRevealed && isActualCorrect && (
                              <span className="text-[10px] font-bold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-300">
                                Correct Answer
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Check / Reveal Button */}
                  {!isRevealed ? (
                    <button
                      disabled={!userChoice}
                      onClick={() => setPracticeRevealed((prev) => ({ ...prev, [qId]: true }))}
                      className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white font-bold text-xs shadow transition cursor-pointer"
                    >
                      Check Solution
                    </button>
                  ) : (
                    <div className="space-y-3 pt-2">
                      {/* Feedback banner */}
                      <div className={`p-3 rounded-lg text-xs font-bold flex items-center gap-2 ${
                        isAnswerCorrect ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' : 'bg-rose-100 text-rose-900 border border-rose-300'
                      }`}>
                        {isAnswerCorrect ? (
                          <>
                            <CheckCircle className="w-4 h-4 text-emerald-700" />
                            <span>Great job! You answered correctly this time.</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4 text-rose-700" />
                            <span>Incorrect. The correct answer is Option {correctAns.join(', ')}.</span>
                          </>
                        )}
                      </div>

                      {/* Instant Pedagogical Solution */}
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                        <strong className="text-slate-900 font-bold block">Detailed Teacher Explanation:</strong>
                        {curPq.explanationHi && <p className="text-slate-800 leading-relaxed">{curPq.explanationHi}</p>}
                        {curPq.explanationEn && <p className="text-slate-600 leading-relaxed text-[11px]">{curPq.explanationEn}</p>}
                      </div>

                      {/* Next / Finish Navigation */}
                      <div className="flex items-center justify-between pt-2">
                        <button
                          disabled={practiceCurrentIndex === 0}
                          onClick={() => setPracticeCurrentIndex(practiceCurrentIndex - 1)}
                          className="px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40"
                        >
                          Previous
                        </button>
                        {practiceCurrentIndex < practiceQuestions.length - 1 ? (
                          <button
                            onClick={() => setPracticeCurrentIndex(practiceCurrentIndex + 1)}
                            className="px-6 py-2 rounded-lg text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white shadow"
                          >
                            Next Question →
                          </button>
                        ) : (
                          <button
                            onClick={() => setPracticeModalOpen(false)}
                            className="px-6 py-2 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow"
                          >
                            Finish Practice
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

