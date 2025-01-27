import React from 'react';

function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-sm shadow-sm basis-128 max-w-md md:max-w-lg lg:max-w-xl border border-gray-200 p-4">
      <div className="flex items-center mb-2">
        <div className="w-8 h-8 rounded-full bg-gray-200 mr-4">{/* User icon here */}</div>
        <div>
          <h4 className="text-sm font-semibold">{review.name}</h4>
          <span className="text-xs text-gray-500">
            <img src="/flags/Poland.svg" alt="Poland flag" className="inline-block w-3 h-3 mr-1" /> 
            {review.date}
          </span>
        </div>
      </div>

      {/* Render star rating components here using Tailwind's star icon or a library */}

      <p className="mt-2 text-xs text-gray-700">{review.text}</p>

      <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-sm">
        Show more
      </button>
    </div>
  );
}

export default ReviewCard;