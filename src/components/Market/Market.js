import React, { Component } from "react";
import "./Market.css";
import { connect } from "react-redux";
import { createOrder, moveOrderToFarm } from "../../actions/marketActions";
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
  handleMoveOrderToFarm = () => {
    this.props.moveOrderToFarm(Object.assign([], this.props.orders)[0]);
  };

  render() {
    const orders = Object.assign([], this.props.orders).reverse();

    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button
          className="new-orders__create-button"
          onClick={this.handleCreateOrder}
        >
          Создать заказ
        </button>
        <button
          disabled={orders.length ? false : true}
          onClick={this.handleMoveOrderToFarm}
        >
          Отправить заказ на ферму {}
        </button>
        <div className="order-list">
          {orders.map(order => {
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
  createOrder,
  moveOrderToFarm
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
