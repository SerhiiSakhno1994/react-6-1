import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addTodo = createAction('todos/Add', text => {
  return {
    payload: {
      id: shortid.generate(),
      text,
      completed: false,
    },
  };
});

// export const addTodo = text => ({
//   type: ADD,
//   payload: {
//     id: shortid.generate(),
//     text,
//     completed: false,
//   },
// });

export const deleteDoto = createAction('todos/Delelete');

// export const deleteDoto = todoId => ({
//   type: DELETE,
//   payload: todoId,
// });

export const changeFilter = createAction('todos/ChangeFilter');

// export const changeFilter = value => ({
//   type: CHANGE_FILTER,
//   payload: value,
// });

export const toggleCompleted = createAction('todos/ToggleComplited');
