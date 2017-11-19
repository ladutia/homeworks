import React, { Component } from "react";
import "./App.css";
import { addListener, removeListener, isAuthorized } from "./AuthorizeApi";
import { Link, Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home";
import Public from "./Public";
import Private from "./Private";
import Auth from "./Auth";

class App extends Component {
  state = {
    isAuthorized
  };

  componentDidMount() {
    addListener(this.handleAuthorize);
  }

  componentWillUnmount() {
    removeListener(this.handleAuthorize);
  }

  handleAuthorize = isAuthorized => {
    this.setState({ isAuthorized });
  };

  render() {
    const { ...state } = this.state;

    return (
      <div>
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/private">Private</Link>
          </div>
          <div>
            <Link to="/public">Public</Link>
          </div>
          <div>
            <Link to="/auth">Auth</Link>
          </div>
        </nav>
        <hr />
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            {state.isAuthorized ? (
              <Route path="/private" component={Private} />
            ) : (
              <Redirect from="/private" to="/auth" />
            )}
            <Route path="/public" component={Public} />
            <Route path="/auth" component={Auth} />
            {!state.isAuthorized ? <Redirect from="*" to="/" /> : null}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
