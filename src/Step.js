import React, { PureComponent } from "react";
import "./Step.css";

class Step extends PureComponent {
  handleClick = () => {
    if (this.props.isClickable) this.props.onClick(this.props.number);
  };

  render() {
    let classStep = "step";

    if (this.props.isSelected) classStep += " step-selected";
    if (this.props.isClickable) classStep += " step-clickable";

    return (
      <div className={classStep}>
        <div className="step__number">{this.props.number}</div>
        <div className="step__title">{this.props.children}</div>
      </div>
    );
  }
}

export default Step;
