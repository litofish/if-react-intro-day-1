import React, { Component } from 'react';
import ToggleColor from './ToggleColor';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bgColor: 'red',
      options: ['default', 'red', 'blue', 'green']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(color) {
    this.setState({
      bgColor: color
    });
  }

  render() {
    return (
      <div className="container">
        <div className={`square ${this.state.bgColor}`} />
        <div className="colors">
          {this.state.options.map(option => (
            <ToggleColor
              color={option}
              handleClick={() => this.handleClick(option)}
              key={option}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
