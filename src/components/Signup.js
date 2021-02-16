import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="login-clean w-100 vh-100">
      <form method="post">
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
          <input
            className="form-control"
            type="password"
            name="password confirmation"
            placeholder="Re-enter Password"
          />
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

export default Signup;
