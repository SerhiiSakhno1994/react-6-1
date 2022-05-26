import { INCRIMENT, DECRIMENT } from './counter-type';

export const increment = value => ({
  type: INCRIMENT,
  payload: value,
});
export const decrement = value => ({
  type: DECRIMENT,
  payload: value,
});
