import TutorCard from '../../components/TutorCard';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();
  const tutors = [
    {
      image: '/laura.jpg',
      name: 'Laura Y.',
      flags: '🇨🇲 🇮🇹',
      description: 'Certified native French tutor...',
      price: 35,
      rating: 4.9,
    },
    {
      image: '/lisa.jpg',
      name: 'Lisa C.',
      flags: '🇫🇷',
      description: 'Make your dream of speaking French...',
      price: 27,
      rating: 5.0,
    },
  ];

  return (
    <div>
      <header className="p-4 border-b flex justify-between">
        <div className="px-4">
          <div className="flex gap-2 overflow-x-auto py-2">
            <button className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-md whitespace-nowrap">
              {t('filters.price')}
            </button>
            <button className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-md whitespace-nowrap">
              {t('filters.countryOfBirth')}
            </button>
            <button className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-md whitespace-nowrap">
              {t('filters.native')}
            </button>
            <button className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-md whitespace-nowrap">
              {t('filters.super')}
            </button>
          </div>
        </div>
        <button className="text-sm text-blue-500">Filters</button>
      </header>
      <main>
        {tutors.map((tutor, index) => (
          <TutorCard key={index} tutor={tutor} />
        ))}
      </main>
      <footer className="fixed bottom-0 w-full bg-white p-4 flex justify-around border-t">
        <button className="text-gray-500">Search</button>
        <button className="text-gray-500">Messages</button>
        <button className="text-gray-500">Schedule</button>
        <button className="text-gray-500">Vocab</button>
      </footer>
    </div>
  );
}
