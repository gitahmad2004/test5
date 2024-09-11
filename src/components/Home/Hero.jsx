import React from "react";
import { hero } from "../Data/dummydata";

export const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="heroCOntainer">
          {hero.map((val) => (
            <div className="container">
              <div className="text">
                <h2>
                  <span>We</span>
                  {val.desc}
                </h2>
                <a href="#project" className="btn-hero">
                  {" "}
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
