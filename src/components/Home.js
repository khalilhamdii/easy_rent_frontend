import React from 'react';
import CarCard from './CarCard';
import '../assets/css/home.css';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

const Home = () => {
  return (
    <div className="d-flex flex-column justify-content-center home">
      <a href="/" className="show-icon">
        <i className="fa fa-bars "></i>
      </a>
      <h4 style={{ fontWeight: 'bold' }}>LATEST MODELS</h4>
      <h6 className="text-muted">Please select a car model</h6>
      <div className="d-flex flex-row justify-content-between mt-5">
        <div className="mt-5 w-100" style={{ textAlign: 'left' }}>
          <i className="fa fa-caret-left left-arrow"></i>
        </div>
        <CarCard />
        <CarCard />
        <CarCard />

        <div className="mt-5 w-100" style={{ textAlign: 'right' }}>
          <i className="fa fa-caret-right right-arrow"></i>
        </div>
      </div>
    </div>
  );
};

export default Home;
