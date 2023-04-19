import React from 'react'

const Boost = () => {
  return (
    <div id='cta' className='py-24 bg-darkViolet'>
      <div className='flex flex-col p-2 space-y-6'>
        <h5 className='mx-auto space-y-10 text-4xl text-white text-center'>
          Boosts your links today
        </h5>
        <button className='px-10 py-5 mx-auto text-2xl bg-cyan text-center   text-white rounded-full hover:bg-cyanLight md:text-base md:py-3 focus:outline-none'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Boost
