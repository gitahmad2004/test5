import React, { useState } from "react";

import { navlink } from "../Data/dummydata";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";

const Header = () => {
  const [responsive, setresponsive] = useState(false);
  return (
    <header>
      <div className="container flexsb">
        <div className="logo">
          <h2 className="logo">
            <span>M</span>
            AGIC <span>G</span>LASS
          </h2>
        </div>
        <div className={responsive ? "hideMenu" : "nav"}>
          {navlink.map((links, i) => (
            <Link to={links.url} key={i}>
              {" "}
              {links.text}{" "}
            </Link>
          ))}
        </div>
        <button className="toggle" onClick={() => setresponsive(!responsive)}>
          {" "}
          <Menu className="icons" />
        </button>
      </div>
    </header>
  );
};

export default Header;
