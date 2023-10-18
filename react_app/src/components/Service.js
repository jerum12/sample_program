import React, { Component } from 'react';

class Service extends Component {
  //initialization
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      name: 'Service',
    };
  }

  increment() {
    //updating
    this.setState({ counter: this.state.counter + 1, name: 'ServiceClicked' });
  }

  render() {
    const { name, counter } = this.state;
    const { asd, age, address } = this.props;
    return (
      <div>
        <h1>{asd}</h1>
        <h1>{age}</h1>
        <h1>{address}</h1>
        <p>Name: {name}</p>
        <p>Count: {counter}</p>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default Service;
