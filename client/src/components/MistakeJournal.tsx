import React, { useState, useEffect } from 'react';
import {
  BookMarked,
  Filter,
  CheckCircle,
  AlertCircle,
  RotateCcw,
  Sparkles,
  Check,
  ChevronDown,
  Edit3,
  Save,
  Tag,
  Clock,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { MistakeEntry } from '../types';
import { api } from '../api';

interface MistakeJournalProps {
  language: 'en' | 'hi';
  examId?: string;
  examSlug?: string;
  examName?: string;
}

export const MistakeJournal: React.FC<MistakeJournalProps> = ({ language, examId, examSlug, examName }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [mistakes, setMistakes] = useState<MistakeEntry[]>([]);
  const [summary, setSummary] = useState<any>(null);
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [tagFilter, setTagFilter] = useState<string>('');
  const [activeReAttemptId, setActiveReAttemptId] = useState<string | null>(null);
  const [reAttemptSelection, setReAttemptSelection] = useState<string[]>([]);
  const [reAttemptResult, setReAttemptResult] = useState<{ isCorrect: boolean; explanationEn: string } | null>(null);
  const [editingNotesId, setEditingNotesId] = useState<string | null>(null);
  const [noteText, setNoteText] = useState<string>('');

  useEffect(() => {
    loadMistakes();
  }, [statusFilter, tagFilter, examSlug]);

  const loadMistakes = async () => {
    setLoading(true);
    try {
      const res = await api.getMistakes({ status: statusFilter, tag: tagFilter, examId, examSlug });
      const rawMistakes = res.mistakes || [];
      setMistakes(rawMistakes);
      setSummary(res.summary);
    } catch (err) {
      console.error('Error loading mistake journal:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateTag = async (id: string, newTag: string) => {
    try {
      await api.updateMistake(id, { mistakeTag: newTag });
      loadMistakes();
    } catch (err) {
      console.error('Error updating tag:', err);
    }
  };

  const handleSaveNotes = async (id: string) => {
    try {
      await api.updateMistake(id, { userNotes: noteText });
      setEditingNotesId(null);
      loadMistakes();
    } catch (err) {
      console.error('Error updating notes:', err);
    }
  };

  const handleReAttemptSubmit = async (entry: MistakeEntry) => {
    try {
      const res = await api.reAttemptMistake(entry.id, {
        selectedOptionIds: reAttemptSelection,
      });
      setReAttemptResult({
        isCorrect: res.isCorrect,
        explanationEn: res.explanationEn,
      });
      loadMistakes();
    } catch (err) {
      console.error('Error submitting re-attempt:', err);
    }
  };

  const tagLabels: Record<string, { label: string; color: string; desc: string }> = {
    CONCEPTUAL_GAP: { label: 'Conceptual Gap', color: 'bg-rose-100 text-rose-800 border-rose-200', desc: 'Theory or principle misunderstood' },
    CALCULATION_ERROR: { label: 'Calculation Error', color: 'bg-amber-100 text-amber-800 border-amber-200', desc: 'Arithmetic / sign slip' },
    SILLY_MISTAKE: { label: 'Silly Mistake', color: 'bg-orange-100 text-orange-800 border-orange-200', desc: 'Rushed option marking' },
    MISREAD_QUESTION: { label: 'Misread Question', color: 'bg-blue-100 text-blue-800 border-blue-200', desc: 'Missed "NOT" or units' },
    RAN_OUT_OF_TIME: { label: 'Time Crunch', color: 'bg-purple-100 text-purple-800 border-purple-200', desc: 'Solvable with 2 more minutes' },
    BLIND_GUESS: { label: 'Blind Guess', color: 'bg-slate-100 text-slate-800 border-slate-200', desc: 'Random attempt' },
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Header */}
      <div className="rounded-3xl bg-gradient-to-r from-rose-950 via-slate-900 to-indigo-950 text-white p-6 sm:p-10 shadow-xl border border-rose-900/40">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold border border-rose-500/30">
            <BookMarked className="w-3.5 h-3.5" />
            <span>Core Differentiator • Active Spaced Repetition</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Persistent Mistake Journal
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Every error from your mock tests and practice sessions is permanently cataloged here. Track whether mistakes stem from conceptual gaps, calculation slips, or time crunches, and re-solve them until fully mastered.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Logged Mistakes</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {summary?.totalMistakes || 0}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Needs Attention</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-rose-400 mt-1">
              {summary?.statusCounts?.NEEDS_ATTENTION || 0}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Revising</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 mt-1">
              {summary?.statusCounts?.REVISING || 0}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Mastered</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1">
              {summary?.statusCounts?.MASTERED || 0}
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
          {[
            { id: '', label: 'All Entries' },
            { id: 'NEEDS_ATTENTION', label: 'Needs Attention' },
            { id: 'REVISING', label: 'Revising' },
            { id: 'MASTERED', label: 'Mastered' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setStatusFilter(item.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                statusFilter === item.id
                  ? 'bg-white text-brand-700 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mistake Tag Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <button
            onClick={() => setTagFilter('')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
              tagFilter === ''
                ? 'bg-slate-900 text-white'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            All Tags
          </button>
          {Object.entries(tagLabels).map(([key, item]) => (
            <button
              key={key}
              onClick={() => setTagFilter(key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                tagFilter === key
                  ? 'bg-slate-900 text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mistake Items List */}
      {loading ? (
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="h-44 bg-slate-200 rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : mistakes.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
          <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-800">No mistakes found</h3>
          <p className="text-xs text-slate-500 mt-1">
            Either you haven't made any mistakes with this filter, or you have mastered all your errors!
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {mistakes.map((entry) => {
            const q = entry.question;
            const tagMeta = tagLabels[entry.mistakeTag] || tagLabels.CONCEPTUAL_GAP;
            const isReAttempting = activeReAttemptId === entry.id;
            const isEditingNotes = editingNotesId === entry.id;

            return (
              <div
                key={entry.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all hover:border-slate-300"
              >
                {/* Card Header Meta */}
                <div className="p-5 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-slate-50/50">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-brand-50 text-brand-700 border border-brand-200">
                      {q.exam?.shortName}
                    </span>
                    {q.syllabusNode && (
                      <span className="text-xs font-semibold text-slate-600">
                        {q.syllabusNode.title}
                      </span>
                    )}
                    {q.isPYQ && (
                      <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        PYQ {q.pyqYear}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Status Pill */}
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                        entry.revisionStatus === 'MASTERED'
                          ? 'bg-emerald-100 text-emerald-800'
                          : entry.revisionStatus === 'REVISING'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {entry.revisionStatus.replace('_', ' ')}
                    </span>

                    {/* Tag Dropdown Pill */}
                    <div className="relative inline-block">
                      <select
                        value={entry.mistakeTag}
                        onChange={(e) => handleUpdateTag(entry.id, e.target.value)}
                        className={`text-xs font-bold px-2.5 py-1 rounded-md border cursor-pointer ${tagMeta.color}`}
                        title="Click to re-classify mistake root cause"
                      >
                        {Object.entries(tagLabels).map(([k, meta]) => (
                          <option key={k} value={k}>
                            {meta.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Question Stem */}
                <div className="p-6 space-y-4">
                  <div className="text-sm font-medium text-slate-900 leading-relaxed whitespace-pre-line">
                    {language === 'hi' && q.contentHi ? q.contentHi : q.contentEn}
                  </div>

                  {/* Re-Attempt Mode */}
                  {isReAttempting ? (
                    <div className="p-5 rounded-xl bg-indigo-50/70 border border-indigo-200 space-y-4 animate-in fade-in">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-indigo-950 uppercase tracking-wider flex items-center gap-1.5">
                          <RotateCcw className="w-4 h-4 text-indigo-600" />
                          <span>Active Re-solve Mode</span>
                        </span>
                        <span className="text-[11px] text-indigo-700">Pick the correct option</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = reAttemptSelection.includes(opt.id);
                          const optLabel = String.fromCharCode(65 + optIdx);
                          const optText = language === 'hi' && opt.textHi ? opt.textHi : opt.textEn;

                          return (
                            <button
                              key={opt.id}
                              onClick={() => setReAttemptSelection([opt.id])}
                              className={`p-3 rounded-xl border text-left text-xs font-medium flex items-start gap-2.5 transition-colors ${
                                isSelected
                                  ? 'bg-brand-600 border-brand-600 text-white shadow-xs'
                                  : 'bg-white border-indigo-200 hover:bg-indigo-50 text-slate-800'
                              }`}
                            >
                              <span className="font-bold">{optLabel}.</span>
                              <span>{optText}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Result Alert */}
                      {reAttemptResult && (
                        <div
                          className={`p-3.5 rounded-xl border text-xs font-medium space-y-2 ${
                            reAttemptResult.isCorrect
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                              : 'bg-rose-50 border-rose-300 text-rose-950'
                          }`}
                        >
                          <div className="font-bold flex items-center gap-1.5">
                            {reAttemptResult.isCorrect ? (
                              <>
                                <CheckCircle className="w-4 h-4 text-emerald-600" />
                                <span>Brilliant! Correctly solved. Status promoted to Revising/Mastered.</span>
                              </>
                            ) : (
                              <>
                                <AlertCircle className="w-4 h-4 text-rose-600" />
                                <span>Incorrect selection. Review the step-by-step derivation below.</span>
                              </>
                            )}
                          </div>
                          <div className="whitespace-pre-line text-slate-700 pt-1 border-t border-slate-200/60">
                            {reAttemptResult.explanationEn}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-end gap-2 pt-1">
                        <button
                          onClick={() => {
                            setActiveReAttemptId(null);
                            setReAttemptResult(null);
                          }}
                          className="px-3.5 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 text-xs font-bold hover:bg-slate-50"
                        >
                          Close Re-solve
                        </button>
                        <button
                          onClick={() => handleReAttemptSubmit(entry)}
                          disabled={reAttemptSelection.length === 0}
                          className="px-4 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-xs disabled:opacity-50"
                        >
                          Verify Answer
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 pt-1">
                      <button
                        onClick={() => {
                          setActiveReAttemptId(entry.id);
                          setReAttemptSelection([]);
                          setReAttemptResult(null);
                        }}
                        className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 shadow-2xs"
                      >
                        <RotateCcw className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Re-Solve Question Now</span>
                      </button>
                    </div>
                  )}

                  {/* Student Self-Reflection Notes */}
                  <div className="pt-3 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                        <Edit3 className="w-3.5 h-3.5 text-slate-400" />
                        <span>Why I Got This Wrong (Personal Reflection)</span>
                      </span>
                      {!isEditingNotes && (
                        <button
                          onClick={() => {
                            setEditingNotesId(entry.id);
                            setNoteText(entry.userNotes || '');
                          }}
                          className="text-xs font-semibold text-brand-600 hover:underline"
                        >
                          {entry.userNotes ? 'Edit Reflection' : '+ Add Note'}
                        </button>
                      )}
                    </div>

                    {isEditingNotes ? (
                      <div className="space-y-2">
                        <textarea
                          rows={2}
                          value={noteText}
                          onChange={(e) => setNoteText(e.target.value)}
                          placeholder="e.g. Forgot that static friction adjusts to applied force, or missed calculating limiting threshold..."
                          className="w-full p-3 rounded-xl border border-brand-300 bg-brand-50/20 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-400"
                        />
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setEditingNotesId(null)}
                            className="px-3 py-1 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleSaveNotes(entry.id)}
                            className="px-3.5 py-1 rounded-lg bg-brand-600 text-white text-xs font-bold shadow-xs flex items-center gap-1"
                          >
                            <Save className="w-3 h-3" /> Save Note
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-xs text-slate-600 italic bg-slate-50 p-3 rounded-xl border border-slate-100">
                        {entry.userNotes || 'No reflection added yet. Document what tripped you up to avoid repeating it.'}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
