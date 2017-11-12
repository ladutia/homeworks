import React, { Component } from "react";
import "./App.css";
import Step from "./Step";
import PersonalForm from "./PersonalForm";
import CardForm from "./CardForm";

const stepTitles = ["Personal information", "Card information", "Finish"];

class App extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    isTimeOver: false
  };

  handleTabClick = index => {
    this.setState({ step: index });
  };

  handleChangeForm = (name, value) => {
    this.setState({ [name]: value });
  };

  handleClickNextForm = () => {
    this.setState({ step: this.state.step + 1 });
  };

  handleChangeTimeOver = boolean => {
    this.setState({ isTimeOver: boolean });
  };

  isFormCommitable = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;
    if (step === 1) {
      if (
        firstName !== "" &&
        lastName !== "" &&
        email !== "" &&
        email.includes("@")
      ) {
        return true;
      } else {
        return false;
      }
    } else if (step === 2) {
      if (cardNumber.length === 16) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  renderForm() {
    const { step, firstName, lastName, email, cardNumber } = this.state;
    if (step === 1) {
      return (
        <PersonalForm
          firstName={firstName}
          lastName={lastName}
          email={email}
          onChangeForm={this.handleChangeForm}
        />
      );
    } else if (step === 2) {
      return (
        <CardForm
          cardNumber={cardNumber}
          onChangeForm={this.handleChangeForm}
          onChangeTimeOver={this.handleChangeTimeOver}
        />
      );
    } else {
      return "Поздравляем!";
    }
  }

  render() {
    const { step } = this.state;
    let list = [];

    if (step === 1) {
      list = [
        <Step
          key={stepTitles[0]}
          onClick={this.handleTabClick}
          isSelected={true}
          number={1}
          isClickable={false}
        >
          {stepTitles[0]}
        </Step>,
        <Step
          key={stepTitles[1]}
          onClick={this.handleTabClick}
          isSelected={false}
          number={2}
          isClickable={false}
        >
          {stepTitles[1]}
        </Step>,
        <Step
          key={stepTitles[2]}
          onClick={this.handleTabClick}
          isSelected={false}
          number={3}
          isClickable={false}
        >
          {stepTitles[2]}
        </Step>
      ];
    } else if (step === 2) {
      list = [
        <Step
          key={stepTitles[0]}
          onClick={this.handleTabClick}
          isSelected={false}
          number={1}
          isClickable={true}
        >
          {stepTitles[0]}
        </Step>,
        <Step
          key={stepTitles[1]}
          onClick={this.handleTabClick}
          isSelected={true}
          number={2}
          isClickable={false}
        >
          {stepTitles[1]}
        </Step>,
        <Step
          key={stepTitles[2]}
          onClick={this.handleTabClick}
          isSelected={false}
          number={3}
          isClickable={false}
        >
          {stepTitles[2]}
        </Step>
      ];
    } else {
      list = [
        <Step
          key={stepTitles[0]}
          onClick={this.handleTabClick}
          isSelected={false}
          number={1}
          isClickable={true}
        >
          {stepTitles[0]}
        </Step>,
        <Step
          key={stepTitles[1]}
          onClick={this.handleTabClick}
          isSelected={false}
          number={2}
          isClickable={true}
        >
          {stepTitles[1]}
        </Step>,
        <Step
          key={stepTitles[2]}
          onClick={this.handleTabClick}
          isSelected={true}
          number={3}
          isClickable={false}
        >
          {stepTitles[2]}
        </Step>
      ];
    }

    return (
      <div className="container">
        <div className="tab-panel">{list}</div>
        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
          <button
            className=" button-next"
            disabled={
              !this.isFormCommitable() || !this.state.isTimeOver
                ? "disabled"
                : null
            }
            onClick={this.handleClickNextForm}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
