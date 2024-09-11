import React, { useState} from "react";
import { about } from "../Data/dummydata";
import Heading from "../Heading/Heading";

export const About = () => {

  return (
    <>
      <section className="about" data-aos="zoom-in-down">
        {about.map((val) => (
          <>
            <div className="container">
              {" "}
              <Heading title="About Me" />
              <div className=" data flex">
             
                  <div className="title">
                    <h1>
                      <span>Our</span>
                      {val.title}
                    </h1>
                    <p>{val.desc}</p>
                    <a href="/" className="about-btn">
                      click
                    </a>
                  </div>
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                </div>
              </div>
          
          </>
        ))}
      </section>
    </>
  );
};

export default About;
