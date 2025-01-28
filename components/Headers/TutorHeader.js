'use client';

import { ArrowLeft, Upload, Heart  } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function TutorHeader() {
  const router = useRouter();

  const handleBackClick = () => {
    if (window.history.state && window.history.state.idx > 0) {
      router.back(); 
    } else {
      router.push('/');
    }
  };

  return (
    <header 
      className={"px-4 py-2 flex justify-between items-center fixed w-full bg-white z-20"}
    >
        <button onClick={handleBackClick}>
            <ArrowLeft className="h-6 w-6" />
        </button>
        <div className="flex flow-col justify-center space-x-4">
            <button className="p-2">
                <Upload className="h-6 w-6" />
            </button>
        <button className="p-2">
                <Heart className="h-6 w-6" />
            </button>
        </div>
    </header>
  );
} 