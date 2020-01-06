import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }

  decrementCounter() {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }));
  }

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button type="button" onClick={this.incrementCounter}>
          Increment
        </button>
        <button type="button" onClick={this.decrementCounter}>
          Decrement
        </button>
      </div>
    );
  }
}

export default App;
