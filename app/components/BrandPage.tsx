'use client';

import Image from 'next/image';
import styles from '@/styles/pages.module.css';

export const BrandPage = () => {
  return (
    <div className={styles.brandPage}>
      <div className={styles.brandLogo}>
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '3rem',
            fontWeight: 'bold',
          }}
        >
          TC
        </div>
      </div>
      <h1 className={styles.brandTagline}>Welcome to The Collided</h1>
    </div>
  );
};
