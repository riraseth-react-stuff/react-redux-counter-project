import React from 'react';
import { connect } from 'react-redux';
import { DECREASE, INCREASE, RESET } from './actions';
function Counter({ name, count, increase, decrease, reset }) {
  return (
    <div className="container">
      <h1>counter</h1>
      <h2>{name}</h2>
      <p className="counter">{count}</p>
      <div className="buttons">
        <button className="btn" onClick={decrease}>
          decrease
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
        <button className="btn" onClick={increase}>
          increase
        </button>
      </div>
    </div>
  );
}
// getting props from the store in <Provider store={store}/> in App.js so they can be accessed in the Counter function
function mapStateToProps({ countState: { count, name } }) {
  return { count: count, name: name };
}
// redux passes dispatch through all reducers
function mapDispatchToProps(dispatch, ownProps) {
  return {
    increase: () => dispatch({ type: INCREASE }),
    decrease: () => dispatch({ type: DECREASE }),
    reset: () => dispatch({ type: RESET })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

//second argument mapDispatchToProps dispatch, ownProps
