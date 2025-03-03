import React from "react";
import Hero from "./components/Hero";
import AboutShort from "./components/AboutShort";
import History from "./components/History";
import OurCoffee from "./components/OurCoffee";
import Client from "./components/Client";
import Testimonials from "./components/Testimonials";


const Home = () => {
  return (
    <div >
      <Hero />
      <AboutShort />
      <History />
      <OurCoffee />
      <Client />
      <Testimonials />
    </div>
  );
};

export default Home;
