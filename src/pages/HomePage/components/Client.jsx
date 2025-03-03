import React from "react";
import Slider from "react-slick";


import client1 from "../../../assets/1.webp";
import client2 from "../../../assets/2.webp";
import client3 from "../../../assets/3.webp";
import client4 from "../../../assets/4.webp";
import client5 from "../../../assets/5.webp";
import client6 from "../../../assets/6.webp";



const ClientSection = () => {
   
    const clients= [
        {
            logo: client1,
        },
        {
            logo: client2,
        },
        {
            logo: client3,
        },
        {
            logo: client4,
        },
        {
            logo: client5,
        },
        {
            logo: client6,
        },
    ]

  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="py-20 px-20  bg-gray-50 overflow-x-hidden">
      
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-green-500">OUR CLIENTS</h2>
      </div>

      <div className="container mx-auto px-4 ml-20">
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={client.logo}
                alt={`Client ${index + 1}`}
                className="h-28 object-contain mx-4 shadow-2xl p-3 rounded-2xl"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientSection;
