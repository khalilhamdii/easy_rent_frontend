import { ADD_RENT } from '../constants/index';

export const addRent = (rent) => ({
  type: ADD_RENT,
  payload: { rent },
});
