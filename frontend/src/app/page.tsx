"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import ProductCard from '../components/ui/ProductCard';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <main>
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <img src="/assets/backgrounds/gray_business_bg.png" alt="Hero background" />
          </div>
          <div className={styles.heroVignette}></div>
          <div className={styles.heroContent}>
            <div style={{ maxWidth: '800px' }}>
              <h1 className={`${styles.heroTitle} font-display-hero`}>
                The Future of <br />
                <span className={styles.heroTextBlack}>Marketplace Retail</span>
              </h1>
              <div className={styles.heroActions}>
                <Link href="/products" className={`${styles.btnPrimary} font-label-mono`}>EXPLORE COLLECTION</Link>
              </div>
            </div>
          </div>
        </section>


        <section className={styles.trendingSection}>
          <div className={styles.trendingHeader}>
            <div style={{ maxWidth: '600px' }}>
              <h2 className={`${styles.trendingTitle} font-headline-lg`}>Trending Now</h2>
              <p className={`${styles.trendingDesc} font-body-lg`}>The most sought-after hardware in our ecosystem, curated for the modern minimalist.</p>
            </div>
            <div style={{ marginTop: '32px' }}>
              <Link href="/products" className={`${styles.btnSecondary} font-label-mono`}>VIEW ALL PRODUCTS</Link>
            </div>
          </div>
          <div className={styles.grid4}>
            {[
              {
                title: 'Aether-1 Audio',
                desc: 'Pure Acoustic Isolation',
                price: '₹499',
                tag: 'Limited',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDq8VYhF_B1b8-laSJWmPE_nxUFNjDnxHjWFB2nbmJOo5Dx8vmMBBaz858iL3Ji4TOLr1YpJ55qnVEkvOXTcBbXBjOKND5JizQIRFKAsdPcnrtFHcJdMs93q56pTsg1dFDCMiF167l9mJnoJnyW3VAYdC2FfsObCJcHB0WpfIK_i_8-peiFF0xrioNkK4AuxRTLRMBvBiZtTaeICUAstXW3bhku286XR2e5MlqOsAXSkCw0eUz4f31c55Nv916zswU5oIyXnz4-2L1Q'
              },
              {
                title: 'Slate Pro 14',
                desc: 'Infinite Productivity',
                price: '₹899',
                tag: null,
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe1I_wnZjOVrSTlq6e5YE9cDn_l-seQwIsklxsnyTR-AsX3hxmowYsXVLR2TOAhA4dDiDEL6y-gttJaALS6jwEkTAMKEzfFZnNc-YK7SFMdLkOaFbbSZeDEUghXCYU3iGpbBhDRB5swcsDJkQDrhqK93cOxmPwH-xKyo3pG05IW-yNvqy2xfG6yTnBt30m2zDzOms-gvPGT2s_r0bSkHCWcJ7Kdpl4fOtfVHZ3JXCqR55GNZDEWD1aZFZ09geGbRiBJhUhhT5P2wK1'
              },
              {
                title: 'Temporal Core',
                desc: 'Precision Horology',
                price: '₹249',
                tag: null,
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnMG_ruSwoYvhBdzPXLi7AecU5dstB8T-adHtPww3GHtLmGg7LIwwD0SA7wIj4TyJ018P5rQIrVpd_d8TYgXOnUrKEx6wIdZ_d5nFwNEigXtQXZEz56niOKJmk_6TYpqIidJuWOBR_gLvXJMHPnjSxdOdWgP_o92TteoOB6BUmLAgQyGaMQBPUFDOnZgFwl-Z3TcV9HpQDHqLEZ_N_BuSDRHVU9N-JD20XsxVbQt6GhJm00ulLBfM7DnCzLZ1mTRnJkJtW6Z25LJ1L'
              },
              {
                title: 'Void Earbuds',
                desc: 'Zero Noise Policy',
                price: '₹189',
                tag: null,
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDug6H8qy9Cdfl_O9FzQ8sHuhk2eUCxHhllgxLq9AsOzgo9VOhcI9HxT8Txx-IEmBrXfdpPB2ZS6XiWlMZ8ZHtb1Nqqsl07wsMJVl7jUGcmxxTjZts_qoG4H-yHRQkDZh7ZD4pCvbkTbnAkUaPLI9nbbmBSZ3oDG9pxeSWTBHyE3wE1ZSA9_6DW56DVj5oWzgrGW-6cxZPP-qLde7eJdQaKDS-8ZUtH1HVntPiwHygRwH6M3867oL8kVZkON0BHvSiQKo9zBlJeGkuF'
              }
            ].map((p, i) => (
              <ProductCard key={i} product={p} />
            ))}
          </div>
        </section>

        <section className={styles.infraSection}>
          <div className={styles.infraBg}></div>
          <div className={`${styles.infraGrid} px-container-padding-desktop`}>
            <div>
              <span className={`${styles.infraLabel} font-label-mono`}>Built for Scale</span>
              <h2 className={`${styles.infraTitle} font-headline-lg`}>Infrastructure that powers the future.</h2>
              <div className={styles.infraFeatures}>
                <div>
                  <span className={`material-symbols-outlined ${styles.infraIcon}`}>security</span>
                  <h5 className={`${styles.infraFeatureTitle} font-headline-md`}>Encrypted Logistics</h5>
                  <p className={`${styles.infraFeatureDesc} font-body-md`}>End-to-end security protocols for every transaction and physical delivery.</p>
                </div>
                <div>
                  <span className={`material-symbols-outlined ${styles.infraIcon}`}>bolt</span>
                  <h5 className={`${styles.infraFeatureTitle} font-headline-md`}>Hyper-Speed API</h5>
                  <p className={`${styles.infraFeatureDesc} font-body-md`}>Sub-millisecond latency for real-time inventory and developer integrations.</p>
                </div>
              </div>
            </div>
            <div className={styles.infraVisual}>
              <div className={styles.infraCircle}>
                <div className={styles.infraInnerCircle}>
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGW42BDy0q6kNcOCd_Hhwo2tJR3y9LSe3g9d2PfTW8lWCcVMgn556JOypvRYppvy8qPJ7etmbnkzPZYSuLZwtWoMVrZ7Q9oI6NGtlE51R7AXkZos9iHd3jpES2Y0sfYdheHhi4VchuJWSsDOl6It0U86U9k7_GNjiPN8NME7qFviFQQRPwQM9QV5B7byyjlSYqTVDlTG8RSPt6b6KJwM8Lg-tyYzBwopeIP7KWzY_mQwYXx6mj6WqzYoGgrnlVvydMC_rJxoYEJZrv" alt="Global infrastructure" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
