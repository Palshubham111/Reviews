import React, { useState } from 'react'
import { IoHome } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const AddReview = () => {

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (name.trim() === "" || comment.trim() === "" || rating.trim() === "") {
      setErrorMsg("All fields are required!");
      setSuccessMsg("");
      return;
    }

    // Generate date & time
    const now = new Date();
    const currentDate = now.toLocaleDateString();
    const currentTime = now.toLocaleTimeString();

    // Create review object including date and time
    const newReview = { 
      name, 
      comment, 
      rating,
      date: currentDate,
      time: currentTime
    };

    // Get old reviews
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];

    // Add new review
    storedReviews.push(newReview);

    // Save back to localStorage
    localStorage.setItem("reviews", JSON.stringify(storedReviews));

    // Success message
    setSuccessMsg("Review submitted successfully!");
    setErrorMsg("");

    // Clear form fields
    setName("");
    setComment("");
    setRating("");

    // Redirect to User Review page after 1 second
    setTimeout(() => {
      navigate('/userreview');
    }, 1000);
  };

  return (
    <div>

      <div className='mt-6 ml-10'>
        <a href="/" className='text-4xl text-blue-600'>
          <IoHome />
        </a>
      </div>

      <div className="min-h-screen flex flex-col items-center pt-10">

        <h1 className="text-blue-600 text-4xl font-extrabold mb-8">
          Add Review
        </h1>

        <form 
          className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-5"
          onSubmit={handleSubmit}
        >

          {/* Error Message */}
          {errorMsg && (
            <p className="text-red-600 font-semibold text-center">
              {errorMsg}
            </p>
          )}

          {/* Success Message */}
          {successMsg && (
            <p className="text-green-600 font-semibold text-center">
              {successMsg}
            </p>
          )}

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Enter Your Name</label>
            <input 
              type="text"
              placeholder="Enter your Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border px-3 py-2 rounded-md focus:outline-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Write Comment</label>
            <input 
              type="text"
              placeholder="Enter your comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="border px-3 py-2 rounded-md focus:outline-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Rating</label>
            <select 
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="border px-3 py-2 rounded-md focus:outline-blue-500"
            >
              <option value="">Select Rating</option>
              <option value="1">⭐ 1</option>
              <option value="2">⭐ 2</option>
              <option value="3">⭐ 3</option>
              <option value="4">⭐ 4</option>
              <option value="5">⭐ 5</option>
            </select>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-bold hover:bg-blue-700 transition"
          >
            Submit Review
          </button>

        </form>
        
      </div>

    </div>
  )
}

export default AddReview;
