import { ADD_RENT } from '../constants/index';

let rentId = 3;

export const addRent = (rent) => ({
  type: ADD_RENT,
  payload: { rent: { ...rent, id: ++rentId } },
});
