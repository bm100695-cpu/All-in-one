import React, { useEffect, useMemo, useState } from 'react';
import { AlertTriangle, ArrowLeft, BookOpen, Calendar, CheckCircle2, Clock, ExternalLink, FileCheck2, Filter, Lock, Play, Search, ShieldCheck } from 'lucide-react';
import { api } from '../api';
import { Exam, User } from '../types';

type Paper = {
  id: string; title: string; cycleYear?: number | null; actualExamDate?: string | null; examShift?: string | null;
  paperType?: string | null; totalQuestions: number; totalMarks: number; durationMinutes: number; accessType?: string;
  isBilingual: boolean; sourceReference?: string | null; verificationStatus?: string | null; answerKeyStatus?: string | null;
};
type Availability = { targetPapers: number; verifiedPapers: number; shortfall: number; totalVerifiedQuestions: number; freePapers: number; premiumPapers: number; byYear: Array<{ year: number; verifiedPapers: number; status: string }>; tierCounts: Record<string, number>; sources: Array<{ title: string; url: string; type: string }>; note: string };

export function SscCglPortal({ exam, currentUser, language, onStartExam, onOpenPricingModal, onBackToAllExams }: { exam: Exam; currentUser: User | null; language: 'en' | 'hi'; onStartExam: (testId: string) => void; onOpenPricingModal: (lockedTest?: { id: string; title: string } | null, examSlug?: string) => void; onBackToAllExams: () => void }) {
  const [tab, setTab] = useState<'OVERVIEW' | 'PAPERS' | 'PATTERN' | 'REPORT'>('OVERVIEW');
  const [papers, setPapers] = useState<Paper[]>([]);
  const [report, setReport] = useState<Availability | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [year, setYear] = useState('');
  const [tier, setTier] = useState('');
  const [query, setQuery] = useState('');

  const load = async () => {
    setLoading(true); setError(null);
    try {
      const params = new URLSearchParams();
      if (year) params.set('year', year);
      if (tier) params.set('tier', tier);
      if (query) params.set('q', query);
      const [catalog, availability] = await Promise.all([api.getSscCglCatalog(params), api.getSscCglAvailabilityReport()]);
      setPapers(catalog.papers || []); setReport(availability);
    } catch (err: any) { setError(err?.message || 'SSC CGL records could not be loaded.'); }
    finally { setLoading(false); }
  };
  useEffect(() => { void load(); }, [year, tier]);
  const pattern = exam.patternVersions?.[0];
  const sections = pattern?.sections || [];
  const years = useMemo(() => Array.from({ length: 26 }, (_, n) => 2025 - n), []);

  const openPaper = (paper: Paper) => {
    if ((paper.accessType || 'free').toLowerCase() === 'premium') onOpenPricingModal({ id: paper.id, title: paper.title }, 'ssc-cgl-tier1');
    else onStartExam(paper.id);
  };
  return <div className="max-w-7xl mx-auto space-y-6 pb-16">
    <div className="flex items-center justify-between text-xs">
      <button onClick={onBackToAllExams} className="inline-flex items-center gap-1.5 text-slate-600 hover:text-tn-navy font-medium cursor-pointer"><ArrowLeft className="w-3.5 h-3.5" />All Examinations</button>
      <span className="text-slate-400">All in One • <strong className="text-slate-700">SSC CGL Portal</strong></span>
    </div>
    <section className="bg-white rounded-xl border border-tn-border p-6 shadow-subtle" style={{ borderLeftWidth: '5px', borderLeftColor: '#1E3A8A' }}>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        <div className="space-y-2 max-w-3xl"><p className="text-[11px] font-semibold text-slate-500">STAFF SELECTION COMMISSION</p><h1 className="text-xl sm:text-2xl font-extrabold text-tn-navy tracking-tight">SSC CGL Previous-Year Papers & CBT Practice</h1><p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Only complete papers with a recorded source and verified final answer key are published. This is an independent practice portal, not an official SSC service.</p></div>
        <div className="grid grid-cols-3 gap-2.5 shrink-0 text-center text-xs"><Metric label="Verified papers" value={report?.verifiedPapers ?? '—'} /><Metric label="Verified questions" value={report?.totalVerifiedQuestions ?? '—'} /><Metric label="Shortfall to 100" value={report?.shortfall ?? '—'} warning /></div>
      </div>
    </section>
    <nav className="flex items-center gap-1.5 overflow-x-auto border-b border-tn-border pb-1">{[
      ['OVERVIEW', 'SSC CGL Overview', BookOpen], ['PAPERS', 'Previous-Year Papers', FileCheck2], ['PATTERN', 'Tier-I Pattern', Clock], ['REPORT', 'Verification Report', ShieldCheck],
    ].map(([id, label, Icon]: any) => <button key={id} onClick={() => setTab(id)} className={`px-3.5 py-2 text-xs font-semibold rounded-t-lg border-b-2 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${tab === id ? 'border-tn-blue text-tn-blue bg-white' : 'border-transparent text-slate-600 hover:text-tn-navy hover:bg-slate-50'}`}><Icon className="w-3.5 h-3.5" />{label}</button>)}</nav>
    {error ? <section className="p-5 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-900 flex gap-2"><AlertTriangle className="w-5 h-5 shrink-0" />{error}</section> : null}
    {tab === 'OVERVIEW' && <div className="grid grid-cols-1 lg:grid-cols-12 gap-6"><section className="lg:col-span-8 bg-white rounded-xl border border-tn-border p-5 shadow-subtle space-y-4"><div className="flex items-center justify-between border-b border-slate-100 pb-3"><h2 className="text-sm font-bold text-tn-navy">Verified previous-year papers</h2><button onClick={() => setTab('PAPERS')} className="text-xs font-semibold text-tn-blue hover:underline">Browse archive →</button></div>{loading ? <Empty text="Checking paper verification records…" /> : report?.verifiedPapers ? <PaperList papers={papers.slice(0, 5)} onOpen={openPaper} /> : <Empty text="No complete SSC CGL paper is published yet. The archive will remain empty until legally reusable, source-verified paper content is imported." />}</section><aside className="lg:col-span-4 bg-slate-50 rounded-xl border border-slate-200 p-5 space-y-3"><h2 className="text-sm font-bold text-tn-navy">Access policy</h2><p className="text-xs text-slate-600 leading-relaxed">When verified papers are available, the first five will be free. Premium papers stay hidden from students until their plan explicitly includes that paper.</p><div className="text-xs space-y-1"><p>Free verified papers: <strong>{report?.freePapers ?? 0}</strong></p><p>Premium verified papers: <strong>{report?.premiumPapers ?? 0}</strong></p><p>Default language: <strong>{language === 'hi' ? 'Hindi' : 'English'}</strong></p></div></aside></div>}
    {tab === 'PAPERS' && <section className="space-y-4"><div className="bg-white rounded-xl border border-tn-border p-4 flex flex-col md:flex-row gap-3"><div className="relative grow"><Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" /><input value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && void load()} placeholder="Search date, shift or paper title" className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-xs" /></div><select value={year} onChange={(e) => setYear(e.target.value)} className="px-3 py-2 border border-slate-300 rounded-lg text-xs"><option value="">All years</option>{years.map((item) => <option key={item} value={item}>{item}</option>)}</select><select value={tier} onChange={(e) => setTier(e.target.value)} className="px-3 py-2 border border-slate-300 rounded-lg text-xs"><option value="">All tiers</option><option value="TIER_I">Tier-I</option><option value="TIER_II">Tier-II</option></select><button onClick={() => void load()} className="px-4 py-2 rounded-lg bg-tn-navy text-white text-xs font-semibold flex items-center justify-center gap-1.5"><Filter className="w-3.5 h-3.5" />Apply</button></div><div className="bg-white rounded-xl border border-tn-border p-5">{loading ? <Empty text="Loading source-verified papers…" /> : papers.length ? <PaperList papers={papers} onOpen={openPaper} /> : <Empty text="No matching source-verified SSC CGL paper is available. Filters never surface unverified drafts." />}</div></section>}
    {tab === 'PATTERN' && <section className="bg-white rounded-xl border border-tn-border p-5 space-y-4"><h2 className="text-base font-bold text-tn-navy">{pattern?.versionName || 'SSC CGL pattern awaiting verification'}</h2><p className="text-xs text-slate-600">Each imported paper is linked to its own historical pattern. The table below is the configured 2022-onwards Tier-I pattern, not a blanket rule for all years.</p><div className="overflow-x-auto"><table className="w-full text-xs border-collapse border border-slate-200"><thead className="bg-slate-50"><tr><th className="p-2.5 border">Section</th><th className="p-2.5 border">Questions</th><th className="p-2.5 border">Marks</th><th className="p-2.5 border">Negative</th></tr></thead><tbody>{sections.map((section) => <tr key={section.id}><td className="p-2.5 border font-medium">{section.name}</td><td className="p-2.5 border">{section.totalQuestions}</td><td className="p-2.5 border">{section.totalQuestions * section.marksPerCorrect}</td><td className="p-2.5 border">-{section.negativeMarks}</td></tr>)}<tr className="font-bold bg-slate-50"><td className="p-2.5 border">Total</td><td className="p-2.5 border">{pattern?.totalQuestions ?? '—'}</td><td className="p-2.5 border">{pattern?.totalMarks ?? '—'}</td><td className="p-2.5 border">Duration: {pattern?.durationMinutes ?? '—'} min</td></tr></tbody></table></div></section>}
    {tab === 'REPORT' && <section className="space-y-5"><div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-950 flex gap-3"><AlertTriangle className="w-5 h-5 shrink-0" /><div><strong>Explicit availability report.</strong><p className="mt-1 text-xs leading-relaxed">{report?.note || 'Loading report…'}</p></div></div><div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">{report?.byYear.map((item) => <div key={item.year} className={`p-3 rounded-lg border text-center ${item.verifiedPapers ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200'}`}><p className="font-bold text-xs">{item.year}</p><p className="text-[11px] text-slate-600 mt-1">{item.verifiedPapers ? `${item.verifiedPapers} paper${item.verifiedPapers === 1 ? '' : 's'}` : 'Not verified'}</p></div>)}</div><div className="bg-white rounded-xl border border-tn-border p-5"><h2 className="font-bold text-sm text-tn-navy mb-3">Official source references</h2><ul className="space-y-2">{report?.sources.map((source) => <li key={source.url} className="text-xs"><a className="text-tn-blue hover:underline inline-flex items-center gap-1" href={source.url} target="_blank" rel="noreferrer">{source.title}<ExternalLink className="w-3 h-3" /></a><span className="ml-2 text-slate-500">{source.type}</span></li>)}</ul></div></section>}
  </div>;
}

