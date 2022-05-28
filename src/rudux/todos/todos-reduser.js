import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import todos from '../../components/todos.json';
import {
  addTodo,
  deleteDoto,
  changeFilter,
  toggleCompleted,
} from './todos-actions';

const items = createReducer(todos, {
  [addTodo]: (state, { payload }) => [payload, ...state],
  [deleteDoto]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [toggleCompleted]: (state, { payload }) =>
    state.map(todo =>
      todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
    ),
});

// const items = (state = todos, { type, payload }) => {
//   switch (type) {
//     case ADD:
//       return [payload, ...state];

//     case DELETE:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({ items, filter });
