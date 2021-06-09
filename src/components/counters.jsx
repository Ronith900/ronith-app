import React, { Component } from "react";
import Counter from "./counter";
import axios from'axios'
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import TextField from "@material-ui/core/TextField"
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    snippets : [],
    date : new Date()
  };



  handleIncrement = (counter) => {
    const { counters } = this.state;
    const counterIndex = counters.indexOf(counter);
    counter.value += 1;
    counters[counterIndex] = counter;
    this.setState({ counters });
  };

  handleDateChangeTime = (date) => {
    this.setState({date})
    console.log(this.state.date)
  }

  

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
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid>
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={this.state.date}
          onChange={date => this.handleDateChangeTime(date)}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
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
