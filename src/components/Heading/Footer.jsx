import React from "react";
import { social } from "../Data/dummydata";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          {social.map((val) => (
            <>
              <i> {val.icon}</i>
            </>
          ))}
          <p>Copy right ahmadramadan</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
