import axios from 'axios';
// counter actions
export const DECREASE = 'DECREASE';
export const INCREASE = 'INCREASE';
export const RESET = 'RESET';
// modal actions
export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';
// product actions
export const SET_LOADING = 'SET_LOADING';
export const GET_PRODUCTS = 'GET_PRODUCTS';
// action creators
export const decrease = () => ({ type: DECREASE });
export const increase = () => ({ type: INCREASE });
export const reset = () => ({ type: RESET });
export const modalOpen = (name, text) => ({
  type: MODAL_OPEN,
  payload: { name, text }
});

export const setLoading = () => ({ type: SET_LOADING });

export const getProducts = () => {
  return async function(dispatch) {
    dispatch(setLoading());
    const response = await axios
      .get(
        'https://johnsmilgatutorials.com/projects/react-tech-store-v2/products'
      )
      .catch(error => console.log(error));
    dispatch({ type: GET_PRODUCTS, payload: response.data });
  };
};

// export const getProducts = () => async (dispatch) => {}
