'use client';

import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;
    console.log('Initial scroll position:', lastScrollY);

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      console.log('Current scroll:', currentScrollY, 'Last scroll:', lastScrollY);

      if (currentScrollY > lastScrollY) {
        console.log('Setting direction to down');
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        console.log('Setting direction to up');
        setScrollDirection('up');
      }

      lastScrollY = currentScrollY;
    };

    const onScroll = () => {
      console.log('Scroll event fired');
      window.requestAnimationFrame(updateScrollDirection);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollDirection;
} 