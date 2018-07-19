import React, { Component } from "react";
import Counter from "./counter";
import Counters from "./counters";
import Nav from "./nav";

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncreament = counter => {
    let index = this.state.counters.findIndex(x => x.id === counter.id);
    let counters = this.state.counters;
    counters[index].value = counters[index].value + 1;
    this.setState({ counters });
  };

  hanldeDelete = counter => {
    let counters = this.state.counters.filter(x => x.id !== counter.id);
    this.setState({ counters });
  };

  handleCounter = () => {
    let counter = 0;
    let counters = this.state.counters;
    counters.forEach(element => {
      counter += element.value;
    });
    return counter;
  };

  handleReset = () => {
    var counters = this.state.counters.map(x => {
      x.value = 0;
      return x;
    });
    this.setState({ counters });
  };

  addItem = () => {
    let { counters } = this.state;
    let idsArray = counters.map(x => +x.id);
    let maxId = idsArray[idsArray.length - 1];
    let counter = { id: +maxId + 1, value: 0 };
    counters.push(counter);
    this.setState({ counters });
  };

  handleDecrement = counter => {
    if (counter.value > 0) {
      let index = this.state.counters.findIndex(x => x.id === counter.id);
      let counters = this.state.counters;
      counters[index].value = counters[index].value - 1;
      this.setState({ counters });
    }
  };

  renderCounters = () => {
    return this.state.counters.map(counter => (
      <Counter
        key={counter.id}
        counter={counter}
        onDelete={this.hanldeDelete}
        onDecrement={this.handleDecrement}
        onIncrement={this.handleIncreament}
      />
    ));
  };

  render() {
    return (
      <React.Fragment>
        <Nav counter={this.handleCounter()} />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onRender={this.renderCounters}
            onAdd={this.addItem}
          />
        </main>
      </React.Fragment>
    );
  }
}
