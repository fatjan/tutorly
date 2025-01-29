'use client';

import AboutTutorCard from '@/components/AboutTutor/AboutTutorCard';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function TutorPage() {
  const params = useParams();
  const tutorId = params.tutorId;
  const [tutor, setTutor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTutor = async () => {
      try {
        const response = await fetch(`/api/tutor?id=${tutorId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTutor(data.tutor);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tutors:', error);
      }
    };
    fetchTutor();
  }, [tutorId]);


  
  return (
    <div className="min-h-screen bg-white px-4 pt-20">
      {loading ? <p>Loading...</p> : <AboutTutorCard tutor={tutor} />}
    </div>
  );
}