"use client";
import styles from './page.module.css';
import ConsoleSimulator from '../../components/ui/ConsoleSimulator';

export default function Services() {
  return (
    <main>
      <section className={styles.servicesHero}>
        <div className={styles.heroBg}>
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfMFI_0K1gvuJpXuClNSJFskactyWRtndQb4jwDGxLfx8lXMU4uNgUTBSCQNGXxh7DnVpNJR1ofAXrCHOycYT5gd5Rij9UrWDKlrxL2zHH2ITn6pdZfmV7ZqMVVZjRq31MLAJCbSg9aQCIccIgLYs1qpLaj43ZZdWwK_QkpZRWGnDYdc1gakHE6sXEq_iNaAvC4o6tpo8qbe-6MqhMg692oUFaiE3G03TPrecr6D1ADWF60G1u45WOMutjl6cEi51L5-TEaGufAwxa" alt="Engineering Hero" />
        </div>
        <div className={styles.heroContent}>
          <span className={`${styles.subtitle} font-label-mono`}>Enterprise Solutions</span>
          <h1 className={`${styles.title} font-headline-lg`}>
            ENGINEERING THE FUTURE<br />
            OF GLOBAL COMMERCE.
          </h1>
          <p className={`${styles.heroDesc} font-body-lg`}>
            Aetheris provides the industrial-grade infrastructure for modern enterprise. Scalable, secure, and built for surgical precision in high-frequency global markets.
          </p>
          <div className={styles.heroActions}>
            <button className={`${styles.btnPrimary} font-label-mono`}>Start Free Integration</button>
            <button className={`${styles.btnOutline} font-label-mono`}>View Documentation</button>
          </div>
        </div>
      </section>

      <section className={styles.highlightsSection}>
        <div className={styles.highlightsGrid}>
          <div className={`${styles.hlCard1} ${styles.industrialBorder}`}>
            <div style={{ zIndex: 10, position: 'relative' }}>
              <span className={`${styles.hlLabel} font-label-mono`}>01 / ECOSYSTEM</span>
              <h2 className={`${styles.hlTitle} font-headline-lg`}>Marketplace<br />Integration</h2>
              <p className={`${styles.hlDesc} font-body-md`}>
                Seamlessly synchronize your inventory across our global network with 99.9% uptime and sub-millisecond data reconciliation.
              </p>
            </div>
            <div className={styles.hlIcon}>
              <span className="material-symbols-outlined" style={{ fontSize: '64px', color: 'var(--surface-container-highest)' }}>hub</span>
            </div>
            <div className={styles.hlCard1Bg}>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD93nBixz0Of9De0r4g0i-hUAUrJQYAAw9rI6CbNlFIJWwMpLTFEDD8S3MPr876FXafVdsZXacsK7C53cQWlc4OgmCiNxpuxyP9eiL9o3ryTjDCaObyHdhvSrgYw89gE6pRcVNC2rSAun-qlByH7m1ZxIi80rcLCsPAtWeOxT21EboKNoxGq6IPKxwuwIeXZz98qTNRY1Ls0nXhOAnNYQ_zyBc03JmFYdLjbUo_qPDiSHWtQP0USw_cXBlGNwug2Ijh5wrueg8j5eYG" alt="Integration Pattern" />
            </div>
          </div>

          <div className={styles.hlCard2}>
            <div>
              <span className={`${styles.hlLabel} font-label-mono`}>02 / LOGISTICS</span>
              <h2 className={`${styles.hlCard2Title} font-headline-md`}>Global<br />Fulfillment</h2>
              <p className="font-body-md" style={{ color: 'var(--surface-variant)' }}>
                Surgical logistics via a decentralized hub network. Real-time tracking from warehouse to doorstep.
              </p>
            </div>
            <div>
              <span className={`material-symbols-outlined ${styles.hlCard2Icon}`}>local_shipping</span>
            </div>
          </div>

          <div className={`${styles.hlCard3} ${styles.industrialBorder}`}>
            <span className={`${styles.hlLabel} font-label-mono`}>03 / INTERFACE</span>
            <h2 className={`${styles.hlTitle} font-headline-md`}>Developer<br />API Access</h2>
            <p className="font-body-md" style={{ color: 'var(--text-secondary)' }}>
              Our GraphQL API allows for deep customization and rapid deployment of commerce features.
            </p>
            <div className={`${styles.apiBox} font-label-mono`}>
              <code>GET /v1/market/sync</code>
              <code style={{ color: 'var(--secondary)' }}>{'{ "status": "active" }'}</code>
            </div>
          </div>

          <div className={`${styles.hlCard4} ${styles.industrialBorder}`}>
            <div className={styles.specsGrid}>
              <div>
                <div className="font-headline-lg" style={{ color: 'var(--primary)' }}>99.9%</div>
                <div className="font-label-mono" style={{ color: 'var(--secondary)', textTransform: 'uppercase' }}>Availability</div>
              </div>
              <div>
                <div className="font-headline-lg" style={{ color: 'var(--primary)' }}>12ms</div>
                <div className="font-label-mono" style={{ color: 'var(--secondary)', textTransform: 'uppercase' }}>Latency</div>
              </div>
              <div>
                <div className="font-headline-lg" style={{ color: 'var(--primary)' }}>200+</div>
                <div className="font-label-mono" style={{ color: 'var(--secondary)', textTransform: 'uppercase' }}>Regions</div>
              </div>
              <div>
                <div className="font-headline-lg" style={{ color: 'var(--primary)' }}>1M+</div>
                <div className="font-label-mono" style={{ color: 'var(--secondary)', textTransform: 'uppercase' }}>TPS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <h2 className={`${styles.ctaTitle} font-headline-lg`}>BUILT FOR THE<br />NEXT DECADE.</h2>
            <p className={`${styles.ctaDesc} font-body-lg`}>
              Aetheris is more than a marketplace. It is a technical foundation for partners who demand reliability, speed, and architectural elegance. Join the elite tier of global commerce providers.
            </p>
            <button className={`${styles.btnCta} font-label-mono`}>Start Free Integration</button>
          </div>
           <ConsoleSimulator />
        </div>
      </section>
    </main>
  );
}
