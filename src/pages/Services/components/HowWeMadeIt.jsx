import React,{useEffect} from "react";
import { GiCoffeeBeans } from "react-icons/gi";

import AOS from 'aos';
import 'aos/dist/aos.css';



const HowWeMadeIt = () => {
    useEffect(() => {
              AOS.init({
                duration: 1500, // Duration of the animation
                easing: 'ease-in-out', // Easing function
              });
            }, []);
      
    const processes = [
        {
            
            title:"1. Planting the Seed",
            content:"Coffee trees begin as seeds, planted in nurseries",
        },
        {
            title:"2. Growing the Tree",
            content:"Purchasing from select family farmers who farm organically.",
        },
        {
            title:"3. Harvesting the Cherries",
            content:"Purchasing from select family farmers who farm organically.",
        },
        {
            title:"4. Processing Coffee Bean",
            content:"Purchasing from select family farmers who farm organically.",
        },
        {
            title:"5. Packaging & Exporting",
            content:"Purchasing from select family farmers who farm organically.",
        },
       
    ]
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center px-5 py-20 poppins gap-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5  '>
            {
                processes.map((process,index) =>(
                    <div key={index} 
                    data-aos="zoom-in"
                    data-aos-delay={`${index * 100}`}
                    className='p-5  border-l-3 border-b-3 border-[rgb(219,192,156)] flex flex-col gap-3 items-center justify-center rounded-md shadow-xl w-80'>
                         <GiCoffeeBeans className='text-[rgb(219,192,156)]' size={50} />
                        <p className='max-w-md font-bold text-xl '>{process.title}</p>
                        <p className='max-w-xls text-wrap text-sm text-gray-400'>{process.content}</p>
                    </div>
                ))
            }
        </div>

        {/* how we made it */}
        <div className='flex flex-col gap-10 '>
            <p className='text-green-500 font-bold text-2xl lg:text-4xl'>~ How we made it ~</p>
            <h1 className='font-bold text-2xl lg:text-3xl'>The Fascinating Journey</h1>
            <p className='text-gray-500 max-w-xl'>The coffee tree, scientifically known as <span className='text-green-500 font-bold'>Coffea</span>, 
                is native to tropical Africa. This flowering plant produces the coffee cherries 
                that contain the beans we know and love. Over centuries, 
                coffee has spread worldwide, becoming an essential part of global culture.
            </p>
            <p className='text-gray-500 max-w-xl'>Coffee trees thrive in a region known as the 'coffee belt'
                 which stretches between the Tropics of Cancer and Capricorn. 
                 The unique combination of altitude, rainfall, and temperatures 
                 in these regions gives coffee its diverse flavors.

            </p>
        </div>
    </div>
  )
}

export default HowWeMadeIt
