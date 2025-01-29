'use client';

import TutorCard from '@/components/TutorCard';
import { useEffect, useState } from 'react';

export default function HomeClient() {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedTutors = localStorage.getItem('tutors') || tutors;
    setTutors(JSON.parse(savedTutors));
  }, []);

  const goToTutorPage = (tutorId) => {
    router.replace(`/tutor/${tutorId}`);
  }

  return (
    <div>
      <main className="h-screen overflow-y-auto">
        <div className="pt-20">
          {tutors.length > 0 && tutors.map((tutor) => (
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
