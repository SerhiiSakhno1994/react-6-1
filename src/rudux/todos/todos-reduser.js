import { combineReducers } from 'redux';

import { ADD, DELETE, CHANGE_FILTER } from './todos-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];

    case DELETE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};
const filter = (state = '', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({ items, filter });
