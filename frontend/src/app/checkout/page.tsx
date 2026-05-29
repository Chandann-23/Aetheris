"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import CheckoutForm from '../../components/ui/CheckoutForm';

export default function Checkout() {
  const [activeStep, setActiveStep] = useState<'delivery' | 'payment' | 'review'>('delivery');
  const [paymentMethod, setPaymentMethod] = useState<'credit_card' | 'paypal'>('credit_card');
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [isDeliverySaved, setIsDeliverySaved] = useState(false);

  // Form Fields State
  const [deliveryData, setDeliveryData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDeliveryData(prev => ({
      ...prev,
      [name]: value.toUpperCase()
    }));
  };

  const handleNextStep = (step: 'payment' | 'review') => {
    if (activeStep === 'delivery') {
      setIsDeliverySaved(true);
    }
    setActiveStep(step);

    // Smooth scroll to the target section
    const targetElement = document.getElementById(`step-${step}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleEditDelivery = () => {
    setActiveStep('delivery');
    setIsDeliverySaved(false);
  };

  return (
    <>
      <Script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" strategy="afterInteractive" />
      <Script id="tailwind-config" strategy="afterInteractive">
        {`
          window.tailwind = window.tailwind || {};
          window.tailwind.config = {
            theme: {
              extend: {
                colors: {
                  "on-tertiary-fixed-variant": "#474747",
                  "on-secondary-fixed-variant": "#004a76",
                  "on-primary-fixed-variant": "#474747",
                  "surface-container-low": "#f3f3f5",
                  "surface-container": "#eeeef0",
                  "surface-container-highest": "#e2e2e4",
                  "inverse-surface": "#2f3132",
                  "primary-container": "#1b1b1b",
                  "surface-bright": "#f9f9fb",
                  "surface-white": "#FFFFFF",
                  "on-tertiary-fixed": "#1b1b1b",
                  "border-subtle": "#E5E5E7",
                  "surface-container-lowest": "#ffffff",
                  "on-primary-fixed": "#1b1b1b",
                  "surface-dim": "#d9dadc",
                  "text-primary": "#1D1D1F",
                  "surface-container-high": "#e8e8ea",
                  "outline": "#7e7576",
                  "surface": "#f9f9fb",
                  "on-tertiary-container": "#848484",
                  "inverse-primary": "#c6c6c6",
                  "surface-tint": "#5e5e5e",
                  "surface-black": "#000000",
                  "on-error": "#ffffff",
                  "background": "#f9f9fb",
                  "secondary-fixed": "#cee5ff",
                  "tertiary": "#000000",
                  "on-secondary-container": "#004167",
                  "on-surface": "#1a1c1d",
                  "on-primary": "#ffffff",
                  "error-container": "#ffdad6",
                  "inverse-on-surface": "#f0f0f2",
                  "on-secondary-fixed": "#001d33",
                  "on-background": "#1a1c1d",
                  "tertiary-fixed-dim": "#c6c6c6",
                  "secondary": "#00639b",
                  "nothing-red": "#FF0000",
                  "tertiary-container": "#1b1b1b",
                  "error": "#ba1a1a",
                  "on-surface-variant": "#4c4546",
                  "on-primary-container": "#848484",
                  "primary-fixed-dim": "#c6c6c6",
                  "primary-fixed": "#e2e2e2",
                  "secondary-container": "#48afff",
                  "on-tertiary": "#ffffff",
                  "on-error-container": "#93000a",
                  "electric-accent": "#008DDA",
                  "on-secondary": "#ffffff",
                  "surface-variant": "#e2e2e4",
                  "secondary-fixed-dim": "#96cbff",
                  "primary": "#000000",
                  "text-secondary": "#6E6E73",
                  "tertiary-fixed": "#e2e2e2",
                  "outline-variant": "#cfc4c5"
                },
                borderRadius: {
                  "DEFAULT": "4px",
                  "lg": "4px",
                  "xl": "8px",
                  "full": "9999px"
                },
                spacing: {
                  "margin-safe": "64px",
                  "gutter": "32px",
                  "grid-columns": "12",
                  "section-gap": "160px",
                  "margin-safe-mobile": "24px",
                  "section-gap-mobile": "80px"
                }
              }
            }
          }
        `}
      </Script>
      <main className="min-h-screen bg-neutral-50 text-[#1D1D1F]" style={{ paddingTop: '110px', minHeight: '100vh' }}>
        {/* Secure Header Info Bar */}
        <div className="bg-white border-b border-[#E5E5E7] w-full py-4 flex justify-between items-center max-w-full" style={{ paddingLeft: 'min(40px, 6%)', paddingRight: 'min(40px, 6%)' }}>
          <Link href="/" className="text-2xl font-black text-black tracking-tighter">
            AETHERIS
          </Link>
          <div className="flex items-center gap-6">
            <span className="font-label-mono text-xs text-[#6E6E73] hidden md:block tracking-widest">
              SECURE ENCRYPTION ACTIVE
            </span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-black">shopping_bag</span>
              <span className="font-label-mono text-xs font-bold bg-[#008DDA] text-white px-2 py-0.5 rounded-full">
                2
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl" style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'min(40px, 6%)', paddingRight: 'min(40px, 6%)', paddingTop: '48px', paddingBottom: '64px' }}>
          {/* Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 uppercase text-black">
              Checkout
            </h1>
            <p className="font-label-mono text-xs text-[#6E6E73] tracking-widest">
              ESTIMATED SHIPMENT: 2-3 BUSINESS DAYS
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Checkout Steps */}
            <div className="lg:col-span-8">
              <CheckoutForm
                activeStep={activeStep}
                paymentMethod={paymentMethod}
                deliveryData={deliveryData}
                isDeliverySaved={isDeliverySaved}
                handleInputChange={handleInputChange}
                handleNextStep={handleNextStep}
                handleEditDelivery={handleEditDelivery}
                setPaymentMethod={setPaymentMethod}
              />
            </div>

            {/* Right Column: Sidebar */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
              <div className="bg-white border border-[#E5E5E7] p-8">
                <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-6 border-b border-[#E5E5E7] pb-4">
                  In Your Bag
                </h3>

                {/* Product List */}
                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-neutral-50 border border-neutral-100 overflow-hidden flex-shrink-0">
                      <img
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe1I_wnZjOVrSTlq6e5YE9cDn_l-seQwIsklxsnyTR-AsX3hxmowYsXVLR2TOAhA4dDiDEL6y-gttJaALS6jwEkTAMKEzfFZnNc-YK7SFMdLkOaFbbSZeDEUghXCYU3iGpbBhDRB5swcsDJkQDrhqK93cOxmPwH-xKyo3pG05IW-yNvqy2xfG6yTnBt30m2zDzOms-gvPGT2s_r0bSkHCWcJ7Kdpl4fOtfVHZ3JXCqR55GNZDEWD1aZFZ09geGbRiBJhUhhT5P2wK1"
                        alt="Slate Pro 14"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-label-mono text-xs font-bold text-black tracking-wider uppercase truncate">
                        SLATE PRO 14
                      </p>
                      <p className="text-[#6E6E73] text-[11px] font-medium tracking-wide mb-2 uppercase">
                        Midnight Black / 45mm
                      </p>
                      <p className="font-label-mono text-xs font-semibold text-black">
                        $599.00
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-neutral-50 border border-neutral-100 overflow-hidden flex-shrink-0">
                      <img
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq8VYhF_B1b8-laSJWmPE_nxUFNjDnxHjWFB2nbmJOo5Dx8vmMBBaz858iL3Ji4TOLr1YpJ55qnVEkvOXTcBbXBjOKND5JizQIRFKAsdPcnrtFHcJdMs93q56pTsg1dFDCMiF167l9mJnoJnyW3VAYdC2FfsObCJcHB0WpfIK_i_8-peiFF0xrioNkK4AuxRTLRMBvBiZtTaeICUAstXW3bhku286XR2e5MlqOsAXSkCw0eUz4f31c55Nv916zswU5oIyXnz4-2L1Q"
                        alt="Aether-1 Audio"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-label-mono text-xs font-bold text-black tracking-wider uppercase truncate">
                        AETHER-1 AUDIO
                      </p>
                      <p className="text-[#6E6E73] text-[11px] font-medium tracking-wide mb-2 uppercase">
                        Sonic Silver / Gen 2
                      </p>
                      <p className="font-label-mono text-xs font-semibold text-black">
                        $249.00
                      </p>
                    </div>
                  </div>
                </div>

                {/* Financials */}
                <div className="border-t border-[#E5E5E7] pt-6 space-y-3">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-[#6E6E73] uppercase tracking-wider">SUBTOTAL</span>
                    <span className="font-label-mono font-bold">$848.00</span>
                  </div>
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-[#6E6E73] uppercase tracking-wider">SHIPPING</span>
                    <span className="font-label-mono font-bold">$0.00</span>
                  </div>
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-[#6E6E73] uppercase tracking-wider">ESTIMATED TAX</span>
                    <span className="font-label-mono font-bold">$67.84</span>
                  </div>
                  <div className="flex justify-between border-t border-[#E5E5E7] pt-4 text-lg font-bold text-black">
                    <span className="uppercase tracking-tight">TOTAL</span>
                    <span className="font-label-mono">$915.84</span>
                  </div>
                </div>

                <button
                  onClick={() => setShowErrorModal(true)}
                  className="w-full bg-black text-white py-4 mt-8 font-label-mono text-xs font-bold tracking-widest hover:bg-[#008DDA] active:scale-[0.98] transition-all duration-300"
                >
                  PLACE ORDER
                </button>
                <p className="text-center text-[9px] text-[#6E6E73] mt-4 font-label-mono uppercase tracking-widest">
                  Aetheris Secure Gateway • PCI DSS Compliant
                </p>
              </div>

              {/* Assistance Box */}
              <div className="p-6 border border-[#E5E5E7] bg-neutral-100 rounded-sm">
                <p className="font-label-mono text-xs font-bold text-black mb-2 tracking-wider">
                  NEED ASSISTANCE?
                </p>
                <p className="text-xs text-[#6E6E73] mb-4 leading-relaxed font-medium">
                  Our engineering support team is available 24/7 for secure gateway sync inquiries.
                </p>
                <div className="flex gap-4">
                  <a className="font-label-mono text-xs font-bold text-black hover:text-[#008DDA] underline transition-colors" href="#">
                    LIVE CHAT
                  </a>
                  <a className="font-label-mono text-xs font-bold text-black hover:text-[#008DDA] underline transition-colors" href="#">
                    1-800-AETHER
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* System Error Modal Simulator */}
        {showErrorModal && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex items-center justify-center p-6 transition-all duration-300">
            <div className="bg-white max-w-md w-full p-8 md:p-12 border border-[#E5E5E7] relative shadow-2xl rounded-sm">
              <button
                className="absolute top-6 right-6 text-black hover:text-[#008DDA] transition-colors"
                onClick={() => setShowErrorModal(false)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-black mb-4">
                System Notice
              </h3>
              <p className="text-[#6E6E73] mb-6 text-sm leading-relaxed font-medium">
                We encountered a temporary synchronization issue with your request. Please re-authenticate your session.
              </p>
              <p className="font-label-mono text-[9px] text-[#6E6E73] mb-8 bg-neutral-50 px-3 py-2 border border-neutral-100 rounded-sm">
                [ERROR_CODE: AETH_409_SYNC]
              </p>
              <button
                className="bg-black text-white hover:bg-[#008DDA] w-full py-4 font-label-mono text-xs font-bold tracking-widest transition-all duration-300"
                onClick={() => setShowErrorModal(false)}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
