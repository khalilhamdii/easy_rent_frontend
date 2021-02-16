import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/sidebar.css';

const SideBar = () => {
  const [navToggle, setNavToggle] = useState(false);

  const handleNavToggle = () => {
    setNavToggle(!navToggle);
  };
  return (
    <>
      <a onClick={handleNavToggle}>
        <i className="fa fa-bars show-icon"></i>
      </a>
      <nav
        className="col-2 sidebar"
        style={{ display: !navToggle ? 'block' : 'none' }}
      >
        <div className="mb-5 logo">
          <span>EasyRent</span>
        </div>
        <ul className="list-unstyled">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/car">CAR</Link>
          </li>
          <li>
            <Link to="/user">PROFIL</Link>
          </li>
          <li>
            <Link to="/panel">PANEL</Link>
          </li>
        </ul>
        <div className="d-flex flex-column align-items-center mt-5">
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

export default SideBar;
