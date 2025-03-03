import React from 'react'
import Slider from 'react-slick'
import a from "../../../assets/a.avif"
import b from "../../../assets/b.avif"
import c from "../../../assets/ca.avif"
import d from "../../../assets/d.avif"
import f from "../../../assets/fb.avif"
import e from "../../../assets/e.avif"
import g from "../../../assets/g.avif"

const Team = () => {
  const teams = [
    {
      img: a,
      name: "Firomsa Hika",
      profession: "Head of Coffee",
    },
    {
      img: b,
      name: "Firomsa Hika",
      profession: "Head of Coffee",
    },
    {
      img: c,
      name: "Firomsa Hika",
      profession: "Head of Coffee",
    },
    {
      img: d,
      name: "Firomsa Hika",
      profession: "Head of Coffee",
    },
    {
      img: e,
      name: "Firomsa Hika",
      profession: "Head of Coffee",
    },
    {
      img: f,
      name: "Firomsa Hika",
      profession: "Head of Coffee",
    },
    {
      img: g,
      name: "Firomsa Hika",
      profession: "Head of Coffee",
    },
  ];

  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-20 px-20 overflow-x-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-green-500">OUR TEAM</h2>
      </div>

      <div className="container px-4">
        <Slider {...settings}>
          {teams.map((team, index) => (
            <div key={index} className="flex flex-col justify-center items-center bg-white p-6 rounded-lg ">
              <img
                src={team.img}
                alt={`Team Member ${index + 1}`}
                className="w-60 h-60 object-cover mx-auto p-2 rounded-full mb-4"
              />
              <div className="text-center">
                <h1 className="text-xl font-semibold text-gray-800">{team.name}</h1>
                <p className="text-sm text-gray-600">{team.profession}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
