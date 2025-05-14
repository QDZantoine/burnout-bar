'use client';

import { useState, useEffect } from 'react';

export function useMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowWidth = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Set initial value
    checkWindowWidth();

    // Add event listener
    window.addEventListener('resize', checkWindowWidth);

    // Clean up
    return () => window.removeEventListener('resize', checkWindowWidth);
  }, [breakpoint]);

  return isMobile;
}
