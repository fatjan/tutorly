import TutorCard from '@/components/TutorCard';

export default function Home() {
    const tutors = [
        {
          image: 'laura.jpeg',
          name: 'Laura Y.',
          flags: ['🇨🇲', '🇮🇹'],
          description: 'Certified native French tutor...',
          price: 35,
          rating: 4.9,
        },
        {
          image: 'lisa.jpg',
          name: 'Lisa C.',
          flags: ['🇫🇷'],
          description: 'Make your dream of speaking French...',
          price: 27,
          rating: 5.0,
        },
        {
            image: 'laura.jpeg',
            name: 'Laura Y.',
            flags: ['🇨🇲', '🇮🇹'],
            description: 'Certified native French tutor...',
            price: 35,
            rating: 4.9,
        },
        {
            image: 'lisa.jpg',
            name: 'Lisa C.',
            flags: ['🇫🇷'],
            description: 'Make your dream of speaking French...',
            price: 27,
            rating: 5.0,
        },
        {
            image: 'lisa.jpg',
            name: 'Lisa C.',
            flags: ['🇫🇷'],
            description: 'Make your dream of speaking French...',
            price: 27,
            rating: 5.0,
        },
        {
            image: 'lisa.jpg',
            name: 'Lisa C.',
            flags: ['🇫🇷'],
            description: 'Make your dream of speaking French...',
            price: 27,
            rating: 5.0,
        },
        {
            image: 'laura.jpeg',
            name: 'Laura Y.',
            flags: ['🇨🇲', '🇮🇹'],
            description: 'Certified native French tutor...',
            price: 35,
            rating: 4.9,
        },
        {
            image: 'laura.jpeg',
            name: 'Laura Y.',
            flags: ['🇨🇲', '🇮🇹'] ,
            description: 'Certified native French tutor...',
            price: 35,
            rating: 4.9,
        },
        {
            image: 'laura.jpeg',
            name: 'Laura Y.',
            flags: ['🇨🇲', '🇮🇹'],
            description: 'Certified native French tutor...',
            price: 35,
            rating: 4.9,
        },
        {
            image: 'laura.jpeg',
            name: 'Laura Y.',
            flags: ['🇨🇲', '🇮🇹'],
            description: 'Certified native French tutor...',
            price: 35,
            rating: 4.9,
        }, 
      ];
  return (
    <div>
      <main className="h-screen overflow-y-auto">
        <div className="pt-20">
          {tutors.map((tutor, index) => (
            <TutorCard key={index} tutor={tutor} />
          ))}
        </div>
      </main>
    </div>
  );
}
