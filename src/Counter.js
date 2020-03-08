import React from 'react';
import { useState } from 'react';

function Counter(props) {
  const amount = props.state.count;
  const name = props.state.name;
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <h1>counter</h1>
      <h2>{name}</h2>
      <p className="counter">{amount}</p>
      <div className="buttons">
        <button className="btn" onClick={() => setCounter(counter - 1)}>
          decrease
        </button>
        <button className="btn" onClick={() => setCounter(0)}>
          reset
        </button>
        <button className="btn" onClick={() => setCounter(counter + 1)}>
          increase
        </button>
      </div>
    </div>
  );
}

export default Counter;
