import React from 'react'

const Hero = () => {
  return (
    <div className='lg:h-[80vh] poppins flex items-center justify-center px-10 lg:px-0 aboutus bg-cover bg-center relative py-20 lg:pt-0 '>
      {/* Overlay to make text more visible */}
      <div className='absolute inset-0 bg-black opacity-50'></div>
      
      {/* Centering the h1 */}
      <div className='flex flex-col items-center justify-center h-full relative gap-14 '>
          <h1 className='text-3xl md:text-4xl lg:text-7xl text-white font-bold'>OUR COFFEE HISTORY</h1>
          <p className="text-white text-3xl">The Birth Place Of Coffee</p>
      </div>
    </div>
  )
}

export default Hero
