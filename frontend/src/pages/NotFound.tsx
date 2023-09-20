import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center w-full h-screen bg-blue-50'>
      <div>
        <h2 className='text-[#1E1E21] text-lg md:text-xl text-center mb-4 md:mb-8 font-semibold'>
          Page not found
        </h2>
        <Link to={'/'} className='bg-[#9333EA] text-white text-base md:text-lg font-bold rounded-[5px] md:rounded-[10px] py-[10px] md:py-[15px] px-[60px] md:px-[120px] block mx-auto w-max'>Go home</Link>

      </div>
    </div>
  )
}

export default NotFound