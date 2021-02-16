import { LOGIN, LOGOUT } from '../constants/index';

const initialState = {
  session: {
    status: 'LOGGED_OUT',
    user: '',
  },
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        session: { status: 'LOGGED_IN', user: action.payload.user },
      };
    }
    case LOGOUT: {
      return {
        ...state,
        session: {
          status: 'LOGGED_OUT',
          user: '',
        },
      };
    }
    default:
      return state;
  }
};

export default sessionReducer;
