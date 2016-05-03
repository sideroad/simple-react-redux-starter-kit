/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';

export default function reducer(state = {counter: 0}, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    default:
      return state;
  }
}

export function increment() {
  return {
    type: COUNTER_INCREMENT
  };
}

export function decrement() {
  return {
    type: COUNTER_DECREMENT
  };
}
