import React, { Component } from "react";

class Counter extends Component {
  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  };

  handleCssClass = () => {
    let classes = "m-2 badge badge-";
    const { value } = this.props.counter;
    classes += value === 0 ? "warning" : "primary";
    return classes;
  };

  render() {
    return (
      <div>
        <span className={this.handleCssClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-small m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-info btn-small m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn btn-danger btn-small m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
