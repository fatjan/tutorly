'use client';

import TutorCard from '@/components/TutorCard';
import { useEffect, useState } from 'react';

export default function HomeClient() {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTutors() {
      try {
        const response = await fetch('/api/tutors');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); 
        setTutors(data.tutors);
      } catch (error) {
        console.error('Error fetching tutors:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTutors();
  }, []);

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
