'use client';
import { useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

export default function LanguageSwitcher({ language }) {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.push('/language-selection')}
      className="flex items-center gap-2"
    >
      <span className="text-lg font-medium">{language}</span>
      <ChevronDown className="h-5 w-5 text-black-400" />
    </button>
  );
} 