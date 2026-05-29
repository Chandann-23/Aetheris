"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import CheckoutForm from '../../components/ui/CheckoutForm';
import { useCartStore } from '@/store/useCartStore';

export default function Checkout() {
  const { cart, getTotalPrice, removeFromCart, clearCart } = useCartStore();
  const [activeStep, setActiveStep] = useState<'delivery' | 'payment' | 'review'>('delivery');
  const [paymentMethod, setPaymentMethod] = useState<'credit_card' | 'paypal'>('credit_card');
  const [isDeliverySaved, setIsDeliverySaved] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);

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

  // Hydration safety check to sync localStorage cleanly with Next.js SSR
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center font-sans">
        <p className="font-label-mono text-xs tracking-widest animate-pulse uppercase">
          SYNCHRONIZING SECURE TUNNEL...
        </p>
      </div>
    );
  }

  // Financial manifest calculations in INR (₹)
  const subtotal = getTotalPrice();
  const shippingFee = subtotal > 500 || subtotal === 0 ? 0 : 50; // Free shipping threshold over ₹500, else ₹50
  const estimatedTax = Math.round(subtotal * 0.18); // 18% Standard Digital GST calculations
  const executionTotal = subtotal + shippingFee + estimatedTax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDeliveryData(prev => ({
      ...prev,
      [name]: value.toUpperCase() // Keep with original capital aesthetic
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

  const handlePlaceOrder = () => {
    if (!deliveryData.firstName || !deliveryData.address) {
      // Basic safety validation
      alert('PLEASE SPECIFY DELIVERY DETAILS TO CONTINUE TRANSACTION MAPPING.');
      setActiveStep('delivery');
      return;
    }
    
    setIsProcessing(true);

    // Simulate an asynchronous API server network synchronization lag (2.5 seconds)
    setTimeout(() => {
      clearCart(); // Wipes local state cache clean upon payment gateway validation
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2500);
  };

  // Render dynamic empty state if cart allocation drops to 0 outside of a success view
  if (cart.length === 0 && !isSuccess) {
    return (
      <>
        <main className="min-h-screen bg-neutral-50 text-[#1D1D1F] flex flex-col items-center justify-center gap-6 px-4" style={{ paddingTop: '110px' }}>
          <div className="text-center max-w-md">
            <span className="material-symbols-outlined text-neutral-300 text-6xl mb-4">shopping_bag</span>
            <h3 className="text-2xl font-extrabold uppercase tracking-tight text-black mb-2">
              Cart Allocation Pipeline Empty
            </h3>
            <p className="text-[#6E6E73] text-sm leading-relaxed mb-8">
              You currently do not have any premium hardware items inside your active basket.
            </p>
            <Link 
              href="/products" 
              className="inline-block bg-black text-white hover:bg-[#008DDA] px-8 py-4 font-label-mono text-xs font-bold tracking-widest transition-all duration-300 active:scale-[0.98]"
            >
              BROWSE CATALOG
            </Link>
          </div>
        </main>
      </>
    );
  }

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
                  "border-subtle": "#E5E5E7",
                  "text-primary": "#1D1D1F",
                  "text-secondary": "#6E6E73",
                  "electric-accent": "#008DDA"
                },
                borderRadius: {
                  "DEFAULT": "4px",
                  "lg": "4px",
                  "xl": "8px"
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
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl animate-fade-in" style={{ maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'min(40px, 6%)', paddingRight: 'min(40px, 6%)', paddingTop: '48px', paddingBottom: '64px' }}>
          
          {/* Main Layout Pipeline */}
          {!isSuccess ? (
            <>
              {/* Checkout Form & Cart Sidebar grid */}
              <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 uppercase text-black">
                  Checkout
                </h1>
                <p className="font-label-mono text-xs text-[#6E6E73] tracking-widest">
                  ESTIMATED SHIPMENT: 2-3 BUSINESS DAYS
                </p>
              </div>

              {isProcessing ? (
                /* STEP 3: ACTIVE GATEWAY LOADING SCREEN */
                <div className="bg-white border border-[#E5E5E7] p-12 md:p-24 flex flex-col items-center justify-center gap-6 text-center shadow-sm">
                  <div className="w-12 h-12 border-4 border-black border-t-[#008DDA] rounded-full animate-spin"></div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-black mt-2">
                    Syncing Gateway Ledger
                  </h3>
                  <p className="text-xs text-[#6E6E73] font-label-mono tracking-widest max-w-sm">
                    ENCRYPTING END-TO-END SECURITY SIGNATURES...
                  </p>
                  <p className="text-xs text-[#6E6E73] max-w-xs leading-relaxed mt-2">
                    Do not terminate or refresh this active tunnel environment while we securely settle this transaction.
                  </p>
                </div>
              ) : (
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
                    <div className="bg-white border border-[#E5E5E7] p-8 shadow-sm">
                      <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-6 border-b border-[#E5E5E7] pb-4">
                        In Your Bag
                      </h3>

                      {/* Dynamic Product List */}
                      <div className="space-y-6 mb-8 max-h-[350px] overflow-y-auto pr-2">
                        {cart.map((item) => (
                          <div key={item.id} className="flex gap-4 border-b border-neutral-50 pb-4 last:border-none last:pb-0">
                            <div className="w-20 h-20 bg-neutral-50 border border-neutral-100 overflow-hidden flex-shrink-0 flex items-center justify-center">
                              {item.image ? (
                                <img
                                  className="w-full h-full object-cover"
                                  src={item.image}
                                  alt={item.name}
                                />
                              ) : (
                                <span className="material-symbols-outlined text-neutral-300 text-3xl">image</span>
                              )}
                            </div>
                            <div className="flex-1 min-w-0 flex flex-col justify-between">
                              <div>
                                <div className="flex justify-between items-start gap-2">
                                  <p className="font-label-mono text-xs font-bold text-black tracking-wider uppercase truncate">
                                    {item.name}
                                  </p>
                                  <button 
                                    onClick={() => removeFromCart(item.id)} 
                                    className="text-[#6E6E73] hover:text-black transition-colors"
                                    title="Remove item"
                                  >
                                    <span className="material-symbols-outlined text-sm" style={{ fontSize: '18px' }}>delete</span>
                                  </button>
                                </div>
                                <p className="text-[#6E6E73] text-[11px] font-medium tracking-wide uppercase mt-1">
                                  Quantity: {item.quantity}
                                </p>
                              </div>
                              <p className="font-label-mono text-xs font-semibold text-black mt-2">
                                ₹{item.price * item.quantity}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Dynamic Financial manifest */}
                      <div className="border-t border-[#E5E5E7] pt-6 space-y-3">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-[#6E6E73] uppercase tracking-wider">SUBTOTAL</span>
                          <span className="font-label-mono font-bold">₹{subtotal}</span>
                        </div>
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-[#6E6E73] uppercase tracking-wider">SHIPPING</span>
                          <span className="font-label-mono font-bold">
                            {shippingFee === 0 ? <span className="text-[#008DDA]">FREE</span> : `₹${shippingFee}`}
                          </span>
                        </div>
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-[#6E6E73] uppercase tracking-wider">ESTIMATED TAX (18% GST)</span>
                          <span className="font-label-mono font-bold">₹{estimatedTax}</span>
                        </div>
                        <div className="flex justify-between border-t border-[#E5E5E7] pt-4 text-lg font-bold text-black">
                          <span className="uppercase tracking-tight">TOTAL</span>
                          <span className="font-label-mono">₹{executionTotal}</span>
                        </div>
                      </div>

                      {/* Multi-step trigger controls */}
                      {activeStep === 'review' ? (
                        <button
                          onClick={handlePlaceOrder}
                          className="w-full bg-black text-white py-4 mt-8 font-label-mono text-xs font-bold tracking-widest hover:bg-[#008DDA] active:scale-[0.98] transition-all duration-300"
                        >
                          PLACE ORDER
                        </button>
                      ) : (
                        <button
                          disabled
                          className="w-full bg-[#E5E5E7] text-[#6E6E73] py-4 mt-8 font-label-mono text-xs font-bold tracking-widest cursor-not-allowed"
                        >
                          COMPLETE PREVIOUS STEPS
                        </button>
                      )}
                      
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
              )}
            </>
          ) : (
            /* STEP 4: SUCCESS DISPATCH SCREEN */
            <div className="max-w-xl mx-auto bg-white border border-[#E5E5E7] p-12 md:p-16 text-center shadow-sm">
              <div className="w-16 h-16 bg-[#E8F8F5] border border-[#2ECC71] rounded-full flex items-center justify-center text-[#27AE60] text-3xl font-bold mx-auto mb-6">
                ✓
              </div>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-black mb-4">
                Ledger Clearance Complete
              </h2>
              <p className="font-label-mono text-xs text-[#6E6E73] tracking-widest mb-6">
                ORDER DISPATCH SYSTEM SYNCHRONIZED
              </p>
              
              <div className="bg-neutral-50 p-6 border border-neutral-100 rounded-sm text-left mb-8 space-y-3">
                <div className="flex justify-between text-xs border-b border-neutral-100 pb-2">
                  <span className="font-label-mono text-[#6E6E73] uppercase">Recipient</span>
                  <span className="font-bold text-black">{deliveryData.firstName} {deliveryData.lastName}</span>
                </div>
                <div className="flex justify-between text-xs border-b border-neutral-100 pb-2">
                  <span className="font-label-mono text-[#6E6E73] uppercase">Shipment Target</span>
                  <span className="font-semibold text-black text-right truncate max-w-[200px]" title={`${deliveryData.address}, ${deliveryData.city}`}>
                    {deliveryData.address}, {deliveryData.city}
                  </span>
                </div>
                <div className="flex justify-between text-xs border-b border-neutral-100 pb-2">
                  <span className="font-label-mono text-[#6E6E73] uppercase">Payment method</span>
                  <span className="font-bold text-black uppercase">{paymentMethod.replace('_', ' ')}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="font-label-mono text-[#6E6E73] uppercase">Mock Tracking Key</span>
                  <span className="font-label-mono font-bold text-[#008DDA] tracking-wider">AETH-TRK-7840192</span>
                </div>
              </div>

              <p className="text-[#6E6E73] text-sm leading-relaxed mb-8">
                Your transaction has been securely processed. Aetheris logistics dispatch systems have queued your shipment targeting transit in 2-3 business days.
              </p>
              
              <Link 
                href="/products" 
                className="w-full inline-block bg-black text-white hover:bg-[#008DDA] py-4 font-label-mono text-xs font-bold tracking-widest transition-all duration-300 active:scale-[0.98]"
              >
                RETURN TO SUPPLY CATALOG
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
