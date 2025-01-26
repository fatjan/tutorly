'use client';

import { useTranslations } from 'next-intl';
import { useScrollDirection } from '@/hooks/useScrollDirection';

export default function Filters() {
  const t = useTranslations('filters');
  const scrollDirection = useScrollDirection();
  
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
    <div className={`sticky transition-all duration-300 bg-white z-10 border-b ${
      scrollDirection === 'down' ? 'top-0' : 'top-14'
    }`}>
      <div className="px-4">
        <section className={`flex flex-col gap-4 py-2 fixed bg-white z-10 w-full left-0 px-4 transition-all duration-300 ${
          scrollDirection === 'down' ? 'top-0' : 'top-14'
        }`}>
          <div className="flex gap-2 overflow-x-auto max-w-full">
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
        </section>
      </div>
    </div>
  );
} 