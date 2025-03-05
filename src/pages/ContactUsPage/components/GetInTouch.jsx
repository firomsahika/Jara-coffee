import React from "react";

const GetInTouch = () => {
  return (
    <div className="h-screen flex items-center justify-center monteserrat gap-32">
      {/* Get in touch section */}
      <form className="flex flex-col items-center justify-center gap-5 w-full max-w-2xl px-4">
        <div className="pb-10 text-center">
          <h1 className="text-3xl text-green-500 font-semibold">Get In Touch With Us</h1>
        </div>

        {/* First Name and Last Name Inputs */}
        <div className="flex gap-5 w-full">
          <div className="flex flex-col gap-2 w-full sm:w-1/2">
            <label className="font-semibold">First Name</label>
            <input
              type="text"
              placeholder="e.g. John"
              className="p-4 bg-gray-100 w-full placeholder:text-gray-400 placeholder:text-sm rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2 w-full sm:w-1/2">
            <label className="font-semibold">Last Name</label>
            <input
              type="text"
              placeholder="e.g. Smith"
              className="p-4 bg-gray-100 w-full placeholder:text-gray-400 placeholder:text-sm rounded-md"
            />
          </div>
        </div>

        {/* Email and Phone Inputs */}
        <div className="flex gap-5 w-full">
          <div className="flex flex-col gap-2 w-full sm:w-1/2">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              placeholder="e.g. john@example.com"
              className="p-4 bg-gray-100 w-full placeholder:text-gray-400 placeholder:text-sm rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2 w-full sm:w-1/2">
            <label className="font-semibold">Phone</label>
            <input
              type="tel"
              placeholder="e.g. +123-456-789"
              className="p-4 bg-gray-100 w-full placeholder:text-gray-400 placeholder:text-sm rounded-md"
            />
          </div>
        </div>

        {/* Message Input */}
        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold">Message</label>
          <textarea
            placeholder="Your message"
            className="p-4 bg-gray-100 w-full placeholder:text-gray-400 placeholder:text-sm rounded-md"
            rows="5"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="w-full">
          <button
            type="submit"
            className="w-full py-4 bg-green-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Address section */}
      <div className="content monteserrat flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-bold text-2xl">Address:</h1>
            <p className="">Gudumale Building, Rooms 101-105,<br></br>Gerji-Salitemiret Road, Jakros Area,<br></br>Addis Ababa, Ethiopia</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-semibold text-xl">P.O.BOX:</h1>
            <p>46686</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-semibold text-xl">Email:</h1>
            <p>sales@dayebensacoffee.com</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-semibold text-xl">Phone:</h1>
            <p>+251 116 675552</p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
