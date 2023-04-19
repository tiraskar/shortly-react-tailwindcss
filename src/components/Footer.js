import React from 'react'
import facebook from '../assets/images/icon-facebook.svg'
import twitter from '../assets/images/icon-twitter.svg'
import instagram from '../assets/images/icon-instagram.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
import logo from '../assets/images/logo.svg'

const Footer = () => {
  return (
    <div class='py-16 bg-veryDarkViolet'>
      <div class='container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start'>
        <img src={logo} alt='' />

        <div class='flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0'>
          <div class='flex flex-col items-center w-full md:items-start'>
            <div class='mb-5 font-bold text-white capitalize'>Features</div>
            <div class='flex flex-col items-center space-y-3 md:items-start'>
              <a href='#' class='capitalize text-grayishViolet hover:text-cyan'>
                Link shortening
              </a>
              <a href='#' class='capitalize text-grayishViolet hover:text-cyan'>
                Branded links
              </a>
              <a href='#' class='capitalize text-grayishViolet hover:text-cyan'>
                Analytics
              </a>
            </div>
          </div>

          <div class='flex flex-col items-center w-full md:items-start'>
            <div class='mb-5 font-bold text-white capitalize'>Resources</div>
            <div class='flex flex-col items-center space-y-3 md:items-start'>
              <a href='#' class='capitalize text-grayishViolet hover:text-cyan'>
                Blog
              </a>
              <a href='#' class='capitalize text-grayishViolet hover:text-cyan'>
                Developers
              </a>
              <a href='#' class='capitalize text-grayishViolet hover:text-cyan'>
                Support
              </a>
            </div>
          </div>

          <div class='flex flex-col items-center w-full md:items-start'>
            <div class='mb-5 font-bold text-white capitalize'>Company</div>
            <div class='flex flex-col items-center space-y-3 md:items-start'>
              <a href='#' class='capitalize text-grayishViolet hover:text-cyan'>
                About
              </a>
              <a href='#' class='capitalize text-grayishViolet hover:text-cyan'>
                Our Team
              </a>
              <a href='#' class='capitalize text-grayishViolet hover:text-cyan'>
                Careers
              </a>
              <a href='#' class='capitalize text-grayishViolet hover:text-cyan'>
                Contact
              </a>
            </div>
          </div>
        </div>

        <div class='flex space-x-6'>
          <a href='#'>
            <img src={facebook} alt='' class='ficon' />
          </a>
          <a href='#'>
            <img src={twitter} alt='' class='ficon' />
          </a>
          <a href='#'>
            <img src={pinterest} alt='' class='ficon' />
          </a>
          <a href='#'>
            <img src={instagram} alt='' class='ficon' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
