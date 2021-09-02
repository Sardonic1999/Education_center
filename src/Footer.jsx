import React, { Component } from "react";
import "./Style.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        {/* <!-- footer section starts  --> */}

        <div className="footer">
          <div className="box-container">
            <div className="box">
              <h3>branch locations</h3>
              <a href="#">India</a>
              <a href="#">USA</a>
              <a href="#">france</a>
              <a href="#">russia</a>
            </div>

            <div className="box">
              <h3>quick links</h3>
              <a href="#">home</a>
              <a href="#">about</a>
              <a href="#">course</a>
              <a href="#">teachers</a>
              <a href="#">contact</a>
            </div>

            <div className="box">
              <h3>contact info</h3>
              <p>
                {" "}
                <i className="fa fa-map-marker-alt"></i> tashkent uzbek{" "}
              </p>
              <p>
                {" "}
                <i className="fa fa-envelope"></i> example@gmail.com{" "}
              </p>
              <p>
                {" "}
                <i className="fa fa-phone"></i> +9989077777{" "}
              </p>
            </div>
          </div>

          <h1 className="credit">
            created by <a href="#">Sardonic</a> all rights reserved.{" "}
          </h1>
        </div>
      </div>
    );
  }
}
