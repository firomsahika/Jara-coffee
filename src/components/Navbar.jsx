import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { GiCoffeeBeans } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);  // Track scroll state
  const location = useLocation();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const isActive = (path) => {
    return location.pathname === path ? "border-b-2 border-green-500 " : "";
  };

  // Handle scroll event to change navbar style
  const handleScroll = () => {
    if (window.scrollY > 50) {  
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex fixed z-10 shadow-md bg-white items-center  text-green-500 p-4 md:px-10 monteserrat w-full justify-between md:justify-center gap-20 transition-all duration-300 ease-in-out ${
        scrolled
          ? "h-20" 
          : "h-26"
      }`}
    >
      <div className="flex justify-between  text-md lg:gap-60 items-center">
        {/* Left: Logo */}
        <div className="font-bold">
          <GiCoffeeBeans size={50} />
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex">
          <ul className="flex items-center space-x-8  tracking-normal">
            <li>
              <Link to="/" className={isActive("/")}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive("/about")}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/services" className={isActive("/services")}>
                SERVICES
              </Link>
            </li>
            <li>
              <Link to="/gallery" className={isActive("/gallery")}>
                GALLERY
              </Link>
            </li>
            <li>
              <Link to="/contact" className={isActive("/contact")}>
                CONTACT US
              </Link>
            </li>
            <li>
              <Link to="/blog" className={isActive("/blog")}>
                BLOG
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Social Links */}
        <div className="hidden md:flex lg:flex space-x-6 items-center bg-white p-3 shadow-lg rounded-2xl">
          <FaFacebook className="w-6 h-6" />
          <FaInstagram className="w-6 h-6" />
          <FaTwitter className="w-6 h-6" />
          <Link to="/auth/adminLogin">
            <button className="p-2 cursor-pointer text-black font-bold">
              Admin
            </button>
          </Link>
        </div>
      </div>

      {/* mobile menu for navbar */}
      <div className="flex md:hidden lg:hidden items-center">
        <button onClick={handleToggle}>
          {toggle ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
        {toggle && (
          <div
            className={`md:hidden z-10 bg-green-500 text-white items-center justify-center mt-16 absolute
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
                <Link to="/blog" className={isActive("/blog")}>
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
    </div>
  );
};

export default Navbar;
