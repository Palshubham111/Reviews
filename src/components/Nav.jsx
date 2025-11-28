import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-center mt-10 gap-5 text-blue-500 font-semibold'>
        
        <a
          href="addreview"
          className='px-4 py-2 border border-blue-700 rounded-xl hover:bg-blue-100'
        >
          Add Review
        </a>

        <a
          href="userreview"
          className='px-4 py-2 border  border-blue-700 rounded-xl hover:bg-blue-100'
        >
          User Reviews
        </a>

      </div>
  )
}

export default Nav