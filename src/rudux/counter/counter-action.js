import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('counter/Incriment');
export const decrement = createAction('counter/Decrement');

// export const increment = value => ({
//   type: INCRIMENT,
//   payload: value,
// });
// export const decrement = value => ({
//   type: DECRIMENT,
//   payload: value,
// });
