import { useState } from 'react';

export const useSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 3;

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (page: number) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  };

  return {
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
    goToPage,
  };
};
