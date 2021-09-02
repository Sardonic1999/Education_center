import React, { Component } from "react";
import "./Style.css";

export default class Teacher extends Component {
  render() {
    return (
      <div>
        {/* <!-- teacher section starts  --> */}

        <section className="teacher" id="teacher">
          <h1 className="heading">our expert teachers</h1>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At non
            explicabo tempora modi, reprehenderit ratione sunt ea porro tenetur
            officiis alias sapiente praesentium voluptas cumque quo maiores
            dolores totam ex.
          </p>

          <a href="#">
            <button className="btn">learn more</button>
          </a>
        </section>
      </div>
    );
  }
}
