import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'

const Testimonials = () => {
    const testimonies = [
        {
            title:"Oakwoodroasted",
            content:"Daye Bensa is recognized for their dedication to premium quality with a deep commitment to the land and to the producers of their stellar coffees.We hope you’ll try this delicious coffee."
        },
        {
            title:"Archers Coffee",
            content:"We call Daye Bensa coffees our “roastery rock stars” because they have a solid fan base in our home community. Daye Bensa coffees, especially Hamasho, make up our fastest moving lots."
        },
        {
            title:"GreenwayBarista",
            content:"Bombe is complex yet amazingly sweet with notes of melon and honey. 🍯 We’ve worked closely with the Dukamo for years now and they’ve always delivered a beautiful product."
        }
    ]


  return (
    <div className='w-full bg-green-500 flex flex-col lg:h-[70vh] items-center justify-center p-10  gap-20  text-white poppins '
    
    >
        <h1 className='font-bold text-3xl lg:text-4xl text-white'>Testimonials</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-20'>
      {
            testimonies.map((testimony, index) => (
                <div key={index} className='shadow-lg border-r-4 border-b-4 border-green-400 gap-3 flex flex-col justify-center p-8 md:p-3 lg:p-3 w-84 md:w-90 lg:w-90 h-50 bg-white rounded-md'>
                    <p><FaQuoteRight size={30} className='text-green-500'/></p>
                    <h2 className='font-bold text-2xl primary'>{testimony.title}</h2>
                    <p className='text-sm text-gray-500'>{testimony.content}</p>
                </div>
            ))
      }
      </div>
    </div>
  )
}

export default Testimonials
