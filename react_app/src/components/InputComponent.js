import React, { useState } from 'react';

function InputComponent() {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (event) => {
    setInputValue(event.target.value);
    console.log('Handle Input');
  };

  return (
    <div>
      <h1>Input Component</h1>

      <label>Name</label>
      <input type="text" name="name" onChange={handleInput} value={inputValue} />

      <div>Input Value: {inputValue}</div>
    </div>
  );
}

export default InputComponent;
