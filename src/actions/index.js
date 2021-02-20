import {
  ADD_RENT,
  ADD_RENTS,
  CHANGE_RENT_STATUS,
  LOGIN,
  LOGOUT,
  REMOVE_RENT,
} from '../constants/index';

export const addRent = (rent) => ({
  type: ADD_RENT,
  payload: { rent },
});

export const addRents = (rents) => ({
  type: ADD_RENTS,
  payload: { rents },
});

export const removeRent = (id) => ({
  type: REMOVE_RENT,
  payload: { id },
});

export const changeRentStatus = (id, status) => ({
  type: CHANGE_RENT_STATUS,
  payload: { id, status },
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
