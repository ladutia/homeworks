import React, { Component } from "react";
import { authorizeUser, isAuthorized } from "./AuthorizeApi";
import { Redirect } from "react-router-dom";

class Auth extends Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: "",
      attempts: 0,
      isAuthorized
    };
  }

  handleSubmit = event => {
    const { email, password, attempts } = this.state;
    let isAuth = authorizeUser(email, password);

    this.setState({ isAuthorized: isAuth });
    if (!isAuth) this.setState({ attempts: attempts + 1 });
  };

  handleChangeInput = event => {
    const name = event.target.getAttribute("name");
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  render() {
    const { ...state } = this.state;

    return (
      <div>
        {state.isAuthorized ? <Redirect to="/" /> : null}
        <div>
          <input
            name="email"
            placeholder="Email"
            onChange={this.handleChangeInput}
          />
          <input
            name="password"
            placeholder="Password"
            onChange={this.handleChangeInput}
          />
          {state.attempts > 0 ? (
            <p className="error">Неверный пароль и/или почта.</p>
          ) : null}
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default Auth;
