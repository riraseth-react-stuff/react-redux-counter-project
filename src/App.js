import React from 'react';
import Counter from './Counter';
import { createStore } from 'redux';
import { DECREASE, INCREASE, RESET } from './actions';
import reducer from './reducers';
// setup initial state
const defaultState = {
  count: 14,
  name: 'wick'
};

// setup store
const store = createStore(reducer, defaultState);
store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: RESET });
// console.log(store.getState());

const App = () => {
  return <Counter state={store.getState()} />;
};

export default App;
