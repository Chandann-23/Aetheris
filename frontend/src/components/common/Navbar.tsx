"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className="flex items-center gap-12">
          <Link href="/" className={styles.navLogo}>
            Aetheris
          </Link>
          <div className={styles.navLinks}>
            <Link 
              href="/products" 
              className={`${styles.navLink} ${isActive('/products') ? styles.navLinkActive : ''} font-label-mono`}
            >
              Products
            </Link>
            <Link 
              href="/services" 
              className={`${styles.navLink} ${isActive('/services') ? styles.navLinkActive : ''} font-label-mono`}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className={`${styles.navLink} ${isActive('/about') ? styles.navLinkActive : ''} font-label-mono`}
            >
              About
            </Link>
          </div>
        </div>
        <div className={styles.navActions}>
          <button className={styles.iconBtn} suppressHydrationWarning>
            <span className="material-symbols-outlined" style={{ color: 'var(--on-surface)' }}>person</span>
          </button>
          <Link href="/checkout" className={styles.iconBtn} suppressHydrationWarning>
            <span className="material-symbols-outlined" style={{ color: 'var(--on-surface)' }}>shopping_cart</span>
            <span className={styles.badge}>2</span>
          </Link>
          <button 
            className={`${styles.iconBtn} ${styles.menuToggle}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            suppressHydrationWarning
          >
            <span className="material-symbols-outlined" style={{ color: 'var(--on-surface)' }}>
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileLinks}>
          <Link 
            href="/products" 
            className={`${styles.mobileLink} ${isActive('/products') ? styles.mobileLinkActive : ''} font-label-mono`}
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link 
            href="/services" 
            className={`${styles.mobileLink} ${isActive('/services') ? styles.mobileLinkActive : ''} font-label-mono`}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="/about" 
            className={`${styles.mobileLink} ${isActive('/about') ? styles.mobileLinkActive : ''} font-label-mono`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
