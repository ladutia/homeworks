import React, { Component } from "react";
import CardNumberInput from "./CardNumberInput";

class CardNumberHolder extends Component {
  static displayName = "Card Number";

  state = {
    cardNumber: ""
  };

  handleChange = number => {
    this.setState({ cardNumber: number });
  };

  render() {
    const { cardNumber } = this.state;

    return (
      <CardNumberInput cardNumber={cardNumber} onChange={this.handleChange} />
    );
  }
}

export default CardNumberHolder;
