import React, { useState } from 'react';
import '../assets/css/sidebar.css';

const SideBar = () => {
  const [barState, setBarState] = useState('');
  const handleShowBar = () => {
    setBarState('active');
  };
  const handleHideBar = () => {
    setBarState('');
  };
  return (
    <>
      <a
        className="btn btn-primary btn-customized open-menu"
        onClick={handleShowBar}
        role="button"
      >
        <i className="fas fa-align-left"></i>
      </a>
      <nav className={`sidebar light ${barState}`}>
        <a role="button" onClick={handleHideBar}>
          <div className="dismiss">
            <i className="fas fa-arrow-left"></i>
          </div>
        </a>
        <div className="logo">EasyRent</div>

        <ul className="list-unstyled menu-elements">
          <li className="active">
            <a className="scroll-link" href="#top-content">
              <i className="fas fa-home"></i> Home
            </a>
          </li>
          <li>
            <a className="scroll-link" href="#section-1">
              <i className="fas fa-cog"></i> What we do
            </a>
          </li>
          <li>
            <a className="scroll-link" href="#section-2">
              <i className="fas fa-user"></i> About us
            </a>
          </li>
          <li>
            <a className="scroll-link" href="#section-5">
              <i className="fas fa-pencil-alt"></i> Portfolio
            </a>
          </li>
          <li>
            <a className="scroll-link" href="#section-6">
              <i className="fas fa-envelope"></i> Contact us
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SideBar;
