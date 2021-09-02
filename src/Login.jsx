import React, { Component } from "react";
import "./Style.css";

export default class Login extends Component {
  render() {
    return (
      <div>
        <div className="login-form">
          <form action="">
            <h3>login</h3>
            <input type="email" placeholder="username" className="box" />
            <input type="password" placeholder="password" className="box" />
            <p>
              forget password? <a href="#">click here</a>
            </p>
            <p>
              don't have an account? <a href="#">register now</a>
            </p>
            <input type="submit" className="btn" value="login" />
            <i className="fa fa-times"></i>
          </form>
        </div>
      </div>
    );
  }
}
