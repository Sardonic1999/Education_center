import React, { Component } from "react";
import contact from "./images/contact-img.png";
import "./Style.css";

export default class Contact extends Component {
  render() {
    return (
      <div>
        {/* <!-- contact section starts  --> */}

        <section className="contact" id="contact">
          <h1 className="heading">contact us</h1>

          <div className="row">
            <form action="">
              <input type="text" placeholder="full name" className="box" />
              <input type="email" placeholder="your email" className="box" />
              <input
                type="password"
                placeholder="your password"
                className="box"
              />
              <input type="number" placeholder="your number" className="box" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="box address"
                placeholder="your address"
              ></textarea>
              <input type="submit" className="btn" value="send now" />
            </form>

            <div className="image">
              <img src={contact} alt="" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
