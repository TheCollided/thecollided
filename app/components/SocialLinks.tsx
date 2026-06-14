'use client';

import { useEffect, useState } from 'react';
import { trackSocialClick } from '@/lib/analytics';
import styles from '@/styles/slider.module.css';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const SocialLinks = () => {
  const [links, setLinks] = useState<SocialLink[]>([]);

  useEffect(() => {
    const loadLinks = async () => {
      try {
        const data = await import('@/config/socialLinks.json');
        setLinks(data.links);
      } catch (error) {
        console.error('Failed to load social links:', error);
      }
    };
    loadLinks();
  }, []);

  const handleSocialClick = (platform: string) => {
    trackSocialClick(platform);
  };

  const iconMap: Record<string, string> = {
    twitter: '𝕏',
    instagram: '📷',
    linkedin: '💼',
    facebook: 'f',
  };

  return (
    <div className={styles.socialFooter}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
          title={link.name}
          onClick={() => handleSocialClick(link.name)}
        >
          {iconMap[link.icon] || link.icon}
        </a>
      ))}
    </div>
  );
};
