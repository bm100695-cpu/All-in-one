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
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SubscriptionPlan, User } from '../types';
import { api } from '../api';

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
}) => {
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlanCode, setSelectedPlanCode] = useState<string>('PLAN_BOOSTER_49');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [processingPlanId, setProcessingPlanId] = useState<string | null>(null);
  const [redeemingCredit, setRedeemingCredit] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  const [gatewayConfig, setGatewayConfig] = useState<any>(null);
  const [couponInput, setCouponInput] = useState<string>('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discountPct: number; examSlug?: string | null } | null>(null);
  const [applyingCoupon, setApplyingCoupon] = useState<boolean>(false);

  // User ke active exam slug ya target exam ko dynamically detect karna
  const activeExamSlug = examSlug || currentUser?.targetExamId || 'jee-main';

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
      
      let fetchedPlans = plansRes.plans || [];
      
      // Agar backend se plans na milein, toh strictly user ke exam ke according 3 simple plans set karna
      if (fetchedPlans.length === 0) {
        fetchedPlans = [
          {
            id: 'free_starter',
            code: 'PLAN_FREE_0',
            name: 'Free Starter Plan',
            description: `Essential practice for ${currentExamName} with authentic shift papers and answer keys.`,
            priceINR: 0,
            price: 0,
            currency: 'INR',
            billingInterval: 'ONE_TIME',
            durationDays: 0,
            badge: 'Free Forever',
            examSlug: activeExamSlug,
            features: [
              '2 Free Mock Tests included',
              'Real CBT Exam Timer & Interface',
              'Instant Scorecard & Solutions',
            ]
          },
          {
            id: 'booster_49',
            code: 'PLAN_BOOSTER_49',
            name: '5-Test Booster Pack',
            description: `Unlock 5 verified shift papers for ${currentExamName} with detailed solutions.`,
            priceINR: 49,
            price: 49,
            currency: 'INR',
            billingInterval: 'ONE_TIME',
            durationDays: 90,
            badge: 'Top Choice',
            examSlug: activeExamSlug,
            features: [
              '5 Verified Mock Tests',
              'Detailed Step-by-Step Solutions',
              'Subject-wise Accuracy Audit',
              'Personal Mistake Journal Tagging'
            ]
          },
          {
            id: 'pro_99',
            code: 'PLAN_PRO_99',
            name: 'Premium All-Access',
            description: `Unlock all 10 verified mock series and solutions for ${currentExamName}.`,
            priceINR: 99,
            price: 99,
            currency: 'INR',
            billingInterval: 'ONE_TIME',
            durationDays: 180,
            badge: 'Best Value',
            examSlug: activeExamSlug,
            features: [
              '10 Full-Length Mock & PYQ Papers',
              'Complete Historical Archive Access',
              'Advanced Speed & Readiness Analytics',
              'Priority Reviewer Q&A Support'
            ]
          }
        ];
      }

      setPlans(fetchedPlans);
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

  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if ((window as any).Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const loadCashfreeScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if ((window as any).Cashfree) {
        resolve(true);
        return;
      }
      const existing = document.querySelector('script[src*="cashfree.js"]');
      if (existing) {
        if ((window as any).Cashfree) {
          resolve(true);
          return;
        }
        existing.addEventListener('load', () => resolve(true));
        existing.addEventListener('error', () => resolve(false));
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://sdk.cashfree.com/js/v3/cashfree.js';
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleSubscribe = async (plan: SubscriptionPlan) => {
    setProcessingPlanId(plan.id);
    setStatusMessage(null);

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

    // 2. Paid Plans (> ₹0): Cashfree modal checkout with UPI QR & cards
    try {
      const order = await api.createPaymentOrder(plan.id, appliedCoupon?.code, activeExamSlug, plan.code);

      if (!order.orderId) {
        throw new Error('Order initialization failed. Please retry.');
      }

      // Priority 1: Cashfree Official Modal Checkout
      if (order.paymentSessionId) {
        await loadCashfreeScript();
        if (!(window as any).Cashfree) {
          throw new Error('Cashfree payment SDK could not be loaded. Please check your network.');
        }

        const cashfree = (window as any).Cashfree({
          mode: order.cashfreeMode || 'sandbox',
        });

        setStatusMessage({
          type: 'info',
          text: 'Opening Cashfree secure modal... Scan UPI QR or choose Netbanking / Card.',
        });

        cashfree.checkout({
          paymentSessionId: order.paymentSessionId,
          redirectTarget: '_modal',
        }).then(async (result: any) => {
          if (result.error) {
            console.warn('Cashfree payment modal closed or error:', result.error);
          }

          // Verify with backend whether payment was completed
          setStatusMessage({ type: 'info', text: 'Verifying transaction status with Cashfree...' });
          try {
            const verify = await api.verifyCashfreePayment(order.orderId!);
            if (verify.success) {
              confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
              setStatusMessage({
                type: 'success',
                text: verify.message || `Payment verified! ${plan.name} has been activated.`,
              });
              setTimeout(() => {
                onPaymentSuccess?.(plan.code);
                onClose();
              }, 1600);
            } else {
              setStatusMessage({
                type: 'error',
                text: verify.message || 'Payment not completed. Please retry or complete the transaction in your UPI app.',
              });
            }
          } catch (vErr: any) {
            setStatusMessage({
              type: 'error',
              text: vErr.message || 'Payment verification failed. If money was deducted, it will automatically activate.',
            });
          } finally {
            setProcessingPlanId(null);
          }
        });
        return;
      }

      // Priority 2: Razorpay fallback if configured
      const rzpLoaded = await loadRazorpayScript();
      if (rzpLoaded && (window as any).Razorpay && order.isLiveGateway && order.keyId) {
        const options = {
          key: order.keyId,
          amount: order.amountPaise,
          currency: order.currency || 'INR',
          name: 'All in One – CBT Station',
          description: plan.name,
          order_id: order.orderId,
          prefill: {
            name: currentUser?.name || 'Registered Candidate',
            email: currentUser?.email || 'candidate@allinone.edu',
          },
          theme: { color: '#14213D' },
          handler: async (response: any) => {
            try {
              const verify = await api.verifyPayment(
                response.razorpay_order_id || order.orderId,
                response.razorpay_payment_id,
                response.razorpay_signature
              );
              confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
              setStatusMessage({ type: 'success', text: verify.message });
              setTimeout(() => {
                onPaymentSuccess?.(plan.code);
                onClose();
              }, 1500);
            } catch (vErr: any) {
              setStatusMessage({ type: 'error', text: vErr.message || 'Payment signature verification failed' });
            }
          },
          modal: {
            ondismiss: () => {
              setProcessingPlanId(null);
            },
          },
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.open();
        return;
      }

      // Strictly block bypass
      throw new Error('Payment gateway session unavailable. Please retry or contact support.');
    } catch (err: any) {
      console.error('Subscription error:', err);
      setStatusMessage({ type: 'error', text: err.message || 'Failed to process payment. Please try again.' });
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

  const exchangeRate = currency === 'USD' ? 0.012 : 1;
  const currencySymbol = currency === 'USD' ? '$' : '₹';

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
                : `Includes 2 Free Mock Tests, ₹49 Booster Pack (5 Tests), and ₹99 All-Access Plan for ${currentExamName}.`}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-slate-800 p-0.5 rounded-md border border-slate-700 text-xs">
              <button
                type="button"
                onClick={() => setCurrency('INR')}
                className={`px-2 py-1 rounded transition-colors ${currency === 'INR' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
              >
                ₹ INR
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-2 py-1 rounded transition-colors ${currency === 'USD' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
              >
                $ USD
              </button>
            </div>

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
            <span>{statusMessage.text}</span>
          </div>
        )}

        {/* Coupon Code Bar */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
          <div className="text-slate-600 font-medium">
            Have a discount code? Try <code className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono text-slate-900">WELCOME20</code>
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

        {/* Pricing Cards Grid */}
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
                const isPopular = plan.price === 49;
                const isFree = plan.price === 0;
                
                const couponEligible = !isFree && appliedCoupon && (!appliedCoupon.examSlug || !plan.examSlug || appliedCoupon.examSlug === plan.examSlug);
                const effectivePrice = couponEligible ? Math.max(1, Math.round(plan.price * (100 - appliedCoupon!.discountPct) / 100)) : plan.price;

                const displayPrice = isFree ? '0' : currency === 'USD' ? (effectivePrice * exchangeRate).toFixed(2) : String(effectivePrice);
                const originalDisplayPrice = currency === 'USD' ? (plan.price * exchangeRate).toFixed(2) : String(plan.price);

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

                    <div className="pt-5 mt-4 border-t border-slate-100">
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