import TutorCard from '@/components/TutorCard';

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
  
  return (
    <TutorCard tutor={tutor} />
  );
}