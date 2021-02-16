import { ADD_RENT, ADD_RENTS } from '../constants/index';

const initialState = {
  rents: [],
};

const rentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RENT: {
      return { ...state, rents: [...state.rents, action.payload.rent] };
    }
    case ADD_RENTS: {
      return { ...state, rents: action.payload.rents };
    }
    default:
      return state;
  }
};

export default rentsReducer;
