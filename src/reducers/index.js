import { combineReducers } from 'redux';
import rentsReducer from './rentsReducer';
import carsReducer from './carsReducer';
import sessionReducer from './sessionReducer';

export default combineReducers({ rentsReducer, carsReducer, sessionReducer });
