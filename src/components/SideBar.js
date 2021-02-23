import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { mapSessionToProps } from '../helpers/index';
import { logoutHandler } from '../actions/index';
import '../assets/css/sidebar.css';
import { apiLogOut } from '../axios';
import logo from '../assets/images/logo.png';
import PropTypes from 'prop-types';

const SideBar = (props) => {
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
      <a onClick={handleNavToggle} style={{ cursor: 'pointer' }}>
        <i className="fa fa-bars show-icon"></i>
      </a>
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
            <a href="/">
              <i className="icon ion-social-twitter"></i>
            </a>
            <a href="/">
              <i className="icon ion-social-facebook"></i>
            </a>
            <a href="/">
              <i className="icon ion-social-snapchat"></i>
            </a>
            <a href="/">
              <i className="icon ion-social-youtube"></i>
            </a>
          </div>
          <span style={{ fontSize: '12px' }}>2021 Khalil Hamdi</span>
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
