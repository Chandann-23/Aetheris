"use client";
import React from 'react';

interface DeliveryData {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  email: string;
  phone: string;
}

interface CheckoutFormProps {
  activeStep: 'delivery' | 'payment' | 'review';
  paymentMethod: 'credit_card' | 'paypal';
  deliveryData: DeliveryData;
  isDeliverySaved: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNextStep: (step: 'payment' | 'review') => void;
  handleEditDelivery: () => void;
  setPaymentMethod: (method: 'credit_card' | 'paypal') => void;
}

export default function CheckoutForm({
  activeStep,
  paymentMethod,
  deliveryData,
  isDeliverySaved,
  handleInputChange,
  handleNextStep,
  handleEditDelivery,
  setPaymentMethod,
}: CheckoutFormProps) {
  return (
    <div className="space-y-12">
      {/* Step 1: Delivery Options */}
      <section
        className={`border-b border-[#E5E5E7] pb-12 transition-all duration-400 ${activeStep === 'delivery' ? 'opacity-100' : 'opacity-60'}`}
        id="step-delivery"
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-black">
            1. Delivery Options
          </h2>
          {isDeliverySaved && (
            <button
              onClick={handleEditDelivery}
              className="font-label-mono text-xs underline text-[#008DDA] hover:text-black transition-colors"
            >
              EDIT
            </button>
          )}
        </div>

        {activeStep === 'delivery' ? (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-1 border-b border-[#E5E5E7] pb-2 focus-within:border-black transition-colors">
              <label className="block font-label-mono text-[10px] text-[#6E6E73] mb-1 tracking-wider uppercase">
                First Name
              </label>
              <input
                className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm font-semibold tracking-wide placeholder-neutral-300 focus:outline-none"
                placeholder="ALEXANDER"
                type="text"
                name="firstName"
                value={deliveryData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="md:col-span-1 border-b border-[#E5E5E7] pb-2 focus-within:border-black transition-colors">
              <label className="block font-label-mono text-[10px] text-[#6E6E73] mb-1 tracking-wider uppercase">
                Last Name
              </label>
              <input
                className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm font-semibold tracking-wide placeholder-neutral-300 focus:outline-none"
                placeholder="STERLING"
                type="text"
                name="lastName"
                value={deliveryData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="md:col-span-2 border-b border-[#E5E5E7] pb-2 focus-within:border-black transition-colors">
              <label className="block font-label-mono text-[10px] text-[#6E6E73] mb-1 tracking-wider uppercase">
                Street Address
              </label>
              <input
                className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm font-semibold tracking-wide placeholder-neutral-300 focus:outline-none"
                placeholder="101 METRO BOULEVARD"
                type="text"
                name="address"
                value={deliveryData.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="md:col-span-1 border-b border-[#E5E5E7] pb-2 focus-within:border-black transition-colors">
              <label className="block font-label-mono text-[10px] text-[#6E6E73] mb-1 tracking-wider uppercase">
                City
              </label>
              <input
                className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm font-semibold tracking-wide placeholder-neutral-300 focus:outline-none"
                placeholder="NEW YORK"
                type="text"
                name="city"
                value={deliveryData.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="md:col-span-1 border-b border-[#E5E5E7] pb-2 focus-within:border-black transition-colors">
              <label className="block font-label-mono text-[10px] text-[#6E6E73] mb-1 tracking-wider uppercase">
                Postal Code
              </label>
              <input
                className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm font-semibold tracking-wide placeholder-neutral-300 focus:outline-none"
                placeholder="10001"
                type="text"
                name="postalCode"
                value={deliveryData.postalCode}
                onChange={handleInputChange}
              />
            </div>
            <div className="md:col-span-1 border-b border-[#E5E5E7] pb-2 focus-within:border-black transition-colors">
              <label className="block font-label-mono text-[10px] text-[#6E6E73] mb-1 tracking-wider uppercase">
                Email Address
              </label>
              <input
                className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm font-semibold tracking-wide placeholder-neutral-300 focus:outline-none"
                placeholder="A.STERLING@PRECISION.COM"
                type="email"
                name="email"
                value={deliveryData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="md:col-span-1 border-b border-[#E5E5E7] pb-2 focus-within:border-black transition-colors">
              <label className="block font-label-mono text-[10px] text-[#6E6E73] mb-1 tracking-wider uppercase">
                Phone Number
              </label>
              <input
                className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm font-semibold tracking-wide placeholder-neutral-300 focus:outline-none"
                placeholder="+1 212 555 0198"
                type="tel"
                name="phone"
                value={deliveryData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="md:col-span-2 pt-6">
              <button
                onClick={() => handleNextStep('payment')}
                className="bg-black text-white hover:bg-[#008DDA] w-full md:w-auto px-12 py-4 font-label-mono text-xs font-bold tracking-widest transition-all duration-300 active:scale-[0.98]"
                type="button"
              >
                SAVE &amp; CONTINUE
              </button>
            </div>
          </form>
        ) : (
          <div className="text-sm font-semibold text-neutral-600 bg-white p-4 border border-neutral-100 rounded-sm">
            {deliveryData.firstName || 'ALEXANDER'} {deliveryData.lastName || 'STERLING'} • {deliveryData.address || '101 METRO BOULEVARD'}, {deliveryData.city || 'NEW YORK'} • {deliveryData.phone || '+1 212 555 0198'}
          </div>
        )}
      </section>

      {/* Step 2: Payment */}
      <section
        className={`border-b border-[#E5E5E7] pb-12 transition-all duration-400 ${activeStep === 'payment' ? 'opacity-100' : 'opacity-40'}`}
        id="step-payment"
      >
        <h2 className="text-2xl font-bold uppercase tracking-tight text-black mb-8">
          2. Payment
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-2 flex gap-4 mb-4">
            <button
              onClick={() => setPaymentMethod('credit_card')}
              disabled={activeStep !== 'payment'}
              className={`px-6 py-2 border font-label-mono text-xs font-semibold flex items-center gap-2 transition-colors ${paymentMethod === 'credit_card'
                ? 'border-black bg-black text-white'
                : 'border-[#E5E5E7] text-[#6E6E73] hover:border-black'}`}
            >
              <span className="material-symbols-outlined text-sm">credit_card</span> CREDIT CARD
            </button>
            <button
              onClick={() => setPaymentMethod('paypal')}
              disabled={activeStep !== 'payment'}
              className={`px-6 py-2 border font-label-mono text-xs font-semibold flex items-center gap-2 transition-colors ${paymentMethod === 'paypal'
                ? 'border-black bg-black text-white'
                : 'border-[#E5E5E7] text-[#6E6E73] hover:border-black'}`}
            >
              <span className="material-symbols-outlined text-sm">account_balance_wallet</span> PAYPAL
            </button>
          </div>

          {paymentMethod === 'credit_card' ? (
            <>
              <div className="md:col-span-2 border-b border-[#E5E5E7] pb-2 focus-within:border-black transition-colors">
                <label className="block font-label-mono text-[10px] text-[#6E6E73] mb-1 tracking-wider">
                  CARD NUMBER
                </label>
                <input
                  className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm font-semibold tracking-wide placeholder-neutral-300 focus:outline-none"
                  disabled={activeStep !== 'payment'}
                  placeholder="•••• •••• •••• ••••"
                  type="text"
                />
              </div>
              <div className="md:col-span-1 border-b border-[#E5E5E7] pb-2 focus-within:border-black transition-colors">
                <label className="block font-label-mono text-[10px] text-[#6E6E73] mb-1 tracking-wider">
                  EXPIRY DATE
                </label>
                <input
                  className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm font-semibold tracking-wide placeholder-neutral-300 focus:outline-none"
                  disabled={activeStep !== 'payment'}
                  placeholder="MM/YY"
                  type="text"
                />
              </div>
              <div className="md:col-span-1 border-b border-[#E5E5E7] pb-2 focus-within:border-black transition-colors">
                <label className="block font-label-mono text-[10px] text-[#6E6E73] mb-1 tracking-wider">
                  CVC
                </label>
                <input
                  className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm font-semibold tracking-wide placeholder-neutral-300 focus:outline-none"
                  disabled={activeStep !== 'payment'}
                  placeholder="•••"
                  type="text"
                />
              </div>
            </>
          ) : (
            <div className="md:col-span-2 py-4 text-sm font-semibold text-neutral-500">
              PayPal account validation will occur upon clicking Place Order.
            </div>
          )}

          {activeStep === 'payment' && (
            <div className="md:col-span-2 pt-6">
              <button
                onClick={() => handleNextStep('review')}
                className="bg-black text-white hover:bg-[#008DDA] w-full md:w-auto px-12 py-4 font-label-mono text-xs font-bold tracking-widest transition-all duration-300 active:scale-[0.98]"
                type="button"
              >
                SAVE &amp; CONTINUE
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Step 3: Order Review */}
      <section
        className={`pb-12 transition-all duration-400 ${activeStep === 'review' ? 'opacity-100' : 'opacity-40'}`}
        id="step-review"
      >
        <h2 className="text-2xl font-bold uppercase tracking-tight text-black mb-4">
          3. Order Review
        </h2>
        <p className="text-sm text-[#6E6E73] leading-relaxed">
          By clicking &quot;Place Order&quot;, you authorize Aetheris Secure Gateway to securely process this transaction and agree to our Terms of Sale and Privacy Policy.
        </p>
      </section>
    </div>
  );
}
