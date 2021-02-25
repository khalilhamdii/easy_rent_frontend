import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mapSessionToProps } from '../helpers/index';
import { logoutHandler } from '../actions/index';
import '../assets/css/sidebar.css';
import { apiLogOut } from '../axios';
import logo from '../assets/images/logo.png';

const SideBar = props => {
  const { session } = props;
  const location = useLocation().pathname;
  const [navToggle, setNavToggle] = useState(false);
  const handleNavToggle = () => {
    setNavToggle(!navToggle);
  };

  const handleLogOut = () => {
    const { user } = session;
    apiLogOut(user, props.logoutHandler);
  };

  return (
    <>
      <button
        onClick={handleNavToggle}
        className="btn btn-link"
        style={{ cursor: 'pointer', position: 'absolute' }}
        aria-hidden="true"
        type="button"
      >
        <i className="fa fa-bars show-icon" />
      </button>
      <nav
        className="col-2 sidebar flex-grow-1"
        style={{ display: !navToggle ? 'block' : 'none' }}
      >
        <div className="mb-5 logo">
          <Link to="/">
            <img src={logo} alt="logo" className="w-100" />
          </Link>
        </div>
        <ul className="list-unstyled">
          <li>
            <Link
              className={`nav-link ${location === '/' ? 'active' : ''}`}
              to="/"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link ${
                location.includes('cars') ? 'active' : ''
              }`}
              to="/cars"
            >
              CARS
            </Link>
          </li>
          {session.isLoggedIn && session.user.role === 'USER' ? (
            <li>
              <Link
                className={`nav-link ${location === '/profil' ? 'active' : ''}`}
                to="/profil"
              >
                PROFIL
              </Link>
            </li>
          ) : null}
          {session.isLoggedIn && session.user.role === 'ADMIN' ? (
            <li>
              <Link
                className={`nav-link ${location === '/panel' ? 'active' : ''}`}
                to="/panel"
              >
                PANEL
              </Link>
            </li>
          ) : null}
        </ul>
        <div className="d-flex flex-column align-items-center mt-5">
          {!session.isLoggedIn ? (
            <>
              <Link
                to="/signup"
                className="btn rounded-pill btn-customized w-75 mb-2"
              >
                SIGN UP
              </Link>

              <span style={{ fontSize: '13px' }}>Already member ?&nbsp;</span>
              <Link to="/login" style={{ color: '#97BF0F' }}>
                Login
              </Link>
            </>
          ) : (
            <>
              <span style={{ fontSize: '13px' }}>Logged In as :</span>
              <h6 className="font-weight-bold">{session.user.userName}</h6>
              <Link
                to="/login"
                style={{ color: '#97BF0F' }}
                onClick={handleLogOut}
              >
                Logout
              </Link>
            </>
          )}
        </div>
        <div className="w-100 mb-3 nav-bottom">
          <div
            className="social-icons mb-1"
            style={{ paddingTop: '0px', paddingBottom: '0px' }}
          >
            <a href="https://github.com/khalilhamdii">
              <i className="fa fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/khalilhamdi/">
              <i className="fa fa-linkedin" />
            </a>
            <a href="https://twitter.com/Khalilhamdiii">
              <i className="fa fa-twitter" />
            </a>
          </div>
          <span style={{ fontSize: '12px' }}>
            ©2021 Khalil Hamdi - EasyRent
          </span>
        </div>
      </nav>
    </>
  );
};

SideBar.propTypes = {
  session: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
    user: PropTypes.shape({
      id: PropTypes.number,
      userName: PropTypes.string,
      role: PropTypes.string,
    }),
  }).isRequired,
  logoutHandler: PropTypes.func.isRequired,
};

export default connect(mapSessionToProps, { logoutHandler })(SideBar);
