import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='h-screen w-full items-center flex justify-center bg-violet-100'>

      <div>
        <h2 className='text-blue-900 font-bold text-xl '>
          Welcome to <span className='text-blue-500'>WriteOn</span>
        </h2>

        <div className='mt-4 justify-center space-x-4 flex'>
          <Link to="/signup" className=' bg-blue-400 text-white rounded-lg capitalize px-4 py-2'>
            signup
          </Link>

          <Link to="/login" className=' bg-blue-400 text-white rounded-lg capitalize px-4 py-2'>
            login
          </Link>
        </div>
      </div>



    </div>
  )
}

export default Landing