/* eslint-disable arrow-parens */
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/index';
import Routes from '../routes/index';
import initial_state from '../initial_state/index';

const store = createStore(rootReducer, initial_state);
const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>
);

export default App;
