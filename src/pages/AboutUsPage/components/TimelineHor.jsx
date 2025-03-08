import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import progress from "../../../assets/timeline.png";


const TimelineVer = () => {
   useEffect(() => {
          AOS.init({
            duration: 1500, // Duration of the animation
            easing: 'ease-in-out', // Easing function
          });
        }, []);
  
  const events = [
    {
      id: 1,
      date: "20-08-2019",
      title: "Birthday",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!",
      icon: progress,
      type: "type1",
    },
    {
      id: 2,
      date: "20-08-2019",
      title: "Lunch",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!",
      icon: progress,
      type: "type2",
    },
    {
      id: 3,
      date: "20-08-2019",
      title: "Exercise",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!",
      icon: progress,
      type: "type1",
    },
    {
      id: 4,
      date: "20-08-2019",
      title: "Birthday",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!",
      icon: progress,
      type: "type2",
    },
  ];

  return (
    <div className="p-4 lg:p-6 cormorant">
      <h2 className="text-4xl text-center text-white font-bold mb-12">Our History</h2>

      {/* Timeline Wrapper */}
      <div className="flex flex-col items-center gap-5 relative">
        {/* Vertical Line */}
        <div className="absolute inset-0 w-1 bg-white  h-full left-1/2 transform -translate-x-1/2"></div>
        
        {events.map((event, index) => (
          <div
          data-aos="fade-up"
            key={event.id}
            className={`flex  border-b-2 border-b-emerald-100 ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            } mb-6 gap-8 md:gap-14 lg:gap-20  relative  lg:w-2/4  transition-all duration-300`}
          >
            {/* Event Icon */}
            <div
              className={`w-16 h-16 bg-${
                event.type === "type1"
                  ? "purple-600"
                  : event.type === "type2"
                  ? "blue-400"
                  : "green-600"
              } text-white  flex items-center justify-center`}
            >
              <div
                className={`text-xl rounded-full p-4 text-nowrap flex items-center justify-center font-semibold text-${
                  event.type === "type1"
                    ? "purple-600"
                    : event.type === "type2"
                    ? "blue-400"
                    : "green-600"
                } `}
              >
                <img src={event.icon} className="w-20" />
              </div>
              <div
              data-aos="fade-left"
                className={`text-xl  lg:text-nowrap flex items-center justify-center font-semibold text-${
                  event.type === "type1"
                    ? "purple-600"
                    : event.type === "type2"
                    ? "blue-400"
                    : "green-600"
                } `}
              >
                {event.date}
              </div>
            </div>

            {/* Event Content */}
            <div
              className={`bg-white  p-4 shadow-2xl rounded-lg w-full ${
                index % 2 === 0 ? "rounded-r-none" : "rounded-l-none"
              }`}
            >
              <div className="flex gap-8 items-center justify-start">
                <div className="flex flex-col">
                  <div className="text-lg font-semibold text-gray-800 uppercase mb-2">
                    {event.title}
                  </div>
                  <div className="text-gray-600 text-sm">{event.description}</div>
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineVer;
