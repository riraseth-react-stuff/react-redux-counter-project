import React from 'react';
import Counter from './Counter';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// reducers
import countReducer from './countReducer';
import productReducer from './productReducer';
import modalReducer from './modalReducer';
// setup store
const store = createStore(
  combineReducers({
    countState: countReducer,
    modalState: modalReducer,
    productState: productReducer
  }),
  composeWithDevTools()
);

const App = () => {
  return (
    <Provider store={store}>
      <Counter></Counter>
    </Provider>
  );
};

export default App;
