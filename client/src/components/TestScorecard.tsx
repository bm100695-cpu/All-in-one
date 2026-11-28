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
} from 'lucide-react';
import { TestAttemptReview, TestQuestion } from '../types';
import { api } from '../api';

interface TestScorecardProps {
  attemptId: string;
  onOpenMistakeJournal: () => void;
  onRetake: () => void;
  globalLanguage: 'en' | 'hi';
}

export const TestScorecard: React.FC<TestScorecardProps> = ({
  attemptId,
  onOpenMistakeJournal,
  onRetake,
  globalLanguage,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [reviewData, setReviewData] = useState<TestAttemptReview | null>(null);
  const [filter, setFilter] = useState<'ALL' | 'CORRECT' | 'INCORRECT' | 'UNATTEMPTED'>('ALL');
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);
  const [deepAiMap, setDeepAiMap] = useState<Record<string, any>>({});
  const [loadingAiMap, setLoadingAiMap] = useState<Record<string, boolean>>({});
  const [solutionLang, setSolutionLang] = useState<'en' | 'hi'>(globalLanguage);

  useEffect(() => {
    loadReview();
  }, [attemptId]);

  const loadReview = async () => {
    setLoading(true);
    try {
      const data = await api.getTestReview(attemptId);
      setReviewData(data);

      // Trigger celebration confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {
      console.error('Error fetching review:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchAiPedagogicalBreakdown = async (questionId: string) => {
    if (deepAiMap[questionId]) {
      setDeepAiMap((prev) => ({ ...prev, [questionId]: null }));
      return;
    }

    setLoadingAiMap((prev) => ({ ...prev, [questionId]: true }));
    try {
      const res = await api.getDeepExplanation(questionId);
      setDeepAiMap((prev) => ({ ...prev, [questionId]: res.explanation }));
    } catch (err) {
      console.error('AI breakdown error:', err);
    } finally {
      setLoadingAiMap((prev) => ({ ...prev, [questionId]: false }));
    }
  };

  if (loading || !reviewData) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center space-y-3">
        <div className="w-10 h-10 rounded-full border-4 border-brand-200 border-t-brand-600 animate-spin" />
        <p className="text-sm font-semibold text-slate-600">Grading Paper & Compiling Performance Audit...</p>
      </div>
    );
  }

  const { attempt, test, questions } = reviewData;

  const filteredQuestions = questions.filter((q) => {
    const resp = q.studentResponse;
    const isAttempted =
      (resp?.selectedOptionIds?.length || 0) > 0 ||
      (resp?.numericalValue !== undefined && resp?.numericalValue !== null);

    if (filter === 'CORRECT') return resp?.isCorrect;
    if (filter === 'INCORRECT') return isAttempted && !resp?.isCorrect;
    if (filter === 'UNATTEMPTED') return !isAttempted;
    return true;
  });

  return (
    <div className="space-y-6 pb-12 sm:space-y-8 sm:pb-16">
      {/* Top Banner Card */}
      <div className="rounded-xl bg-tn-navy text-white p-4 sm:p-8 shadow-card border border-slate-800">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Official NTA Grading Engine Applied</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold">{test.title}</h1>
            <p className="text-xs text-slate-400">
              Submitted on {new Date(attempt.submittedAt).toLocaleString()} • Duration Spent:{' '}
              {Math.floor(attempt.timeSpentSeconds / 60)}m {attempt.timeSpentSeconds % 60}s
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-2 sm:flex sm:w-auto sm:items-center sm:gap-3">
            <button
              onClick={onOpenMistakeJournal}
              className="min-h-11 px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-sm sm:text-xs font-semibold shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <BookMarked className="w-3.5 h-3.5" />
              <span>Mistake Journal</span>
            </button>
            <button
              onClick={onRetake}
              className="min-h-11 px-4 py-2 rounded-lg border border-slate-700 hover:bg-white/10 text-white text-sm sm:text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>All Exams</span>
            </button>
          </div>
        </div>

        {/* Core Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10">
          <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Score</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {attempt.totalScore} <span className="text-sm font-normal text-slate-400">/ {attempt.totalMarks}</span>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Accuracy</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1">
              {attempt.accuracyPct}%
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Cohort Percentile</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 mt-1">
              {attempt.percentile !== null ? `${attempt.percentile}%ile` : 'Calibrating'}
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">
              {attempt.percentile !== null ? 'Verified comparison sample' : 'Populated with ≥3 cohort attempts'}
            </p>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Negative Marks</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-rose-400 mt-1">
              -{attempt.totalIncorrect * 1.0}
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">{attempt.totalIncorrect} Wrong Responses</p>
          </div>
        </div>
      </div>

      {/* Subject-Wise Performance Cards (Physics, Chemistry, Mathematics) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {(['Physics', 'Chemistry', 'Mathematics'] as const).map((subj) => {
          const sb = attempt.subjectBreakdown?.[subj];
          const subjQs = questions.filter((q) => (q.subject || q.sectionName).toLowerCase().includes(subj.toLowerCase().slice(0, 4)));
          const correctCount = sb ? sb.correct : subjQs.filter((q) => q.studentResponse?.isCorrect).length;
          const mcqAttempted = sb ? sb.mcqAttempted : subjQs.filter((q) => q.questionType !== 'NUMERICAL' && (q.studentResponse?.selectedOptionIds?.length || 0) > 0).length;
          const numericalAttempted = sb ? sb.numericalAttempted : subjQs.filter((q) => q.questionType === 'NUMERICAL' && q.studentResponse?.numericalValue !== null && q.studentResponse?.numericalValue !== undefined).length;
          const attemptedCount = mcqAttempted + numericalAttempted;
          const wrongCount = sb ? sb.incorrect : Math.max(0, attemptedCount - correctCount);
          const unattemptedCount = sb ? sb.unattempted : Math.max(0, subjQs.length - attemptedCount);
          const marksObtained = sb ? sb.score : subjQs.reduce((s, q) => s + (q.studentResponse?.marksAwarded || 0), 0);
          const maxMarks = sb ? sb.maxMarks : 100;
          const subjAcc = sb ? sb.accuracyPct : (attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0);

          return (
            <div key={subj} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="font-extrabold text-slate-900 text-sm">{subj}</span>
                <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                  Score: {marksObtained} / {maxMarks}
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-500 font-semibold">
                  <span>Accuracy: {subjAcc}%</span>
                  <span>MCQ: {mcqAttempted} • Num: {numericalAttempted}</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden flex">
                  <div className="bg-emerald-500 h-full transition-all" style={{ width: `${(correctCount / (subjQs.length || 1)) * 100}%` }} />
                  <div className="bg-rose-500 h-full transition-all" style={{ width: `${(wrongCount / (subjQs.length || 1)) * 100}%` }} />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
                <div className="p-1.5 bg-emerald-50 rounded border border-emerald-100 text-emerald-800">
                  <span className="block font-bold">{correctCount}</span>
                  <span className="text-[10px]">Correct</span>
                </div>
                <div className="p-1.5 bg-rose-50 rounded border border-rose-100 text-rose-800">
                  <span className="block font-bold">{wrongCount}</span>
                  <span className="text-[10px]">Wrong</span>
                </div>
                <div className="p-1.5 bg-slate-50 rounded border border-slate-200 text-slate-600">
                  <span className="block font-bold">{unattemptedCount}</span>
                  <span className="text-[10px]">Skipped</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Section-Wise Breakdown Table */}
      {attempt.sectionScores && Object.keys(attempt.sectionScores).length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
            Section-Wise Performance Audit
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3">Section</th>
                  <th className="py-2.5 px-3">Score</th>
                  <th className="py-2.5 px-3">Max Marks</th>
                  <th className="py-2.5 px-3 text-emerald-600 font-bold">Correct</th>
                  <th className="py-2.5 px-3 text-rose-600 font-bold">Incorrect</th>
                  <th className="py-2.5 px-3 text-slate-500">Unattempted</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                {Object.entries(attempt.sectionScores).map(([secName, secStats]) => (
                  <tr key={secName} className="hover:bg-slate-50/50">
                    <td className="py-3 px-3 font-bold text-slate-900">{secName}</td>
                    <td className="py-3 px-3 font-extrabold text-brand-700">{secStats.score}</td>
                    <td className="py-3 px-3 text-slate-500">{secStats.maxMarks}</td>
                    <td className="py-3 px-3 text-emerald-600 font-bold">{secStats.correct}</td>
                    <td className="py-3 px-3 text-rose-600 font-bold">{secStats.wrong}</td>
                    <td className="py-3 px-3 text-slate-400">{secStats.unattempted}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Question Review Controls */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Detailed Question-by-Question Solution Review
            </h3>
            <p className="text-xs text-slate-500">
              Step-by-step derivations, official NTA answer keys, and bilingual explanations.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Bilingual Switch for Review */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              <button
                onClick={() => setSolutionLang('en')}
                className={`px-2.5 py-1 rounded text-xs font-bold ${
                  solutionLang === 'en' ? 'bg-white text-brand-700 shadow-2xs' : 'text-slate-600'
                }`}
              >
                English Explanations
              </button>
              <button
                onClick={() => setSolutionLang('hi')}
                className={`px-2.5 py-1 rounded text-xs font-bold ${
                  solutionLang === 'hi' ? 'bg-white text-brand-700 shadow-2xs' : 'text-slate-600'
                }`}
              >
                हिंदी व्याख्या
              </button>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              {(['ALL', 'CORRECT', 'INCORRECT', 'UNATTEMPTED'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-2.5 py-1 rounded text-xs font-bold transition-colors ${
                    filter === f ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Questions Solution Cards */}
        <div className="space-y-4">
          {filteredQuestions.map((q, idx) => {
            const resp = q.studentResponse;
            const isCorrect = resp?.isCorrect;
            const isAttempted =
              (resp?.selectedOptionIds?.length || 0) > 0 ||
              (resp?.numericalValue !== undefined && resp?.numericalValue !== null);
            const isExpanded = expandedQuestion === q.questionId;
            const aiData = deepAiMap[q.questionId];
            const isAiLoading = loadingAiMap[q.questionId];

            return (
              <div
                key={q.questionId}
                className={`bg-white rounded-2xl border transition-all shadow-xs overflow-hidden ${
                  !isAttempted
                    ? 'border-slate-200'
                    : isCorrect
                    ? 'border-emerald-200'
                    : 'border-rose-200'
                }`}
              >
                {/* Header Bar */}
                <div
                  onClick={() => setExpandedQuestion(isExpanded ? null : q.questionId)}
                  className="p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-extrabold text-sm text-slate-800">
                      Q{q.questionNumber}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                      {q.sectionName}
                    </span>
                    {q.isPYQ && (
                      <span className="text-[11px] px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold border border-blue-200">
                        PYQ {q.pyqYear}
                      </span>
                    )}

                    {/* Result Pill */}
                    {isAttempted ? (
                      isCorrect ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          <CheckCircle className="w-3.5 h-3.5" /> +{q.marks} Correct
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                          <XCircle className="w-3.5 h-3.5" /> -{q.negativeMarks} Incorrect (Added to Journal)
                        </span>
                      )
                    ) : (
                      <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        Unattempted (0 Marks)
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400">
                      {isExpanded ? 'Collapse' : 'View Full Solution'}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </div>

                {/* Expanded Solution Body */}
                {isExpanded && (
                  <div className="p-6 border-t border-slate-100 bg-slate-50/30 space-y-6 animate-in fade-in">
                    {/* Official Question Figure & Equations */}
                    {q.diagramUrl && (
                      <div className="rounded-lg border border-slate-200 bg-white p-2 overflow-x-auto">
                        <img
                          src={q.diagramUrl}
                          alt={`Question ${q.questionNumber} Official Figure`}
                          className="max-w-full h-auto mx-auto block"
                        />
                      </div>
                    )}

                    {/* Question Stem */}
                    <div className="text-sm sm:text-base font-medium text-slate-900 leading-relaxed whitespace-pre-line">
                      {solutionLang === 'hi' && q.contentHi ? q.contentHi : q.contentEn}
                    </div>

                    {/* Numerical Question Solution Breakdown */}
                    {q.questionType === 'NUMERICAL' && (
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                        <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Numerical Answer Evaluation
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-300">
                            <span className="text-emerald-800 font-bold block text-[11px]">Official Key Value:</span>
                            <span className="text-base font-mono font-black text-emerald-950">
                              {q.numericalAnswer !== null && q.numericalAnswer !== undefined ? q.numericalAnswer : (q.correctAnswers?.[0] || 'N/A')}
                            </span>
                          </div>
                          <div className={`p-3 rounded-lg border ${
                            isAttempted
                              ? isCorrect
                                ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                                : 'bg-rose-50 border-rose-300 text-rose-950'
                              : 'bg-slate-100 border-slate-300 text-slate-600'
                          }`}>
                            <span className="font-bold block text-[11px]">Your Entered Value:</span>
                            <span className="text-base font-mono font-black">
                              {resp?.numericalValue !== undefined && resp?.numericalValue !== null
                                ? resp.numericalValue
                                : 'Not Attempted'}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Options Breakdown for MCQs */}
                    {q.questionType !== 'NUMERICAL' && (
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Options Analysis
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {q.options.map((opt, optIndex) => {
                          const isOfficialCorrect = q.correctAnswers?.includes(opt.id);
                          const isStudentChoice = resp?.selectedOptionIds?.includes(opt.id);
                          const optLabel = String.fromCharCode(65 + optIndex);
                          const optText = solutionLang === 'hi' && opt.textHi ? opt.textHi : opt.textEn;

                          let cardStyle = 'border-slate-200 bg-white text-slate-700';
                          if (isOfficialCorrect) {
                            cardStyle = 'border-emerald-500 bg-emerald-50/70 text-emerald-950 font-semibold';
                          } else if (isStudentChoice && !isOfficialCorrect) {
                            cardStyle = 'border-rose-400 bg-rose-50/80 text-rose-950 font-medium';
                          }

                          return (
                            <div
                              key={opt.id}
                              className={`p-3 rounded-xl border flex items-start gap-2.5 text-xs ${cardStyle}`}
                            >
                              <span className="font-bold shrink-0">{optLabel}.</span>
                              <div className="flex-1">
                                <p>{optText}</p>
                                <div className="flex items-center gap-2 mt-1">
                                  {isOfficialCorrect && (
                                    <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1">
                                      <CheckCircle className="w-3 h-3" /> Correct Key
                                    </span>
                                  )}
                                  {isStudentChoice && (
                                    <span className="text-[10px] text-brand-700 font-bold">
                                      (Your Selection)
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    )}

                    {/* Step-by-Step Verified Solution */}
                    <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          <span>Step-by-Step Verified Derivation</span>
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {solutionLang === 'hi' ? 'हिंदी व्याख्या' : 'English Derivation'}
                        </span>
                      </div>
                      <div className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed whitespace-pre-line bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                        {solutionLang === 'hi' && q.explanationHi
                          ? q.explanationHi
                          : q.explanationEn || 'Derivation available in official answer key.'}
                      </div>
                    </div>

                    {/* Source Provenance & Quality Stamp */}
                    <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Source: {q.sourceProvenance}</span>
                        </span>
                        {q.reviewerName && (
                          <span className="flex items-center gap-1 font-semibold text-slate-700">
                            <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                            <span>Reviewed by: {q.reviewerName}</span>
                          </span>
                        )}
                      </div>

                      {/* AI Deep Pedagogical Breakdown Button */}
                      <button
                        onClick={() => fetchAiPedagogicalBreakdown(q.questionId)}
                        disabled={isAiLoading}
                        className="px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs transition-colors flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                        <span>{isAiLoading ? 'Synthesizing...' : 'AI Pedagogical Breakdown'}</span>
                      </button>
                    </div>

                    {/* AI Pedagogical Drawer if active */}
                    {aiData && (
                      <div className="p-4 rounded-xl bg-brand-50 border border-brand-200 space-y-3 animate-in fade-in">
                        <div className="flex items-center gap-2 text-xs font-bold text-brand-900">
                          <Sparkles className="w-4 h-4 text-brand-600" />
                          <span>All in One Masterclass Note ({aiData.topic})</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div className="p-3 bg-white/80 rounded-lg border border-brand-100">
                            <p className="font-bold text-brand-800">⚠️ Common Examiner Trap</p>
                            <p className="text-slate-600 mt-1">{aiData.englishBreakdown?.trapAlert}</p>
                          </div>
                          <div className="p-3 bg-white/80 rounded-lg border border-brand-100">
                            <p className="font-bold text-emerald-800">⚡ Exam Speed Tip</p>
                            <p className="text-slate-600 mt-1">{aiData.englishBreakdown?.speedTip}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
