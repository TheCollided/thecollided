// Analytics tracking setup using Google Analytics
// Configure with your GA tracking ID in environment variables

export const trackPageView = (pageName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageName,
      page_location: window.location.href,
    });
  }
};

export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventData);
  }
};

export const trackButtonClick = (buttonName: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
  });
};

export const trackSocialClick = (platform: string) => {
  trackEvent('social_link_click', {
    platform,
  });
};

// Global window type augmentation
declare global {
  interface Window {
    gtag: any;
  }
}
