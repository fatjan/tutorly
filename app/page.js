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
        <h1 className="font-bold text-lg">French</h1>
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
