'use client';

import { Check } from 'lucide-react';

export default function SortButtonModal({ setIsOpen, sortOptions, setSelectedSort, selectedSort }) {
  const bottomBorder = (index) => {
    if (index !== sortOptions.length - 1) {
      return 'border-b border-gray-200';
    }
    return '';
  }
  console.log('selectedSort sini', selectedSort)
  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-25 z-50"
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4 z-50 transition-transform duration-300">
        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-4">Sort tutors by</h3>
        <div>
          {sortOptions.map((option, index) => (
            <button
              key={index}
              className="w-full text-left hover:bg-gray-50"
              onClick={() => {
                setSelectedSort(option);
                setIsOpen(false);
              }}
            >
              <div 
                className={`flex items-center justify-between py-2 ${bottomBorder(index)}`}
              >
                {option.label}
                {selectedSort.value === option.value && (
                  <Check className="text-black-500" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
} 