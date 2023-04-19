import React from 'react'
import banner from '../assets/images/illustration-working.svg'

const Banner = () => {
  return (
    <div className='flex flex-col font-sans px-12 p-6 mx-auto md:flex  md:flex-row-reverse md:items-center'>
      <div>
        <img src={banner} alt='' />
      </div>

      <div className='text-center md:text-start py-6 max-w-xl px-5 mr-40'>
        <h2 className='text-6xl font-bold '>More than just shorter links</h2>
        <p className='text-2xl opacity-60 p-2'>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className='px-10 py-4 bg-cyan text-3xl rounded-3xl text-white font-bold mt-5 opacity-60 hover:opacity-100'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Banner
