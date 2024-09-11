import React from "react";
import { homees } from "../Data/dummydata";
import Heading from "../Heading/Heading";

export const Homee = () => {
  return (
    <section className="homme">
      {homees.map((val) => (
        <div className="container">
          <div className="text-homees">
            <h2>
              <span>"Fields</span>
              {val.title}
            </h2>
            <p>{val.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Homee;
