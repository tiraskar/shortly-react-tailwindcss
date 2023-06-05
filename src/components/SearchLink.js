import React from 'react'

const SearchLink = () => {
  return (
    <div className='bg-fixed bg-slate-100 mt-20 max-h-screen pb-10'>
      <div className='flex flex-col  justify-center items-center bg-veryDarkBlue w-[60%] mx-auto  rounded-lg '>
        <div className='flex flex-col p-10 lg:flex lg:space-x-4 lg:flex-row '>
          <input
            type='text'
            className='bg-white rounded-md lg:w-180 placeholder:text-start placeholder:text-yellow-500 placeholder:px-2'
            placeholder='Shorten a link here'
          />
          <button className='bg-cyan my-2 p-2 rounded-md text-white md:my-0'>
            Shorten it!
          </button>
        </div>
      </div>
      {linkShorten.map((links, index) => (
        <div className='justify-center items-center bg-white w-[60%] mx-auto rounded-lg mt-5 mb-5'>
          <div
            key={index}
            className='flex flex-col p-7 md:flex md:flex-row md:justify-between '
          >
            <p className='font-bold'>{links.longLink}</p>

            <div
              key={index}
              className='flex flex-col items-center lg:flex-row lg:space-x-5'
            >
              <p className='text-cyan'>{links.shortLink}</p>
              <button
                className={`px-5 py-2 ${
                  index % 2 === 0 ? ' bg-cyan' : 'bg-darkViolet'
                } rounded-lg text-white`}
                type='button'
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SearchLink

const linkShorten = [
  {
    longLink: 'https://frontendmentor.io',
    shortLink: 'https://rel.ink/k4IKyk',
  },
  {
    longLink: 'https://twitter.com/frontendmentor',
    shortLink: 'https://rel.ink/gxOXp9',
  },
  {
    longLink: 'https://linkedin.com/frontend-mentor',
    shortLink: 'https://rel.ink/gob3X9',
  },
]
