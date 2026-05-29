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
                title: 'boAt Rockerz 450',
                desc: 'Bluetooth Wireless Sound',
                price: '₹1,499',
                tag: 'Limited',
                img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80'
              },
              {
                title: 'Redgear Shadow Blade',
                desc: 'Mechanical Click Keyboard',
                price: '₹2,499',
                tag: null,
                img: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80'
              },
              {
                title: 'Philips Hue Smart Bulb',
                desc: 'Dimmable Ambient Lighting',
                price: '₹1,999',
                tag: null,
                img: 'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=600&q=80'
              },
              {
                title: 'OnePlus Nord Buds 2r',
                desc: 'True Wireless Audio Buds',
                price: '₹1,999',
                tag: null,
                img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80'
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
                  <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" alt="Global server network infrastructure" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
