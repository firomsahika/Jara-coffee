import React, { useEffect } from "react";
import Card from "./Card";

import AOS from "aos";
import "aos/dist/aos.css";

const VerTimeline = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: "ease-in-out", // Easing function
    });
  }, []);

  return (
    <section class="flex flex-col md:flex-row lg:flex-row min-h-screen justify-center bg-green-500 text-white pt-14   ">
      <div class="flex w-20 md:w-50 lg:w-80 ">
        <ul >
          <li
            class="relative flex items-baseline gap-14 md:gap-20 lg:gap-20 pb-5"
            data-aos="fade-up"
          >
            <div class="before:absolute  before:left-[4px] before:h-full before:w-[2px] before:bg-white">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                class="bi bi-circle-fill fill-white"
                viewBox="0 0 20 20"
              >
              
                <circle cx="10" cy="10" r="10" />
              </svg> */}
              <span className="absolute  shadow-xl flex items-center justify-center font-bold text-xl left-[-24px] h-16 w-16 rounded-full bg-white text-green-500 p-5">
                2022
              </span>
            </div>

            <div className="">
              <Card
                title="Founding"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores incidunt blanditiis dignissimos, enim earum mollitia."
              />
            </div>
          </li>
          <li
            class="relative flex items-baseline gap-14 md:gap-40 lg:gap-40 pb-5 "
            data-aos="fade-up"
          >
            <div class="before:absolute before:left-[4px] before:h-full before:w-[2px] before:bg-white">
            
              <span className="absolute shadow-xl flex items-center justify-center font-bold text-xl left-[-24px] h-16 w-16 rounded-full bg-white text-green-500 p-5">
                2023
              </span>
            </div>
            <div className="">
              <Card
                title="Expand Operations"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores incidunt blanditiis dignissimos, enim earum mollitia."
              />
            </div>
          </li>
          <li
            class="relative flex items-baseline gap-14 md:gap-20 lg:gap-20 pb-5"
            data-aos="fade-up"
          >
            <div class="before:absolute before:left-[8px] before:h-full before:w-[2px] before:bg-white">
              
              <span className="absolute shadow-xl flex items-center justify-center font-bold text-xl left-[-24px] h-16 w-16 rounded-full bg-white text-green-500 p-5">
                2024
              </span>
            </div>
            <div>
              <Card
                title="Global Reach"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores incidunt blanditiis dignissimos, enim earum mollitia."
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default VerTimeline;
