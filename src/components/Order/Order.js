import React, { Component } from "react";
import "./Order.css";

export default class Order extends Component {
  render() {
    const props = this.props;
    return (
      <div className="order">
        <div className="order__upper">
          <p className="p--order">Название: {props.name}</p>
          <p className="p--order">Цена: {props.price}</p>
        </div>
        <div className="order__lower">
          <p className="p--order">Создан: {props.createdAt.toTimeString()}</p>
        </div>
      </div>
    );
  }
}
