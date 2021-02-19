import { ADD_RENT, LOGIN, LOGOUT } from '../constants/index';

let rentId = 3;

export const addRent = (rent) => ({
  type: ADD_RENT,
  payload: { rent: { ...rent, id: ++rentId } },
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
