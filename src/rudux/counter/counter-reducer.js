import { combineReducers } from 'redux';
import { INCRIMENT, DECRIMENT } from './counter-type';

const valueReduser = (state = 10, { type, payload }) => {
  switch (type) {
    case INCRIMENT:
      return state + payload;

    case DECRIMENT:
      return state - payload;

    default:
      return state;
  }
};
const stepReducer = (state = 5, action) => state;

export default combineReducers({
  value: valueReduser,
  step: stepReducer,
});
