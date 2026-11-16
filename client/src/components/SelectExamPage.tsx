import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Check,
  Search,
} from 'lucide-react';
import { Exam, User } from '../types';
import { api } from '../api';

interface SelectExamPageProps {
  currentUser: User | null;
  onExamSelected: (updatedUser: User) => void;
  onLogout?: () => void;
}

export const SelectExamPage: React.FC<SelectExamPageProps> = ({
  currentUser,
  onExamSelected,
  onLogout,
}) => {
  const [exams, setExams] = useState<Exam[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedExamId, setSelectedExamId] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadExams();
  }, []);

  const loadExams = async () => {
    setLoading(true);
    try {
      const res = await api.getExamDirectory();
      const activeList = (res.exams || []).filter((e) => !e.isComingSoon);
      setExams(activeList);
      if (activeList.length > 0) {
        const pre = activeList.find((e) => e.slug === currentUser?.targetExamId) || activeList[0];
        setSelectedExamId(pre.slug);
      }
    } catch (err) {
      console.error('Failed to fetch available examinations:', err);
    } finally {
      setLoading(false);
    }
  };

  const filtered = exams.filter((e) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return e.title.toLowerCase().includes(q) || e.shortName.toLowerCase().includes(q);
  });

  const selectedExam = exams.find((e) => e.slug === selectedExamId) || exams[0];

  const handleConfirm = async () => {
    if (!selectedExamId) {
      setError('Please select an examination to proceed.');
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const res = await api.selectTargetExam(selectedExamId);
      onExamSelected(res.user);
    } catch (err: any) {
      setError(err.message || 'Failed to assign target examination.');
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
      <div className="max-w-5xl mx-auto w-full space-y-6">
        {/* Header Bar */}
        <div className="text-center space-y-3">
          <img
            src="/logo.jpg"
            alt="All in One Logo"
            className="h-16 w-auto mx-auto rounded-xl object-contain bg-white p-1.5 shadow-xs border border-slate-200"
          />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Step 2 of 2: Select Your Target Examination</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-tn-navy tracking-tight">
            Choose Your Examination Portal
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to <strong className="text-tn-navy font-bold">All in One</strong>, {currentUser?.name || 'Candidate'}!
            Only verified active examinations configured on the platform are shown below.
          </p>

          {/* Student Badge Card */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-white border border-tn-border shadow-xs text-xs text-slate-600">
            <span className="font-semibold text-tn-navy">{currentUser?.name}</span>
            <span className="text-slate-300">•</span>
            <span className="font-mono text-slate-500">{currentUser?.email}</span>
            {currentUser?.studentId && (
              <>
                <span className="text-slate-300">•</span>
                <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-[11px] font-bold text-slate-700">
                  ID: {currentUser.studentId}
                </span>
              </>
            )}
            {onLogout && (
              <button onClick={onLogout} className="text-[11px] text-red-600 hover:underline font-semibold ml-2 cursor-pointer">
                Sign Out
              </button>
            )}
          </div>
        </div>

        {/* Search Input */}
        <div className="max-w-md mx-auto relative">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter examinations..."
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-tn-border bg-white text-xs"
          />
        </div>

        {error && (
          <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 max-w-2xl mx-auto text-center font-medium">
            {error}
          </div>
        )}

        {/* Exam Cards Grid */}
        {loading ? (
          <div className="p-12 text-center text-xs text-slate-500">Loading active examinations...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((exam) => {
              const isSelected = selectedExamId === exam.slug;
              const pv = exam.patternVersions?.[0];
              return (
                <div
                  key={exam.id}
                  onClick={() => setSelectedExamId(exam.slug)}
                  className={`p-5 rounded-xl border-2 transition-all cursor-pointer bg-white shadow-xs hover:shadow-md ${
                    isSelected ? 'border-tn-blue ring-2 ring-blue-100' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg text-white flex items-center justify-center shrink-0"
                        style={{ backgroundColor: exam.accentColor || '#1D4ED8' }}
                      >
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-tn-navy">{exam.shortName}</h3>
                        <p className="text-[11px] text-slate-500">{exam.conductingBody}</p>
                      </div>
                    </div>

                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border ${
                        isSelected ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed line-clamp-2">{exam.description}</p>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                    <span>
                      Tests: <strong className="text-tn-navy">{exam.actualTestsCount ?? 0}</strong> • Verified PYQs:{' '}
                      <strong className="text-emerald-700">{(exam.totalVerifiedPYQs || 0).toLocaleString()}</strong>
                    </span>
                    <span className="font-mono">{pv?.durationMinutes ? `${pv.durationMinutes} mins` : ''}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Confirmation Bar */}
        {selectedExam && (
          <div className="p-5 rounded-xl bg-white border border-tn-border shadow-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-0.5 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-tn-navy">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Selected Portal: {selectedExam.shortName}</span>
              </div>
              <p className="text-[11px] text-slate-500">You can switch your target examination anytime from Account Settings.</p>
            </div>

            <button
              onClick={handleConfirm}
              disabled={submitting}
              className="px-6 py-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shrink-0 disabled:opacity-60"
            >
              <span>{submitting ? 'Configuring...' : `Confirm & Enter ${selectedExam.shortName} Portal`}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <div className="text-center text-xs text-slate-400 mt-8">
        All in One – CBT Station • Authentic Government Pattern Examination Simulation
      </div>
    </div>
  );
};
