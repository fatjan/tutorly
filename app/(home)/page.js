'use client';

import TutorCard from '@/components/TutorCard';
import { useRouter } from 'next/navigation';

export default function Home() {
  const tutors = [
      {
        id: 1,
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
      },
      {
        id: 2,
        image: 'lisa.jpg',
        name: 'Lisa C.',
        flags: ['🇫🇷'],
        description: 'Make your dream of speaking French...',
        price: 27,
        duration: 50,
        reviews: 100,
        rating: 5.0,
        numberOfStudents: 100,
        numberOfLessons: 100,
        languages: ['French', 'English', 'Spanish'],
      },
      {
        id: 3,
        image: 'laura.jpeg',
        name: 'Laura Y.',
        flags: ['🇨🇲', '🇮🇹'],
        description: 'Certified native French tutor...',
        price: 35,
        duration: 50,
        reviews: 100,
          rating: 4.9,
          numberOfStudents: 100,
          numberOfLessons: 100,
          languages: ['French', 'English', 'Spanish'],
      },
      {
        id: 4,
        image: 'lisa.jpg',
        name: 'Lisa C.',
        flags: ['🇫🇷'],
        description: 'Make your dream of speaking French...',
        price: 27,
        duration: 50,
        reviews: 100,
          rating: 5.0,
          numberOfStudents: 100,
          numberOfLessons: 100,
          languages: ['French', 'English', 'Spanish'],
      },
      {
        id: 5,
        image: 'lisa.jpg',
        name: 'Lisa C.',
        flags: ['🇫🇷'],
        description: 'Make your dream of speaking French...',
        price: 27,
        duration: 50,
        reviews: 100,
          rating: 5.0,
          numberOfStudents: 100,
          numberOfLessons: 100,
          languages: ['French', 'English', 'Spanish'],
      },
      {
        id: 6,
        image: 'lisa.jpg',
        name: 'Lisa C.',
        flags: ['🇫🇷'],
        description: 'Make your dream of speaking French...',
        price: 27,
        duration: 50,
        reviews: 100,
          rating: 5.0,
          numberOfStudents: 100,
          numberOfLessons: 100,
          languages: ['French', 'English', 'Spanish'],
        },
      {
        id: 7,
        image: 'laura.jpeg',
        name: 'Laura Y.',
        flags: ['🇨🇲', '🇮🇹'],
        description: 'Certified native French tutor...',
        price: 35,
        duration: 50,
        reviews: 100,
          rating: 4.9,
          numberOfStudents: 100,
          numberOfLessons: 100,
          languages: ['French', 'English', 'Spanish'],
        },
      {
        id: 8,
        image: 'laura.jpeg',
        name: 'Laura Y.',
        flags: ['🇨🇲', '🇮🇹'] ,
        description: 'Certified native French tutor...',
        price: 35,
        duration: 50,
        reviews: 100,
          rating: 4.9,
          numberOfStudents: 100,
          numberOfLessons: 100,
          languages: ['French', 'English', 'Spanish'],
        },
      {
        id: 9,
        image: 'laura.jpeg',
        name: 'Laura Y.',
        flags: ['🇨🇲', '🇮🇹'],
        description: 'Certified native French tutor...',
        price: 35,
        duration: 50,
        reviews: 100,
          rating: 4.9,
          numberOfStudents: 100,
          numberOfLessons: 100,
          languages: ['French', 'English', 'Spanish'],
        },
      {
        id: 10,
        image: 'laura.jpeg',
        name: 'Laura Y.',
        flags: ['🇨🇲', '🇮🇹'],
        description: 'Certified native French tutor...',
        price: 35,
        duration: 50,
        reviews: 100,
          rating: 4.9,
          numberOfStudents: 100,
          numberOfLessons: 100,
          languages: ['French', 'English', 'Spanish'],
      }, 
    ];
  const router = useRouter();

  const goToTutorPage = (tutorId) => {
    router.replace(`/tutor/${tutorId}`);
  }

  return (
    <div>
      <main className="h-screen overflow-y-auto">
        <div className="pt-20">
          {tutors.map((tutor) => (
            <TutorCard 
              key={tutor.id} 
              tutor={tutor} 
              onClick={() => goToTutorPage(tutor.id)} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}
