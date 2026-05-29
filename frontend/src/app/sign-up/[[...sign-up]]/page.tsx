import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#f9f9fb] px-4" style={{ paddingTop: '80px' }}>
      {/* Premium minimal header decoration */}
      <div className="text-center mb-8">
        <Link href="/" className="text-3xl font-black text-black tracking-tighter hover:opacity-80 transition-opacity">
          AETHERIS
        </Link>
        <p className="font-label-mono text-[10px] text-[#6E6E73] tracking-widest mt-2 uppercase">
          CREATE SECURITY IDENTITY PROFILE
        </p>
      </div>

      <div className="w-full max-w-md bg-white border border-[#E5E5E7] p-1 shadow-sm rounded-sm flex justify-center">
        <SignUp 
          appearance={{
            elements: {
              formButtonPrimary: 'bg-black hover:bg-[#008DDA] transition-all text-xs font-bold font-label-mono uppercase tracking-widest rounded-sm py-3',
              card: 'shadow-none border-none max-w-full w-full bg-white',
              headerTitle: 'text-black font-extrabold uppercase tracking-tight text-xl',
              headerSubtitle: 'text-[#6E6E73] text-xs font-medium',
              socialButtonsBlockButton: 'border border-[#E5E5E7] rounded-sm hover:bg-neutral-50 transition-all font-label-mono text-xs text-black',
              formFieldInput: 'border border-[#E5E5E7] rounded-sm focus:border-[#008DDA] focus:ring-0 transition-all',
              footerActionLink: 'text-black hover:text-[#008DDA] transition-all font-semibold',
            }
          }}
        />
      </div>

      <p className="text-[9px] text-[#6E6E73] font-label-mono uppercase tracking-widest mt-8">
        Aetheris Gatekeeper • Powered by Clerk
      </p>
    </main>
  );
}
