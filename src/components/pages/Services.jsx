import React from "react";
import { servicees } from "../Data/dummydata";
import Heading from "../Heading/Heading";
const Services = () => {
  return (
    <>
      <article>
        <section className="service">
          {servicees.map((val) => (
            <div className="container ">
              <span>
                {" "}
                <Heading title="Services" />
              </span>
              <div className="contentServices flex ser services-data ">
                <div className="left">
                  <h1>
                    <span>SERVICE</span>
                  </h1>
                  <p>
                    • Designing various special projects <br />• Providing
                    innovative solutions for clients. <br />• Delivering a vast
                    of high-end quality products. <br />• Providing professional
                    follow-up br
                    <br />• Controlling precisions in structure installment.{" "}
                    <br />• Provide consultancy based onexperience .
                  </p>
                </div>

                <div className="right">
                  <h1>
                    <span>Quality</span>
                    {val.title2}
                  </h1>
                  <p>{val.desc2}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </article>
    </>
  );
};

export default Services;
