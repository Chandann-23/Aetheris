# Aetheris — Premium Minimalist E-Commerce Marketplace
### 🚀 TASK-3: AI Web Developer Internship at inAmigos

Welcome to **Aetheris**, a state-of-the-art, high-end minimalist e-commerce marketplace specifically designed and curated for modern developers, designers, and high-performance digital creators. This project represents **TASK-3** of the **inAmigos AI Web Developer Internship**.

Aetheris delivers an ultra-premium shopping experience combining clean geometric design systems, sleek glassmorphic overlays, subtle micro-animations, and a highly optimized responsive layout.

---

## 📋 Comprehensive Catalog & Photographic Audit

To make Aetheris function like a premium, professional shopping website, we executed a complete catalog transformation under a strict budget constraint:

*   **₹2,500 Strictly Enforced Budget Maximum:** Every single product across the entire database is priced strictly at or below **₹2,499** (INR). Fictional and AI-looking mock prices have been completely replaced.
*   **Real-World Premium Brands:** Removed all AI-generated, fictional, or generic items. The catalog now features real, highly desirable products from trusted brands like *Logitech*, *JBL*, *OnePlus*, *boAt*, *TP-Link*, *Puma*, *Nike*, *SanDisk*, *Fastrack*, *Raspberry Pi*, *Anker*, and *AmazonBasics*.
*   **32 Strictly Unique Unsplash Photo IDs:** Resolved all asset duplications and mismatches. Each of the 32 products features a unique, contextually accurate, and high-resolution Unsplash product photo. No two items share the same image.
*   **Zero Asset Overlap:** Layout closeup details on the *About*, *Services*, and *Landing* pages have been audited and assigned distinct Unsplash IDs to maintain photographic variety.

---

## 🌟 Key Features

*   **Dynamic Products Page:** Fluid filter controls separating items into *Electronics*, *Smart Home*, *Apparel*, and *Dev Tech* categories with instant, stateful category rendering.
*   **State-of-the-Art Cart Store:** Real-time item additions, quantity management, and cart metric calculations utilizing **Zustand** state stores.
*   **Concierge VIP Services Page:** Features beautiful responsive bento grids, customized laser-engraving request flows, and a custom developer **Interactive Console Simulator**.
*   **Clerk Authentication Security:** Fully integrated secure sign-in and sign-up user flows styled with custom monospaced utility components.
*   **Aesthetic Responsive Layout:** Seamless layout scaling for mobile, tablet, and desktop viewports, using fluid CSS Module grid systems.

---

## 🛠️ Technology Stack

*   **Core Framework:** [Next.js 16 (App Router)](https://nextjs.org/) & [React 19](https://react.dev/)
*   **Type Safety:** [TypeScript](https://www.typescriptlang.org/)
*   **State Management:** [Zustand 5](https://github.com/pmndrs/zustand)
*   **Security & Authentication:** [Clerk Auth 7](https://clerk.com/)
*   **Styling Engine:** Vanilla CSS Modules (optimized for speed and geometric alignment) & Tailwind utility tokens
*   **Build System:** Next.js Turbopack compiler (optimized for sub-second hot reload cycles)

---

## 📁 Repository Structure

```filepath
Task-3/
├── frontend/
│   ├── public/                 # Public assets and icons
│   ├── src/
│   │   ├── app/
│   │   │   ├── about/          # Aetheris Design Directive Philosophy page
│   │   │   ├── checkout/       # Multistep checkout flow
│   │   │   ├── products/       # Audited catalog database & filter grid
│   │   │   ├── services/       # Concierge VIP services page & ConsoleSimulator
│   │   │   ├── page.tsx        # Responsive landing page and trending grid
│   │   │   ├── globals.css     # Clean design token definitions & global fonts
│   │   │   └── layout.tsx      # Core root layout, Navbar, and Footer
│   │   ├── components/
│   │   │   ├── common/         # Layout components (Navbar, Footer)
│   │   │   └── ui/             # Reusable UI elements (ProductCard, ConsoleSimulator, CheckoutForm)
│   │   ├── store/
│   │   │   └── useCartStore.ts # Zustand global cart state store
│   │   └── proxy.ts            # Local asset developer proxy
│   ├── package.json
│   ├── tsconfig.json
│   └── next.config.ts
├── docs/                       # Project documentation markdown guides
└── package.json                # Workspace script launcher
```

---

## 🚀 Getting Started & Installation

To run this project locally, follow these steps:

### 1. Prerequisites
Ensure you have [Node.js (v18 or higher)](https://nodejs.org/) installed on your machine.

### 2. Clone the Repository
```bash
git clone https://github.com/Chandann-23/Aetheris.git
cd Aetheris/frontend
```

### 3. Install Dependencies
Initialize and install the node package dependencies:
```bash
npm install
```

### 4. Setup Environment Variables
Create a `.env.local` file in the `frontend` folder and add your Clerk credentials:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

### 5. Run the Development Server
Launch the compiler and start the Next.js local server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to explore the audited, responsive marketplace.

### 6. Build for Production
To compile and build the optimized production assets:
```bash
npm run build
```

---

## 🛡️ Verification & Code Integrity

Aetheris has been verified against TypeScript compilation and production build standards. Running the Turbopack compiler compiles all routes successfully:
```bash
▲ Next.js 16.2.6 (Turbopack)
  Creating an optimized production build ...
✓ Compiled successfully in 4.1s
  Running TypeScript ...
  Finished TypeScript in 2.8s ...
✓ Generating static pages using 7 workers (7/7) in 262ms
```

---

*Curated with absolute geometric purity. Developed as part of the inAmigos AI Web Developer Internship.*
