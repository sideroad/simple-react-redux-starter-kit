/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';
export const RESET = 'counter/RESET';
export const RESET_SUCCESS = 'counter/RESET_SUCCESS';
export const RESET_FAIL = 'counter/RESET_FAIL';


export default function reducer(state = {counter: 0}, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case RESET:
      return {
        ...state
      };
    case RESET_SUCCESS:
      return {
        ...state,
        counter: action.result.counter
      };
    case RESET_FAIL:
      return {
        ...state,
        counter: 0
      };
    default:
      return state;
  }
}

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}


export function reset() {
  return {
    types: [RESET, RESET_SUCCESS, RESET_FAIL],
    promise: (client) =>
      new Promise((resolve) => {
        console.log(client);
        setTimeout(()=>{
          resolve({counter: 0});
        }, 1000);
      })
  };
}
