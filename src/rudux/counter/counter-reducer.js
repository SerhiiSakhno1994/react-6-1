import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement } from './counter-action';

const valueReduser = createReducer(10, {
  [increment]: (state, { payload }) => state + payload,
  [decrement]: (state, { payload }) => state - payload,
});

// const valueReduser = (state = 10, { type, payload }) => {
//   switch (type) {
//     case INCRIMENT:
//       return state + payload;

//     case DECRIMENT:
//       return state - payload;

//     default:
//       return state;
//   }
// };
const stepReducer = (state = 5, action) => state;

export default combineReducers({
  value: valueReduser,
  step: stepReducer,
});
