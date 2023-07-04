import React, { useState } from 'react';

const NumberIncrementer = (props) => {
    const [number, setNumber] = useState(0);
  
    const handleIncrement = () => {
      setNumber(number + 1);
    };
  
    return (
      <div>
        <h1 className = "Increment">Number: {number}</h1>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    );
  };
  
  export default NumberIncrementer;