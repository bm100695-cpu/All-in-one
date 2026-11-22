import React, { useState, useEffect } from 'react';
import {
  IndianRupee,
  Layers,
  FileCheck,
  CheckCircle,
  XCircle,
  AlertCircle,
  Edit3,
  Plus,
  Search,
  Filter,
  RefreshCw,
  Lock,
  Unlock,
  Sparkles,
  TrendingUp,
  Receipt,
  Users,
  Calendar,
  Tag,
  ShieldAlert,
  ArrowUpRight,
  Trash2,
  Eye,
  EyeOff,
  Clock,
  Check,
  X,
} from 'lucide-react';
import { api } from '../api';

type PricingTab = 'OVERVIEW' | 'CONTENT_PRICING' | 'PLANS' | 'AUDIT_LOGS' | 'TRANSACTIONS' | 'GATEWAY_CONFIG';

interface ContentItem {
  id: string;
  type: 'EXAM' | 'TEST';
  title: string;
  examSlug?: string;
  examTitle?: string;
  category?: string;
  accessMode: 'FREE' | 'PAID' | 'PREMIUM' | 'PRIVATE' | 'COMING_SOON' | 'DISABLED';
  accessType?: string;
  accessLevel?: string;
  priceINR: number;
  originalPriceINR?: number;
  discountPercent?: number;
  isPublished: boolean;
  totalQuestions?: number;
  offerStartAt?: string;
  offerEndAt?: string;
}

// Old Booster rows were created before testAccessLimit was persisted. Keep
// their intended pack size visible to admins so the assignment editor and the
// server validation use the same exact-paper rule.
const getRequiredPlanPaperCount = (plan: { code?: string; name?: string; testAccessLimit?: number; testLimit?: number }) => {
  const configured = Math.max(0, Number(plan.testAccessLimit ?? plan.testLimit ?? 0) || 0);
  if (configured > 0) return configured;
  const label = `${plan.code || ''} ${plan.name || ''}`;
  if (/standard/i.test(label)) return 15;
  if (/booster/i.test(label)) return 5;
  return 0;
};

