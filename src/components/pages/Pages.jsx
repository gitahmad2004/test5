import React from "react";
import "../../App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../Heading/Header";

import { Footer } from "./../Heading/Footer";

import About from "./About";
import Home from "../Home/Home";
import Project from "./Project";

export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Project" component={Project} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
