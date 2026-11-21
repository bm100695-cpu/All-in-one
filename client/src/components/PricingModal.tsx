import React, { useState, useEffect } from 'react';
import {
  X,
  Check,
  Zap,
  ShieldCheck,
  Sparkles,
  Lock,
  Gift,
  ArrowRight,
  RotateCcw,
  AlertCircle,
  Clock,
  CheckCircle2,
  Loader2,
  CreditCard,
  Landmark,
  Smartphone,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SubscriptionPlan, User } from '../types';
import { api, getStoredToken } from '../api';

type CashfreeEnvironment = 'sandbox' | 'production';
type CheckoutMethod = 'HOSTED_CHECKOUT' | 'GOOGLE_PAY' | 'PHONEPE' | 'PAYTM' | 'OTHER_UPI' | 'UPI_QR' | 'CARD' | 'NETBANKING';

interface NativeCashfreeBridge {
  isAvailable?: () => boolean;
  getAvailableUpiApps?: () => string;
  startUpiIntentCheckout: (
    paymentSessionId: string,
    orderId: string,
    environment: CashfreeEnvironment,
    preferredApp?: 'GOOGLE_PAY' | 'PHONEPE' | 'PAYTM' | 'OTHER',
  ) => void;
}

declare global {
  interface Window {
    AndroidCashfree?: NativeCashfreeBridge;
  }
}

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess?: (planCode: string) => void;
  lockedTest?: {
    id: string;
    title: string;
    priceINR?: number;
  } | null;
  currentUser?: User | null;
  userReferralCredits?: number;
  onCreditRedeemed?: (testId: string) => void;
  onOpenReferral?: () => void;
  examSlug?: string;
  onOpenAuth?: () => void;
}

