'use client';
import { useRouter } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

export default function LanguageSwitcher() {
  const router = useRouter();

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  const currentLanguage = languages[0];

  return (
    <button 
      onClick={() => router.push('/language-selection')}
      className="flex items-center gap-2"
    >
      <span className="text-2xl">{currentLanguage.flag}</span>
      <span className="text-lg font-medium">{currentLanguage.name}</span>
      <ChevronRight className="h-5 w-5 text-gray-400" />
    </button>
  );
} 