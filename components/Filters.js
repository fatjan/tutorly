'use client';

import { useScrollDirection } from '@/hooks/useScrollDirection';
import { useState, useEffect } from 'react';
import { ArrowDownWideNarrow } from 'lucide-react';
import SortButtonModal from '@/components/SortButtonModal';

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
    {label: 'Popularity', value: 'numberOfLikes:asc'},
    {label: 'Reviews', value: 'numberOfReviews:asc'},
    {label: 'Rating', value: 'rating:asc'},
    {label: 'Sort by relevance', value: 'relevance:asc'}
  ];

  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0].value)
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const sortParam = selectedFilter || 'price:asc';
        const response = await fetch(`/api/filter-tutors?sort=${sortParam}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.tutors.length) {
          saveTutors(JSON.stringify(data.tutors));
        }
      } catch (error) {
        console.error('Error fetching tutors:', error);
      }
    };
    fetchTutors();
  }, [selectedFilter]);

  const saveTutors = (tutors) => {
    localStorage.setItem('tutors', tutors);
  };
  
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
            <span className="text-sm text-gray-600">234 tutors</span>
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
            setSelectedSort={setSelectedSort} 
            selectedSort={selectedSort}
          />
        )}
      </div>
    </div>
  );
} 