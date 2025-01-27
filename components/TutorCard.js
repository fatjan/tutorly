import { ShieldCheckIcon } from 'lucide-react';
import { Heart } from 'lucide-react';

export default function TutorCard({ tutor }) {
  return (
    <div className="flex flex-col p-4 border-b">
      <div className="flex items-center">
        <img
          src={tutor.image}
          alt={tutor.name}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div className="ml-4 flex-grow">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-xl flex justify-between">{tutor.name} {
                tutor.flags.length > 0 && tutor.flags.map((flag, index) => (
                  <span key={index} className="ml-1 mr-1">{flag}</span>
                ))
              } 
              <ShieldCheckIcon className="w-5 h-5 fill-black text-white" />
            </h3>
            <Heart className="w-5 h-5" />
          </div>
          <div className="flex justify-between items-center mt-1">
            <div className="flex flex-col items-left">
              <div className="text-md text-left font-bold">${tutor.price}</div> 
              <div className="text-sm text-gray-500">{tutor.duration}-min lesson</div>
            </div>
            <div className="flex flex-col items-left">
              <div className="text-sm text-black-500 font-bold">{tutor.rating} ★</div>
              <div className="text-sm text-gray-500">
                {tutor.reviews} reviews
              </div>  
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-6">
        <p className="text-sm text-gray-500 text-left font-bold">
          {tutor.description}
        </p>
      </div>
    </div>
  );
}