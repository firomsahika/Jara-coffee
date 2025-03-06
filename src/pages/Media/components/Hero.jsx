import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import natural from "../../../assets/natural.avif";
import ourcoffee from "../../../assets/OurCoffee.webp";
import farmer from "../../../assets/farmer.avif";
import farm2 from "../../../assets/farm2.avif";
import slider2 from "../../../assets/slider-2.webp";
import farm3 from "../../../assets/farm3.avif";
import coffee from "../../../assets/cofee.avif";
import slider1 from "../../../assets/slider-1.webp";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
    });
  }, []);

  const images = [
    natural,farm2,slider1,farmer,ourcoffee,slider2,farm3,coffee,
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-5 py-20 px-5 lg:px-40 lg:py-32 poppins">
      {/* text section */}
      <div className=" pb-10 lg:pb-20">
        <h1 className="text-xl lg:text-3xl font-bold text-center">
          From Bean to Brew:<br></br> Our Coffee Story in Images
        </h1>
      </div>

      {/* Gallery section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`}
            className="relative overflow-hidden rounded-lg"
          >
            <img
              src={image}
              className="object-cover w-full h-[25vh] lg:h-[40vh] transition-transform transform hover:scale-105"
              alt={`coffee-image-${index}`}
              style={{
                borderRadius: "20px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
