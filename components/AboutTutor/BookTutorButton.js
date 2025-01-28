'use client';

import { useState } from 'react';
import BookTutorModal from '@/components/AboutTutor/BookTutorModal';

const BookTutorButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="flex flex-col inset-x-0 sticky fixed bottom-0 border-t p-3 mt-3 bg-white shadow-[-2px_4px_17px_15px_rgba(0,_0,_0,_0.1)]">
                <button 
                    onClick={() => setIsOpen(true)}
                    className="text-md text-black bg-pink-400 border-2 border-black rounded-md p-3 font-bold bg-clip-padding transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                    Book tutor
                </button>
            </div>
            {isOpen && (
                <BookTutorModal setIsOpen={setIsOpen} />
            )}
        </div>
    )
}

export default BookTutorButton;