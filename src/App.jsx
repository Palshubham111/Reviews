import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Homes/Home'
import AddReview from './components/AddReview'
import UserReview from './components/UserReview'


const App = () => {
  return (
   <div>

    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path="addreview" element={<AddReview/>} />
      <Route path="userreview" element={<UserReview/>} />

      

      




    </Routes>

    

   </div>
  )
}

export default App
