import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/css/style.css';
import App from './components/App';
import SideBar from './components/SideBar';
// import store from './app/store';
// import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <SideBar />
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
