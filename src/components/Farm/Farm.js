import React, { Component } from "react";
import "./Farm.css";
import { connect } from "react-redux";
import { moveOrderToCustomer } from "../../actions/farmActions";
import Order from "../Order";

export class Farm extends Component {
  handleMoveOrderToCusomer = () => {
    this.props.moveOrderToCustomer(Object.assign([], this.props.orders)[0]);
  };

  render() {
    const orders = Object.assign([], this.props.orders).reverse();

    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button
          disabled={orders.length ? false : true}
          onClick={this.handleMoveOrderToCusomer}
        >
          Отправить урожай клиенту
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
  orders: state.farm.orders
});

const mapDispatchToProps = {
  moveOrderToCustomer
};

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
