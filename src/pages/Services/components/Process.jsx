import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

import washed from "../../../assets/washed.avif";
import natural from "../../../assets/natural.avif";
import honey from "../../../assets/honey.avif";
import anaerobic from "../../../assets/anaerobic.avif";
import washedicon from "../../../assets/w-icon.avif";
import naturalicon from "../../../assets/n-icon.avif";
import honeyicon from "../../../assets/h-icon.avif";
import anaerobicicon from "../../../assets/a-icon.avif";
import { FaCheck } from 'react-icons/fa';
import { GoDotFill } from "react-icons/go";


const Process = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in ms
          once: true, // Animation happens only once
        });
      }, []);
  const processes = [
    {
      img: washed,
      icon: washedicon,
      title: "Washed",
      subtitle: "Micro Lots",
      unique: "unique cup profile",
      scores: "scores 88-90+",
      traceable: "fully traceable",
    },
    {
      img: natural,
      icon: naturalicon,
      title: "Natural",
      subtitle: "Micro Lots",
      unique: "unique cup profile",
      scores: "scores 88-90+",
      traceable: "fully traceable",
    },
    {
      img: honey,
      icon: honeyicon,
      title: "Honey",
      subtitle: "Micro Lots",
      unique: "unique cup profile",
      scores: "scores 88-90+",
      traceable: "fully traceable",
    },
    {
      img: anaerobic,
      icon: anaerobicicon,
      title: "Anaerobic",
      subtitle: "Micro Lots",
      unique: "unique cup profile",
      scores: "scores 88-90+",
      traceable: "fully traceable",
    },
  ];
  return (
    <div className="flex items-center justify-center bg-green-500  px-5 py-20 text-white cormorant">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-14 lg:gap-16">
        {processes.map((process, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 300}`}
            className="flex flex-col items-center rounded-2xl justify-center shadow-xl"
          >
            <img src={process.icon} className="bg-green-500 pb-2 " />
            <h1 className="pb-10">{process.title}</h1>
            <img src={process.img} className="object-cover rounded-2xl" />
            <div className="w-40 lg:w-60 flex flex-col text-sm md:text-md lg:text-md  text-gray-100  p-4 justify-center">
              <h1 className="font-bold text-xl">{process.subtitle}</h1>
              <p className='flex items-center gap-2'><GoDotFill className='text-green-900'/> {process.unique}</p>
              <p className='flex items-center gap-2'><GoDotFill className='text-green-900'/> {process.scores}</p>
              <p className='flex items-center gap-2'><GoDotFill className='text-green-900'/> {process.traceable}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
