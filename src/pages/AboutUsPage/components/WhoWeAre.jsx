import React from 'react'
import CountUp from 'react-countup';



import about from "../../../assets/charvest.avif"
import plant from "../../../assets/plant.png"



const WhoWeAre = () => {
    

  return (
    <div className=' flex items-center justify-center px-5 lg:px-0'>
      <div className='flex flex-col md:flex-row lg:flex-row items-center justify-center py-20 gap-8'>
        <div className='flex flex-col gap-4'>
            <p className='flex gap-2 text-green-500 text-xl '>
                <img src={plant} className='w-4'/>
                Why Choose Us
            </p>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
            Who we are
            </h1>
            <p className='max-w-3xl text-md text-green-500'>
            Jara Coffee stands out for its commitment to quality and authenticity. 
            Our beans are sourced from nine renowned Ethiopian regions, each offering distinct flavors and characteristics.
            We employ unique processing methods to enhance the natural qualities of our coffee.
            Our focus on sustainability and community development further distinguishes us as a leader in the coffee industry.
            </p>
            <p className="text-xl text-gray-800">
           
            <span className="font-bold text-white p-3 rounded-full bg-green-500">
              <CountUp start={0} end={9} duration={2} className=''/>
              +
            </span>
            <span> coffee sources</span>
          </p>
        </div>
        
        <div>
            <img src={about}/>
        </div>

      </div>
    </div>
  )
}

export default WhoWeAre
