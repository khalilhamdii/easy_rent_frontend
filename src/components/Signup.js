import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import axios from 'axios';
import { loginHandler } from '../actions/index';

const Signup = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const user = { ...data, role: 'USER' };
    console.log(user);
    axios
      .post('http://localhost:3001/users', { user }, { withCredentials: true })
      .then((response) => {
        if (response.data.status === 'created') {
          props.loginHandler(response.data);
          redirect();
        }
      })
      .catch((error) => console.log('api errors:', error.response.data));
  };

  const redirect = () => {
    props.history.push('/');
  };

  return (
    <div className="login-clean w-100 vh-100">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="illustration" style={{ padding: 0 }}>
          <i
            className="icon ion-android-contact"
            style={{ color: '#97BF0F', fontSize: 90 }}
          />
        </div>
        <h4 className="my-4" style={{ textAlign: 'center' }}>
          Create a new account
        </h4>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="userName"
            placeholder="Username"
            ref={register({ required: true, minLength: 3 })}
          />
          {errors.userName && errors.userName.type === 'required' && (
            <span className="text-danger">This is required</span>
          )}
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            ref={register({ required: true })}
          />
          {errors.email && errors.email.type === 'required' && (
            <span className="text-danger">This is required</span>
          )}
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            ref={register({ required: true })}
          />
          {errors.password && errors.password.type === 'required' && (
            <span className="text-danger">This is required</span>
          )}
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password_confirmation"
            placeholder="Re-enter Password"
            ref={register({ required: true })}
          />
          {errors.password_confirmation &&
            errors.password_confirmation.type === 'required' && (
              <span className="text-danger">This is required</span>
            )}
        </div>
        <div className="form-group">
          <button className="btn btn-customized btn-block" type="submit">
            Sign Up
          </button>
        </div>
        <div className="text-center">
          <span>Already member ?&nbsp;</span>
          <Link to="/login" style={{ color: '#97BF0F' }}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { loginHandler })(Signup);
