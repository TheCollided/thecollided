'use client';

import styles from '@/styles/slider.module.css';

interface NavigationArrowProps {
  onNext: () => void;
  onPrev: () => void;
  isLastPage?: boolean;
}

export const NavigationArrow = ({ onNext, onPrev, isLastPage = false }: NavigationArrowProps) => {
  return (
    <div className={styles.navigationArrows}>
      <button 
        onClick={onPrev}
        aria-label="Previous page"
        title="Go to previous page"
        className={styles.arrowButton}
      >
        ←
      </button>
      <button 
        onClick={onNext}
        aria-label="Next page"
        title={isLastPage ? 'Go to first page' : 'Go to next page'}
        className={styles.arrowButton}
      >
        →
      </button>
    </div>
  );
};
