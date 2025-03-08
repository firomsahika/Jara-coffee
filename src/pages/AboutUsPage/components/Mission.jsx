import React,{useEffect} from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegFlag } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';


const Mission = () => {

    
    useEffect(() => {
            AOS.init({
              duration: 1500, // Duration of the animation
              easing: 'ease-in-out', // Easing function
            });
          }, []);
  
  const missions = [
    {
        icon:<FaRegEye size={70}/>,
        title:"Our Vision",
        content:"To be the leader in innovation and quality among coffee producers and exporters while caring for the environment."
    },
    {
        icon:<FaRegFlag size={70}/>,
        title:"Our Mission",
        content:"We are committed to providing the finest high-quality coffee beans to our customers worldwide while forging mutually beneficial relationships."
    },
    {
        icon:<FaHandshake size={70}/>,
        title:"Our Values",
        content:"We adhere to our highest ethical values and conduct in our relationship with our customers, employees, the community, and the environment."
    }
  ]


  return (
    <div className="lg:px-40 py-10 md:py-28 lg:py-40 bg-gray-50 px-5 cormorant">
        
      <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {
            missions.map((mission, index) =>(
                <div key={index}
                data-aos="fade-left"
                className={` bg-green-500 rounded-t-3xl border-b-8 border-r-8 border-gray-800 p-10 flex flex-col items-center justify-center gap-4  text-white
                    ${index === 1 ? '' : ''}`}
                >
                   <p className='bg-white p-2 rounded-full text-green-500'>{mission.icon}</p>
                   <h1 className='text-3xl font-bold'>{mission.title}</h1>
                   <p>{mission.content}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Mission;
