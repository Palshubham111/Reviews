import React, { useEffect, useState } from "react";

const Crousal = () => {
  const [reviews, setReviews] = useState([]);

  
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(stored);
  }, []);

  return (
    <div className="carousel w-full rounded-box p-5 bg-gray-100">
      
      
      {reviews.length === 0 && (
        <p className="text-center text-gray-500 text-lg w-full">
          No reviews available
        </p>
      )}

      {/* Carousel Items */}
      {reviews.map((item, index) => (
        <div key={index} className="carousel-item w-1/4 flex flex-col bg-white shadow-md rounded-xl p-6 m-3  ">
          
          <h2 className="text-xl font-bold text-blue-600">
            {item.name}
          </h2>

          <p className="mt-2 text-gray-700">
            {item.comment}
          </p>

          <p className="mt-2 font-semibold">
            ⭐ Rating: {item.rating}
          </p>

          <p className="text-gray-500 text-sm mt-2">
            {item.date} — {item.time}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Crousal;
