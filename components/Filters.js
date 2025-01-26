'use client';

import { useTranslations } from 'next-intl';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';

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
    'Most Popular',
    'Price: Low to High',
    'Price: High to Low',
    'Top Rated',
    'Most Experienced'
  ];

  return (
    <div className={`sticky transition-all duration-300 bg-white z-10 border-b ${
      scrollDirection === 'down' ? 'top-0' : 'top-14'
    }`}>
      <div className="px-4">
        <section className={`flex flex-col gap-4 py-2 fixed bg-white z-10 w-full left-0 px-4 transition-all duration-300 ${
          scrollDirection === 'down' ? 'top-0' : 'top-14'
        }`}>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">234 tutors</span>
            <div className="flex items-center gap-2">
              <h2 className="font-semibold">Sort by</h2>
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
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black bg-opacity-25 z-50"
              onClick={() => setIsOpen(false)}
            />
            <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4 z-50 transition-transform duration-300">
              <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-4">Sort by</h3>
              <div className="space-y-4">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    className="w-full text-left py-2 hover:bg-gray-50"
                    onClick={() => {
                      // Handle sort option selection here
                      setIsOpen(false);
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
} 