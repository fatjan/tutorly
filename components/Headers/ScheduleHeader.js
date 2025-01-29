'use client';

import { ArrowLeft  } from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';
import { useSelectedData } from '@/contexts/SelectedDataContext'; 

export default function ScheduleHeader() {
  const params = useParams();
  const router = useRouter();
  const { selectedDuration } = useSelectedData();

  const handleBackClick = () => {
    if (window.history.state && window.history.state.idx > 0) {
      router.back(); 
    } else {
      router.push(`/tutor/${params.tutorId}`);
    }
  };

  return (
    <header 
      className={"px-4 py-2 flex items-center fixed w-full bg-white z-20 top-0"}
    >
        <button onClick={handleBackClick} className="w-1/5">
            <ArrowLeft className="h-6 w-6" />
        </button>
        <div className="flex flex-col items-center space-x-4 w-3/5">
            <h2 className="text-xl font-bold">{ selectedDuration } min lesson</h2>
            <h3 className="text-sm text-gray-500">To discuss your level and learning plan</h3>
        </div>
    </header>
  );
} 