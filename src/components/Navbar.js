import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import links from '../utils/links'
const Navbar = () => {
  const [hidden, setHidden] = useState(false)
  const displayHamburger = () => {
    setHidden(!hidden)
  }
  return (
    <div className=' flex flex-row justify-between px-12 py-6 bg-white md:flex md:flex-row '>
      <div className='flex items-start  md:flex md:flex-row'>
        <img src={logo} alt='' />
        <div className='hidden ml-10 font-bold text-lg  md:flex md:flex-row'>
          {links.map((link, index) => (
            <div
              to={link.to}
              key={index}
              className='px-4 py-1 opacity-60 hover:opacity-100 '
            >
              {link.name}
            </div>
          ))}
        </div>
      </div>
      {/* Button Container */}
      <div className='hidden space-x-8 md:block'>
        <button className='font-bold text-xl opacity-60 hover:opacity-100'>
          Login
        </button>
        <button className='bg-cyan rounded-3xl px-8 py-2 text-xl font-bold text-white hover:opacity-60'>
          Sign up
        </button>
      </div>
      {/* hamburger menu */}
      <div className='md:hidden'>
        <button
          className='z-40 block hamburger md:hidden focus:outline-none'
          type='button'
          onClick={displayHamburger}
        >
          <span className={`hamburger-top ${!hidden && 'open'}`}></span>
          <span className={`hamburger-middle ${!hidden && 'hidden'}`}></span>
          <span className={`hamburger-bottom ${!hidden && 'open'}`}></span>
        </button>
      </div>
      {!hidden && (
        <div className='absolute flex flex-col font-bold text-white text-xl items-center justify-center w-[85%] mt-10  bg-darkViolet  rounded-lg md:hidden'>
          {links.map((link, index) => (
            <div key={index} className='py-4'>
              {link.name}
            </div>
          ))}
          <div className='border-t-2 w-[90%]'></div>
          <div className='flex flex-col  py-4 w-[90%] space-y-6 '>
            <button className='font-bold text-xl opacity-60 hover:opacity-100 p-2'>
              Login
            </button>
            <button className='bg-cyan rounded-3xl w-full px-8 py-2 text-xl font-bold text-white hover:opacity-60'>
              Sign up
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
