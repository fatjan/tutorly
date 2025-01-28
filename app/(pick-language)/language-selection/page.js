'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LanguageCard, LanguageCardContent } from '@/components/LanguageCard';
import { ArrowLeft,ChevronRight } from 'lucide-react';

export default function LanguageSelectionPage() {
  const router = useRouter();

  const languages = [
    { name: "English", flag: "🇬🇧" },
    { name: "French", flag: "🇫🇷" },
    { name: "German", flag: "🇩🇪" },
    { name: "Spanish", flag: "🇪🇸" },
    { name: "Japanese", flag: "🇯🇵" },
    { name: "Korean", flag: "🇰🇷" },
    { name: "Indonesian", flag: "🇮🇩" },
    { name: "Malaysian", flag: "🇲🇾" },
    { name: "Chinese (Mandarin)", flag: "🇨🇳" },
    { name: "Italian", flag: "🇮🇹" },
    { name: "Dutch", flag: "🇳🇱" },
    { name: "Portuguese", flag: "🇵🇹" },
    { name: "Russian", flag: "🇷🇺" },
    { name: "Arabic", flag: "🇸🇦" },
    { name: "Thai", flag: "🇹🇭" },
    { name: "Vietnamese", flag: "🇻🇳" },
  ];

  const initLanguages = languages.slice(0, 6);
  const [showLanguages, setShowLanguages] = useState(initLanguages);

  const setAllLanguages = () => {
    setShowLanguages(languages);
  }

  const saveToLocalStorage = (value) => {
    localStorage.setItem('selectedLanguage', value);
  };

  const switchLanguage = (language) => {
    saveToLocalStorage(language);
    router.back();
  };


  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <div className="max-w-md mx-auto">
        <button 
          className="text-gray-500 mb-6 relative z-10"
          onClick={() => router.back()}
        >
          <ArrowLeft id="arrow-left-switch-language" className="h-5 w-5 text-gray-400" />
        </button>
        <h1 className="text-2xl font-bold mb-4">Hi there! What would you like to learn?</h1>
        <div className="space-y-2">
          {showLanguages.map((language, index) => (
            <button 
              key={index} 
              className="w-full"
              onClick={() => switchLanguage(language.name)}
            >
              <LanguageCard 
                className="border rounded-md shadow-sm"
              >
                <LanguageCardContent className="flex items-center justify-between w-full p-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">{language.flag}</span>
                    <span className="text-lg font-medium">{language.name}</span>
                    <div className="ml-auto">
                      <ChevronRight className="text-gray-400" />
                    </div>
                  </div>
                </LanguageCardContent>
              </LanguageCard>
            </button>
          ))}
        </div>
        <div className="bottom-0 left-0 bg-white border-t pt-4">
          <button className="w-full h-14 text-left" onClick={setAllLanguages}>
            <span className="text-lg underline">Show all</span>
          </button>
        </div>
      </div>
    </div>
  );
} 