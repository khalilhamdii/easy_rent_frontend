/* eslint-disable no-console */
import axios from 'axios';

export const apiLogin = (user, action, redirect, setErrors) => {
  axios
    .post('https://easyrent-backend.herokuapp.com/login', { user })
    .then((response) => {
      if (response.data.logged_in) {
        action(response.data);
        redirect();
      } else {
        setErrors(response.data.errors);
      }
    })
    .catch((error) => console.log('api errors:', error.response.data));
};

export const apiSignUp = (user, action, redirect, setErrors) => {
  axios
    .post('https://easyrent-backend.herokuapp.com/users', { user })
    .then((response) => {
      if (response.data.status === 'created') {
        action(response.data);
        redirect();
      } else {
        setErrors(response.data.errors);
      }
    })
    .catch((error) => console.log('api errors:', error.response.data));
};

export const apiLogOut = (user, action) => {
  axios
    .post('https://easyrent-backend.herokuapp.com/logout', { user })
    .then((response) => {
      if (response.data.logged_out) {
        action();
      }
    })
    .catch((error) => console.log('api errors:', error));
};

export const apiGetLoginStatus = (loginHandler, logoutHandler) => {
  axios
    .get('https://easyrent-backend.herokuapp.com/logged_in')
    .then((response) => {
      if (response.data.logged_in) {
        loginHandler(response.data);
      } else {
        logoutHandler();
      }
    })
    .catch((error) => console.log('api errors:', error));
};

export const apiAddRent = (rent, userId, action) => {
  axios
    .post(`https://easyrent-backend.herokuapp.com/users/${userId}/rents/`, rent)
    .then((response) => {
      if (response.data.status === 'created') {
        action(rent);
      }
    })
    .catch((error) => console.log('api errors:', error.response.data));
};

export const apiRemoveRent = (id, action) => {
  axios
    .delete(`https://easyrent-backend.herokuapp.com/rents/${id}`)
    .then((response) => {
      if (response.data.status === 'deleted') {
        action(id);
      }
    })
    .catch((error) => console.log('api errors:', error));
};

export const apiChangeRentStatus = (id, rent, status, action) => {
  const modifiedRent = { ...rent, status };
  axios
    .patch(`https://easyrent-backend.herokuapp.com/rents/${id}`, modifiedRent)
    .then((response) => {
      if (response.data.status === 'updated') {
        action(id, status);
      }
    })
    .catch((error) => console.log('api errors:', error));
};

export const apiGetRents = (action) => {
  axios
    .get('https://easyrent-backend.herokuapp.com/rents/')
    .then((response) => {
      action(response.data);
    })
    .catch((error) => console.log('api errors:', error));
};

export const apiGetUserRents = (id, action) => {
  axios
    .get(`https://easyrent-backend.herokuapp.com/users/${id}/rents/`)
    .then((response) => {
      action(response.data);
    })
    .catch((error) => console.log('api errors:', error.response.data));
};

export const apiGetCars = (action) => {
  axios
    .get('https://easyrent-backend.herokuapp.com/api/v1/cars')
    .then((response) => {
      if (response.status === 200) {
        action(response.data);
      }
    })
    .catch((error) => console.log('api errors:', error.response.data));
};

export const apiAddCar = (carData, action) => {
  axios
    .post('https://easyrent-backend.herokuapp.com/api/v1/cars', carData, {
      headers: { 'content-type': 'multipart/form-data' },
    })
    .then((response) => {
      if (response.statusText === 'Created') {
        action(response.data);
      }
    })
    .catch((error) => console.log('api errors:', error.response.data));
};

export const apiRemoveCar = (id, action) => {
  axios
    .delete(`https://easyrent-backend.herokuapp.com/api/v1/cars/${id}`)
    .then((response) => {
      if (response.data.status === 'deleted') {
        action(id);
      }
    })
    .catch((error) => console.log('api errors:', error));
};

export const apiEditCar = (id, carData, action) => {
  axios
    .patch(`https://easyrent-backend.herokuapp.com/api/v1/cars/${id}`, carData)
    .then((response) => {
      if (response.statusText === 'Accepted') {
        action(response.data);
      }
    })
    .catch((error) => console.log('api errors:', error));
};
