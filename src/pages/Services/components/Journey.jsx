import React,{useEffect} from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import farmer from "../../../assets/farmer.avif"
import coffee from "../../../assets/cofee.avif"

import AOS from 'aos';
import 'aos/dist/aos.css';

const Journey = () => {
     useEffect(() => {
          AOS.init({
            duration: 1500, // Duration of the animation
            easing: 'ease-in-out', // Easing function
          });
        }, []);
  


  return (
    <div className="flex flex-col lg:flex-row md:flex-row min-h-screen lg:max-h-screen items-center justify-center  poppins p-5 md:10 lg:px-20">
      {/* content section */}
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-4">
          <p className="text-green-500 text-xl font-semibold ">Our Process</p>
          <h1 className="text-2xl lg:text-5xl font-bold max-w-xl">
            From Seed to Export: The Journey of Coffee
          </h1>
          <p className="max-w-xl  text-md lg:text-xl font-semibold">
            Discover the fascinating process that transforms a tiny seed into
            the rich, flavorful coffee in your cup.
          </p>
          <p className="text-gray-500  max-w-xl text-md leading-5">
            The coffee tree, scientifically known as Coffea, is native to
            tropical Africa. This flowering plant produces the coffee cherries
            that contain the beans we know and love. Over centuries, coffee has
            spread worldwide, becoming an essential part of global culture.
          </p>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="font-semibold">- Coffee Species (Arabica & Robusta)</p>
          <p className="font-semibold">There are two primary species of coffee trees:</p>
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-4">
              <FaArrowAltCircleRight size={20} className="text-green-500" />
              <p className="flex gap-4 items-center text-md max-w-xl text-gray-500">
                Arabica: Grown at higher altitudes and known for its sweet,
                complex flavors. It represents about 60% of global coffee
                production.
              </p>
            </div>

            <div className="flex gap-4">
              <FaArrowAltCircleRight size={20} className="text-green-500" />
              <p className="flex gap-4 items-center text-md max-w-xl text-gray-500">
                Robusta: More resilient, grown at lower altitudes, and has a
                stronger, more bitter taste. Robusta beans contain higher
                caffeine content, making them popular in instant coffee and
                certain blends.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* image section */}
      <div className="flex flex-col gap-5">
        <img src={farmer} className="w-[80vh]" data-aos="fade-left"/>
        <img src={coffee} className="w-[80vh]" data-aos="fade-up"/>
      </div>
    </div>
  );
};

export default Journey;
