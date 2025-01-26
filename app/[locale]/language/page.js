'use client';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { LanguageCard, LanguageCardContent } from '@/components/LanguageCard';
import { ChevronRight } from 'lucide-react';

export default function LanguageSelectionPage() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "id", name: "Indonesian", flag: "🇮🇩" },
    { code: "zh", name: "Chinese (Mandarin)", flag: "🇨🇳" },
    { code: "es", name: "Spanish", flag: "🇪🇸" },
    { code: "ja", name: "Japanese", flag: "🇯🇵" },
    { code: "fr", name: "French", flag: "🇫🇷" },
    { code: "ko", name: "Korean", flag: "🇰🇷" },
  ];

  const switchLanguage = (newLocale) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.replace(newPath.replace('/language', ''));
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <div className="max-w-md mx-auto">
        <button 
          className="text-gray-500 mb-6"
          onClick={() => router.back()}
        >
          <span className="mr-2">←</span> Back
        </button>
        <h1 className="text-2xl font-bold mb-4">Hi there! What would you like to learn?</h1>
        <div className="space-y-2">
          {languages.map((language) => (
            <LanguageCard 
              key={language.code} 
              className="border rounded-md shadow-sm"
              onClick={() => switchLanguage(language.code)}
            >
              <LanguageCardContent className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">{language.flag}</span>
                  <span className="text-lg font-medium">{language.name}</span>
                </div>
                <ChevronRight className="text-gray-400" />
              </LanguageCardContent>
            </LanguageCard>
          ))}
        </div>
      </div>
    </div>
  );
} 