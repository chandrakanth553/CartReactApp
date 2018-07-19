import React, { Component } from "react";

class Counters extends Component {
  render() {
    return (
      <div>
        <div>
          <button
            onClick={this.props.onReset}
            className="btn btn-outline-secondary btn-small m-2"
          >
            Reset
          </button>
          <button
            onClick={this.props.onAdd}
            className="btn btn-outline-primary btn-small m-2"
          >
            Add Item
          </button>
        </div>
        {this.props.onRender()}
      </div>
    );
  }
}

export default Counters;
