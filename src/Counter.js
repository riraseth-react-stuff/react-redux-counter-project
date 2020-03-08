import React from 'react';
import { connect } from 'react-redux';
import { DECREASE, INCREASE, RESET } from './actions';
function Counter(props) {
  return (
    <div className="container">
      <h1>counter</h1>
      <h2>{props.name}</h2>
      <p className="counter">{props.count}</p>
      <div className="buttons">
        <button
          className="btn"
          onClick={() => props.dispatch({ type: DECREASE })}
        >
          decrease
        </button>
        <button className="btn" onClick={() => props.dispatch({ type: RESET })}>
          reset
        </button>
        <button
          className="btn"
          onClick={() => props.dispatch({ type: INCREASE })}
        >
          increase
        </button>
      </div>
    </div>
  );
}
// getting props from the store in <Provider store={store}/> in App.js so they can be accessed in the Counter function
function mapStateToProps(state) {
  return { count: state.count, name: state.name };
}

export default connect(mapStateToProps)(Counter);
