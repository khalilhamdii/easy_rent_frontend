import { ADD_CAR, ADD_CARS, REMOVE_CAR } from '../constants/index';

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
    case ADD_CARS: {
      return { ...state, cars: action.payload.cars };
    }
    default:
      return state;
  }
};

export default carsReducer;
