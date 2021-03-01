/* eslint-disable no-console */
// https://easyrent-backend.herokuapp##.com
import axios from 'axios';

export const apiLogin = (user, action, redirect, setErrors) => {
  axios
    .post('http://localhost:3001/login', { user })
    .then(response => {
      if (response.data.logged_in) {
        action(response.data);
        redirect();
      } else {
        setErrors(response.data.errors);
      }
    })
    .catch(error => console.log('api errors:', error.response.data));
};

export const apiSignUp = (user, action, redirect, setErrors) => {
  axios
    .post('http://localhost:3001/users', { user })
    .then(response => {
      if (response.data.status === 'created') {
        action(response.data);
        redirect();
      } else {
        setErrors(response.data.errors);
      }
    })
    .catch(error => console.log('api errors:', error.response.data));
};

export const apiAddRent = (rent, userId, action) => {
  axios
    .post(`http://localhost:3001/users/${userId}/rents/`, rent)
    .then(response => {
      if (response.data.status === 'created') {
        action(rent);
      }
    })
    .catch(error => console.log('api errors:', error.response.data));
};

export const apiRemoveRent = (id, action) => {
  axios
    .delete(`http://localhost:3001/rents/${id}`)
    .then(response => {
      if (response.data.status === 'deleted') {
        action(id);
      }
    })
    .catch(error => console.log('api errors:', error));
};

export const apiChangeRentStatus = (id, rent, status, action) => {
  const modifiedRent = { ...rent, status };
  axios
    .patch(`http://localhost:3001/rents/${id}`, modifiedRent)
    .then(response => {
      if (response.data.status === 'updated') {
        action(id, status);
      }
    })
    .catch(error => console.log('api errors:', error));
};

export const apiGetRents = action => {
  axios
    .get('http://localhost:3001/rents/')
    .then(response => {
      action(response.data);
    })
    .catch(error => console.log('api errors:', error));
};

export const apiGetUserRents = (id, action) => {
  axios
    .get(`http://localhost:3001/users/${id}/rents/`)
    .then(response => {
      action(response.data);
    })
    .catch(error => console.log('api errors:', error.response.data));
};

export const apiGetCars = action => {
  axios
    .get('http://localhost:3001/api/v1/cars')
    .then(response => {
      if (response.status === 200) {
        action(response.data);
      }
    })
    .catch(error => console.log('api errors:', error.response.data));
};

export const apiAddCar = (carData, action) => {
  axios
    .post('http://localhost:3001/api/v1/cars', carData, {
      headers: { 'content-type': 'multipart/form-data' },
    })
    .then(response => {
      if (response.statusText === 'Created') {
        action(response.data);
      }
    })
    .catch(error => console.log('api errors:', error.response.data));
};

export const apiRemoveCar = (id, action) => {
  axios
    .delete(`http://localhost:3001/api/v1/cars/${id}`)
    .then(response => {
      if (response.data.status === 'deleted') {
        action(id);
      }
    })
    .catch(error => console.log('api errors:', error));
};

export const apiEditCar = (id, carData, action) => {
  axios
    .patch(`http://localhost:3001/api/v1/cars/${id}`, carData)
    .then(response => {
      if (response.statusText === 'Accepted') {
        action(response.data);
      }
    })
    .catch(error => console.log('api errors:', error));
};
