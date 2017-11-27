import React, { Component } from "react";
import "./App.css";
import Budget from "../Budget";
import Farm from "../Farm";
import Market from "../Market";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Market />
        <Farm />
        <Budget />
      </div>
    );
  }
}
