import React, { Component } from "react";
import "./Style.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* !-- home section starts --> */}
        <section className="home" id="home">
          <h1>education from home</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
            neque aliquid similique error velit placeat vitae accusantium est
            nam magnam?
          </p>
          <a href="#">
            <button className="btn">get started</button>
          </a>

          <div className="shape"></div>
        </section>
      </div>
    );
  }
}
