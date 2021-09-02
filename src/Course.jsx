import React, { Component } from "react";
import c1 from "./images/course1.jpg";
import c2 from "./images/course2.jpg";
import c3 from "./images/course3.jpg";
import c4 from "./images/course4.jpg";
import c5 from "./images/course5.jpg";
import c6 from "./images/course6.jpg";
import "./Style.css";

export default class Course extends Component {
  render() {
    return (
      <div>
        {/* <!-- course section starts  --> */}

        <section className="course" id="course">
          <h1 className="heading">our popular courses</h1>

          <div className="box-container">
            <div className="box">
              <img src={c1} alt="" />
              <h3 className="price">$50</h3>
              <div className="content">
                <div className="stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half"></i>
                </div>
                <a href="#" className="title">
                  learn front end development
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, beatae. Modi quos excepturi id quibusdam? Molestiae
                  quis nihil non debitis!
                </p>
                <div className="info">
                  <h3>
                    {" "}
                    <i className="fa fa-clock"></i> 2 hours{" "}
                  </h3>
                  <h3>
                    {" "}
                    <i className="fa fa-calendar-alt"></i> 6 months{" "}
                  </h3>
                  <h3>
                    {" "}
                    <i className="fa fa-book"></i> 12 modules{" "}
                  </h3>
                </div>
              </div>
            </div>

            <div className="box">
              <img src={c2} alt="" />
              <h3 className="price">$50</h3>
              <div className="content">
                <div className="stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half"></i>
                </div>
                <a href="#" className="title">
                  learn front end development
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, beatae. Modi quos excepturi id quibusdam? Molestiae
                  quis nihil non debitis!
                </p>
                <div className="info">
                  <h3>
                    {" "}
                    <i className="fa fa-clock"></i> 2 hours{" "}
                  </h3>
                  <h3>
                    {" "}
                    <i className="fa fa-calendar-alt"></i> 6 months{" "}
                  </h3>
                  <h3>
                    {" "}
                    <i className="fa fa-book"></i> 12 modules{" "}
                  </h3>
                </div>
              </div>
            </div>

            <div className="box">
              <img src={c3} alt="" />
              <h3 className="price">$50</h3>
              <div className="content">
                <div className="stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half"></i>
                </div>
                <a href="#" className="title">
                  learn front end development
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, beatae. Modi quos excepturi id quibusdam? Molestiae
                  quis nihil non debitis!
                </p>
                <div className="info">
                  <h3>
                    {" "}
                    <i className="fa fa-clock"></i> 2 hours{" "}
                  </h3>
                  <h3>
                    {" "}
                    <i className="fa fa-calendar-alt"></i> 6 months{" "}
                  </h3>
                  <h3>
                    {" "}
                    <i className="fa fa-book"></i> 12 modules{" "}
                  </h3>
                </div>
              </div>
            </div>

            <div className="box">
              <img src={c4} alt="" />
              <h3 className="price">$50</h3>
              <div className="content">
                <div className="stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half"></i>
                </div>
                <a href="#" className="title">
                  learn front end development
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, beatae. Modi quos excepturi id quibusdam? Molestiae
                  quis nihil non debitis!
                </p>
                <div className="info">
                  <h3>
                    {" "}
                    <i className="fa fa-clock"></i> 2 hours{" "}
                  </h3>
                  <h3>
                    {" "}
                    <i className="fa fa-calendar-alt"></i> 6 months{" "}
                  </h3>
                  <h3>
                    {" "}
                    <i className="fa fa-book"></i> 12 modules{" "}
                  </h3>
                </div>
              </div>
            </div>

            <div className="box">
              <img src={c5} alt="" />
              <h3 className="price">$50</h3>
              <div className="content">
                <div className="stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half"></i>
                </div>
                <a href="#" className="title">
                  learn front end development
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, beatae. Modi quos excepturi id quibusdam? Molestiae
                  quis nihil non debitis!
                </p>
                <div className="info">
                  <h3>
                    {" "}
                    <i className="fa fa-clock"></i> 2 hours{" "}
                  </h3>
                  <h3>
                    {" "}
                    <i className="fa fa-calendar-alt"></i> 6 months{" "}
                  </h3>
                  <h3>
                    {" "}
                    <i className="fa fa-book"></i> 12 modules{" "}
                  </h3>
                </div>
              </div>
            </div>

            <div className="box">
              <img src={c6} alt="" />
              <h3 className="price">$50</h3>
              <div className="content">
                <div className="stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half"></i>
                </div>
                <a href="#" className="title">
                  learn front end development
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, beatae. Modi quos excepturi id quibusdam? Molestiae
                  quis nihil non debitis!
                </p>
                <div className="info">
                  <h3>
                    {" "}
                    <i className="fa fa-clock"></i> 2 hours{" "}
                  </h3>
                  <h3>
                    {" "}
                    <i className="fa fa-calendar-alt"></i> 6 months{" "}
                  </h3>
                  <h3>
                    {" "}
                    <i className="fa fa-book"></i> 12 modules{" "}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
