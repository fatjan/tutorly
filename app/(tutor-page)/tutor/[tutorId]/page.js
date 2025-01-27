'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import AboutTutorCard from '@/components/AboutTutor/AboutTutorCard';

export default function TutorPage({}) {
  const tutor = {
    image: 'laura.jpeg',
    name: 'Laura Y.',
    flags: ['🇨🇲', '🇮🇹'],
    description: 'Certified native French tutor with 10 years of experience making learning fun and easy.',
    price: 35,
    duration: 50,
    reviews: 100,
    rating: 4.9,
    numberOfStudents: 100,
    numberOfLessons: 100,
    languages: ['French (Native)', 'English (Native)', 'Spanish (Native)', 'Italian (Native)', 'German (Native)', 'Indonesian (Native)'],
    country: 'France',
    countryFlag: '🇫🇷',
  }

  const router = useRouter();

  const handleBackClick = () => {
    if (window.history.state && window.history.state.idx > 0) {
      router.back(); 
    } else {
      router.push('/');
    }
  };
  
  return (
    <div className="min-h-screen bg-white px-4 pt-2">
      <div className="max-w-md md:max-w-lg lg:max-w-xl">
        <button 
          className="text-gray-500 mb-6 relative z-10"
          onClick={handleBackClick}
        >
          <ArrowLeft id="arrow-left-tutor-page" className="h-5 w-5 text-gray-400" />
        </button>
      </div>
      <AboutTutorCard />
    </div>
  );
}