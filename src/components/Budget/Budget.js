import React, { Component } from "react";
import "./Budget.css";
import { connect } from "react-redux";

export class Budget extends Component {
  render() {
    const { budget } = this.props;
    const total =
      budget.profit -
      budget.marketExpanse -
      budget.deliveryExpanse -
      budget.farmExpanse;

    return (
      <div className="budget">
        <h2>Бюджет</h2>
        <p>Всего получено денег: {budget.profit}</p>
        <p>Расходы продавцов: {budget.marketExpanse * -1}</p>
        <p>Расходы на ферме: {budget.farmExpanse * -1}</p>
        <p>Расходы на доставку: {budget.deliveryExpanse * -1}</p>
        <p>Итого: {total}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  budget: state.budget
});

export default connect(mapStateToProps)(Budget);
