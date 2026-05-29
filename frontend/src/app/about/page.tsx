"use client";
import Link from 'next/link';
import styles from './page.module.css';

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.aboutHero}>
        <div className={styles.heroBg}>
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
            alt="Aetheris Minimalist Design Workspace Studio" 
          />
        </div>
        <div className={styles.heroContent}>
          <span className={`${styles.subtitle} font-label-mono`}>About Aetheris</span>
          <h1 className={`${styles.title} font-display-hero`}>
            CURATING THE PINNACLE OF HARDWARE DESIGN.
          </h1>
          <div className={styles.heroAction}>
            <Link href="/products" className={`${styles.btnPrimary} font-label-mono`}>
              EXPLORE THE CATALOG
            </Link>
            <p className={`${styles.heroDesc} font-body-lg`}>
              An experimental design house and premium retail ecosystem curated for creators, developers, and collectors who value high material integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className={styles.visionSection}>
        <div className={styles.visionGrid}>
          <div className={styles.visionContent}>
            <h2 className={`${styles.visionTitle} font-headline-lg`}>CRAFTED FOR <br /> UTILITY.</h2>
            <p className={`${styles.visionDesc} font-body-lg`}>
              Our design philosophy strips away the noise of generic tech to focus on geometric purity, glassmorphic accents, and absolute tactile weight. Every drop in our catalog represents thousands of hours of material engineering and structural verification.
            </p>
            <div className={styles.stats}>
              <div>
                <span className={`${styles.statValue} font-headline-md`}>100%</span>
                <span className={`${styles.statLabel} font-label-mono`}>Authenticity Guarantee</span>
              </div>
              <div>
                <span className={`${styles.statValue} font-headline-md`}>24+</span>
                <span className={`${styles.statLabel} font-label-mono`}>Workspace Drops</span>
              </div>
            </div>
          </div>
          <div className={styles.visionImageWrapper}>
            <div className={styles.visionImage}>
              <img 
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80" 
                alt="Bespoke materials and creative design workstation layout closeup design detail" 
              />
            </div>
            <div className={styles.visionBadge}>
              <span className={`${styles.visionBadgeTitle} font-label-mono`}>Design Directive</span>
              <p className="font-body-md leading-tight">Eliminate visual noise through geometric purity and high material integrity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Foundational Pillars */}
      <section className={styles.pillarsSection}>
        <div className={styles.pillarsHeader}>
          <span className={`${styles.pillarsPreTitle} font-label-mono`}>Foundational Pillars</span>
          <h2 className={`${styles.pillarsTitle} font-headline-lg`}>THE AETHERIS PROTOCOL.</h2>
        </div>
        <div className={styles.pillarsGrid}>
          <div className={styles.pillarCard}>
            <div>
              <span className={`material-symbols-outlined ${styles.pillarIcon}`}>palette</span>
              <h3 className={`${styles.pillarTitle} font-headline-md`}>Minimalist Form</h3>
              <p className={`${styles.pillarDesc} font-body-md`}>
                Every contour, keycap profile, and internal trace is crafted with absolute intention. We strip away the standard corporate excess to deliver pure architectural utility.
              </p>
            </div>
            <div className={styles.pillarLink}>
              <Link href="/products" className="font-label-mono">EXPLORE DESIGNS</Link>
            </div>
          </div>
          <div className={styles.pillarCard}>
            <div>
              <span className={`material-symbols-outlined ${styles.pillarIcon}`}>verified</span>
              <h3 className={`${styles.pillarTitle} font-headline-md`}>Bespoke Materials</h3>
              <p className={`${styles.pillarDesc} font-body-md`}>
                From aerospace-grade CNC-milled aluminum chassis to lightweight water-resistant technical knits, we source only the most resilient and tactile materials.
              </p>
            </div>
            <div className={styles.pillarLink}>
              <Link href="/products" className="font-label-mono">VIEW SPECS</Link>
            </div>
          </div>
          <div className={styles.pillarCard}>
            <div>
              <span className={`material-symbols-outlined ${styles.pillarIcon}`}>autorenew</span>
              <h3 className={`${styles.pillarTitle} font-headline-md`}>Circular Setup</h3>
              <p className={`${styles.pillarDesc} font-body-md`}>
                Workspaces designed to evolve. Return any past Aetheris hardware drop at any time for shopping credits to fund your next desk upgrade, keeping quality tech in active cycles.
              </p>
            </div>
            <div className={styles.pillarLink}>
              <Link href="/products" className="font-label-mono">TRADE IN NOW</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure / Curation Section */}
      <section className={styles.infraSection}>
        <div className={styles.infraContainer}>
          <div className={styles.infraGrid}>
            <div className={styles.infraContent}>
              <h2 className={`${styles.infraTitle} font-headline-lg`}>DELIVERED TO <br /> YOUR STUDIO.</h2>
              <div>
                <div className={styles.infraFeatureBox}>
                  <h4 className={`${styles.infraFeatureLabel} font-label-mono`}>Surgical Packaging</h4>
                  <p className="font-body-md">Every premium item is enclosed in custom, high-density anti-static foam structures that protect high-precision circuitry against kinetic shocks during worldwide transport.</p>
                </div>
                <div className={styles.infraFeatureBox}>
                  <h4 className={`${styles.infraFeatureLabel} font-label-mono`}>Concierge Dispatch</h4>
                  <p className="font-body-md">Real-time telemetry tags monitor packaging pressure and humidity level en route, ensuring your new hardware arrives in pristine showcase condition.</p>
                </div>
              </div>
            </div>
            <div className={styles.infraMap}>
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80" 
                alt="Aetheris Global Dispatch and Surgical Packaging Logistics Network" 
              />
              <div className={styles.mapStatus}>
                <span className={`${styles.statusLabel} font-label-mono`}>Fulfillment Status</span>
                <div className={styles.statusFlex}>
                  <span className={styles.statusValue}>24 Hrs</span>
                  <span className={styles.statusUnit}>Dispatch Target</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2 className={`${styles.ctaTitle} font-display-hero-mobile`}>ELEVATE YOUR CREATIVE SPACE.</h2>
        <div className={styles.ctaButtons}>
          <Link href="/products" className={`${styles.btnCtaPrimary} font-label-mono`}>
            EXPLORE THE STORE
          </Link>
          <Link href="/services" className={`${styles.btnCtaOutline} font-label-mono`}>
            VIP SERVICES
          </Link>
        </div>
      </section>
    </main>
  );
}
