'use client';

import { useScrollDirection } from '@/hooks/useScrollDirection';
import { useState, useEffect } from 'react';
import { ArrowDownWideNarrow } from 'lucide-react';
import SortButtonModal from '@/components/SortButtonModal';
import useStore from '@/app/lib/store/useStore';

export default function Filters() {
  const scrollDirection = useScrollDirection();
  const [isOpen, setIsOpen] = useState(false);
  const filterOptions = [
    {label: 'Price', value: 'price:asc'},
    {label: 'Country Of Birth', value: 'countryOfBirth:asc'},
    {label: 'Native', value: 'native:asc'},
    {label: 'Super', value: 'super:asc'}
  ];

  const sortOptions = [
    {label: 'Price: lowest first', value: 'price:asc'},
    {label: 'Price: highest first', value: 'price:desc'},
    {label: 'Popularity', value: 'numberOfLikes:desc'},
    {label: 'Reviews', value: 'numberOfReviews:desc'},
    {label: 'Rating', value: 'rating:desc'},
    {label: 'Sort by relevance', value: 'relevance:asc'}
  ];

  const { setSelectedFilter, setSelectedSort } = useStore();
  const selectedSort = useStore((state) => state.selectedSort);
  const selectedFilter = useStore((state) => state.selectedFilter);
  const totalTutors = useStore((state) => state.totalTutors);

  const buttonBackground = (filter) => {
    return selectedFilter === filter ? 'bg-gray-200' : 'bg-white';
  }

  return (
    <div className={`sticky transition-all duration-300 bg-white z-10 border-b ${
      scrollDirection === 'down' ? 'top-0' : 'top-14'
    }`}>
      <div className="px-4">
        <section className={`flex flex-col gap-4 py-2 fixed bg-white z-10 w-full left-0 px-4 transition-all duration-300 ${
          scrollDirection === 'down' ? 'top-0' : 'top-14'
        }`}>
          <div className="flex gap-2 overflow-x-auto max-w-full">
            {filterOptions.map((filter, index) => (
              <button 
                key={index}
                className={`px-3 py-1 text-sm ${buttonBackground(filter.value)} border rounded-md whitespace-nowrap`}
                onClick={() => setSelectedFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">{totalTutors} tutors</span>
            <button className="flex items-center gap-1" onClick={() => setIsOpen(true)}>
              <h2 className="font-semibold">{selectedSort.label}</h2>
              <ArrowDownWideNarrow className="h-5 w-5" />
            </button>
          </div>
        </section>
        {isOpen && (
          <SortButtonModal 
            setIsOpen={setIsOpen} 
            sortOptions={sortOptions} 
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
          />
        )}
      </div>
    </div>
  );
} 