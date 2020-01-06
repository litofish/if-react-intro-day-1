import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bgColor: 'default'
    };
  }

  render() {
    return (
      <div className="container default">
        <div className="square" />
        <div className="colors">
          <div className="toggle default" />
          <div className="toggle red" />
          <div className="toggle blue" />
          <div className="toggle green" />
        </div>
      </div>
    );
  }
}

export default App;
