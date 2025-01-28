import { ShieldCheckIcon } from 'lucide-react';
import { Heart, User, Quote } from 'lucide-react';

export default function TutorCard({ tutor, onClick }) {
  // truncate languages to 2
  const maxVisibleLanguages = 2; 
  const tutorLanguages = tutor.languages.split(',');
  const totalLanguages = tutorLanguages.length;
  const displayedLanguages = tutorLanguages.slice(0, maxVisibleLanguages).join(', ');
  const additionalCount = totalLanguages > maxVisibleLanguages ? ` +${totalLanguages - maxVisibleLanguages}` : '';

  return (
    <div 
      className="flex flex-col p-4 border-b cursor-pointer hover:shadow-lg hover:bg-gray-100 transition" 
      onClick={onClick}
    >
      <div className="flex items-center">
        <img
          src={tutor.image}
          alt={tutor.name}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div className="ml-4 flex-grow">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-xl flex justify-between">
              {tutor.name} 
              <span className="ml-1 mr-1">{tutor.countryOfOrigin}</span>
              <ShieldCheckIcon className="w-5 h-5 fill-black text-white" />
            </h3>
            <Heart className="w-5 h-5" />
          </div>
          <div className="flex justify-between items-center mt-1">
            <div className="flex flex-col items-left">
              <div className="text-md text-left font-bold">${tutor.price}</div> 
              <div className="text-sm text-gray-500">{tutor.numberOfLessons}-min lesson</div>
            </div>
            <div className="flex flex-col items-left">
              <div className="text-sm text-black-500 font-bold">{tutor.rating} ★</div>
              <div className="text-sm text-gray-500">
                {tutor.numberOfReviews} reviews
              </div>  
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-6">
        <p className="text-md text-black-500 text-left font-bold">
          {tutor.description}
        </p>
      </div>
      <div className="flex items-center mt-2">
        <User className="text-sm w-3 h-3 fill-black mr-1"/>
        <p className="text-sm text-gray-500 text-left">
          {tutor.numberOfStudents} students
          <span className="mx-1">•</span>
          {tutor.numberOfLessons} lessons
        </p>
      </div>
      <div className="flex items-center mt-2">
        <Quote className="text-sm w-3 h-3 fill-black mr-1"/>
        <p className="text-sm text-gray-500 text-left">
          Speaks {displayedLanguages}
          {additionalCount}
        </p>
      </div>
    </div>
  );
}