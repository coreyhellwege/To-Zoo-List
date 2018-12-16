import React, { Component } from 'react';
import './App.css';
import Button from './Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoo: [
        {
          name: 'Parrot',
          count: 0,
          species: 'Bird'
        },
        {
          name: 'Cockatoo',
          count: 0,
          species: 'Bird'
        },
        {
          name: 'Badger',
          count: 0,
          species: 'Rodent'
        }
      ]
    }
  }

  handleIncrement(animal) {
    const { zoo } = this.state;
    const animalObj = zoo.find(ani => ani.name === animal);
    animalObj.count++;
    this.setState({ zoo });
  }

  handleDecrement(animal) {
    const { zoo } = this.state;
    const animalObj = zoo.find(ani => ani.name === animal);
    animalObj.count--;
    this.setState({ zoo });
  }

  render() {
    return (
      <div class="box">
        <div className="App">
        <h1>Animals in the Zoo!</h1>
          {this.state.zoo.map(animal => <h4 key={animal.name}>{animal.name}: {animal.count}</h4>)}
          {this.state.zoo.map(animal => <h4 key={animal.species}>{animal.species}: {animal.species.count}</h4>)}
          
          <Button handle="inc" animal="Parrot" updateClick={this.handleIncrement.bind(this)} />
          <Button handle="inc" animal="Cockatoo" updateClick={this.handleIncrement.bind(this)} />
          <Button handle="inc" animal="Badger" updateClick={this.handleIncrement.bind(this)} />
          <br />
          <Button handle="dec" animal="Parrot" updateClick={this.handleDecrement.bind(this)} />
          <Button handle="dec" animal="Cockatoo" updateClick={this.handleDecrement.bind(this)} />
          <Button handle="dec" animal="Badger" updateClick={this.handleDecrement.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;