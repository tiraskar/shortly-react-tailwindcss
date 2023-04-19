import React from 'react'
import brandRecognition from '../assets/images/icon-brand-recognition.svg'

const FeatureBox = () => {
  return (
    <div className='pb-32 bg-gray-100'>
      <div className='container relative flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7'>
        <div className='hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block'></div>
      </div>
      <div className='absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden'></div>
      {/* box */}
      <div className=' md:flex md:flex-row mx-10'>
        <div className='relative flex flex-col  p-6 space-y-6 bg-white rounded-lg md:w-1/3'>
          <div className='absolute -ml-10 left-1/2 -top-10 md:left-16'>
            <div className='flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet'>
              <img src={brandRecognition} alt='' />
            </div>
          </div>
          <h5 className='pt-6 text-xl font-bold text-center capitalize md:text-left'>
            Brand Recognition
          </h5>
          <p className='text-center text-gray-400 md:text-left'>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className='relative flex flex-col mt-8 mx-10 p-6 space-y-6 bg-white rounded-lg md:w-1/3'>
          <div className='absolute -ml-10 left-1/2 -top-10 md:left-16'>
            <div className='flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet'>
              <img src={brandRecognition} alt='' />
            </div>
          </div>
          <h5 className='pt-6 text-xl font-bold text-center capitalize md:text-left'>
            Brand Recognition
          </h5>
          <p className='text-center text-gray-400 md:text-left'>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className='relative flex flex-col mt-16 x-10 p-6 space-y-6 bg-white rounded-lg md:w-1/3'>
          <div className='absolute -ml-10 left-1/2 -top-10 md:left-16'>
            <div className='flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet'>
              <img src={brandRecognition} alt='' />
            </div>
          </div>
          <h5 className='pt-6 text-xl font-bold text-center capitalize md:text-left'>
            Brand Recognition
          </h5>
          <p className='text-center text-gray-400 md:text-left'>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeatureBox
