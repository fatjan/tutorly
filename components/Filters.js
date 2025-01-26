'use client';

import { useTranslations } from 'next-intl';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import SortButton from '@/components/SortButton';

export default function Filters() {
  const t = useTranslations();
  const scrollDirection = useScrollDirection();
  const [isOpen, setIsOpen] = useState(false);
  
  const filterButtons = [
    'price',
    'countryOfBirth',
    'native',
    'super'
  ];

  const sortOptions = [
    t('sortOptions.priceLowestFirst'),
    t('sortOptions.priceHighestFirst'),
    t('sortOptions.popularity'),
    t('sortOptions.reviews'),
    t('sortOptions.rating'),
    t('sortOptions.sortByRelevance')
  ];

  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

  return (
    <div className={`sticky transition-all duration-300 bg-white z-10 border-b ${
      scrollDirection === 'down' ? 'top-0' : 'top-14'
    }`}>
      <div className="px-4">
        <section className={`flex flex-col gap-4 py-2 fixed bg-white z-10 w-full left-0 px-4 transition-all duration-300 ${
          scrollDirection === 'down' ? 'top-0' : 'top-14'
        }`}>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">234 {t('tutors')}</span>
            <div className="flex items-center gap-2">
              <h2 className="font-semibold">{selectedSort}</h2>
              <button
                onClick={() => setIsOpen(true)}
                className="p-2"
              >
                <SlidersHorizontal className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto max-w-full">
            {filterButtons.map((filter) => (
              <button 
                key={filter}
                className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-md whitespace-nowrap"
              >
                {t(`filters.${filter}`)}
              </button>
            ))}
          </div>
        </section>

        {/* Bottom Sheet Modal */}
        <SortButton 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
          t={t} 
          sortOptions={sortOptions} 
          setSelectedSort={setSelectedSort} 
        />
      </div>
    </div>
  );
} 