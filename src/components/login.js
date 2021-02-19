import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { loginHandler } from '../actions/index';
const Login = (props) => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    props.loginHandler(data);
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
          {errors.email && errors.email.type === 'required' && (
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

export default connect(null, { loginHandler })(Login);
