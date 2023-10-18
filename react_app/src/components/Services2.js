import React, { useState } from 'react';

function Services2(props) {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('Service');

  const increment = (type) => {
    setCounter((previousCount) => previousCount + 1);
    setName('ServiceClicked');
  };
  return (
    <div>
      <h1>{props.rr}</h1>
      <p>Name: {name}</p>
      <p>Count: {counter}</p>
      <button onClick={() => increment('hello')}>Increment</button>
    </div>
  );
}

export default Services2;
