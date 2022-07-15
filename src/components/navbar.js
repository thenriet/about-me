import React, { Component } from 'react';

class navbar extends Component { // A stateful component needs to
  constructor(props) { // be promoted into a class
  super(props);
  this.state = { clicked: false }; // defines initial state
  }

  render() {
    return (
    <h1 className={this.state.clicked ? "clicked" : ""}>
    Hello, {this.props.name}
    </h1>
    );
  }
  }

export default navbar;
