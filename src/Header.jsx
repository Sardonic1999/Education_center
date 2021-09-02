import React, { Component } from "react";
import "./Style.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        {/* <!-- header section starts  --> */}

        <header>
          <div id="menu" className="fa fa-bars"></div>

          <a href="#" className="logo">
            <i className="fa fa-user-graduate"></i>LOGO
          </a>

          <nav className="navbar">
            <ul>
              <li>
                <a className="active" href="#home">
                  home
                </a>
              </li>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#course">course</a>
              </li>
              <li>
                <a href="#teacher">teacher</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>
          </nav>

          <div id="login" className="fa fa-user-circle"></div>
        </header>

        {/* <!-- header section ends --> */}
      </div>
    );
  }
}
