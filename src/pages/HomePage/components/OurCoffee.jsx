import React from "react";

import ourcoffee from "../../../assets/OurCoffee.webp";

const OurCoffee = () => {
  return (
    <div className="flex flex-col items-center justify-center px-10  lg:px-32 cormorant py-8 md:py-5 lg:py-0">
      <div className="lg:pt-20 pt-6">
        <h1 className="font-bold text-3xl lg:text-4xl text-green-500">
          OUR COFFEES
        </h1>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row pt-4 lg:pt-0  items-center justify-center">
        <div className="flex flex-col gap-6 items-center lg:items-start justify-center">
          <h1 className="text-2xl lg:text-4xl font-semibold text-center">
            Check Original Ethiopian Coffee Beans
          </h1>
          <p>Explore our collection of well-crafted coffee products.</p>
          <p className="lg:max-w-xl text-gray-600 ">
            View our current range of exceptionally high-quality coffee beans.
            We only supply coffee that has a world-class quality rating that
            will produce the best cups of coffee in the world. Have a look at
            our lists and send us your enquiry to request quotes and hear about
            special offers that are not listed here.
          </p>
          <button className="flex items-center justify-center px-4 py-3 bg-green-500 w-32 text-md text-white">
            Explore
          </button>
        </div>

        <div>
          <img src={ourcoffee} className="lg:w-[70vh]" />
        </div>
      </div>
    </div>
  );
};

export default OurCoffee;
