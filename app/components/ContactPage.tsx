'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/pages.module.css';

interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
}

export const ContactPage = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const loadLocations = async () => {
      try {
        const data = await import('@/config/locations.json');
        setLocations(data.locations);
      } catch (error) {
        console.error('Failed to load locations:', error);
      }
    };
    loadLocations();
  }, []);

  return (
    <div className={styles.contactPage}>
      <h2 className={styles.contactTitle}>Get in Touch</h2>
      
      <div className={styles.contactCardsContainer}>
        {locations.map((location) => (
          <div key={location.id} className={styles.contactCard}>
            <h3 className={styles.cardTitle}>📍 {location.name}</h3>
            
            <div className={styles.cardContent}>
              <div className={styles.cardItem}>
                <span className={styles.cardIcon}>📮</span>
                <span>{location.address}</span>
              </div>

              <div className={styles.cardItem}>
                <span className={styles.cardIcon}>📞</span>
                <a href={`tel:${location.phone}`} className={styles.cardLink}>
                  {location.phone}
                </a>
              </div>

              <div className={styles.cardItem}>
                <span className={styles.cardIcon}>✉️</span>
                <a href={`mailto:${location.email}`} className={styles.cardLink}>
                  {location.email}
                </a>
              </div>

              <div className={styles.cardItem}>
                <span className={styles.cardIcon}>🗺️</span>
                <a 
                  href={location.mapUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                >
                  View on Map
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
