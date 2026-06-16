'use client';

import Image from 'next/image';
import styles from '@/styles/pages.module.css';

export const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      
      <div className={styles.contentWrapper}>
        <h1 className={styles.contactTitle}>GET IN TOUCH</h1>
        
        <div className={styles.textContainer}>
          <p className={styles.contactDescription}>
            Queries, feedback, bulk orders, customizations, or collaboration opportunities
          </p>
          <p className={styles.contactDescription}>
            we'd love to hear from you.
          </p>
        </div>
        
        <div className={styles.contactLinksContainer}>
          <a href="https://www.instagram.com/thecollided.com_" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={45}
              height={45}
              className={styles.socialIcon}
              style={{ width: '45px', height: 'auto' }}
              priority
            />
            <span>@thecollided.com_</span>
          </a>
          
          <a href="https://wa.me/919784843532" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            <Image
              src="/whatsapp.png"
              alt="WhatsApp"
              width={45}
              height={45}
              className={styles.socialIcon}
              style={{ width: '45px', height: 'auto' }}
              priority
            />
            <span>+91-9784843532</span>
          </a>
        </div>
      </div>
      
    </div>
  );
};