import React, { Component } from "react";
import Counter from "./counter";
import axios from'axios'

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    snippets : []
  };

    async componentDidMount(){
      const snippets = await axios.get("http://localhost:8000/api/snippets/").then(result => result.data)
      console.log(snippets)
      this.setState({snippets})
    }


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
        <h3>There are a total of {this.state.snippets.length} snippets</h3>
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
