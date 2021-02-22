import {
  ADD_CAR,
  ADD_CARS,
  ADD_RENT,
  ADD_RENTS,
  CHANGE_RENT_STATUS,
  LOGIN,
  LOGOUT,
  REMOVE_CAR,
  REMOVE_RENT,
} from '../constants/index';

export const addCars = (cars) => ({
  type: ADD_CARS,
  payload: { cars },
});

export const addCar = (car) => ({
  type: ADD_CAR,
  payload: { car },
});

export const removeCar = (id) => ({
  type: REMOVE_CAR,
  payload: { id },
});

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
