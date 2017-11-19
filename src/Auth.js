import React, { Component } from "react";
import { isAuthorized, authorizeUser } from "./AuthorizeApi";
import { Redirect } from "react-router-dom";

class Auth extends Component {
  state = {
    email: "",
    password: "",
    isErrorAuth: false,
    isAuthorized: isAuthorized
  };

  handleSubmit = event => {
    const { email, password } = this.state;
    let isAuth = authorizeUser(email, password);

    this.setState({ isAuthorized: isAuth });
    if (!isAuth) this.setState({ isErrorAuth: true });
  };

  handleChangeInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { ...state } = this.state;

    return (
      <div>
        {state.isAuthorized && <Redirect to="/" />}
        <div>
          <input
            type="text"
            name="email"
            value={state.email}
            placeholder="Email"
            onChange={this.handleChangeInput}
          />
          <input
            type="text"
            value={state.password}
            name="password"
            placeholder="Password"
            onChange={this.handleChangeInput}
          />
          {state.isErrorAuth && (
            <p className="error">Неверный пароль и/или почта.</p>
          )}
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default Auth;
