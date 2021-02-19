import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { mapSessionToProps } from '../helpers/index';
import { logoutHandler } from '../actions/index';
import '../assets/css/sidebar.css';

const SideBar = (props) => {
  const { session } = props;
  console.log(session);
  const [navToggle, setNavToggle] = useState(false);
  const [apiErrors, setApiErrors] = useState({});
  const handleNavClick = (target) => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((item) => item.classList.remove('active'));
    target.classList.add('active');
  };
  const handleNavToggle = () => {
    setNavToggle(!navToggle);
  };

  const handleLogOut = () => {
    const { user } = session;
    props.logoutHandler();
    axios
      .post('http://localhost:3001/logout', { user }, { withCredentials: true })
      .then((response) => {
        console.log(response);
        if (response.data.logged_out) {
          props.logoutHandler();
          redirect();
        } else {
          setApiErrors(response.data.errors);
          console.log(apiErrors);
        }
      })
      .catch((error) => console.log('api errors:', error));
  };
  const location = useLocation().pathname;
  const redirect = () => {
    return location !== '/' ? props.history.push('/') : null;
  };
  return (
    <>
      <a onClick={handleNavToggle}>
        <i className="fa fa-bars show-icon"></i>
      </a>
      <nav
        className="col-2 sidebar flex-grow-1"
        style={{ display: !navToggle ? 'block' : 'none' }}
      >
        <div className="mb-5 logo">
          <span>EasyRent</span>
        </div>
        <ul className="list-unstyled">
          <li>
            <Link
              className="nav-link active"
              onClick={(e) => handleNavClick(e.target)}
              to="/"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              onClick={(e) => handleNavClick(e.target)}
              to="/cars"
            >
              CARS
            </Link>
          </li>
          {session.isLoggedIn && session.user.role === 'USER' ? (
            <li>
              <Link
                className="nav-link"
                onClick={(e) => handleNavClick(e.target)}
                to="/profil"
              >
                PROFIL
              </Link>
            </li>
          ) : null}
          {session.isLoggedIn && session.user.role === 'ADMIN' ? (
            <li>
              <Link
                className="nav-link"
                onClick={(e) => handleNavClick(e.target)}
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

export default connect(mapSessionToProps, { logoutHandler })(SideBar);
