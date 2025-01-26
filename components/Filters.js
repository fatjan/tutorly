import { useTranslations } from 'next-intl';

export default function Filters() {
  const t = useTranslations('filters');
  
  const filterButtons = [
    'price',
    'countryOfBirth',
    'native',
    'super'
  ];
  
  const sortOptions = [
    'Relevance',
    'Price: Low to High',
    'Price: High to Low'
  ];

  return (
    <div className="sticky top-0 bg-white z-10 px-4">
      <section className="flex flex-col gap-4 py-2">
        <div className="flex gap-2 overflow-x-auto">
          {filterButtons.map((filter) => (
            <button 
              key={filter}
              className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-md whitespace-nowrap"
            >
              {t(filter)}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">3,368 tutors</span>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-md">
              {sortOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </section>
    </div>
  );
} 