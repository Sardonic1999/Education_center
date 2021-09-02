import React, { Component } from "react";
import Header from "./Header";
import Login from "./Login";
import Home from "./Home";
import About from "./About";
import Course from "./Course";
import Teacher from "./Teacher";
import Contact from "./Contact";
import Footer from "./Footer";

export default class Root extends Component {
  render() {
    return (
      <div>
        <Header />
        <Login />
        <Home />
        <About />
        <Course />
        <Teacher />
        <Contact />
        <Footer />
      </div>
    );
  }
}
