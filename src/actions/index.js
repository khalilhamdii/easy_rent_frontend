import { ADD_RENT, ADD_RENTS, LOGIN, LOGOUT } from '../constants/index';

let rentId = 3;

export const addRent = (rent) => ({
  type: ADD_RENT,
  payload: { rent },
});

export const addRents = (rents) => ({
  type: ADD_RENTS,
  payload: { rents },
});

export const loginHandler = (data) => ({
  type: LOGIN,
  payload: {
    isLoggedIn: true,
    user: data.user,
  },
});

export const logoutHandler = () => ({
  type: LOGOUT,
  payload: {
    isLoggedIn: false,
    user: {},
  },
});
