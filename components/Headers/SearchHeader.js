'use client';

import { useState, useEffect } from 'react';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Heart } from 'lucide-react';

export default function Header() {
  const scrollDirection = useScrollDirection();

  const [selectedLanguage, setSelectedLanguage] = useState('English');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'English';
    setSelectedLanguage(savedLanguage);
  }, []);

  return (
    <header 
      className={`px-4 py-2 flex justify-between items-center fixed w-full bg-white z-20 transition-transform duration-300 ${
        scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <LanguageSwitcher language={selectedLanguage} />
      <button className="p-2">
        <Heart id="search-heart" className="h-6 w-6" />
      </button>
    </header>
  );
} 