function Metric({ label, value, warning = false }: { label: string; value: string | number; warning?: boolean }) { return <div className={`px-3 py-2.5 rounded-lg border ${warning ? 'bg-amber-50 border-amber-200' : 'bg-slate-50 border-slate-200'}`}><span className="text-[10px] text-slate-500 block">{label}</span><span className="font-bold text-tn-navy">{value}</span></div>; }
function Empty({ text }: { text: string }) { return <div className="p-7 rounded-lg bg-slate-50 border border-slate-200 text-center text-xs text-slate-600">{text}</div>; }
function PaperList({ papers, onOpen }: { papers: Paper[]; onOpen: (paper: Paper) => void }) { return <div className="space-y-2.5">{papers.map((paper) => <div key={paper.id} className="p-3.5 rounded-lg border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"><div className="space-y-1"><div className="flex flex-wrap items-center gap-2"><span className="font-bold text-tn-navy">{paper.title}</span><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">SOURCE VERIFIED</span>{paper.accessType === 'premium' && <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-bold">PREMIUM</span>}</div><p className="text-[11px] text-slate-500">{paper.cycleYear} • {paper.actualExamDate || 'Date verified in source'}{paper.examShift ? ` • ${paper.examShift}` : ''} • {paper.paperType} • {paper.totalQuestions} questions • {paper.totalMarks} marks • {paper.durationMinutes} min</p></div><button onClick={() => onOpen(paper)} className="px-4 py-2 rounded-lg bg-tn-navy text-white text-xs font-semibold flex items-center justify-center gap-1.5 shrink-0">{paper.accessType === 'premium' ? <Lock className="w-3 h-3" /> : <Play className="w-3 h-3" />}{paper.accessType === 'premium' ? 'Unlock paper' : 'Start test'}</button></div>)}</div>; }
