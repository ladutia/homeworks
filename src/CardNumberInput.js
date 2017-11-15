import React, { Component } from "react";

class CardNumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.format(props.cardNumber)
    };
  }

  format = number => {
    let newNumber = "";

    if (number === "" || number == null) {
      newNumber = "";
    } else {
      newNumber = number.toString().match(/.{1,4}/g);
      newNumber = newNumber.join(" ");
    }

    return newNumber;
  };

  normalize = number => {
    return number.replace(/\s/g, "");
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ number: this.format(nextProps.cardNumber) });
  }

  handleChange = event => {
    const { onChange } = this.props;
    const normalizeNumber = this.normalize(event.target.value);

    onChange(normalizeNumber);
  };

  render() {
    const { number } = this.state;

    return <input value={number} onChange={this.handleChange} />;
  }
}

export default CardNumberInput;