export const PricingModal: React.FC<PricingModalProps> = ({
  isOpen,
  onClose,
  onPaymentSuccess,
  lockedTest,
  currentUser,
  userReferralCredits = 0,
  onCreditRedeemed,
  onOpenReferral,
  examSlug,
  onOpenAuth,
}) => {
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlanCode, setSelectedPlanCode] = useState<string>('');
  const [processingPlanId, setProcessingPlanId] = useState<string | null>(null);
  const [redeemingCredit, setRedeemingCredit] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  const [gatewayConfig, setGatewayConfig] = useState<any>(null);
  const [couponInput, setCouponInput] = useState<string>('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discountPct: number; examSlug?: string | null } | null>(null);
  const [applyingCoupon, setApplyingCoupon] = useState<boolean>(false);

  const [verifyingPayment, setVerifyingPayment] = useState<boolean>(false);
  const [activeOrderId, setActiveOrderId] = useState<string | null>(null);
  const [activePlanCode, setActivePlanCode] = useState<string | null>(null);
  const [activePlanName, setActivePlanName] = useState<string | null>(null);
  const [nativeCheckout, setNativeCheckout] = useState<{
    paymentSessionId: string;
    orderId: string;
    environment: CashfreeEnvironment;
  } | null>(null);
  const [nativeUpiApps, setNativeUpiApps] = useState<string[]>([]);
  const [checkoutPlan, setCheckoutPlan] = useState<SubscriptionPlan | null>(null);
  const [selectedCheckoutMethod, setSelectedCheckoutMethod] = useState<CheckoutMethod | null>(null);

  // User ke active exam slug ya target exam ko dynamically detect karna
  const activeExamSlug = examSlug || currentUser?.targetExamId || 'jee-main';

  // Real-time polling for the official Cashfree checkout session.
  useEffect(() => {
    let interval: any = null;
    if (activeOrderId) {
      interval = setInterval(async () => {
        try {
          const verify = await api.verifyCashfreePayment(activeOrderId);
          if (verify.success) {
            clearInterval(interval);
            confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
            setStatusMessage({
              type: 'success',
              text: verify.message || `Payment Successful! ${activePlanName || 'Plan'} has been activated.`,
            });
            setTimeout(() => {
              onPaymentSuccess?.(activePlanCode || '');
              onClose();
            }, 1600);
          }
        } catch {
          // Keep polling until verified or closed
        }
      }, 3500);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeOrderId, activePlanCode, activePlanName, onClose, onPaymentSuccess]);

  // The native Android wrapper dispatches this only after Cashfree's Android
  // SDK returns. The server remains the sole authority for activation.
  useEffect(() => {
    const onNativeCashfreeResult = (event: Event) => {
      const detail = (event as CustomEvent<{ orderId?: string }>).detail;
      if (!detail?.orderId || !activePlanCode || !activePlanName) return;
      setNativeCheckout(null);
      void handleVerifyCashfreeOrder(detail.orderId, activePlanCode, activePlanName);
    };
    window.addEventListener('cashfree-native-result', onNativeCashfreeResult);
    return () => window.removeEventListener('cashfree-native-result', onNativeCashfreeResult);
  }, [activePlanCode, activePlanName]);

  useEffect(() => {
    if (!isOpen || !window.AndroidCashfree?.isAvailable?.()) {
      setNativeUpiApps([]);
      return;
    }
    try {
      const available = JSON.parse(window.AndroidCashfree.getAvailableUpiApps?.() || '[]');
      setNativeUpiApps(Array.isArray(available) ? available : []);
    } catch {
      // The Cashfree native selector remains available as a safe fallback.
      setNativeUpiApps([]);
    }
  }, [isOpen]);

  // Exam names mapping for clean display
  const examLabels: Record<string, string> = {
    'jee-main': 'JEE Main',
    'uptet': 'UPTET',
    'super-tet': 'SUPER TET',
    'neet-ug': 'NEET UG',
    'upsc-prelims': 'UPSC Prelims',
    'ssc-cgl-tier1': 'SSC CGL',
    'gate-cs': 'GATE CS',
  };
  const currentExamName = examLabels[activeExamSlug.toLowerCase()] || activeExamSlug.toUpperCase();

  useEffect(() => {
    if (isOpen) {
      setAppliedCoupon(null);
      setCouponInput('');
      loadData();
    }
  }, [isOpen, activeExamSlug]);

  const loadData = async () => {
    setLoading(true);
    setStatusMessage(null);
    try {
      const [plansRes, configRes] = await Promise.all([
        api.getSubscriptionPlans(activeExamSlug).catch(() => ({ plans: [] })),
        api.getMonetizationConfig().catch(() => null),
      ]);
      
      const fetchedPlans = plansRes.plans || [];
      setPlans(fetchedPlans);
      setSelectedPlanCode((current) => {
        if (fetchedPlans.some((plan: SubscriptionPlan) => plan.code === current)) return current;
        return fetchedPlans.find((plan: SubscriptionPlan) => plan.price > 0)?.code || fetchedPlans[0]?.code || '';
      });
      if (fetchedPlans.length === 0) {
        setStatusMessage({ type: 'info', text: `No published plans are currently available for ${currentExamName}.` });
      }
      setGatewayConfig(configRes);
    } catch (err) {
      console.error('Failed to load plans:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleApplyCoupon = async () => {
    const code = couponInput.trim().toUpperCase();
    if (!code) return;
    setApplyingCoupon(true);
    setStatusMessage(null);
    try {
      const res = await api.validateCoupon(code, activeExamSlug);
      setAppliedCoupon({
        code: res.code,
        discountPct: res.discountPct,
        examSlug: res.examSlug || null,
      });
      setStatusMessage({
        type: 'success',
        text: `Coupon ${res.code} applied! ${res.discountPct}% discount active on eligible plans.`,
      });
    } catch (err: any) {
      setAppliedCoupon(null);
      setStatusMessage({ type: 'error', text: err.message || 'Invalid or expired coupon code.' });
    } finally {
      setApplyingCoupon(false);
    }
  };

  if (!isOpen) return null;

  const loadCashfreeScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if ((window as any).Cashfree) {
        resolve(true);
        return;
      }
      const existing = document.querySelector('script[data-cashfree-sdk="v3"]');
      if (existing) {
        if ((window as any).Cashfree) {
          resolve(true);
          return;
        }
        existing.addEventListener('load', () => resolve(Boolean((window as any).Cashfree)));
        existing.addEventListener('error', () => resolve(false));
        return;
      }
      // Cashfree's hosted SDK is the only supported way to hand a session to
      // checkout. Do not proxy it and do not build a checkout URL ourselves.
      const script = document.createElement('script');
      script.src = 'https://sdk.cashfree.com/js/v3/cashfree.js';
      script.dataset.cashfreeSdk = 'v3';
      script.async = true;
      script.onload = () => resolve(Boolean((window as any).Cashfree));
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleVerifyCashfreeOrder = async (orderId: string, planCode: string, planName: string) => {
    setVerifyingPayment(true);
    setStatusMessage({ type: 'info', text: 'Awaiting payment confirmation: Verifying transaction with Cashfree...' });
    try {
      const verify = await api.verifyCashfreePayment(orderId);
      if (verify.success) {
        confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
        setStatusMessage({
          type: 'success',
          text: verify.message || `Payment Successful! ${planName} has been activated.`,
        });
        setTimeout(() => {
          onPaymentSuccess?.(planCode);
          onClose();
        }, 1600);
      } else if (verify.pending) {
        setStatusMessage({
          type: 'info',
          text: verify.message || 'Payment Pending: Transaction is in progress in your UPI app. Please approve the payment and click Verify Status.',
        });
      } else {
        setStatusMessage({
          type: 'error',
          text: verify.message || 'Payment Failed or Cancelled. Please retry payment or select another plan.',
        });
      }
    } catch (vErr: any) {
      setStatusMessage({
        type: 'error',
        text: vErr.message || 'Payment verification failed. If money was deducted from your account, it will automatically activate via secure webhook.',
      });
    } finally {
      setVerifyingPayment(false);
    }
  };

  const handleSubscribe = async (plan: SubscriptionPlan, paymentMethod?: CheckoutMethod) => {
    const token = getStoredToken();
    if (!currentUser || !token) {
      setStatusMessage({
        type: 'error',
        text: 'Please login or create an account to proceed with subscription. Opening login...',
      });
      setTimeout(() => {
        onClose();
        onOpenAuth?.();
      }, 1200);
      return;
    }

    setProcessingPlanId(plan.id);
    setStatusMessage({
      type: 'info',
      text: `Initializing payment for ${plan.name}...`,
    });

    // 1. ₹0 Free Starter Plan: Activate directly on server
    if (plan.price <= 0) {
      try {
        const res = await api.createPaymentOrder(plan.id, undefined, activeExamSlug, plan.code);
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
        setStatusMessage({
          type: 'success',
          text: res.message || 'Free Starter Plan activated successfully! You can attempt free mock tests now.',
        });
        setTimeout(() => {
          onPaymentSuccess?.(plan.code);
          onClose();
        }, 1500);
      } catch (err: any) {
        setStatusMessage({ type: 'error', text: err.message || 'Failed to activate free plan.' });
      } finally {
        setProcessingPlanId(null);
      }
      return;
    }

    // 2. Paid plans first open the LMS payment selector. The order is created
    // only after the student chooses a Cashfree-backed payment route.
    if (!paymentMethod) {
      setCheckoutPlan(plan);
      setProcessingPlanId(null);
      setStatusMessage(null);
      return;
    }

    // 3. Paid plans: create the secure server-side Cashfree order.
    try {
      setSelectedCheckoutMethod(paymentMethod);
      const order = await api.createPaymentOrder(plan.id, appliedCoupon?.code, activeExamSlug, plan.code);

      const activeSession = order.payment_session_id || order.paymentSessionId;
      if (!order.orderId || !activeSession) {
        throw new Error(order.message || 'Payment session could not be established. Please retry.');
      }

      // The backend chooses the same explicitly configured Cashfree environment
      // that it used to create the session.
      const targetMode = order.cashfreeMode === 'sandbox' ? 'sandbox' : 'production';
      setActiveOrderId(order.orderId!);
      setActivePlanCode(plan.code);
      setActivePlanName(plan.name);
      const nativeBridge = window.AndroidCashfree;
      const nativePreferredApp = paymentMethod === 'OTHER_UPI'
        ? 'OTHER'
        : paymentMethod;
      if (
        nativeBridge?.isAvailable?.() &&
        ['GOOGLE_PAY', 'PHONEPE', 'PAYTM', 'OTHER'].includes(nativePreferredApp)
      ) {
        setNativeCheckout({
          paymentSessionId: activeSession,
          orderId: order.orderId,
          environment: targetMode,
        });
        setStatusMessage({
          type: 'info',
          text: 'Opening the selected UPI app through Cashfree…',
        });
        window.AndroidCashfree?.startUpiIntentCheckout(
          activeSession,
          order.orderId,
          targetMode,
          nativePreferredApp as 'GOOGLE_PAY' | 'PHONEPE' | 'PAYTM' | 'OTHER',
        );
        return;
      }
      setStatusMessage({
        type: 'info',
        text: 'Opening Cashfree secure checkout. Available payment methods are provided by this merchant account.',
      });

      let cashfree: any = null;
      try {
        const loaded = await loadCashfreeScript();
        if (loaded && (window as any).Cashfree) {
          cashfree = (window as any).Cashfree({ mode: targetMode });
        }
      } catch (sdkErr) {
        console.warn('Cashfree SDK initialization notice:', sdkErr);
      }

      if (!cashfree) {
        throw new Error('The secure Cashfree checkout could not be loaded. Check your connection and retry; no payment was started.');
      }
      // Redirect checkout is reliable across desktop, Android browsers and
      // Safari/iOS. Cashfree renders only methods enabled for this merchant,
      // including its desktop QR where eligible.
      await cashfree.checkout({ paymentSessionId: activeSession, redirectTarget: '_self' });
    } catch (err: any) {
      console.error('Subscription error:', err);
      setStatusMessage({ type: 'error', text: err.message || 'Failed to process payment. Please try again.' });
    } finally {
      setProcessingPlanId(null);
    }
  };

  const handleRedeemCreditForTest = async () => {
    if (!lockedTest) return;
    setRedeemingCredit(true);
    setStatusMessage(null);
    try {
      const res = await api.redeemReferralCredit(lockedTest.id);
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
      setStatusMessage({ type: 'success', text: res.message });
      setTimeout(() => {
        onCreditRedeemed?.(lockedTest.id);
        onClose();
      }, 1400);
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err.message || 'Failed to redeem referral credit.' });
    } finally {
      setRedeemingCredit(false);
    }
  };

  const currencySymbol = '₹';
  const startSelectedMethod = (method: CheckoutMethod) => {
    if (checkoutPlan) void handleSubscribe(checkoutPlan, method);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-4xl w-full shadow-modal border border-slate-200 overflow-hidden my-6">
        
        {/* Header */}
        <div className="px-6 py-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-semibold border border-blue-400/30">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Exam-Specific Plans for {currentExamName}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">
              {lockedTest ? `Unlock Test for ${currentExamName}` : `Choose Your ${currentExamName} Plan`}
            </h2>
            <p className="text-xs text-slate-300">
              {lockedTest
                ? `You clicked on "${lockedTest.title}". Choose a plan or redeem a referral credit.`
                : plans.length > 0
                ? `Choose from ${plans.map((p) => `${p.name} (${p.price === 0 ? 'Free' : `₹${p.price}`})`).join(', ')} for ${currentExamName}.`
                : `Includes Free Starter, Booster Pack, and All-Access plans for ${currentExamName}.`}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-md border border-slate-700 bg-slate-800 px-2.5 py-1 text-[11px] font-semibold text-slate-200">Secure INR checkout</span>

            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Status Message */}
        {statusMessage && (
          <div
            className={`px-6 py-3 flex items-center gap-2 text-xs font-semibold ${
              statusMessage.type === 'success'
                ? 'bg-emerald-50 text-emerald-800 border-b border-emerald-200'
                : statusMessage.type === 'info'
                ? 'bg-blue-50 text-blue-800 border-b border-blue-200'
                : 'bg-rose-50 text-rose-800 border-b border-rose-200'
            }`}
          >
            {statusMessage.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : statusMessage.type === 'info' ? (
              <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            )}
            <span className="flex-1">{statusMessage.text}</span>
            {statusMessage.type === 'error' && checkoutPlan && (
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() => startSelectedMethod(selectedCheckoutMethod || 'OTHER_UPI')}
                  className="rounded-md bg-rose-700 px-2.5 py-1 text-[11px] font-bold text-white hover:bg-rose-800"
                >
                  Retry payment
                </button>
                <button
                  type="button"
                  onClick={() => { setCheckoutPlan(null); setSelectedCheckoutMethod(null); setActiveOrderId(null); }}
                  className="rounded-md border border-rose-300 bg-white px-2.5 py-1 text-[11px] font-bold text-rose-800 hover:bg-rose-100"
                >
                  Back to plans
                </button>
              </div>
            )}
          </div>
        )}

        {/* Branded LMS payment selection. Cashfree is initiated only after a choice. */}
        {checkoutPlan && !nativeCheckout && (() => {
          const couponEligible = checkoutPlan.price > 0 && appliedCoupon &&
            (!appliedCoupon.examSlug || !checkoutPlan.examSlug || appliedCoupon.examSlug === checkoutPlan.examSlug);
          const finalAmount = couponEligible
            ? Math.max(1, Math.round(checkoutPlan.price * (100 - appliedCoupon!.discountPct) / 100))
            : checkoutPlan.price;
          const isNative = Boolean(window.AndroidCashfree?.isAvailable?.());
          const enabledMethods = Array.isArray(gatewayConfig?.supportedPaymentMethods)
            ? gatewayConfig.supportedPaymentMethods.map((method: string) => method.toUpperCase())
            : [];
          const isMerchantEnabled = (method: CheckoutMethod) => enabledMethods.includes(method);
          const methods: Array<{ id: CheckoutMethod; title: string; detail: string; visible: boolean; icon: React.ReactNode; tone: string }> = [
            { id: 'HOSTED_CHECKOUT', title: 'Secure payment options', detail: 'View methods available for this order', visible: true, icon: <Lock className="h-4 w-4" />, tone: 'border-blue-200 bg-blue-50 hover:bg-blue-100' },
            { id: 'GOOGLE_PAY', title: 'Google Pay', detail: 'Open Google Pay via Cashfree', visible: isMerchantEnabled('GOOGLE_PAY') && isNative && nativeUpiApps.includes('GOOGLE_PAY'), icon: <Smartphone className="h-4 w-4" />, tone: 'border-blue-200 bg-blue-50 hover:bg-blue-100' },
            { id: 'PHONEPE', title: 'PhonePe', detail: 'Open PhonePe via Cashfree', visible: isMerchantEnabled('PHONEPE') && isNative && nativeUpiApps.includes('PHONEPE'), icon: <Smartphone className="h-4 w-4" />, tone: 'border-purple-200 bg-purple-50 hover:bg-purple-100' },
            { id: 'PAYTM', title: 'Paytm', detail: 'Open Paytm via Cashfree', visible: isMerchantEnabled('PAYTM') && isNative && nativeUpiApps.includes('PAYTM'), icon: <Smartphone className="h-4 w-4" />, tone: 'border-cyan-200 bg-cyan-50 hover:bg-cyan-100' },
            { id: 'OTHER_UPI', title: 'Other UPI apps', detail: isNative ? 'Show installed Cashfree-supported apps' : 'Continue to Cashfree UPI checkout', visible: isMerchantEnabled('OTHER_UPI'), icon: <Smartphone className="h-4 w-4" />, tone: 'border-slate-200 bg-white hover:bg-slate-50' },
            { id: 'UPI_QR', title: 'UPI QR', detail: 'Use Cashfree dynamic QR on desktop', visible: isMerchantEnabled('UPI_QR'), icon: <Smartphone className="h-4 w-4" />, tone: 'border-slate-200 bg-white hover:bg-slate-50' },
            { id: 'CARD', title: 'Debit / Credit Card', detail: 'Secure card payment through Cashfree', visible: isMerchantEnabled('CARD'), icon: <CreditCard className="h-4 w-4" />, tone: 'border-slate-200 bg-white hover:bg-slate-50' },
            { id: 'NETBANKING', title: 'Net Banking', detail: 'Secure bank payment through Cashfree', visible: isMerchantEnabled('NETBANKING'), icon: <Landmark className="h-4 w-4" />, tone: 'border-slate-200 bg-white hover:bg-slate-50' },
          ];
          return (
          <section className="mx-6 my-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <p className="text-sm font-bold text-slate-900">Complete your purchase</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Choose a secure payment method. Your plan activates only after server-side Cashfree verification.
                </p>
              </div>
              <button
                type="button"
                onClick={() => { setCheckoutPlan(null); setSelectedCheckoutMethod(null); }}
                className="shrink-0 rounded-lg px-2 py-1 text-xs font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-800"
              >
                Back
              </button>
            </div>

            <div className="mt-4 grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
              <aside className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs">
                <p className="font-semibold text-slate-500">ORDER SUMMARY</p>
                <p className="mt-2 text-sm font-bold text-slate-900">{checkoutPlan.name}</p>
                <dl className="mt-4 space-y-2 text-slate-600">
                  <div className="flex justify-between"><dt>Original price</dt><dd>₹{checkoutPlan.price}</dd></div>
                  <div className="flex justify-between text-emerald-700"><dt>Discount</dt><dd>-₹{checkoutPlan.price - finalAmount}</dd></div>
                  <div className="flex justify-between border-t border-slate-200 pt-2 text-sm font-bold text-slate-900"><dt>Payable now</dt><dd>₹{finalAmount}</dd></div>
                </dl>
              </aside>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Payment method</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {methods.filter((method) => method.visible).map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => startSelectedMethod(method.id)}
                      disabled={processingPlanId === checkoutPlan.id}
                      className={`flex items-center gap-3 rounded-lg border p-3 text-left transition-colors disabled:cursor-wait disabled:opacity-60 ${method.tone}`}
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">{method.icon}</span>
                      <span><span className="block text-xs font-bold text-slate-900">{method.title}</span><span className="block text-[11px] text-slate-600">{selectedCheckoutMethod === method.id && processingPlanId ? 'Starting secure payment…' : method.detail}</span></span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
          );
        })()}


        {/* Coupon Code Bar */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
          <div className="text-slate-600 font-medium">
            Have a discount code? Apply it before starting secure checkout.
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={couponInput}
              onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
              placeholder="Enter coupon code"
              className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-800 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-blue-600 w-40"
            />
            <button
              type="button"
              onClick={handleApplyCoupon}
              disabled={applyingCoupon || !couponInput.trim()}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white font-semibold text-xs cursor-pointer transition-colors"
            >
              {applyingCoupon ? 'Checking...' : 'Apply'}
            </button>
            {appliedCoupon && (
              <button
                type="button"
                onClick={() => {
                  setAppliedCoupon(null);
                  setCouponInput('');
                }}
                className="text-rose-600 hover:underline font-medium cursor-pointer"
              >
                Remove
              </button>
            )}
          </div>
        </div>

        {/* Referral Credit Banner */}
        {lockedTest && userReferralCredits > 0 && (
          <div className="p-4 bg-amber-50 border-b border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-200 text-amber-900 flex items-center justify-center font-bold">
                <Gift className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-amber-900">
                  You have {userReferralCredits} Referral Credit{userReferralCredits > 1 ? 's' : ''}!
                </p>
                <p className="text-[11px] text-amber-800">
                  Redeem 1 credit to immediately unlock "{lockedTest.title}" for free.
                </p>
              </div>
            </div>
            <button
              onClick={handleRedeemCreditForTest}
              disabled={redeemingCredit}
              className="px-4 py-2 rounded-lg bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs transition-colors cursor-pointer flex items-center gap-1.5 shrink-0"
            >
              <Gift className="w-3.5 h-3.5" />
              <span>{redeemingCredit ? 'Unlocking...' : 'Redeem 1 Credit & Start'}</span>
            </button>
          </div>
        )}

        {/* Main Content Area: official plans from the current exam portal */}
        <div className="p-6">
            {loading ? (
              <div className="h-64 flex flex-col items-center justify-center space-y-3">
                <Clock className="w-8 h-8 text-blue-600 animate-spin" />
                <p className="text-xs font-semibold text-slate-500">Loading {currentExamName} plans...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {plans.map((plan) => {
                  const isSelected = selectedPlanCode === plan.code;
                  const isPopular = Boolean(plan.badge && /popular|choice|value/i.test(plan.badge));
                  const isFree = plan.price === 0;
                  
                  const couponEligible = !isFree && appliedCoupon && (!appliedCoupon.examSlug || !plan.examSlug || appliedCoupon.examSlug === plan.examSlug);
                  const effectivePrice = couponEligible ? Math.max(1, Math.round(plan.price * (100 - appliedCoupon!.discountPct) / 100)) : plan.price;

                  const displayPrice = String(isFree ? 0 : effectivePrice);
                  const originalDisplayPrice = String(plan.price);

                  return (
                    <div
                      key={plan.id}
                      onClick={() => setSelectedPlanCode(plan.code)}
                      className={`rounded-xl border p-5 flex flex-col justify-between transition-all cursor-pointer relative ${
                        isSelected
                          ? 'border-blue-600 ring-2 ring-blue-100 shadow-md bg-white'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      {plan.badge && (
                        <span
                          className={`absolute -top-2.5 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-xs ${
                            isPopular
                              ? 'bg-blue-600 text-white'
                              : isFree
                              ? 'bg-slate-200 text-slate-800'
                              : 'bg-emerald-600 text-white'
                          }`}
                        >
                          {plan.badge}
                        </span>
                      )}

                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-bold text-slate-900">{plan.name}</h3>
                          <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{plan.description}</p>
                        </div>

                        <div className="pt-2 border-t border-slate-100">
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                              {currencySymbol}{displayPrice}
                            </span>
                            {couponEligible && (
                              <span className="text-xs text-slate-400 line-through">
                                {currencySymbol}{originalDisplayPrice}
                              </span>
                            )}
                            <span className="text-xs text-slate-500 font-medium">
                              {isFree ? '/ forever' : '/ one-time'}
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-400 mt-0.5">
                            {plan.durationDays > 0 ? `${plan.durationDays} days access` : 'Lifetime access'}
                          </p>
                        </div>

                        <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                          {plan.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="leading-tight">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-5 mt-4 border-t border-slate-100 space-y-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSubscribe(plan);
                          }}
                          disabled={processingPlanId === plan.id}
                          className={`w-full py-2.5 px-4 rounded-lg text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer ${
                            isPopular
                              ? 'bg-blue-600 hover:bg-blue-700 text-white'
                              : isFree
                              ? 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                              : 'bg-slate-900 hover:bg-slate-800 text-white'
                          }`}
                        >
                          <span>
                            {processingPlanId === plan.id
                              ? 'Processing...'
                              : isFree
                              ? 'Activate Free Plan'
                              : `Get Started (${currencySymbol}${displayPrice})`}
                          </span>
                          {!isFree && <ArrowRight className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Trust Footer */}
            <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs text-slate-500">
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Official Cashfree & UPI Secure Gateway</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <RotateCcw className="w-4 h-4 text-blue-600" />
                <span>7-Day Standard Refund Policy</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Instant Entitlement Activation</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
