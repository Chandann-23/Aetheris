"use client";
import React from 'react';
import styles from '../../app/services/page.module.css';

export default function ConsoleSimulator() {
  return (
    <div className={`${styles.ctaConsole} ${styles.industrialBorder}`}>
      <div>
        <div className={styles.consoleHeader}>
          <span className="material-symbols-outlined" style={{ color: 'var(--secondary)' }}>terminal</span>
          <span className="font-label-mono" style={{ color: 'var(--secondary)', textTransform: 'uppercase' }}>Developer Console</span>
        </div>
        <div className={`${styles.consoleTerminal} font-label-mono font-body-md`}>
          <p className={styles.consoleLine} style={{ color: 'var(--secondary)' }}>$ curl -X POST https://api.aetheris.com/v1/deploy</p>
          <p className={styles.consoleLine} style={{ color: 'var(--primary)' }}>{'>'} Initializing secure handshake...</p>
          <p className={styles.consoleLine} style={{ color: 'var(--secondary)' }}>{'>'} Auth success. Token: [Redacted]</p>
          <p className={styles.consoleLine} style={{ color: 'var(--primary)' }}>{'>'} Environment: Production</p>
          <p className={styles.consoleLine} style={{ color: 'var(--electric-accent)' }}>{'>'} System status: Nominal</p>
        </div>
      </div>
    </div>
  );
}
