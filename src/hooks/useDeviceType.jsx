
import React, { useState, useEffect } from 'react';

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.matchMedia('(max-width: 768px)').matches;
      const tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)').matches;
      
      setIsMobile(mobile);
      setIsTablet(tablet);
    };

    checkDevice();

    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const tabletQuery = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');

    // Modern event listener
    const handler = (e) => checkDevice();
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
      tabletQuery.addEventListener('change', handler);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handler);
      tabletQuery.addListener(handler);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handler);
        tabletQuery.removeEventListener('change', handler);
      } else {
        mediaQuery.removeListener(handler);
        tabletQuery.removeListener(handler);
      }
    };
  }, []);

  return { isMobile, isTablet };
};

export default useDeviceType;
