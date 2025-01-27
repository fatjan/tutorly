'use client';
import { useRouter, usePathname } from 'next/navigation';
import { LanguageCard, LanguageCardContent } from '@/components/LanguageCard';
import { ArrowLeft,ChevronRight } from 'lucide-react';

export default function LanguageSelectionPage() {
  const router = useRouter();
  const pathname = usePathname();

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
    // const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.replace(pathname.replace('/language-selection', ''));
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <div className="max-w-md mx-auto">
        <button 
          className="text-gray-500 mb-6 relative z-10"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-5 w-5 text-gray-400" />
        </button>
        <h1 className="text-2xl font-bold mb-4">Hi there! What would you like to learn?</h1>
        <div className="space-y-2">
          {languages.map((language) => (
            <LanguageCard 
              key={language.code} 
              className="border rounded-md shadow-sm"
              onClick={() => switchLanguage(language.code)}
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
          ))}
        </div>
        <div className="bottom-0 left-0 bg-white border-t pt-4">
          <button className="w-full h-14 text-left">
            <span className="text-lg underline">Show all</span>
          </button>
        </div>
      </div>
    </div>
  );
} 