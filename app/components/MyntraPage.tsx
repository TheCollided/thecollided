'use client';

import Image from 'next/image';
import { trackButtonClick } from '@/lib/analytics';
import styles from '@/styles/pages.module.css';

export const MyntraPage = () => {
  const handleMyntraClick = () => {
    if (typeof trackButtonClick === 'function') {
      trackButtonClick('myntra_cta');
    }
  };

  return (
    <div className={styles.myntraPage}>
      
      {/* Logos and Divider Layout */}
      <div className={styles.myntraLayout}>
        <div className={styles.leftSection}>
          <Image
            src="/mainLogo.png"
            alt="Collided Logo"
            width={350}
            height={120}
            className={styles.myntraLogoLeft}
            style={{ width: 'auto%', height: '100%', maxHeight: '750px' }}
            priority
          />
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.rightSection}>
          <div className={styles.myntraBadgeBox}>
            <Image
              src="/myntraLogo.png"
              alt="Myntra Logo"
              width={220}
              height={80}
              className={styles.myntraLogoRight}
              style={{ width: '100%', height: 'auto'}}
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Text Descriptions */}
      <div className={styles.textContainer}>
        <p className={styles.myntraDescription}>
          Collided is exclusively available on Myntra - our official marketplace partner.
        </p>
        <p className={styles.myntraDescription}>
          Explore premium everyday essentials, discover new drops every week, and enjoy exclusive offers available only on Myntra.
        </p>
      </div>
      
      {/* CTA Button */}
      <a
        href="https://www.myntra.com/collided?rawQuery=collided"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.shopNowButton}
        onClick={handleMyntraClick}
      >
        SHOP NOW!!
      </a>

    </div>
  );
};