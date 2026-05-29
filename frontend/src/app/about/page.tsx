"use client";
import styles from './page.module.css';

export default function About() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <section className={styles.aboutHero}>
        <div className={styles.heroBg}>
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMqJyzKVOAo6BBpUabt2oKAwJ9h0XWGyNHIbqwuA_iOocdB9PmgDRi0u_wEN7VFyje98_GkefHguIvE-uuqteZ4yQ67HN-r0upTaqFxxhETvw5rsGlZQ4w4S3cCqRgUwvMTkZPUOS7Axjtzze1pS-lwzXPvyirucyhUBoh4GHv9JCVaeaIRhs0kXu_lIl1jqDVsy0xHtgSMWb7fhtlGH2UuUB-VVFYevHlpCHrF-S3LkY83Eqeus3XU7kJ95YxhfLKXZTPugsXxoyx" alt="Corporate Headquarters" />
        </div>
        <div className={styles.heroContent}>
          <span className={`${styles.subtitle} font-label-mono`}>About Aetheris</span>
          <h1 className={`${styles.title} font-display-hero`}>
            REDEFINING THE FUTURE OF RETAIL.
          </h1>
          <div className={styles.heroAction}>
            <button className={`${styles.btnPrimary} font-label-mono`}>OUR MANIFESTO</button>
            <p className={`${styles.heroDesc} font-body-lg`}>
              An ecosystem built on the principles of surgical precision, architectural scale, and uncompromised speed.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.visionSection}>
        <div className={styles.visionGrid}>
          <div className={styles.visionContent}>
            <h2 className={`${styles.visionTitle} font-headline-lg`}>ENGINEERED <br /> FOR SCALE.</h2>
            <p className={`${styles.visionDesc} font-body-lg`}>
              Aetheris is not just a marketplace. It is a technical foundation for the next generation of commerce. We bridge the gap between industrial-grade logistics and intuitive human interfaces, ensuring that every transaction is as precise as a clockwork mechanism.
            </p>
            <div className={styles.stats}>
              <div>
                <span className={`${styles.statValue} font-headline-md`}>42ms</span>
                <span className={`${styles.statLabel} font-label-mono`}>Order Latency</span>
              </div>
              <div>
                <span className={`${styles.statValue} font-headline-md`}>190+</span>
                <span className={`${styles.statLabel} font-label-mono`}>Global Hubs</span>
              </div>
            </div>
          </div>
          <div className={styles.visionImageWrapper}>
            <div className={styles.visionImage}>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwmjUl6kcVosFp1wYhwAyAspPwwWpzHTsheTn1liYwV8h9Td2w867MT_kRYOF_goD7gbaJYVqRiVlwl5A0FHH49kVGe_2TTm6m9CsKChOTPoXa48MdTBCAykQs_M1NP5DPBwr4QjNKxsontXsFriy7ZYLUT2-cyksPw6aW0DwSOPjV86K1vu93BsH1ANikWGLV80M6s6qlkkhMfzpU8JH-Pz6XDb-S6Bmp2yESHgz4hvBBjSWyWsx32dH2faHAOqY57-Ec6dt1uEpH" alt="Server Room" />
            </div>
            <div className={styles.visionBadge}>
              <span className={`${styles.visionBadgeTitle} font-label-mono`}>Core Directive</span>
              <p className="font-body-md leading-tight">Eliminate friction through structural innovation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.pillarsSection}>
        <div className={styles.pillarsHeader}>
          <span className={`${styles.pillarsPreTitle} font-label-mono`}>Foundational Pillars</span>
          <h2 className={`${styles.pillarsTitle} font-headline-lg`}>THE AETHERIS PROTOCOL.</h2>
        </div>
        <div className={styles.pillarsGrid}>
          <div className={styles.pillarCard}>
            <div>
              <span className={`material-symbols-outlined ${styles.pillarIcon}`}>speed</span>
              <h3 className={`${styles.pillarTitle} font-headline-md`}>Velocity-First</h3>
              <p className={`${styles.pillarDesc} font-body-md`}>
                Our distribution network operates at sub-atomic speeds. From automated sorting hubs to localized drone deployment, we reduce the distance between desire and possession.
              </p>
            </div>
            <div className={styles.pillarLink}><span className="font-label-mono">LEARN MORE</span></div>
          </div>
          <div className={styles.pillarCard}>
            <div>
              <span className={`material-symbols-outlined ${styles.pillarIcon}`}>security</span>
              <h3 className={`${styles.pillarTitle} font-headline-md`}>Elite Security</h3>
              <p className={`${styles.pillarDesc} font-body-md`}>
                Encryption is just the beginning. We employ kinetic and digital safeguards to ensure every asset in our marketplace is verified, authentic, and protected against any breach.
              </p>
            </div>
            <div className={styles.pillarLink}><span className="font-label-mono">LEARN MORE</span></div>
          </div>
          <div className={styles.pillarCard}>
            <div>
              <span className={`material-symbols-outlined ${styles.pillarIcon}`}>language</span>
              <h3 className={`${styles.pillarTitle} font-headline-md`}>Global Backbone</h3>
              <p className={`${styles.pillarDesc} font-body-md`}>
                Our infrastructure spans across continents, utilizing high-bandwidth supply chains that remain resilient even in the face of global disruption.
              </p>
            </div>
            <div className={styles.pillarLink}><span className="font-label-mono">LEARN MORE</span></div>
          </div>
        </div>
      </section>

      <section className={styles.infraSection}>
        <div className={styles.infraContainer}>
          <div className={styles.infraGrid}>
            <div className={styles.infraContent}>
              <h2 className={`${styles.infraTitle} font-headline-lg`}>INFRASTRUCTURE <br /> WITHOUT BORDERS.</h2>
              <div>
                <div className={styles.infraFeatureBox}>
                  <h4 className={`${styles.infraFeatureLabel} font-label-mono`}>Precision Logistics</h4>
                  <p className="font-body-md">AI-optimized routing reduces carbon footprint by 40% while doubling delivery efficiency across major metropolitan hubs.</p>
                </div>
                <div className={styles.infraFeatureBox}>
                  <h4 className={`${styles.infraFeatureLabel} font-label-mono`}>Quantum Authentication</h4>
                  <p className="font-body-md">Every premium item is tagged with a unique digital signature that resides on a secure distributed ledger, guaranteeing origin.</p>
                </div>
              </div>
            </div>
            <div className={styles.infraMap}>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDlA-07Rd9tZvl_4H44uNNmZ4HsHmMtB4p0rh3s9Fqg5OoY6LhkZr1hFgjXXG3BODsL6A8Ilc3uN3mD2UiniG7aFuokJBMnFvS25StnAAOyxJqM4THCxGcSfHiFcVd-WfIAT5dBk6_kZg8FoO6LEMlPuBOlEv604OTWlBY4ffYR55E-_K240-w3lyriMf8uis3YYIVC_1_dONda_2pxzveQ9dSP2WqufQKF062iEWvqY-3t0k13eujYuKCXvvP8pm3d4TICKlpbSCr" alt="Global Map" />
              <div className={styles.mapStatus}>
                <span className={`${styles.statusLabel} font-label-mono`}>Status: Operational</span>
                <div className={styles.statusFlex}>
                  <span className={styles.statusValue}>99.99%</span>
                  <span className={styles.statusUnit}>Uptime Reliability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={`${styles.ctaTitle} font-display-hero-mobile`}>THE FUTURE IS ENGINEERED.</h2>
        <div className={styles.ctaButtons}>
          <button className={`${styles.btnCtaPrimary} font-label-mono`}>VIEW CAREERS</button>
          <button className={`${styles.btnCtaOutline} font-label-mono`}>INVESTOR RELATIONS</button>
        </div>
      </section>
    </main>
  );
}
