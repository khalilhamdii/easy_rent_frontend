import React from 'react';
import Carousel from './Carousel';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

const Home = () => (
  <div className=" container text-center d-flex flex-column align-items-center justify-content-center min-vh-100">
    <h4 style={{ fontWeight: 'bold' }}>LATEST MODELS</h4>
    <h6 className="text-muted">Please select a car model</h6>
    <Carousel />
  </div>
);

export default Home;
