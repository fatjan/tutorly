'use client';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();

  const languages = [
    { code: 'en', name: 'English', label: 'English' },
    { code: 'fr', name: 'Français', label: 'French' },
    { code: 'id', name: 'Bahasa Indonesia', label: 'Indonesian' },
    { code: 'de', name: 'Deutsch', label: 'German' }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1"
      >
        <span className="text-xl font-semibold">
          {currentLanguage.name}
        </span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M19.5 8.25l-7.5 7.5-7.5-7.5" 
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border rounded-md shadow-lg">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={`/${lang.code}`}
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {lang.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
} 