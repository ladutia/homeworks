import React, { Component } from "react";
import "./Market.css";
import { connect } from "react-redux";
import { createOrder } from "../../actions/marketActions";
import Order from "../Order";

let id = 0;
const getId = () => {
  id += 1;
  return id;
};
export const vegetables = [
  "Капуста",
  "Редиска",
  "Огурцы",
  "Морковь",
  "Горох",
  "Баклажан",
  "Тыква",
  "Чеснок",
  "Лук",
  "Перец",
  "Картофель",
  "Редька"
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date()
  };
};

export class Market extends Component {
  handleCreateOrder = () => this.props.createOrder(getNewOrder());

  render() {
    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button
          className="new-orders__create-button"
          onClick={this.handleCreateOrder}
        >
          Создать заказ
        </button>
        <button disabled>Отправить заказ на ферму</button>
        <div className="order-list">
          {this.props.orders.map(order => {
            return (
              <Order
                key={order.id}
                id={order.id}
                name={order.name}
                price={order.price}
                createdAt={order.createdAt}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.market.orders
});

const mapDispatchToProps = {
  createOrder
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
