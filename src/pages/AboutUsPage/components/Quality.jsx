import React from 'react'
import { FaCheck } from 'react-icons/fa'
import cofee from "../../../assets/OurCoffee.webp"



const Quality = () => {

  const qualities = [
    {
        icon:<FaCheck />,
        content:"Ensuring only the finest, cleanest coffee is selected based on origin, aroma, flavour, body."
    },
    {
        icon:<FaCheck />,
        content:"Building strong long-term relationships with the farmers by working with them at each step."
    },
    {
        icon:<FaCheck />,
        content:"Building strong long-term relationships with the farmers by working with them at each step."
    }
  ]


  return (
    <div className="quality lg:h-screen  min-h-screen py-5 relative text-white cormorant  flex flex-col  md:flex-row lg:flex-row  items-center justify-center px-5 lg:px-40">
      <div className='absolute inset-0 bg-black opacity-60'></div>

     <div className='flex flex-col items-start justify-start gap-8 text-white  relative'>
       <h1 className='text-green-500 font-bold lg:text-5xl'>WHY CHOOSE US</h1>
       <h1 className="lg:text-5xl font-bold max-w-xl">Quality of our beans is what sets us apart</h1>
       <p className='max-w-2xl'>Our quality policy focuses on three main pillars: our customers, our farmers, and the environment. It includes</p>

       <div className='flex flex-col gap-4 items-center justify-center'>
           {
            qualities.map((qualtiy,index) =>(
                <div key={index} className='flex  gap-5 items-center justify-center'>
                    <p className='bg-green-500 text-white p-4 '>{qualtiy.icon}</p>
                    <p className='max-w-xl'>{qualtiy.content}</p>
                </div>
            ))
           }
       </div>

       <button className='py-3 px-4 bg-green-500 text-white font-semibold'>View All</button>
     </div>

     <div className='bg-gray-50 rounded-3xl relative'>
        <img src={cofee} className=''/>
     </div>

    </div>
  )
}

export default Quality
