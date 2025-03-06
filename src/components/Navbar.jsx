import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const isActive = (path) => {
    return location.pathname === path ? "border-b-3 border-black " : "";
  };

  return (
    <div
      className="flex fixed z-10 shadow-2xl  bg-white opacity-96 items-center text-green-500 p-5 md:px-10 poppins h-20vh 
     w-full  justify-between md:justify-center gap-20"
    >
      <div className="font-bold">Logo</div>
      <div className="hidden md:hidden lg:block">
        <ul className="flex items-center lg:space-x-20 md:space-x-8 font-semibold tracking-normal">
          <li>
            <Link to="/" className={isActive("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className={isActive("/services")}>
              Services
            </Link>
          </li>

          <li>
            <Link to="/gallery" className={isActive("/gallery")}>
              Gallery
            </Link>
          </li>
          <li className="flex space-x-10 items-center">
            <Link to="/contact" className={isActive("/contact")}>
              Contact Us
            </Link>
            <Link
              to="/blog"
              className={isActive("/blog")}
            >
              Blog
            </Link>
            <li className="flex space-x-8">
              <FaFacebook className="w-6 h-6" />
              <FaInstagram className="w-6 h-6" />
              <FaTwitter className="w-6 h-6" />
            </li>
          </li>
        </ul>
      </div>

      {/* mobile menu for navbar */}

      <div className="md:hidden flex items-center">
        <button onClick={handleToggle}>
          {toggle ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
        {toggle && (
          <div
            className={`md:hidden z-10 bg-green-500 text-white  items-center justify-center mt-16 absolute
             top-0 right-0 w-2/4 xls:h-[96vh] h-[50vh] transition-all duration-1000 ease-initial ${
               toggle ? "translate-x-0" : "translate-x-full"
             }`}
          >
            <ul className="space-y-4 text-md flex flex-col text-center items-center justify-center pt-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/">Gallery</Link>
              </li>

              <li className="flex flex-col md:flex items-center justify-center text-center">
                <Link to="/contact" className={isActive("/contact")}>
                  Contact Us
                </Link>
                <Link
                  to="/blog"
                  className={isActive("/blog")}
                >
                  Blog
                </Link>
                <li className="flex space-x-8 py-2">
                  <FaFacebook className="w-6 h-6" />
                  <FaInstagram className="w-6 h-6" />
                  <FaTwitter className="w-6 h-6" />
                </li>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Tablet size  */}

      <div className="w-full hidden lg:hidden md:flex md:items-center md:justify-between ">
        
        <ul>
          <li className="flex space-x-8 py-2">
            <FaFacebook className="w-6 h-6" />
            <FaInstagram className="w-6 h-6" />
            <FaTwitter className="w-6 h-6" />
          </li>
        </ul>

        <div className=" lg:hidden md:block flex items-center">
          <button onClick={handleToggle}>
            {toggle ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
          {toggle && (
            <div
              className={`hidden lg:hidden md:block bg-primary text-white  items-center justify-center mt-20 absolute
             top-0 right-0 w-2/4 h-90 transition-all duration-1000 ease-initial ${
               toggle ? "translate-x-0" : "translate-x-full"
             }`}
            >
              <ul className="space-y-5 text-xl flex flex-col text-center items-center justify-center pt-5">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/">Services</Link>
                </li>
                <li>
                  <Link to="/">Gallery</Link>
                </li>

                <li className="flex flex-col md:flex items-center justify-center text-center">
                  <Link to="/contact" className={isActive("/contact")}>
                    Contact Us
                  </Link>
                  <Link
                  to="/blog"
                  className={isActive("/blog")}
                >
                  Blog
                </Link>
                 
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
