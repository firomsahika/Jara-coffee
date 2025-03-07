import React from "react";
import VerTimeline from "../../../components/VerTimeline";
import farm2 from "../../../assets/farm2.avif";
import coffee from "../../../assets/cofee.avif";

const History = () => {
  return (
    <div className="min-h-screen lg:min-h-screen md:min-h-screen lg:px-20 flex flex-col  w-full bg-green-500 items-center justify-center  cormorant">
      <div className="min-h-screen lg:max-h-screen md:min-h-screen flex flex-col md:flex-col lg:flex-row w-full items-center justify-center lg:gap-40 md:gap-0">
        <div className="w-1/2 mr-32 md:mr-60 lg:mr-0">
          <VerTimeline />
        </div>
        <div className="w-1/2  flex gap-10 mr-32 md:mr-40 lg:mr-0">
          <img src={farm2} />
          <img src={coffee} className="w-60  object-cover" />
        </div>
      </div>
    </div>
  );
};

export default History;
