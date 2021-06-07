import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const { counters } = this.state;
    const counterIndex = counters.indexOf(counter);
    counter.value += 1;
    counters[counterIndex] = counter;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({counters})
  };

  handleDelete = (counterID) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id != counterID
    );
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <button className="btn btn-primary m-2" onClick={this.handleReset}>
          Reset all
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
