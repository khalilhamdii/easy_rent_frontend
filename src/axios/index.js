import axios from 'axios';

export const apiLogin = (user, action, redirect) => {
  axios
    .post('http://localhost:3001/login', { user }, { withCredentials: true })
    .then((response) => {
      if (response.data.logged_in) {
        action(response.data);
        redirect();
      }
    })
    .catch((error) => console.log('api errors:', error.response.data));
};

export const apiSignUp = (user, action, redirect) => {
  axios
    .post('http://localhost:3001/users', { user }, { withCredentials: true })
    .then((response) => {
      if (response.data.status === 'created') {
        action(response.data);
        redirect();
      }
    })
    .catch((error) => console.log('api errors:', error.response.data));
};

export const apiLogOut = (user, action) => {
  axios
    .post('http://localhost:3001/logout', { user }, { withCredentials: true })
    .then((response) => {
      if (response.data.logged_out) {
        action();
      }
    })
    .catch((error) => console.log('api errors:', error));
};

export const apiGetLoginStatus = (loginHandler, logoutHandler) => {
  axios
    .get('http://localhost:3001/logged_in', { withCredentials: true })
    .then((response) => {
      if (response.data.logged_in) {
        loginHandler(response.data);
      } else {
        logoutHandler();
      }
    })
    .catch((error) => console.log('api errors:', error));
};

export const apiAddRent = (rent, user_id, action) => {
  axios
    .post(`http://localhost:3001/users/${user_id}/rents/`, rent, {
      withCredentials: true,
    })
    .then((response) => {
      if (response.data.status === 'created') {
        action(rent);
      }
    })
    .catch((error) => console.log('api errors:', error.response.data));
};

export const apiRemoveRent = (id, action) => {
  axios
    .delete(`http://localhost:3001/rents/${id}`, {
      withCredentials: true,
    })
    .then((response) => {
      if (response.data.status === 'deleted') {
        action(id);
      }
    })
    .catch((error) => console.log('api errors:', error));
};

export const apiGetRents = (action) => {
  axios
    .get(`http://localhost:3001/rents/`, {
      withCredentials: true,
    })
    .then((response) => {
      action(response.data);
    })
    .catch((error) => console.log('api errors:', error));
};
