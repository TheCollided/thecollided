'use client';

import Image from 'next/image';
import styles from '@/styles/pages.module.css';

export const BrandPage = () => {
  return (
    <div className={styles.brandPage}>
      
      {/* 1. logoWrapper now wraps BOTH the image and the text */}
      <div className={styles.logoWrapper}>
        
        <Image
          src="/mainLogo.png"
          alt="Collided Logo"
          width={800} // Increased width to fit the container natively
          height={200}
          className={styles.mainLogoImage}
          priority
        />
        
        {/* 2. Text section grouped together */}
        <div className={styles.textSection}>
          
          {/* Top Row: Text then Line */}
          <div className={styles.taglineRow}>
            <span className={styles.smallText}>100% RING-SPUN COTTON</span>
            <div className={styles.separator}></div>
          </div>
          
          {/* Middle Row: Hashtag */}
          <h2 className={styles.hashtag}>#LUXURYTHATYOUCHOOSE</h2>
          
          {/* Bottom Row: Line then Text */}
          <div className={styles.taglineRow}>
            <div className={styles.separator}></div>
            <span className={styles.smallText}>PREMIUM CLOTHING</span>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};