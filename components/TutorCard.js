import { ShieldCheckIcon } from 'lucide-react';

export default function TutorCard({ tutor }) {
  return (
    <div className="flex p-4 border-b">
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
          <div className="text-sm text-yellow-500">{tutor.rating} ★</div>
        </div>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm text-gray-500">{tutor.description}</p>
          <div className="text-sm">
            ${tutor.price} <span className="text-gray-500">/ 50-min</span>
          </div>
        </div>
        {/* <div className="flex items-center mt-1">
          {tutor.flags.map((flag, index) => (
            <span key={index} className="mr-2">
              {flag}
            </span>
          ))}
        </div> */}
      </div>
    </div>
  );
}