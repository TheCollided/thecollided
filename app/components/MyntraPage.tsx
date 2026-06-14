'use client';

import { trackButtonClick } from '@/lib/analytics';
import styles from '@/styles/pages.module.css';

export const MyntraPage = () => {
  const handleMyntraClick = () => {
    trackButtonClick('myntra_cta');
  };

  return (
    <div className={styles.myntraPage}>
      <div className={styles.myntraContainer}>
        <h2 className={styles.myntraTitle}>
          Brand × <span style={{ color: '#d6336c' }}>Myntra</span>
        </h2>
        
        <div className={styles.myntraBadge}>
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #d6336c 0%, #f06595 100%)',
              borderRadius: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '2rem',
              fontWeight: 'bold',
            }}
          >
            M
          </div>
        </div>

        <p className={styles.myntraDescription}>
          Discover our exclusive collection available on Myntra. Shop premium quality products with special offers and fast delivery.
        </p>

        <a
          href="https://www.myntra.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
          onClick={handleMyntraClick}
        >
          Shop on Myntra
        </a>
      </div>
    </div>
  );
};
