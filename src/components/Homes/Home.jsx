import React from 'react'

import Nav from '../Nav.jsx'
import Crousal from '../Crousal.jsx'

const Home = () => {
  return (
     <div className=' mt-8  '>

      <div className='text-red-500 font-bold text-4xl text-center mt-5'>
        Review <span className='text-green-500'>System</span>
      </div>

      {/* <div className='flex justify-center mt-10 gap-5 text-blue-500 font-semibold'>
        
        <a
          href="#"
          className='px-4 py-2 border rounded-xl hover:bg-blue-100'
        >
          Add Review
        </a>

        <a
          href="#"
          className='px-4 py-2 border rounded-xl hover:bg-blue-100'
        >
          User Reviews
        </a>

      </div> */}
      <Nav/>

      <div className='mt-5 p-20'>
        <Crousal/>
      </div>

    </div>
  )
}

export default Home