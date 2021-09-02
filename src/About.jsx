import React, { Component } from "react";
import study from "./images/study.png";
import "./Style.css";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <!-- about section starts  --> */}

        <section className="about" id="about">
          <div className="image">
            <img src={study} alt="" />
          </div>

          <div className="content">
            <h3>why choose us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              aperiam quaerat dolor voluptas nobis voluptates illum? Inventore
              voluptas dolore voluptates.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              delectus ducimus dignissimos pariatur. Amet sed distinctio earum
              dolorum nulla, in obcaecati aliquid modi quos magni ducimus culpa
              nobis laudantium incidunt.
            </p>
            <a href="#">
              <button className="btn">learn more</button>
            </a>
          </div>
        </section>
      </div>
    );
  }
}
