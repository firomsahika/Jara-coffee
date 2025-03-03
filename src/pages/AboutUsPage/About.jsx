import React from "react";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import History from "./components/History";
import Team from "./components/Team";
import Mission from "./components/Mission";
import Quality from "./components/Quality"

const About = () => {
  return (
  <div className="poppins">
     <Hero />
     <WhoWeAre />
     <History />
     <Team />
     <Mission />
     <Quality />
  </div>
  )
};

export default About;
