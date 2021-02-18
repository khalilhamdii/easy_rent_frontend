import { ADD_RENT } from '../constants/index';

let rentId = 0;

export const addRent = (rent) => ({
  type: ADD_RENT,
  payload: { ...rent, id: ++rentId, status: false },
});
