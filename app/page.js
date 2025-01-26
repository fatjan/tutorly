import TutorCard from '../components/TutorCard';

export default function Home() {
  const tutors = [
    {
      image: '/laura.jpg',
      name: 'Laura Y.',
      flags: '🇨🇲 🇮🇹',
      description: 'Certified native French tutor...',
      price: 35,
      rating: 4.9,
    },
    {
      image: '/lisa.jpg',
      name: 'Lisa C.',
      flags: '🇫🇷',
      description: 'Make your dream of speaking French...',
      price: 27,
      rating: 5.0,
    },
  ];

  return (
    <div>
      <header className="p-4 border-b flex justify-between">
        <div className="px-4">
          <div className="flex items-center gap-1">
            <h1 className="text-xl font-semibold">French</h1>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-5 h-5"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M19.5 8.25l-7.5 7.5-7.5-7.5" 
              />
            </svg>
          </div>
          
          <div className="flex gap-2 overflow-x-auto py-2">
            <button className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-md whitespace-nowrap">
              Beginner Friendly
            </button>
            <button className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-md whitespace-nowrap">
              Native Speaker
            </button>
            <button className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-md whitespace-nowrap">
              Professional Teacher
            </button>
            <button className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-md whitespace-nowrap">
              Business French
            </button>
            <button className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-md whitespace-nowrap">
              Test Prep
            </button>
          </div>
        </div>
        <button className="text-sm text-blue-500">Filters</button>
      </header>
      <main>
        {tutors.map((tutor, index) => (
          <TutorCard key={index} tutor={tutor} />
        ))}
      </main>
      <footer className="fixed bottom-0 w-full bg-white p-4 flex justify-around border-t">
        <button className="text-gray-500">Search</button>
        <button className="text-gray-500">Messages</button>
        <button className="text-gray-500">Schedule</button>
        <button className="text-gray-500">Vocab</button>
      </footer>
    </div>
  );
}
