import React, { Component } from "react";
import "./Switcher.css";

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  handleChangeChild = event => {
    this.setState({
      selectedChild: parseInt(event.target.getAttribute("data-id"), 10)
    });
  };

  renderChild() {
    const { selectedChild } = this.state;
    const { children } = this.props;

    return React.Children.map(children, (child, index) => {
      if (index === selectedChild) return child;
    });
  }

  renderListChildren() {
    const { children } = this.props;
    const listChilds = React.Children.toArray(children);
    let list, name;

    list = listChilds.map((child, index) => {
      name = child.type.displayName || child.type.name;
      return (
        <li
          className="component-list__name"
          data-id={index}
          onClick={this.handleChangeChild}
          key={name}
        >
          {name}
        </li>
      );
    });

    return list;
  }

  render() {
    return (
      <div>
        <ul className="component-list">{this.renderListChildren()}</ul>
        <hr />
        <div className="component-wrapper">{this.renderChild()}</div>
      </div>
    );
  }
}

export default Switcher;
