import React, { Component } from "react";

class Counter extends Component {
  styles = {
      fontSize: 20,
      fontWeight: "bold"
  }

  //setting attributes
  formatCount(){
      const {value} = this.props.counter;
      return value === 0? 'Zero': value;
  }

  // Rendering classes dynamically
  getBadgeClasses(){
      const {value} = this.props.counter;
      let classes = "badge m-2 badge-"
      classes += value === 0? "warning":"primary";
      return classes
  }

  //conditional rendering
//   getTags(){
//       if(this.state.tags.length === 0) return "There are no tags";
//       return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
//   }

  //handling events and Binding event handlers
//   handleIncrement=  (product)=> {
//       console.log(product)
//       this.setState({count: this.state.count + 1})
//   }

  //Composing components

  render() {
    return (
      <div>

          <h4>Counters app {this.props.counter.id}</h4>
        <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary" onClick={() => this.props.onIncrement(this.props.counter)}>Increment</button>
        <button className="btn btn-danger m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
        {/* <ul>
            { this.state.tags.length === 0 && "Please add tags"}<br></br>
            {this.getTags()}
        </ul> */}
      </div>
    );
  }
}

export default Counter;
