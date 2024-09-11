import React from "react";
// import Heading from '../Heading/Heading'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { project, project2, project3, project4 } from "../Data/dummydata";

export const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <article>
        <div id="project" className=" project">
          <div className="container">
            <div className="text">
              <h2>
                <span>Projects</span> Accomplished
              </h2>
            </div>

            <Slider {...settings}>
              {project.map((value) => {
                return (
                  <>
                    <div className="box">
                      <div className="images">
                        <img src={value.cover6} alt="" />
                      </div>
                    </div>
                    <div className="texts">
                      <h2>beirut history</h2>
                    </div>
                  </>
                );
              })}
            </Slider>
            <div className="project4">
              <div className="text">
                <h2>
                  <span>ALUMINUM</span>COMPOSITE PANEL
                </h2>
              </div>
                  <div className="container">
                <div className="grid">
                  {project4.map((val) => (
                      <div className="box">
                        <div className="images">
                          <img src={val.cover} alt="" />
                        </div>
                      </div>
                  ))}
                </div>
                  </div>
            </div>
            <div className="project2">
              <div className="text">
                <h2>
                  <span>Glazing</span>and Glass Work
                </h2>
              </div>
              <Slider {...settings}>
                {project2.map((val) => {
                  return (
                    <div className="images">
                      <img src={val.cover} alt="" />
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="project3">
              <div className="text">
                <h2>
                  <span>OFFICE</span>PARTITION
                </h2>
              </div>
              <div className="container">
                <div className="grid">
                  {project3.map((val) => (
                    <div className="box">
                      <div className="images">
                        <img src={val.cover} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Project;
