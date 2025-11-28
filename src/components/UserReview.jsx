import React, { useState, useEffect } from 'react'
import { IoHome } from 'react-icons/io5';

const UserReview = () => {

  const [data, setData] = useState([]);

  
  useEffect(() => {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setData(reviews);
  }, []);

  return (
    <div className="p-6">
      
      <div>
        <a href="/" className="text-4xl text-blue-600">
          <IoHome />
        </a>
      </div>

      <h1 className="text-center text-3xl font-bold mt-10">
        User Reviews
      </h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">

        {/* No data message */}
        {data.length === 0 && (
          <p className="text-gray-500 text-lg col-span-full">No reviews found</p>
        )}

        {/* Reviews List */}
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-md bg-white shadow-md rounded-xl p-5 border"
          >
            <h2 className="text-xl font-bold text-blue-600">{item.name}</h2>

            <p className="mt-2 text-gray-700">{item.comment}</p>

            <p className="mt-2 font-semibold">
              ⭐ Rating: {item.rating}
            </p>

            {/* ✅ Show date & time */}
              <p className="text-gray-500 text-sm mt-2">
                {item.date} — {item.time}
              </p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default UserReview;
