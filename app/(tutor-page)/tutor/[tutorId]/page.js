'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

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
    <div className="min-h-screen bg-white px-4 py-6">
      <div className="max-w-md mx-auto">
        <button 
          className="text-gray-500 mb-6 relative z-10"
          onClick={handleBackClick}
        >
          <ArrowLeft className="h-5 w-5 text-gray-400" />
        </button>
      </div>
      <div className="flex items-center">
        <img src={tutor.image} alt={tutor.name} className="w-16 h-16 rounded-full" />
        <div className="ml-4 flex-grow">
          <h1 className="text-2xl font-bold">{tutor.name}</h1>
          <p className="text-gray-500">{tutor.description}</p>
        </div>
      </div>
    </div>
  );
}