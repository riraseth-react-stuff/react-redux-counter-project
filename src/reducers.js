import { DECREASE, INCREASE, RESET } from './actions';
// setup reducer
export default function reducer(state, action) {
  switch (action.type) {
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case RESET:
      return { ...state, count: 299 };
    default:
      return state;
  }
}
