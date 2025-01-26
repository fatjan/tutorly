'use client';

export default function SortButton({ isOpen, setIsOpen, setSelectedSort, sortOptions }) {
  return (
    <>
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-25 z-50"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4 z-50 transition-transform duration-300">
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-4">Sort tutors by</h3>
            <div className="space-y-4">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  className="w-full text-left py-2 hover:bg-gray-50"
                  onClick={() => {
                    setSelectedSort(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
} 