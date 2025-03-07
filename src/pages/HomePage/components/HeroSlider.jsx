import React from "react";
import Slider from "react-slick";

import coffee from "../../../assets/cofee.avif";
import farmer from "../../../assets/farmer.avif";

import { TypeAnimation } from "react-type-animation";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div
      className="relative items-center justify-center cormorant overflow-x-hidden"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
    >
      <Slider {...settings} 
      style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
      >
        {/* Slide 1 */}
        <div className="relative" style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }} >
          <img
            src={farmer}
            alt="farmer"
            className="w-full h-[60vh] md:h-[50vh]  lg:h-screen object-cover"
          />
          <div className="absolute space-y-5 flex flex-col  top-24 md:top-44 md:left-32 lg:top-54 lg:left-44 text-white font-sans bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-3xl md:text-3xl font-bold text-white cormorant max-w-2xl flex flex-col">
                <span className=" text-2xl lg:text-6xl  md:text-4xl font-bold">Jara Coffee</span>
            <TypeAnimation
                sequence={[
                  "Taste the Freshness", // Shorter text
                  1000, // Wait for 1 second before transitioning
                  "Delivered Fresh", // Third short text
                  1000,
                ]}
                wrapper="span"
                speed={50}
                // style={{ fontSize: "2em", display: "inline-block" }}
                className="text-2xl lg:text-6xl md:text-4xl "
                repeat={Infinity} // Repeat infinitely
              />
            </h2>
            <p className="text-lg md:max-w-md  mt-2">
              Our roasting process ensures  every bean brings out its full
              potential.
            </p>
            <a
              href="#discover-coffee"
              className="bg-green-500 cormorant  p-3 lg:p-4 text-xl md:text-2xl lg:text-2xl  lg:max-w-sm flex items-center justify-center"
            >
              Discover Our Coffee
            </a>
          </div>
        </div>

        {/* Slide 2 */}

        <div className="relative ">
          <img
            src={coffee}
            alt="Coffee Beans"
            className="w-full h-[60vh] md:h-[50vh] lg:h-screen object-cover "
          />
          <div className="absolute space-y-5 flex flex-col  top-24 md:top-44 md:left-32 lg:top-54 lg:left-44 text-white font-sans  bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-2xl lg:text-6xl md:text-4xl lg:max-w-2xl md:max-w-4xl font-bold cormorant flex flex-col">
            <span className=" text-2xl lg:text-6xl md:text-4xl">Jara Coffee</span>
            <TypeAnimation
                sequence={[
                  "Premium Beans", // Shorter text
                  1000, // Wait for 1 second before transitioning
                  "Rich Flavors", // Second short text
                  1000,
                  
                ]}
                wrapper="span"
                speed={50}
                // style={{ fontSize: "2em", display: "inline-block" }}
                className="text-2xl lg:text-6xl md:text-4xl "
                repeat={Infinity} // Repeat infinitely
              />
            </h2>
            <p className="text-xl">
              Expertly selected beans from trusted farmers.
            </p>
            <a
              href="#discover-coffee"
              className="bg-green-500 cormorant  p-3 lg:p-4 text-xl md:text-2xl lg:text-2xl  lg:max-w-sm flex items-center justify-center"
            >
              Discover Our Coffee
            </a>
          </div>
        </div>

        {/* Slide 3 */}
      </Slider>
    </div>
  );
};

export default HeroSlider;
