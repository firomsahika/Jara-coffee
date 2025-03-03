import React from 'react'

const Hero = () => {
  return (
    <div className='service poppins lg:h-[80vh] flex items-center justify-center px-10 lg:px-0  bg-cover bg-center relative py-20 lg:pt-0 '>
      {/* Overlay to make text more visible */}
      <div className='absolute inset-0 bg-black opacity-50'></div>
      
      {/* Centering the h1 */}
      <div className='flex flex-col items-center justify-center h-full relative gap-10'>
          <h1 className='text-3xl md:text-4xl lg:text-6xl text-white font-bold'>Our Process</h1>
          <h2 className="text-3xl md:text-4xl lg:text-4xl text-white text-center lg:text-start font-semibold">Passion for Quality Coffee, Sourced with Care.</h2>
      </div>
    </div>
  )
}

export default Hero
