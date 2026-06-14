'use client';

import styles from '@/styles/slider.module.css';

interface NavigationArrowProps {
  onNext: () => void;
  isLastPage?: boolean;
}

export const NavigationArrow = ({ onNext, isLastPage = false }: NavigationArrowProps) => {
  return (
    <div className={styles.navigationArrow}>
      <button 
        onClick={onNext}
        aria-label="Next page"
        title={isLastPage ? 'Go to first page' : 'Go to next page'}
      >
        →
      </button>
    </div>
  );
};
