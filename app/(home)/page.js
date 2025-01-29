'use client';

import TutorCard from '@/components/TutorCard';
import { useEffect } from 'react';
import useStore from '@/app/lib/store/useStore';
import { useMemo } from 'react';

export default function HomePage() {
  const { setTutors, setTotalTutors } = useStore();
  const tutors = useStore((state) => state.tutors);
  const memoizedTutors = useMemo(() => tutors, [tutors]);
  const selectedSort = useStore((state) => state.selectedSort);
  const selectedFilter = useStore((state) => state.selectedFilter);
  const isUsingFilter = useStore((state) => state.isUsingFilter);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const sortParam = (isUsingFilter ? selectedFilter : selectedSort.value) || 'price:asc';
        const response = await fetch(`/api/filter-tutors?sort=${sortParam}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTutors(data.tutors);
        setTotalTutors(data.total);
      } catch (error) {
        console.error('Error fetching tutors:', error);
      }
    };
    fetchTutors();
  }, [selectedFilter, selectedSort.value, isUsingFilter, setTotalTutors]);

  const goToTutorPage = (tutorId) => {
    router.replace(`/tutor/${tutorId}`);
  }

  return (
    <div>
      <main className="h-screen overflow-y-auto">
        <div className="pt-20">
          {memoizedTutors.length > 0 && memoizedTutors.map((tutor) => (
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
