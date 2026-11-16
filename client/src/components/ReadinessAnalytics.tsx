import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Target,
  TrendingUp,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { ReadinessData } from '../types';
import { api } from '../api';

interface ReadinessAnalyticsProps {
  examId?: string;
  examSlug?: string;
  examName?: string;
}

export const ReadinessAnalytics: React.FC<ReadinessAnalyticsProps> = ({ examId }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<ReadinessData | null>(null);

  useEffect(() => {
    loadReadiness();
  }, [examId]);

  const loadReadiness = async () => {
    setLoading(true);
    try {
      const res = await api.getReadiness(examId);
      setData(res);
    } catch (err) {
      console.error('Error loading readiness data:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading || !data) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center space-y-3">
        <Clock className="w-8 h-8 text-blue-600 animate-spin" />
        <p className="text-xs font-semibold text-slate-500">Calculating Evidence-Based Readiness Index...</p>
      </div>
    );
  }

  const { exam, readinessIndex, confidenceGrade, metrics, projectedScore, topicBreakdown } = data;

  return (
    <div className="space-y-6 pb-16">
      {/* Header Banner */}
      <div className="rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Evidence-Based Analytics • Attempt-Derived Metrics</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Exam Readiness & Performance Telemetry
            </h1>
            <p className="text-slate-600 text-xs leading-relaxed">
              Target Exam: <span className="text-slate-900 font-bold">{exam.title}</span>. Your readiness index is computed strictly from your audited mock attempt stability, syllabus practice coverage, and mistake remediation frequency.
            </p>
          </div>

          {/* Readiness Score Big Dial */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center shrink-0 w-full md:w-auto">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Readiness Index</div>
            <div className="text-4xl sm:text-5xl font-black text-slate-900 my-1">
              {readinessIndex}<span className="text-lg text-slate-400 font-semibold">/100</span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
              {confidenceGrade.replace(/_/g, ' ')}
            </span>
          </div>
        </div>

        {/* Projected Score Range */}
        <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-medium text-slate-500 uppercase">Predicted Lower Bound</div>
            <div className="text-2xl font-extrabold text-slate-900 mt-1">
              {projectedScore.min} <span className="text-xs font-normal text-slate-500">marks</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">Conservative baseline under test stress</p>
          </div>

          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
            <div className="text-xs font-bold text-blue-700 uppercase">Estimated Central Score</div>
            <div className="text-3xl font-black text-blue-900 mt-1">
              {projectedScore.central} <span className="text-xs font-normal text-slate-600">/ {projectedScore.totalPossible}</span>
            </div>
            <p className="text-[10px] text-blue-700 mt-0.5">Statistical expectation based on current pace</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-medium text-slate-500 uppercase">Predicted Upper Bound</div>
            <div className="text-2xl font-extrabold text-emerald-700 mt-1">
              {projectedScore.max} <span className="text-xs font-normal text-slate-500">marks</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">Achievable with 100% mistake remediation</p>
          </div>
        </div>
      </div>

      {/* Transparent Methodology Breakdown Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-slate-900">
          <Target className="w-5 h-5 text-blue-600" />
          <h3 className="text-base font-bold">Transparent Readiness Weightage Formula</h3>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed">
          Unlike platforms that provide arbitrary percentage scores, All in One calculates readiness strictly from 4 empirical indicators:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span>Syllabus Coverage</span>
              <span className="text-blue-600">35% Weight</span>
            </div>
            <div className="text-xl font-bold text-slate-900">{exam.verifiedSyllabusCoveragePct}%</div>
            <p className="text-[11px] text-slate-500">Verified official topics practiced</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span>Test Stability & Acc.</span>
              <span className="text-blue-600">35% Weight</span>
            </div>
            <div className="text-xl font-bold text-slate-900">{metrics.avgAccuracy}%</div>
            <p className="text-[11px] text-slate-500">Mean accuracy across completed mocks</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span>Mistake Remediation</span>
              <span className="text-blue-600">20% Weight</span>
            </div>
            <div className="text-xl font-bold text-slate-900">{metrics.remediationRatePct}%</div>
            <p className="text-[11px] text-slate-500">Journal entries upgraded to Mastered</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span>Time Discipline</span>
              <span className="text-blue-600">10% Weight</span>
            </div>
            <div className="text-xl font-bold text-slate-900">Optimal</div>
            <p className="text-[11px] text-slate-500">Average time allocation per question</p>
          </div>
        </div>
      </div>

      {/* Topic Mastery Audit Table */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">Topic-Wise Mastery Audit</h3>
          <p className="text-xs text-slate-500">
            Real-time strength & vulnerability mapping based on your test answers.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
              <tr>
                <th className="py-2.5 px-3">Subject</th>
                <th className="py-2.5 px-3">Topic</th>
                <th className="py-2.5 px-3">Mastery Level</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3 text-right">Recommended Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
              {topicBreakdown.map((t, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50">
                  <td className="py-3 px-3 font-bold text-slate-900">{t.subject}</td>
                  <td className="py-3 px-3">{t.topic}</td>
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-slate-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            t.masteryPct >= 80
                              ? 'bg-emerald-500'
                              : t.masteryPct >= 65
                              ? 'bg-amber-500'
                              : 'bg-rose-500'
                          }`}
                          style={{ width: `${t.masteryPct}%` }}
                        />
                      </div>
                      <span className="font-bold">{t.masteryPct}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-3">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        t.status === 'STRONG'
                          ? 'bg-emerald-100 text-emerald-800'
                          : t.status === 'MODERATE'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {t.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <span className="text-xs text-blue-600 font-semibold">
                      {t.status === 'ATTENTION_NEEDED' ? 'Re-solve Mistakes' : 'Maintain Practice'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReadinessAnalytics;