import React, {useEffect} from "react";
import harvest from "../../../assets/charvest.avif";
import Card from "../../../components/Card";

import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutShort = () => {

    useEffect(() => {
        AOS.init({
          duration: 1500, // Duration of the animation
          easing: 'ease-in-out', // Easing function
        });
      }, []);


  return (
    <div className="w-full min-h-screen lg:h-screen md:h-screen p-10 flex  gap-20 items-center justify-center poppins">
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-4  md:gap-20 lg:gap-20 w-full h-full">
        <div className="flex flex-col gap-5 md:gap-14 lg:gap-20 items-center justify-center">
          <div className="flex flex-col items-center justify-center space-y-4 pt-1 md:pt-6 lg:pt-10">
            <p className="text-green-500 text-xl md:text-2xl lg:text-2xl font-semibold">Welcome to Jara</p>
            <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl">Who We Are</h2>
          </div>
          <img
            // data-aos="fade-left"
            src={harvest}
            alt="Coffe Cup"
            className="lg:h-[50vh] md:h-[50vh] object-cover rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-4 items-center justify-center"
        
        >
            
         <div data-aos="fade-right">
         <Card
            title="Variety of Coffee"
            content="Ethiopia boasts over a thousand unique coffee varieties, each with its own distinct flavor, aroma, and character.
             Our diverse selection captures the essence of Ethiopian coffee."
          />
         </div>
          <div className="lg:ml-28"
          data-aos="fade-left"
          >
          <Card
            
            title="High-Quality Coffee"
            content="Altitude: The higher the altitude, the better the quality. Our coffee is grown at high elevations, 
            ensuring a superior taste and flavor profile."
          />
          </div>
          <div data-aos="fade-up">
          <Card
            title="Origin"
            content="Ethiopia is considered the birthplace of coffee, where the rich soil and
             perfect climate have nurtured the world’s finest beans for centuries."
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutShort;
