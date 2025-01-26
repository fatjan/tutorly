export default function TutorCard({ tutor }) {
    return (
      <div className="flex p-4 border-b">
        <img
          src={tutor.image}
          alt={tutor.name}
          className="w-16 h-16 rounded-full"
        />
        <div className="ml-4 flex-grow">
          <h3 className="font-bold text-lg">
            {tutor.name} <span className="ml-2">{tutor.flags}</span>
          </h3>
          <p className="text-sm text-gray-500">{tutor.description}</p>
          <div className="flex justify-between mt-2">
            <div className="text-sm">
              ${tutor.price} <span className="text-gray-500">/ 50-min lesson</span>
            </div>
            <div className="text-sm text-yellow-500">{tutor.rating} ★</div>
          </div>
        </div>
      </div>
    );
  }
  