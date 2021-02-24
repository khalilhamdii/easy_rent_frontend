import { ADD_CAR, ADD_CARS, REMOVE_CAR, EDIT_CAR } from '../constants/index';

const initialState = {
  cars: [],
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAR: {
      return { ...state, cars: [...state.cars, action.payload.car] };
    }
    case REMOVE_CAR: {
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload.id),
      };
    }
    case EDIT_CAR: {
      const newCars = state.cars.map((car) => {
        if (car.id === action.payload.car.id) {
          car = action.payload.car;
        }
        return car;
      });
      return {
        ...state,
        cars: newCars,
      };
    }
    case ADD_CARS: {
      return { ...state, cars: [...state.cars, ...action.payload.cars] };
    }
    default:
      return state;
  }
};

export default carsReducer;
