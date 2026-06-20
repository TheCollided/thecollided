'use client';

import { useEffect, useState } from 'react';
import { useSlider } from '@/hooks/useSlider';
import { trackPageView } from '@/lib/analytics';
import { BrandPage } from './BrandPage';
import { MyntraPage } from './MyntraPage';
import { ContactPage } from './ContactPage';
import { NavigationArrow } from './NavigationArrow';
import styles from '@/styles/slider.module.css';

const pages = [
  { name: 'Brand', component: BrandPage },
  { name: 'Myntra', component: MyntraPage },
  { name: 'Contact', component: ContactPage },
];

export const PageSlider = () => {
  const { currentPage, totalPages, goToNextPage, goToPreviousPage, goToPage } = useSlider();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      trackPageView(pages[currentPage].name);
    }
  }, [currentPage, mounted]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNextPage();
      } else if (e.key === 'ArrowLeft') {
        goToPreviousPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextPage, goToPreviousPage]);

  // Handle touch/swipe on mobile
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: Event) => {
      const touchEvent = e as TouchEvent;
      touchStartX = touchEvent.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: Event) => {
      const touchEvent = e as TouchEvent;
      touchEndX = touchEvent.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        // Swiped left - go to next page
        goToNextPage();
      }
    };

    const container = document.querySelector(`.${styles.slideContainer}`);
    if (container) {
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [goToNextPage]);

  if (!mounted) {
    return null;
  }

  const CurrentPageComponent = pages[currentPage].component;

  return (
    <div className={styles.slideContainer}>
      <div
        className={styles.slidesWrapper}
        style={{
          transform: `translateX(-${currentPage * 100}%)`,
        }}
      >
        {pages.map((page) => (
          <div key={page.name} className={styles.slide}>
            <page.component />
          </div>
        ))}
      </div>

      {/* <NavigationArrow onNext={goToNextPage} onPrev={goToPreviousPage} isLastPage={currentPage === totalPages - 1} /> */}

      {/* Page indicators */}
      <div className={styles.pageIndicators}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`${styles.pageDot} ${index === currentPage ? styles.active : ''}`}
            onClick={() => goToPage(index)}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
