import React from "react";
import About from "../pages/About";
import Hero from "./Hero";
import Homee from "./Homee";
import Services from "../pages/Services";
import Project from "../pages/Project";

export const Home = () => {
  return (
    <>
      <Hero />
      <Homee />
      <About />
      <Services />
      <Project />
    </>
  );
};

export default Home;
