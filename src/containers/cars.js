import React from 'react';
import { connect } from 'react-redux';
import { mapCarsToProps } from '../helpers/index';
import CarCard from '../components/CarCard';

const cars = (props) => {
  const { cars } = props;
  return (
    <main className="container">
      <div className="text-center mt-5">
        <h4 style={{ fontWeight: 'bold' }}>AVAILABLE CARS</h4>
        <h6 className="text-muted">Please select a car model</h6>
      </div>
      <div className="row mb-5">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </main>
  );
};

export default connect(mapCarsToProps)(cars);
