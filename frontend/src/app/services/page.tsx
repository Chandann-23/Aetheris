"use client";
import Link from 'next/link';
import styles from './page.module.css';
import ConsoleSimulator from '../../components/ui/ConsoleSimulator';

export default function Services() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.servicesHero}>
        <div className={styles.heroBg}>
          <img 
            src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?auto=format&fit=crop&w=1200&q=80" 
            alt="Premium modern workspace desk setup" 
          />
        </div>
        <div className={styles.heroContent}>
          <span className={`${styles.subtitle} font-label-mono`}>VIP Services</span>
          <h1 className={`${styles.title} font-headline-lg`}>
            CONCIERGE SERVICES FOR<br />
            MODERN WORKSPACES.
          </h1>
          <p className={`${styles.heroDesc} font-body-lg`}>
            Aetheris provides comprehensive premium curation and priority dispatch utilities tailored specifically for developers, designers, and high-performance digital creators.
          </p>
          <div className={styles.heroActions}>
            <Link href="/products" className={`${styles.btnPrimary} font-label-mono`}>
              EXPLORE THE PRODUCTS
            </Link>
            <Link href="/about" className={`${styles.btnOutline} font-label-mono`}>
              OUR PHILOSOPHY
            </Link>
          </div>
        </div>
      </section>

      {/* Bento Highlights Section */}
      <section className={styles.highlightsSection}>
        <div className={styles.highlightsGrid}>
          {/* Highlight 1: Workspace Curation */}
          <div className={`${styles.hlCard1} ${styles.industrialBorder}`}>
            <div style={{ zIndex: 10, position: 'relative' }}>
              <span className={`${styles.hlLabel} font-label-mono`}>01 / CURATION</span>
              <h2 className={`${styles.hlTitle} font-headline-lg`}>Workspace<br />Curation</h2>
              <p className={`${styles.hlDesc} font-body-md`}>
                Collaborate directly with our design architects to plan your physical studio layout, customized down to acoustic calibration and exact color harmonies.
              </p>
            </div>
            <div className={styles.hlIcon}>
              <span className="material-symbols-outlined" style={{ fontSize: '64px', color: 'var(--surface-container-highest)' }}>space_dashboard</span>
            </div>
            <div className={styles.hlCard1Bg}>
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" 
                alt="Modern studio workspace architecture design and blueprint plan" 
              />
            </div>
          </div>

          {/* Highlight 2: Express Dispatch */}
          <div className={styles.hlCard2}>
            <div>
              <span className={`${styles.hlLabel} font-label-mono`}>02 / DISPATCH</span>
              <h2 className={`${styles.hlCard2Title} font-headline-md`}>Elite Express<br />Dispatch</h2>
              <p className="font-body-md" style={{ color: 'var(--surface-variant)' }}>
                Surgical, insured logistics via localized high-priority couriers. Shock-absorption flight cases protect every workstation drop to your doorstep.
              </p>
            </div>
            <div>
              <span className={`material-symbols-outlined ${styles.hlCard2Icon}`}>local_shipping</span>
            </div>
          </div>

          {/* Highlight 3: Personalization */}
          <div className={`${styles.hlCard3} ${styles.industrialBorder}`}>
            <span className={`${styles.hlLabel} font-label-mono`}>03 / ENGRAVING</span>
            <h2 className={`${styles.hlTitle} font-headline-md`}>Laser Engraving<br />& Customization</h2>
            <p className="font-body-md" style={{ color: 'var(--text-secondary)' }}>
              Acquire custom monospaced laser-engraved names, batch identifiers, or keycap engravings on aluminum chassis parts.
            </p>
            <div className={`${styles.apiBox} font-label-mono`}>
              <code>POST /v1/engrave/slate-14</code>
              <code style={{ color: 'var(--secondary)' }}>{'{ "text": "AETHERIS_USER_09", "font": "JetBrains Mono" }'}</code>
            </div>
          </div>

          {/* Highlight 4: Specifications */}
          <div className={`${styles.hlCard4} ${styles.industrialBorder}`}>
            <div className={styles.specsGrid}>
              <div>
                <div className="font-headline-lg" style={{ color: 'var(--primary)' }}>100%</div>
                <div className="font-label-mono" style={{ color: 'var(--secondary)', textTransform: 'uppercase' }}>Insured Transit</div>
              </div>
              <div>
                <div className="font-headline-lg" style={{ color: 'var(--primary)' }}>3-Yr</div>
                <div className="font-label-mono" style={{ color: 'var(--secondary)', textTransform: 'uppercase' }}>Care Warranty</div>
              </div>
              <div>
                <div className="font-headline-lg" style={{ color: 'var(--primary)' }}>&lt; 3 Hr</div>
                <div className="font-label-mono" style={{ color: 'var(--secondary)', textTransform: 'uppercase' }}>Dispatch Speed</div>
              </div>
              <div>
                <div className="font-headline-lg" style={{ color: 'var(--primary)' }}>20k+</div>
                <div className="font-label-mono" style={{ color: 'var(--secondary)', textTransform: 'uppercase' }}>Upgraded Workspaces</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <h2 className={`${styles.ctaTitle} font-headline-lg`}>BUILT FOR THE<br />CONNOISSEUR.</h2>
            <p className={`${styles.ctaDesc} font-body-lg`}>
              Aetheris goes beyond standard retail. Register with the VIP Engineering Protocol to receive early private drop access, customized material upgrades, and exclusive setup consultations.
            </p>
            <Link href="/products" className={`${styles.btnCta} font-label-mono`}>
              Join the VIP Protocol
            </Link>
          </div>
          <ConsoleSimulator />
        </div>
      </section>
    </main>
  );
}
