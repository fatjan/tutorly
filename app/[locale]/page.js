import Filters from '../../components/Filters';
import TutorCard from '../../components/TutorCard';
import BottomNavBar from '../../components/BottomNavBar';

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
        {
            image: '/lisa.jpg',
            name: 'Lisa C.',
            flags: '🇫🇷',
            description: 'Make your dream of speaking French...',
            price: 27,
            rating: 5.0,
        },
        {
            image: '/lisa.jpg',
            name: 'Lisa C.',
            flags: '🇫🇷',
            description: 'Make your dream of speaking French...',
            price: 27,
            rating: 5.0,
        },
        {
            image: '/laura.jpg',
            name: 'Laura Y.',
            flags: '🇨🇲 🇮🇹',
            description: 'Certified native French tutor...',
            price: 35,
            rating: 4.9,
        },
        {
            image: '/laura.jpg',
            name: 'Laura Y.',
            flags: '🇨🇲 🇮🇹',
            description: 'Certified native French tutor...',
            price: 35,
            rating: 4.9,
        },
        {
            image: '/laura.jpg',
            name: 'Laura Y.',
            flags: '🇨🇲 🇮🇹',
            description: 'Certified native French tutor...',
            price: 35,
            rating: 4.9,
        },
        {
            image: '/laura.jpg',
            name: 'Laura Y.',
            flags: '🇨🇲 🇮🇹',
            description: 'Certified native French tutor...',
            price: 35,
            rating: 4.9,
        },
      ];
  return (
    <div>
      <main>
        <Filters />
        {tutors.map((tutor, index) => (
          <TutorCard key={index} tutor={tutor} />
        ))}
      </main>
      <BottomNavBar />
    </div>
  );
}