export const AdminPricingManager: React.FC<{ initialTab?: PricingTab }> = ({ initialTab = 'CONTENT_PRICING' }) => {
  const [activeTab, setActiveTab] = useState<PricingTab>(initialTab);
  const [loading, setLoading] = useState<boolean>(true);
  const [overview, setOverview] = useState<any>(null);
  const [contentList, setContentList] = useState<ContentItem[]>([]);
  const [auditLogs, setAuditLogs] = useState<any[]>([]);
  const [actionMessage, setActionMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Cashfree Gateway Form State
  const [gatewayForm, setGatewayForm] = useState({
    appId: '',
    secretKey: '',
    environment: '',
    merchantUpiId: '',
  });
  const [savingGateway, setSavingGateway] = useState<boolean>(false);
  const [showSecretKey, setShowSecretKey] = useState<boolean>(false);

  // Filters
  const [filterType, setFilterType] = useState<'ALL' | 'EXAM' | 'TEST'>('ALL');
  const [filterAccess, setFilterAccess] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Edit Pricing Modal State
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);
  const [editAccessMode, setEditAccessMode] = useState<string>('FREE');
  const [editPriceINR, setEditPriceINR] = useState<number>(0);
  const [editOriginalPriceINR, setEditOriginalPriceINR] = useState<number>(0);
  const [editDiscountPercent, setEditDiscountPercent] = useState<number>(0);
  const [editIsPublished, setEditIsPublished] = useState<boolean>(true);
  const [editNotes, setEditNotes] = useState<string>('');
  const [savingEdit, setSavingEdit] = useState<boolean>(false);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  // Plan Modal State
  const [isPlanModalOpen, setIsPlanModalOpen] = useState<boolean>(false);
  const [editingPlan, setEditingPlan] = useState<any | null>(null);
  const [planForm, setPlanForm] = useState({
    name: '',
    code: '',
    description: '',
    priceINR: 0,
    originalPriceINR: 0,
    discountPercent: 0,
    billingInterval: 'ONCE',
    durationDays: 365,
    testLimit: 0,
    includedMockTests: [] as string[],
    examSlug: '',
    features: ['Access to All Practice Papers', 'Verified CBT Simulator', 'Detailed Step-by-Step Solutions', 'AIR Rank & Percentile Report'],
    featureInput: '',
    isActive: true,
  });
  const [savingPlan, setSavingPlan] = useState<boolean>(false);

  // Refund Action State
  const [refundingId, setRefundingId] = useState<string | null>(null);

  useEffect(() => {
    loadAllData();
  }, []);

  const showNotification = (text: string, type: 'success' | 'error' = 'success') => {
    setActionMessage({ text, type });
    setTimeout(() => setActionMessage(null), 4000);
  };

  const loadAllData = async () => {
    setLoading(true);
    try {
      const [ovData, cpData, logsData] = await Promise.all([
        api.getAdminMonetizationOverview().catch(() => null),
        api.getContentPricing().catch(() => ({ exams: [], tests: [] })),
        api.getAdminAuditLogs({ limit: 50 }).catch(() => ({ auditLogs: [], total: 0 })),
      ]);

      if (ovData) {
        if (Array.isArray(ovData.plans)) {
          ovData.plans = ovData.plans.map((p: any) => ({
            ...p,
            priceINR: Number(p.priceINR ?? p.price ?? 0),
            originalPriceINR: Number(p.originalPriceINR ?? p.originalPrice ?? p.price ?? 0),
            discountPercent: Number(p.discountPercent ?? p.discountPct ?? 0),
            isActive: p.isActive !== undefined ? p.isActive : (p.isPublished ?? true),
          }));
        }
        setOverview(ovData);
      }

      // Merge exams and tests into a unified list
      const merged: ContentItem[] = [];
      const examsSource = (cpData?.exams && cpData.exams.length > 0) ? cpData.exams : (ovData?.exams || []);
      const testsSource = (cpData?.tests && cpData.tests.length > 0) ? cpData.tests : (ovData?.tests || []);

      examsSource.forEach((ex: any) => {
        merged.push({
          id: ex.id,
          type: 'EXAM',
          title: ex.title,
          examSlug: ex.slug,
          category: ex.category?.name || 'General Exam',
          accessMode: ex.accessMode || (Number(ex.priceINR ?? ex.price ?? 0) === 0 ? 'FREE' : 'PAID'),
          priceINR: Number(ex.priceINR ?? ex.price ?? 0),
          originalPriceINR: Number(ex.originalPriceINR ?? ex.originalPrice ?? ex.price ?? 0),
          discountPercent: Number(ex.discountPercent ?? ex.discountPct ?? 0),
          isPublished: ex.isPublished ?? true,
        });
      });

      testsSource.forEach((t: any) => {
        const isPremiumTest = String(t.accessType || '').toLowerCase() === 'premium'
          || ['premium', 'paid'].includes(String(t.accessLevel || '').toLowerCase())
          || ['premium', 'paid'].includes(String(t.accessMode || '').toLowerCase());
        merged.push({
          id: t.id,
          type: 'TEST',
          title: t.title,
          examSlug: t.exam?.slug,
          examTitle: t.exam?.title,
          category: t.exam?.category?.name || 'Mock Tests',
          // accessType is the canonical field. Some older papers still carry
          // accessMode=FREE, so never hide those PREMIUM papers from plan
          // assignment merely because legacy fields disagree.
          accessMode: isPremiumTest ? 'PREMIUM' : (t.accessMode || 'FREE'),
          accessType: t.accessType,
          accessLevel: t.accessLevel,
          priceINR: Number(t.priceINR ?? t.price ?? 0),
          originalPriceINR: Number(t.originalPriceINR ?? t.originalPrice ?? t.price ?? 0),
          discountPercent: Number(t.discountPercent ?? t.discountPct ?? 0),
          isPublished: t.isPublished ?? true,
          totalQuestions: t.totalQuestions,
        });
      });

      setContentList(merged);
      if (logsData?.auditLogs) setAuditLogs(logsData.auditLogs);
    } catch (err: any) {
      console.error('Failed to load pricing manager data:', err);
      showNotification('Error loading data: ' + err.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  // Quick 1-Click Toggle Free / Paid
  const handleQuickToggleFree = async (item: ContentItem) => {
    try {
      const isCurrentlyFree = item.accessMode === 'FREE' || item.priceINR === 0;
      const newMode = isCurrentlyFree ? 'PAID' : 'FREE';
      const input = isCurrentlyFree
        ? window.prompt(`Set the premium price for \"${item.title}\" in INR (minimum ₹1):`, '1')
        : null;
      if (isCurrentlyFree && input === null) return;
      const newPrice = isCurrentlyFree ? Number(input) : 0;
      if (isCurrentlyFree && (!Number.isFinite(newPrice) || newPrice < 1)) {
        showNotification('A premium mock test must be priced at ₹1 or more.', 'error');
        return;
      }
      const newOrig = isCurrentlyFree ? newPrice : 0;
      const newDisc = 0;

      await api.updateContentPricing({
        contentType: item.type,
        contentId: item.id,
        accessMode: newMode,
        priceINR: newPrice,
        pricePaise: Math.round(newPrice * 100),
        originalPriceINR: newOrig,
        discountPercent: newDisc,
        isPublished: true,
        notes: `Quick toggled ${item.title} to ${newMode}`,
      });
      showNotification(`"${item.title}" is now set to ${newMode} (₹${newPrice})`);
      await loadAllData();
    } catch (err: any) {
      showNotification(err.message || 'Failed to update access mode', 'error');
    }
  };

  // Quick Plan Price Variation Handler
  const handleQuickPlanPrice = async (plan: any, newPrice: number) => {
    try {
      const orig = plan.originalPriceINR > newPrice ? plan.originalPriceINR : (newPrice > 0 ? Math.round(newPrice * 2.5) : 0);
      const disc = orig > newPrice ? Math.round(((orig - newPrice) / orig) * 100) : 0;

      await api.updateAdminPlan(plan.id, {
        ...plan,
        price: newPrice,
        priceINR: newPrice,
        pricePaise: Math.round(newPrice * 100),
        originalPrice: orig,
        originalPriceINR: orig,
        discountPct: disc,
        discountPercent: disc,
      });
      showNotification(`Updated "${plan.name}" price to ₹${newPrice}`);
      await loadAllData();
    } catch (err: any) {
      showNotification(err.message || 'Failed to vary plan price', 'error');
    }
  };

  // Open Edit Pricing Modal
  const handleOpenEdit = (item: ContentItem) => {
    setEditingItem(item);
    setEditAccessMode(item.accessMode);
    setEditPriceINR(item.priceINR);
    setEditOriginalPriceINR(item.originalPriceINR || 0);
    setEditDiscountPercent(item.discountPercent || 0);
    setEditIsPublished(item.isPublished);
    setEditNotes('');
  };

  // Save Pricing Changes
  const handleSavePricing = async () => {
    if (!editingItem) return;
    setSavingEdit(true);
    try {
      await api.updateContentPricing({
        contentType: editingItem.type,
        contentId: editingItem.id,
        accessMode: editAccessMode,
        priceINR: Number(editPriceINR),
        pricePaise: Math.round(Number(editPriceINR) * 100),
        originalPriceINR: Number(editOriginalPriceINR),
        discountPercent: Number(editDiscountPercent),
        isPublished: editIsPublished,
        notes: editNotes || `Updated ${editingItem.type} pricing to ${editAccessMode} (₹${editPriceINR})`,
      });

      showNotification(`Successfully updated pricing for "${editingItem.title}" to ₹${editPriceINR}`);
      setEditingItem(null);
      await loadAllData();
    } catch (err: any) {
      showNotification(err.message || 'Failed to update pricing', 'error');
    } finally {
      setSavingEdit(false);
    }
  };

  // Cashfree Gateway Settings Handler
  const handleSaveGateway = async (e: React.FormEvent) => {
    e.preventDefault();
    showNotification('For security, configure CASHFREE_APP_ID, CASHFREE_SECRET_KEY, CASHFREE_ENVIRONMENT, PUBLIC_APP_URL, and PUBLIC_API_URL in the server deployment environment. Dashboard entry is disabled.', 'error');
  };

  // Plan Management Handlers
  const handleOpenCreatePlan = () => {
    setEditingPlan(null);
    setPlanForm({
      name: '',
      code: `PLAN_${Date.now().toString().slice(-4)}`,
      description: '',
      priceINR: 199,
      originalPriceINR: 499,
      discountPercent: 60,
      billingInterval: 'ONCE',
      durationDays: 365,
      testLimit: 0,
      includedMockTests: [],
      examSlug: '',
      features: ['Access to All Practice Papers', 'Verified CBT Simulator', 'Detailed Solutions', 'AIR Rank & Percentile'],
      featureInput: '',
      isActive: true,
    });
    setIsPlanModalOpen(true);
  };

  const handleOpenEditPlan = (plan: any) => {
    setEditingPlan(plan);
    const pINR = Number(plan.priceINR ?? plan.price ?? 0);
    const origINR = Number(plan.originalPriceINR ?? plan.originalPrice ?? (pINR > 0 ? Math.round(pINR * 2.5) : 0));
    const disc = Number(plan.discountPercent ?? plan.discountPct ?? (origINR > pINR ? Math.round(((origINR - pINR) / origINR) * 100) : 0));

    setPlanForm({
      name: plan.name,
      code: plan.code,
      description: plan.description || '',
      priceINR: pINR,
      originalPriceINR: origINR,
      discountPercent: disc,
      billingInterval: plan.billingInterval || 'ONCE',
      durationDays: plan.durationDays || 365,
      testLimit: getRequiredPlanPaperCount(plan),
      includedMockTests: Array.isArray(plan.includedMockTests) ? plan.includedMockTests : [],
      examSlug: plan.examSlug || '',
      features: Array.isArray(plan.features) ? plan.features : ['All Mock Tests Included', 'Full CBT Simulator'],
      featureInput: '',
      isActive: plan.isActive !== undefined ? plan.isActive : (plan.isPublished ?? true),
    });
    setIsPlanModalOpen(true);
  };

  const handleSavePlan = async () => {
    if (!planForm.name.trim()) {
      alert('Plan Name is required');
      return;
    }
    const expectedPaperCount = Math.max(0, Number(planForm.testLimit) || 0);
    if (planForm.isActive && Number(planForm.priceINR) > 0 && planForm.includedMockTests.length === 0) {
      showNotification('A paid plan needs at least one explicitly assigned premium paper before publishing.', 'error');
      return;
    }
    if (planForm.isActive && expectedPaperCount > 0 && planForm.includedMockTests.length !== expectedPaperCount) {
      showNotification(`This plan requires exactly ${expectedPaperCount} assigned premium papers. ${planForm.includedMockTests.length} selected.`, 'error');
      return;
    }
    setSavingPlan(true);
    try {
      if (editingPlan) {
        await api.updateAdminPlan(editingPlan.id, {
          name: planForm.name,
          description: planForm.description,
          price: Number(planForm.priceINR),
          priceINR: Number(planForm.priceINR),
          pricePaise: Math.round(Number(planForm.priceINR) * 100),
          originalPrice: Number(planForm.originalPriceINR),
          originalPriceINR: Number(planForm.originalPriceINR),
          discountPct: Number(planForm.discountPercent),
          discountPercent: Number(planForm.discountPercent),
          billingInterval: planForm.billingInterval,
          durationDays: Number(planForm.durationDays),
          testAccessLimit: Number(planForm.testLimit),
          features: planForm.features,
          includedMockTests: planForm.includedMockTests,
          examSlug: planForm.examSlug || null,
          isPublished: planForm.isActive,
          isActive: planForm.isActive,
        });
        showNotification(`Plan "${planForm.name}" updated successfully (₹${planForm.priceINR})`);
      } else {
        await api.createAdminPlan({
          name: planForm.name,
          code: planForm.code || `PLAN_${Date.now()}`,
          description: planForm.description,
          price: Number(planForm.priceINR),
          priceINR: Number(planForm.priceINR),
          pricePaise: Math.round(Number(planForm.priceINR) * 100),
          originalPrice: Number(planForm.originalPriceINR),
          originalPriceINR: Number(planForm.originalPriceINR),
          discountPct: Number(planForm.discountPercent),
          discountPercent: Number(planForm.discountPercent),
          billingInterval: planForm.billingInterval,
          durationDays: Number(planForm.durationDays),
          testAccessLimit: Number(planForm.testLimit),
          features: planForm.features,
          includedMockTests: planForm.includedMockTests,
          examSlug: planForm.examSlug || null,
          isPublished: planForm.isActive,
          isActive: planForm.isActive,
        });
        showNotification(`New custom plan "${planForm.name}" created successfully (₹${planForm.priceINR})`);
      }
      setIsPlanModalOpen(false);
      await loadAllData();
    } catch (err: any) {
      showNotification(err.message || 'Failed to save plan', 'error');
    } finally {
      setSavingPlan(false);
    }
  };

  const handleDeletePlan = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to deactivate/archive plan "${name}"? Existing subscribers will retain access until expiry.`)) {
      return;
    }
    try {
      await api.deleteAdminPlan(id);
      showNotification(`Plan "${name}" deactivated successfully`);
      await loadAllData();
    } catch (err: any) {
      showNotification(err.message || 'Failed to archive plan', 'error');
    }
  };

  const handleProcessRefund = async (paymentId: string) => {
    if (!confirm('Are you sure you want to process a 100% refund for this transaction?')) return;
    setRefundingId(paymentId);
    try {
      await api.processAdminRefund(paymentId, 'Admin initiated refund from Pricing Manager');
      showNotification('100% Refund processed and verified successfully');
      await loadAllData();
    } catch (err: any) {
      showNotification(err.message || 'Failed to process refund', 'error');
    } finally {
      setRefundingId(null);
    }
  };

  // Filtered Content
  const filteredContent = contentList.filter((item) => {
    if (filterType !== 'ALL' && item.type !== filterType) return false;
    if (filterAccess !== 'ALL' && item.accessMode !== filterAccess) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title?.toLowerCase().includes(q);
      const matchSlug = item.examSlug?.toLowerCase().includes(q);
      const matchCat = item.category?.toLowerCase().includes(q);
      if (!matchTitle && !matchSlug && !matchCat) return false;
    }
    return true;
  });

  // Calculate Metrics
  const totalExams = contentList.filter((i) => i.type === 'EXAM').length;
  const totalFreeExams = contentList.filter((i) => i.type === 'EXAM' && (i.accessMode === 'FREE' || i.priceINR === 0)).length;
  const totalPaidExams = totalExams - totalFreeExams;
  const totalTests = contentList.filter((i) => i.type === 'TEST').length;
  const totalFreeTests = contentList.filter((i) => i.type === 'TEST' && (i.accessMode === 'FREE' || i.priceINR === 0)).length;
  const totalPaidTests = totalTests - totalFreeTests;
  const activePlansCount = overview?.plans?.filter((p: any) => p.isActive)?.length || overview?.plans?.length || 0;
  const totalRevenue = overview?.metrics?.totalRevenueINR || 0;
  const totalSubscribers = overview?.metrics?.paidStudents || 0;

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {actionMessage && (
        <div
          className={`p-4 rounded-xl text-xs font-semibold flex items-center justify-between shadow-lg transition-all border ${
            actionMessage.type === 'success'
              ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
              : 'bg-rose-50 text-rose-900 border-rose-300'
          }`}
        >
          <div className="flex items-center gap-2">
            {actionMessage.type === 'success' ? (
              <CheckCircle className="w-4 h-4 text-emerald-600" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-600" />
            )}
            <span>{actionMessage.text}</span>
          </div>
          <button onClick={() => setActionMessage(null)} className="cursor-pointer">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* 8 Required Dashboard Metrics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Exams</span>
          <div className="text-xl font-extrabold text-slate-900">{totalExams}</div>
          <span className="text-[10px] text-slate-500">Live target exams</span>
        </div>

        <div className="p-3.5 rounded-xl bg-white border border-emerald-100 shadow-xs space-y-1">
          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Free Exams</span>
          <div className="text-xl font-extrabold text-emerald-700">{totalFreeExams}</div>
          <span className="text-[10px] text-emerald-600">Open to public</span>
        </div>

        <div className="p-3.5 rounded-xl bg-white border border-blue-100 shadow-xs space-y-1">
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Paid Exams</span>
          <div className="text-xl font-extrabold text-blue-700">{totalPaidExams}</div>
          <span className="text-[10px] text-blue-600">Monetized tiers</span>
        </div>

        <div className="p-3.5 rounded-xl bg-white border border-emerald-100 shadow-xs space-y-1">
          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Free Tests</span>
          <div className="text-xl font-extrabold text-emerald-700">{totalFreeTests}</div>
          <span className="text-[10px] text-emerald-600">Complimentary CBTs</span>
        </div>

        <div className="p-3.5 rounded-xl bg-white border border-indigo-100 shadow-xs space-y-1">
          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">Paid Tests</span>
          <div className="text-xl font-extrabold text-indigo-700">{totalPaidTests}</div>
          <span className="text-[10px] text-indigo-600">Premium / Locked</span>
        </div>

        <div className="p-3.5 rounded-xl bg-white border border-amber-100 shadow-xs space-y-1">
          <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">Active Plans</span>
          <div className="text-xl font-extrabold text-amber-700">{activePlansCount}</div>
          <span className="text-[10px] text-amber-600">Subscription packs</span>
        </div>

        <div className="p-3.5 rounded-xl bg-white border border-emerald-100 shadow-xs space-y-1">
          <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Total Revenue</span>
          <div className="text-xl font-extrabold text-emerald-800">₹{totalRevenue}</div>
          <span className="text-[10px] text-emerald-700">Verified Cashfree</span>
        </div>

        <div className="p-3.5 rounded-xl bg-white border border-purple-100 shadow-xs space-y-1">
          <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wider">Subscribers</span>
          <div className="text-xl font-extrabold text-purple-700">{totalSubscribers}</div>
          <span className="text-[10px] text-purple-600">Paid aspirants</span>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('CONTENT_PRICING')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'CONTENT_PRICING' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Exams & Mock Tests Pricing ({contentList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('PLANS')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'PLANS' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Tag className="w-3.5 h-3.5 text-amber-600" />
            <span>Custom Subscription Plans</span>
          </button>

          <button
            onClick={() => setActiveTab('AUDIT_LOGS')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'AUDIT_LOGS' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-slate-600" />
            <span>Pricing Change History ({auditLogs.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('TRANSACTIONS')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'TRANSACTIONS' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Receipt className="w-3.5 h-3.5 text-emerald-600" />
            <span>Payments & Refunds</span>
          </button>

          <button
            onClick={() => setActiveTab('GATEWAY_CONFIG')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'GATEWAY_CONFIG' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Cashfree Gateway Settings</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          {activeTab === 'PLANS' && (
            <button
              onClick={handleOpenCreatePlan}
              className="px-3.5 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Create New Plan</span>
            </button>
          )}

          <button
            onClick={loadAllData}
            disabled={loading}
            className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 shadow-xs cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* TAB 1: CONTENT PRICING (EXAMS, PAPERS & TESTS) */}
      {activeTab === 'CONTENT_PRICING' && (
        <div className="space-y-4">
          {/* Search & Filter Toolbar */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by exam name, paper, or mock test..."
                className="w-full pl-9 pr-8 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-2.5 top-2.5 text-slate-400 cursor-pointer">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <select
                value={filterType}
                onChange={(e: any) => setFilterType(e.target.value)}
                className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 cursor-pointer"
              >
                <option value="ALL">All Types (Exams & Tests)</option>
                <option value="EXAM">Exams Only</option>
                <option value="TEST">Tests / Papers Only</option>
              </select>

              <select
                value={filterAccess}
                onChange={(e) => setFilterAccess(e.target.value)}
                className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 cursor-pointer"
              >
                <option value="ALL">All Access Modes</option>
                <option value="FREE">FREE</option>
                <option value="PAID">PAID</option>
                <option value="PREMIUM">PREMIUM</option>
                <option value="PRIVATE">PRIVATE</option>
                <option value="COMING_SOON">COMING SOON</option>
                <option value="DISABLED">DISABLED</option>
              </select>
            </div>
          </div>

          {/* Content Pricing Table */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 border-b border-slate-200 font-semibold text-slate-600 uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="p-3">Type</th>
                    <th className="p-3">Title & Exam Context</th>
                    <th className="p-3">Access Mode</th>
                    <th className="p-3">Live Price (INR)</th>
                    <th className="p-3">Original MRP</th>
                    <th className="p-3">Discount</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredContent.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="p-8 text-center text-xs text-slate-500">
                        No content matching your search or filters.
                      </td>
                    </tr>
                  ) : (
                    filteredContent.map((item) => {
                      const isExam = item.type === 'EXAM';
                      const badgeColor =
                        item.accessMode === 'FREE'
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                          : item.accessMode === 'PAID'
                          ? 'bg-blue-100 text-blue-800 border-blue-200'
                          : item.accessMode === 'PREMIUM'
                          ? 'bg-purple-100 text-purple-800 border-purple-200'
                          : item.accessMode === 'PRIVATE'
                          ? 'bg-amber-100 text-amber-800 border-amber-200'
                          : item.accessMode === 'COMING_SOON'
                          ? 'bg-sky-100 text-sky-800 border-sky-200'
                          : 'bg-rose-100 text-rose-800 border-rose-200';

                      return (
                        <tr key={`${item.type}-${item.id}`} className="hover:bg-slate-50/70 transition-colors">
                          <td className="p-3">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                                isExam ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-800'
                              }`}
                            >
                              {item.type}
                            </span>
                          </td>
                          <td className="p-3">
                            <div className="font-bold text-slate-900">{item.title}</div>
                            <div className="text-[10px] text-slate-400">
                              {item.examTitle ? `Part of ${item.examTitle}` : `Category: ${item.category}`}
                              {item.totalQuestions ? ` • ${item.totalQuestions} Questions` : ''}
                            </div>
                          </td>
                          <td className="p-3">
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${badgeColor}`}>
                              {item.accessMode}
                            </span>
                          </td>
                          <td className="p-3 font-bold text-slate-900">
                            {item.accessMode === 'FREE' || item.priceINR === 0 ? (
                              <span className="text-emerald-700 font-extrabold">FREE (₹0)</span>
                            ) : (
                              <span className="text-slate-900">₹{item.priceINR}</span>
                            )}
                          </td>
                          <td className="p-3 text-slate-500">
                            {item.originalPriceINR && item.originalPriceINR > item.priceINR ? (
                              <span className="line-through text-slate-400">₹{item.originalPriceINR}</span>
                            ) : (
                              '—'
                            )}
                          </td>
                          <td className="p-3 text-slate-600">
                            {item.discountPercent && item.discountPercent > 0 ? (
                              <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                                {item.discountPercent}% OFF
                              </span>
                            ) : (
                              '—'
                            )}
                          </td>
                          <td className="p-3">
                            {item.isPublished ? (
                              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                <span>Published</span>
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                                <EyeOff className="w-3.5 h-3.5 text-slate-400" />
                                <span>Draft / Hidden</span>
                              </span>
                            )}
                          </td>
                          <td className="p-3 text-right">
                            <div className="flex items-center justify-end gap-1.5 ml-auto">
                              <button
                                type="button"
                                onClick={() => handleQuickToggleFree(item)}
                                className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-colors cursor-pointer flex items-center gap-1 ${
                                  item.accessMode === 'FREE' || item.priceINR === 0
                                    ? 'bg-amber-50 hover:bg-amber-100 text-amber-800 border-amber-200'
                                    : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border-emerald-200'
                                }`}
                              >
                                {item.accessMode === 'FREE' || item.priceINR === 0 ? (
                                  <>
                                    <Tag className="w-3 h-3" />
                                    <span>Set Paid</span>
                                  </>
                                ) : (
                                  <>
                                    <Unlock className="w-3 h-3" />
                                    <span>Make Free</span>
                                  </>
                                )}
                              </button>
                              <button
                                type="button"
                                onClick={() => handleOpenEdit(item)}
                                className="px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs border border-blue-200 transition-colors cursor-pointer flex items-center gap-1"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                                <span>Edit Pricing</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CUSTOM SUBSCRIPTION PLANS */}
      {activeTab === 'PLANS' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {overview?.plans?.map((plan: any) => {
              return (
                <div
                  key={plan.id}
                  className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 uppercase tracking-wider font-mono">
                        {plan.code}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          plan.isActive ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {plan.isActive ? 'ACTIVE' : 'INACTIVE'}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-slate-900">{plan.name}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1">{plan.description}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-slate-900">₹{plan.priceINR}</span>
                        {plan.originalPriceINR && plan.originalPriceINR > plan.priceINR && (
                          <span className="text-xs line-through text-slate-400">₹{plan.originalPriceINR}</span>
                        )}
                        <span className="text-[11px] text-slate-500 font-medium">
                          / {plan.billingInterval === 'ONCE' ? 'One-time' : plan.billingInterval?.toLowerCase()}
                        </span>
                      </div>
                    </div>

                    {/* Quick 1-Click Price Vary for Admin */}
                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      <span className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                        ⚡ Quick Vary Price (कीमत तुरंत बदलें):
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {[0, 1, 19, 29, 49, 99, 149, 199, 299, 499, 999].map((pVal) => (
                          <button
                            key={pVal}
                            type="button"
                            onClick={() => handleQuickPlanPrice(plan, pVal)}
                            className={`px-2 py-0.5 rounded text-[11px] font-bold border transition cursor-pointer ${
                              plan.priceINR === pVal
                                ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                            }`}
                          >
                            {pVal === 0 ? 'FREE' : `₹${pVal}`}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Features</span>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>
                            {plan.testLimit ? `Up to ${plan.testLimit} CBT Tests` : 'Unlimited 111+ Mock Tests'}
                          </span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>Authentic NTA CBT Exam Interface</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>Detailed Derivations & Analytics</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleOpenEditPlan(plan)}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <Edit3 className="w-3 h-3" />
                      <span>Edit Plan</span>
                    </button>

                    <button
                      onClick={() => handleDeletePlan(plan.id, plan.name)}
                      className="px-2.5 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Archive</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: AUDIT LOGS */}
      {activeTab === 'AUDIT_LOGS' && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden space-y-3 p-5">
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-500" />
              <span>Immutable Pricing & Access Change History</span>
            </h3>
            <p className="text-xs text-slate-500">
              Every price change, access switch, and plan update is permanently recorded with admin ID and timestamps.
            </p>
          </div>

          {auditLogs.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-500 border border-dashed border-slate-200 rounded-xl">
              No pricing changes recorded yet. Changes made using this portal will appear here automatically.
            </div>
          ) : (
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 border-b border-slate-200 font-semibold text-slate-600 uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="p-3">Timestamp</th>
                    <th className="p-3">Admin</th>
                    <th className="p-3">Action</th>
                    <th className="p-3">Target Content</th>
                    <th className="p-3">Previous State</th>
                    <th className="p-3">New State</th>
                    <th className="p-3">Reason / Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {auditLogs.map((log: any) => (
                    <tr key={log.id} className="hover:bg-slate-50/70 transition-colors font-mono text-[11px]">
                      <td className="p-3 text-slate-500 whitespace-nowrap">
                        {new Date(log.createdAt).toLocaleString('en-IN')}
                      </td>
                      <td className="p-3 font-sans text-slate-900 font-semibold">
                        {log.admin?.name || log.admin?.email || 'Super Admin'}
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-800">
                          {log.action}
                        </span>
                      </td>
                      <td className="p-3 font-sans text-slate-900 font-bold">
                        {log.contentTitle || `${log.contentType} #${log.contentId?.slice(0, 8)}`}
                      </td>
                      <td className="p-3 text-slate-500">
                        {log.previousPrice != null ? `₹${log.previousPrice}` : ''}
                        {log.previousAccess ? ` (${log.previousAccess})` : '—'}
                      </td>
                      <td className="p-3 text-emerald-700 font-bold">
                        {log.newPrice != null ? `₹${log.newPrice}` : ''}
                        {log.newAccess ? ` (${log.newAccess})` : '—'}
                      </td>
                      <td className="p-3 font-sans text-slate-600 max-w-xs truncate">
                        {log.reason || 'Admin modification'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* GATEWAY CONFIGURATION VIEW */}
      {activeTab === 'GATEWAY_CONFIG' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-indigo-50 text-indigo-700">
                <ShieldAlert className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-base font-bold text-slate-900">Cashfree Gateway Deployment Configuration</h3>
                <p className="text-xs text-slate-500">
                  Configure credentials as private server environment variables. The dashboard never receives or stores payment secrets.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSaveGateway} className="max-w-2xl space-y-5">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
              <div>
                <span className="text-slate-500 font-medium">Gateway Status: </span>
                <span className="font-bold text-slate-800">
                  {gatewayForm.environment === 'PRODUCTION' ? '🟢 Live Production Mode' : '🟡 Sandbox Test Mode'}
                </span>
              </div>
              <div className="text-[11px] text-slate-400">
                Live URL: api.cashfree.com/pg
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Cashfree App ID (Client ID)
              </label>
              <input
                type="text"
                value={gatewayForm.appId}
                onChange={(e) => setGatewayForm({ ...gatewayForm, appId: e.target.value })}
                placeholder="Configured privately in the deployment environment"
                className="w-full px-3.5 py-2.5 bg-slate-100 border border-slate-300 rounded-xl text-xs font-mono text-slate-500"
                disabled
              />
              <span className="text-[11px] text-slate-500 mt-1 block">
                Set CASHFREE_APP_ID in the hosting provider's secret environment settings.
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                <span>Cashfree Secret Key</span>
                <button
                  type="button"
                  onClick={() => setShowSecretKey(!showSecretKey)}
                  className="text-indigo-600 hover:text-indigo-800 text-[11px] font-semibold cursor-pointer"
                >
                  {showSecretKey ? 'Hide Secret' : 'Show Secret'}
                </button>
              </label>
              <input
                type={showSecretKey ? 'text' : 'password'}
                value={gatewayForm.secretKey}
                onChange={(e) => setGatewayForm({ ...gatewayForm, secretKey: e.target.value })}
                placeholder="Never entered in the browser"
                className="w-full px-3.5 py-2.5 bg-slate-100 border border-slate-300 rounded-xl text-xs font-mono text-slate-500"
                disabled
              />
              <span className="text-[11px] text-amber-600 mt-1 block font-medium">
                Set CASHFREE_SECRET_KEY privately in the deployment environment; rotate any key previously saved through this dashboard.
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Environment Mode</label>
                <select
                  value={gatewayForm.environment}
                  onChange={(e) => setGatewayForm({ ...gatewayForm, environment: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="PRODUCTION">PRODUCTION (Real UPI, Cards, Netbanking)</option>
                  <option value="TEST">TEST / SANDBOX (Developer Simulation)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Merchant UPI ID (Optional)</label>
                <input
                  type="text"
                  value={gatewayForm.merchantUpiId}
                  onChange={(e) => setGatewayForm({ ...gatewayForm, merchantUpiId: e.target.value })}
                  placeholder="e.g. yourname@okhdfcbank"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                disabled={savingGateway}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md cursor-pointer disabled:opacity-50 transition-all flex items-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>{savingGateway ? 'Checking configuration...' : 'Show secure setup instructions'}</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* TAB 4: TRANSACTIONS & REFUNDS */}
      {activeTab === 'TRANSACTIONS' && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5 space-y-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Receipt className="w-4 h-4 text-slate-500" />
              <span>Cashfree Verified Payment Transactions & Refunds</span>
            </h3>
            <p className="text-xs text-slate-500">
              Official backend signature verified transactions. Includes automated one-click 7-day refund processing.
            </p>
          </div>

          {overview?.recentPayments?.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-500 border border-dashed border-slate-200 rounded-xl">
              No transactions recorded yet. Student purchases will automatically stream here.
            </div>
          ) : (
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 border-b border-slate-200 font-semibold text-slate-600 uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="p-3">Order ID</th>
                    <th className="p-3">Student Aspirant</th>
                    <th className="p-3">Amount</th>
                    <th className="p-3">Gateway</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Date</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {overview?.recentPayments?.map((p: any) => {
                    const isRefunded = p.status === 'REFUNDED';
                    const isRefunding = refundingId === p.id;

                    return (
                      <tr key={p.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="p-3 font-mono text-[11px]">
                          <div className="font-bold text-slate-900">{p.orderId}</div>
                          <div className="text-[10px] text-slate-400">{p.paymentId || 'Pending'}</div>
                        </td>
                        <td className="p-3">
                          <div className="font-bold text-slate-900">{p.user?.name || 'Aspirant'}</div>
                          <div className="text-[11px] text-slate-400">{p.user?.email}</div>
                        </td>
                        <td className="p-3 font-extrabold text-slate-900">₹{p.amount}</td>
                        <td className="p-3 uppercase font-mono text-[11px]">{p.method || 'Cashfree'}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              isRefunded ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                            }`}
                          >
                            {p.status}
                          </span>
                        </td>
                        <td className="p-3 text-slate-500 whitespace-nowrap">
                          {new Date(p.createdAt).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </td>
                        <td className="p-3 text-right whitespace-nowrap">
                          {isRefunded ? (
                            <span className="text-[11px] text-slate-400">100% Refunded</span>
                          ) : (
                            <button
                              disabled={isRefunding}
                              onClick={() => handleProcessRefund(p.id)}
                              className="px-2.5 py-1 rounded bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-semibold cursor-pointer disabled:opacity-50"
                            >
                              {isRefunding ? 'Refunding...' : 'Process Refund'}
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* GATEWAY CONFIGURATION VIEW */}
      {activeTab === 'GATEWAY_CONFIG' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-indigo-50 text-indigo-700">
                <ShieldAlert className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-base font-bold text-slate-900">Cashfree Gateway Deployment Configuration</h3>
                <p className="text-xs text-slate-500">
                  Configure credentials as private server environment variables. The dashboard never receives or stores payment secrets.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSaveGateway} className="max-w-2xl space-y-5">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
              <div>
                <span className="text-slate-500 font-medium">Gateway Status: </span>
                <span className="font-bold text-slate-800">
                  {gatewayForm.environment === 'PRODUCTION' ? '🟢 Live Production Mode' : '🟡 Sandbox Test Mode'}
                </span>
              </div>
              <div className="text-[11px] text-slate-400">
                Live URL: api.cashfree.com/pg
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Cashfree App ID (Client ID)
              </label>
              <input
                type="text"
                value={gatewayForm.appId}
                onChange={(e) => setGatewayForm({ ...gatewayForm, appId: e.target.value })}
                placeholder="Configured privately in the deployment environment"
                className="w-full px-3.5 py-2.5 bg-slate-100 border border-slate-300 rounded-xl text-xs font-mono text-slate-500"
                disabled
              />
              <span className="text-[11px] text-slate-500 mt-1 block">
                Set CASHFREE_APP_ID in the hosting provider's secret environment settings.
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                <span>Cashfree Secret Key</span>
                <button
                  type="button"
                  onClick={() => setShowSecretKey(!showSecretKey)}
                  className="text-indigo-600 hover:text-indigo-800 text-[11px] font-semibold cursor-pointer"
                >
                  {showSecretKey ? 'Hide Secret' : 'Show Secret'}
                </button>
              </label>
              <input
                type={showSecretKey ? 'text' : 'password'}
                value={gatewayForm.secretKey}
                onChange={(e) => setGatewayForm({ ...gatewayForm, secretKey: e.target.value })}
                placeholder="Never entered in the browser"
                className="w-full px-3.5 py-2.5 bg-slate-100 border border-slate-300 rounded-xl text-xs font-mono text-slate-500"
                disabled
              />
              <span className="text-[11px] text-amber-600 mt-1 block font-medium">
                Set CASHFREE_SECRET_KEY privately in the deployment environment; rotate any key previously saved through this dashboard.
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Environment Mode</label>
                <select
                  value={gatewayForm.environment}
                  onChange={(e) => setGatewayForm({ ...gatewayForm, environment: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="PRODUCTION">PRODUCTION (Real UPI, Cards, Netbanking)</option>
                  <option value="TEST">TEST / SANDBOX (Developer Simulation)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Merchant UPI ID (Optional)</label>
                <input
                  type="text"
                  value={gatewayForm.merchantUpiId}
                  onChange={(e) => setGatewayForm({ ...gatewayForm, merchantUpiId: e.target.value })}
                  placeholder="e.g. yourname@okhdfcbank"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                disabled={savingGateway}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md cursor-pointer disabled:opacity-50 transition-all flex items-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>{savingGateway ? 'Checking configuration...' : 'Show secure setup instructions'}</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* EDIT PRICING MODAL */}
      {editingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-5 animate-in fade-in">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900 text-white uppercase tracking-wider">
                  {editingItem.type} PRICING CONTROL
                </span>
                <h3 className="text-base font-extrabold text-slate-900 mt-1">{editingItem.title}</h3>
              </div>
              <button
                onClick={() => setEditingItem(null)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Access Mode Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Access Setting Mode</label>
                <select
                  value={editAccessMode}
                  onChange={(e) => {
                    const mode = e.target.value;
                    setEditAccessMode(mode);
                    if (mode === 'FREE') {
                      setEditPriceINR(0);
                    }
                  }}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 bg-slate-50 focus:outline-none focus:ring-1 focus:ring-blue-600 cursor-pointer"
                >
                  <option value="FREE">FREE — Everyone can access without payment</option>
                  <option value="PAID">PAID — Direct single-purchase payment required</option>
                  <option value="PREMIUM">PREMIUM — Included in subscription plan</option>
                  <option value="PRIVATE">PRIVATE — Selected/invited students only</option>
                  <option value="COMING_SOON">COMING SOON — Visible in catalog but locked</option>
                  <option value="DISABLED">DISABLED — Hidden completely from students</option>
                </select>
              </div>

              {/* Quick Preset Buttons for Admin */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Quick Price Presets (त्वरित मूल्य विकल्प)</span>
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { label: 'FREE (₹0)', price: 0, mode: 'FREE' },
                    { label: '₹19', price: 19, mode: 'PAID' },
                    { label: '₹29', price: 29, mode: 'PAID' },
                    { label: '₹49', price: 49, mode: 'PAID' },
                    { label: '₹99', price: 99, mode: 'PAID' },
                    { label: '₹149', price: 149, mode: 'PAID' },
                    { label: '₹199', price: 199, mode: 'PREMIUM' },
                    { label: '₹299', price: 299, mode: 'PREMIUM' },
                    { label: '₹499', price: 499, mode: 'PREMIUM' },
                    { label: '₹999', price: 999, mode: 'PREMIUM' },
                  ].map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => {
                        setEditPriceINR(preset.price);
                        setEditAccessMode(preset.mode);
                        if (preset.price === 0) {
                          setEditOriginalPriceINR(0);
                          setEditDiscountPercent(0);
                        } else {
                          const suggestedOrig = editOriginalPriceINR > preset.price ? editOriginalPriceINR : Math.round(preset.price * 2.5);
                          setEditOriginalPriceINR(suggestedOrig);
                          setEditDiscountPercent(Math.round(((suggestedOrig - preset.price) / suggestedOrig) * 100));
                        }
                      }}
                      className={`px-2.5 py-1 rounded-md text-xs font-bold border transition cursor-pointer ${
                        editPriceINR === preset.price
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                          : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Fields */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Live Price (₹)</label>
                  <input
                    type="number"
                    min="0"
                    value={editPriceINR}
                    disabled={editAccessMode === 'FREE'}
                    step="0.01"
                    onChange={(e) => setEditPriceINR(Number(e.target.value))}
                    className="w-full p-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 bg-white disabled:bg-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Original MRP (₹)</label>
                  <input
                    type="number"
                    min="0"
                    value={editOriginalPriceINR}
                    disabled={editAccessMode === 'FREE'}
                    step="0.01"
                    onChange={(e) => setEditOriginalPriceINR(Number(e.target.value))}
                    className="w-full p-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 bg-white disabled:bg-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Discount (%)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={editDiscountPercent}
                    disabled={editAccessMode === 'FREE'}
                    onChange={(e) => setEditDiscountPercent(Number(e.target.value))}
                    className="w-full p-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 bg-white disabled:bg-slate-100"
                  />
                </div>
              </div>

              {/* Published Toggle */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-slate-800">Publish in Student Portal</span>
                <input
                  type="checkbox"
                  checked={editIsPublished}
                  onChange={(e) => setEditIsPublished(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 cursor-pointer"
                />
              </div>

              {/* Change Reason Note */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Audit Log Reason</label>
                <input
                  type="text"
                  value={editNotes}
                  onChange={(e) => setEditNotes(e.target.value)}
                  placeholder="e.g. Festival promotional discount or free starter unlock"
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 bg-white"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
              <button
                onClick={() => setEditingItem(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
              >
                Cancel
              </button>
              <button
                disabled={savingEdit}
                onClick={handleSavePricing}
                className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
              >
                {savingEdit ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Saving...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Save Pricing Changes</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CREATE / EDIT PLAN MODAL */}
      {isPlanModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900">
                {editingPlan ? 'Edit Custom Subscription Plan' : 'Create Custom Pricing Plan'}
              </h3>
              <button onClick={() => setIsPlanModalOpen(false)} className="cursor-pointer text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Plan Name *</label>
                <input
                  type="text"
                  value={planForm.name}
                  onChange={(e) => setPlanForm({ ...planForm, name: e.target.value })}
                  placeholder="e.g. JEE Full Pass or Ultimate All-Access"
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Unique Plan Code</label>
                  <input
                    type="text"
                    value={planForm.code}
                    disabled={!!editingPlan}
                    onChange={(e) => setPlanForm({ ...planForm, code: e.target.value.toUpperCase().replace(/\s+/g, '_') })}
                    placeholder="e.g. JEE_PASS_2026"
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-mono font-bold text-slate-900 bg-slate-50 disabled:bg-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Billing Interval</label>
                  <select
                    value={planForm.billingInterval}
                    onChange={(e) => setPlanForm({ ...planForm, billingInterval: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 bg-white cursor-pointer"
                  >
                    <option value="ONCE">One-Time Pack</option>
                    <option value="MONTHLY">Monthly</option>
                    <option value="QUARTERLY">Quarterly (3 Months)</option>
                    <option value="YEARLY">Yearly</option>
                    <option value="LIFETIME">Lifetime Access</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Description</label>
                <textarea
                  rows={2}
                  value={planForm.description}
                  onChange={(e) => setPlanForm({ ...planForm, description: e.target.value })}
                  placeholder="Short description shown to students in pricing modal..."
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 bg-white"
                />
              </div>

              {/* Quick Preset Buttons for Plans */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Quick Price Presets (प्लान का मूल्य तुरंत चुनें)</span>
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {[0, 29, 49, 99, 149, 199, 299, 499, 799, 999].map((pVal) => (
                    <button
                      key={pVal}
                      type="button"
                      onClick={() => {
                        const orig = pVal > 0 ? (planForm.originalPriceINR > pVal ? planForm.originalPriceINR : Math.round(pVal * 2.5)) : 0;
                        const disc = orig > pVal ? Math.round(((orig - pVal) / orig) * 100) : 0;
                        setPlanForm({
                          ...planForm,
                          priceINR: pVal,
                          originalPriceINR: orig,
                          discountPercent: disc,
                        });
                      }}
                      className={`px-2.5 py-1 rounded-md text-xs font-bold border transition cursor-pointer ${
                        planForm.priceINR === pVal
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                          : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300'
                      }`}
                    >
                      {pVal === 0 ? 'FREE' : `₹${pVal}`}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Price (₹) *</label>
                  <input
                    type="number"
                    min="0"
                    value={planForm.priceINR}
                    step="0.01"
                    onChange={(e) => setPlanForm({ ...planForm, priceINR: Number(e.target.value) })}
                    className="w-full p-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Original Price (₹)</label>
                  <input
                    type="number"
                    min="0"
                    value={planForm.originalPriceINR}
                    step="0.01"
                    onChange={(e) => setPlanForm({ ...planForm, originalPriceINR: Number(e.target.value) })}
                    className="w-full p-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Discount (%)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={planForm.discountPercent}
                    onChange={(e) => setPlanForm({ ...planForm, discountPercent: Number(e.target.value) })}
                    className="w-full p-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Duration (Days)</label>
                  <input
                    type="number"
                    min="1"
                    value={planForm.durationDays}
                    onChange={(e) => setPlanForm({ ...planForm, durationDays: Number(e.target.value) })}
                    className="w-full p-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Exact Assigned Premium Papers</label>
                  <input
                    type="number"
                    min="0"
                    value={planForm.testLimit}
                    onChange={(e) => setPlanForm({ ...planForm, testLimit: Number(e.target.value) })}
                    placeholder="0 = plan's configured all-access rules"
                    className="w-full p-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Exam Portal Scope</label>
                <select
                  value={planForm.examSlug}
                  onChange={(e) => setPlanForm({ ...planForm, examSlug: e.target.value, includedMockTests: [] })}
                  className="w-full p-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 bg-white"
                >
                  <option value="">All exam portals</option>
                  {contentList.filter((item) => item.type === 'EXAM').map((exam) => (
                    <option key={exam.id} value={exam.examSlug || ''}>{exam.title}</option>
                  ))}
                </select>
                <p className="mt-1 text-[11px] text-slate-500">Choose a portal for an exam-specific pack, or leave All for platform-wide access.</p>
              </div>

              <div>
                <div className="flex items-center justify-between gap-3">
                  <label className="block text-xs font-bold text-slate-700">Included Mock Tests</label>
                  <span className={`text-[11px] font-bold ${planForm.testLimit > 0 && planForm.includedMockTests.length !== planForm.testLimit ? 'text-rose-600' : 'text-emerald-700'}`}>
                    {planForm.includedMockTests.length} of {planForm.testLimit || 'all-access'} selected
                  </span>
                  <button
                    type="button"
                    onClick={() => setPlanForm({ ...planForm, includedMockTests: [] })}
                    className="text-[11px] font-semibold text-blue-700 hover:underline"
                  >
                    Clear selection
                  </button>
                </div>
                <p className="mt-1 text-[11px] text-slate-500">Every paid plan needs explicit PREMIUM paper assignments. For a finite plan, select exactly the configured count. Active purchasers follow future assignment edits immediately.</p>
                <div className="mt-2 max-h-36 space-y-1 overflow-y-auto rounded-xl border border-slate-200 bg-slate-50 p-2">
                  {contentList.filter((item) => item.type === 'TEST' && item.accessMode !== 'FREE' && (!planForm.examSlug || item.examSlug === planForm.examSlug)).map((test) => {
                    const selected = planForm.includedMockTests.includes(test.id);
                    return (
                      <label key={test.id} className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-xs hover:bg-white">
                        <input
                          type="checkbox"
                          checked={selected}
                          onChange={() => setPlanForm({
                            ...planForm,
                            includedMockTests: selected
                              ? planForm.includedMockTests.filter((id) => id !== test.id)
                              : [...planForm.includedMockTests, test.id],
                          })}
                          className="h-3.5 w-3.5 rounded text-blue-600"
                        />
                        <span className="min-w-0 flex-1 truncate text-slate-800">{test.title}</span>
                        <span className="text-[10px] text-slate-500">{test.examTitle || test.category}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-slate-800">Plan Status</span>
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={planForm.isActive}
                    onChange={(e) => setPlanForm({ ...planForm, isActive: e.target.checked })}
                    className="w-4 h-4 rounded text-blue-600"
                  />
                  <span className="text-xs font-semibold text-slate-700">
                    {planForm.isActive ? 'Active (Purchasable)' : 'Inactive'}
                  </span>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
              <button
                onClick={() => setIsPlanModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
              >
                Cancel
              </button>
              <button
                disabled={savingPlan}
                onClick={handleSavePlan}
                className="px-5 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-md cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
              >
                {savingPlan ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Saving...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>{editingPlan ? 'Update Plan' : 'Create Plan'}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
