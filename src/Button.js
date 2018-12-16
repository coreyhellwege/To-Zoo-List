import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfClicks: 0
    }
  }
  incrementClicks() {
    this.props.updateClick(this.props.animal)
  }
  render() {
    let verb = "";
    if (this.props.handle === 'inc') {
      verb = "Add";
    } else if (this.props.handle === 'dec') {
      verb = "Remove";
    } else {
      verb = "ERROR";
    }
    return <button onClick={this.incrementClicks.bind(this)}>{verb} {this.props.animal}</button>;
  }
}

export default Button;