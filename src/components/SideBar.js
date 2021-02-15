import React from 'react';
import '../assets/css/sidebar.css';

const SideBar = () => {
  return (
    <nav className="col-2 sidebar">
      <a href="/">
        <i className="fa fa-bars show-icon"></i>
      </a>
      <div className="mb-5 logo">
        <span>EasyRent</span>
      </div>
      <ul className="list-unstyled">
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/">CARS</a>
        </li>
        <li>
          <a href="/">RENT LIST</a>
        </li>
        <li>
          <a href="/">CONTACT US</a>
        </li>
      </ul>
      <div className="d-flex flex-column align-items-center mt-5">
        <button
          className="btn btn-primary rounded-pill w-75 mb-2 signup-btn"
          type="button"
        >
          SIGN UP
        </button>
        <span style={{ fontSize: '13px' }}>Already member ?&nbsp;</span>
        <a href="/" style={{ color: '#97BF0F' }}>
          Login
        </a>
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
  );
};

export default SideBar;
