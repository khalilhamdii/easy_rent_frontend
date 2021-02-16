import React from 'react';

const login = () => {
  return (
    <div className="login-clean w-100 vh-100">
      <form>
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
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <button
            className="btn btn-primary btn-block"
            type="submit"
            style={{ background: '#97BF0F' }}
          >
            Log In
          </button>
        </div>
        <a className="forgot" href="/">
          Forgot your email or password?
        </a>
      </form>
    </div>
  );
};

export default login;
