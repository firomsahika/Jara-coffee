import React from "react";

import { CiLocationOn } from "react-icons/ci";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const GetInTouch = () => {
  const contacts = [
    {
      icon: <CiLocationOn size={35}/>,
      title: "Adress",
      content:
        "Gudumale Building, Rooms 101-105, Gerji-Salitemiret Road, Jakros Area, Addis Ababa, Ethiopia",
    },
    {
      icon: <MdOutlineLocalPostOffice size={35}/>,
      title: "P.O.BOX:",
      content: "46686",
    },
    {
      icon: <MdOutlineLocalPostOffice size={35}/>,
      title: "Email:",
      content: "sales@dayebensacoffee.com",
    },
    {
      icon: <IoCallOutline size={35}/>,
      title: "Call Us:",
      content: "+251 116 675552",
    },
  ];
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center monteserrat gap-32 py-10 lg:px-32">
      {/* Get in touch section */}
      <form className="flex flex-col items-center shadow-lg justify-center gap-5 w-full lg:p-10 rounded-2xl max-w-2xl px-4">
        <div className="pb-10 text-center">
          <h1 className="text-3xl text-green-500 font-semibold">
            Get In Touch With Us
          </h1>
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
            Send a message
          </button>
        </div>
      </form>

      {/* Address section */}
      <div className="grid grid-cols-1 md:grid-cos-2 lg:grid-cols-4 gap-10">
        {contacts.map((contact, index) => (
          <div key={index} className="flex flex-col gap-y-2 p-5 shadow-md bg-[#F8F8F8] border-2 border-gray-100"> 
            <p className="text-green-500">{contact.icon}</p>
            <p className="text-xl font-bold">{contact.title}</p>
            <p className="max-w-sm">{contact.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetInTouch;
