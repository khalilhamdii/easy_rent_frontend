import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { loginHandler } from '../actions/index';
import { apiLogin } from '../axios';
import PropTypes from 'prop-types';

const Login = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const { loginHandler } = props;

  const [apiErrors, setErrors] = useState([]);
  const renderErrors = () => (
    <ul className="text-danger">
      {apiErrors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  );
  const onSubmit = (user) => {
    apiLogin(user, loginHandler, redirect, setErrors);
  };
  const redirect = () => {
    props.history.push('/');
  };

  return (
    <div className="login-clean w-100 vh-100">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="illustration" style={{ padding: '0px' }}>
          <i
            className="icon ion-ios-navigate"
            style={{ color: '#97BF0F', fontSize: '90px' }}
          ></i>
        </div>
        <h1 className="my-4" style={{ textAlign: 'center' }}>
          Login
        </h1>
        {apiErrors.length > 0 ? renderErrors() : null}
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
          <button className="btn btn-block btn-customized" type="submit">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  logintHandler: PropTypes.func,
};

export default connect(null, { loginHandler })(Login);
