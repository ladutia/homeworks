import React, { Component } from "react";
import Title from "./Title";
import "./PersonalForm.css";

export class PersonalForm extends Component {
  handleChangeForm = event => {
    const { onChangeForm } = this.props;
    let name = event.target.name,
      value = event.target.value;

    onChangeForm(name, value);
  };

  render() {
    return (
      <div>
        <Title>Персональная информация</Title>
        <div className="personal-form">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={this.handleChangeForm}
          />
          <input
            name="lastName"
            placeholder="Last Name"
            type="text"
            onChange={this.handleChangeForm}
          />
          <input
            name="email"
            type="text"
            placeholder="Email"
            onChange={this.handleChangeForm}
          />
        </div>
      </div>
    );
  }
}

export default PersonalForm;
