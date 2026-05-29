import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerBrand}>
          <span className={`${styles.footerTitle} font-headline-lg`}>Aetheris</span>
          <p className={`${styles.footerDesc} font-body-md`}>Curating the pinnacle of technological design. More than a marketplace, an evolution of how we interact with utility.</p>
        </div>
        <div>
          <h6 className={`${styles.footerColumnTitle} font-label-mono`}>Legal</h6>
          <ul className={styles.footerList}>
            <li><Link href="#" className={`${styles.footerLink} font-label-mono`}>Privacy Policy</Link></li>
            <li><Link href="#" className={`${styles.footerLink} font-label-mono`}>Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h6 className={`${styles.footerColumnTitle} font-label-mono`}>Support</h6>
          <ul className={styles.footerList}>
            <li><Link href="#" className={`${styles.footerLink} font-label-mono`}>Shipping Info</Link></li>
            <li><Link href="#" className={`${styles.footerLink} font-label-mono`}>Returns</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={`${styles.footerCopy} font-label-mono`}>© 2024 Aetheris Marketplace. All rights reserved.</p>
        <div className={styles.footerSocials}>
          <Link href="#" className={styles.footerSocialLink}><span className="material-symbols-outlined">share</span></Link>
          <Link href="#" className={styles.footerSocialLink}><span className="material-symbols-outlined">public</span></Link>
        </div>
      </div>
    </footer>
  );
}

