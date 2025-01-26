import TutorCard from '../../components/TutorCard';
import { useTranslations } from 'next-intl';
import { Search, MessageCircle, Calendar, BookOpen } from 'lucide-react';

export default function Home() {
  const t = useTranslations('filters');
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

  const filterButtons = [
    'price',
    'countryOfBirth',
    'native',
    'super'
  ];
  
  const sortOptions = [
    'Relevance',
    'Price: Low to High',
    'Price: High to Low'
  ];

  return (
    <div>
      <header className="p-4 border-b flex justify-between">
        <div className="px-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 overflow-x-auto py-2">
                {filterButtons.map((filter) => (
                  <button 
                    key={filter}
                    className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-md whitespace-nowrap"
                  >
                    {t(filter)}
                  </button>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">3,368 tutors</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-md">
                    {sortOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
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
        <button className="text-gray-500">
            <Search className="h-5 w-5" />
            <span>Search</span>
        </button>
        <button className="text-gray-500">
            <MessageCircle className="h-5 w-5" />
            <span>Messages</span>
          </button>
        <button className="text-gray-500">
            <Calendar className="h-5 w-5" />
            <span>Schedule</span>
        </button>
        <button className="text-gray-500">
            <BookOpen className="h-5 w-5" />
            <span>Vocab</span>
        </button>
      </footer>
    </div>
  );
}
