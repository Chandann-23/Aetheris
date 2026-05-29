"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
import styles from './Navbar.module.css';
import { useCartStore } from '@/store/useCartStore';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { isSignedIn } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());

  useEffect(() => {
    setMounted(true);
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
          {/* Clerk Auth: show Sign In button when logged out, avatar when logged in */}
          {!isSignedIn ? (
            <SignInButton mode="modal">
              <button className={`${styles.navLink} font-label-mono`} suppressHydrationWarning>
                Sign In
              </button>
            </SignInButton>
          ) : (
            <UserButton />
          )}

          <Link href="/checkout" className={styles.iconBtn} suppressHydrationWarning>
            <span className="material-symbols-outlined" style={{ color: 'var(--on-surface)' }}>shopping_cart</span>
            {mounted && totalItems > 0 && (
              <span className={styles.badge}>{totalItems}</span>
            )}
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
          {/* Mobile: Clerk auth links */}
          {!isSignedIn ? (
            <SignInButton mode="modal">
              <button
                className={`${styles.mobileLink} font-label-mono`}
                onClick={() => setMenuOpen(false)}
                suppressHydrationWarning
              >
                Sign In
              </button>
            </SignInButton>
          ) : (
            <Link
              href="/checkout"
              className={`${styles.mobileLink} ${isActive('/checkout') ? styles.mobileLinkActive : ''} font-label-mono`}
              onClick={() => setMenuOpen(false)}
            >
              Checkout
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
