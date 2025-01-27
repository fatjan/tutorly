import { useState } from 'react';

export default function BookTutorModal({ setIsModalOpen }) {
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

  return (
    <div className="fixed inset-0 flex items-end justify-center">
        <div className="bg-white rounded-t-lg shadow-lg p-6 w-full max-w-sm">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">When do you want to take your trial?</h2>
            <button onClick={setIsModalOpen(false)} className="text-gray-500 text-xl">&times;</button>
        </div>
        <div className="space-y-4">
            <div className="border border-gray-300 rounded-lg p-4 flex items-center space-x-4 cursor-pointer hover:bg-gray-100">
            <i className="fas fa-video text-xl text-gray-700"></i>
            <div>
                <h3 className="font-semibold">Right now</h3>
                <p className="text-gray-600">Book a trial and meet your tutor right now.</p>
            </div>
            </div>
            <div className="border border-gray-300 rounded-lg p-4 flex items-center space-x-4 cursor-pointer hover:bg-gray-100">
            <i className="fas fa-calendar-alt text-xl text-gray-700"></i>
            <div>
                <h3 className="font-semibold">Later</h3>
                <p className="text-gray-600">Choose a date and time that works for you.</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}