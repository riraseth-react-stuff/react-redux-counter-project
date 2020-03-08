import React from 'react';
import Counter from './Counter';
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
// setup initial state
const defaultState = {
  count: 299,
  name: 'john wick'
};

// setup store
const store = createStore(reducer, defaultState);

const App = () => {
  return (
    <Provider store={store}>
      <Counter />;
    </Provider>
  );
};

export default App;
