import React from 'react';
import { connect } from 'react-redux';
import { mapCarsToProps } from '../helpers/index';
import CarCard from '../components/CarCard';

const cars = (props) => {
  const { cars } = props;
  return (
    <main className="container">
      <div className="row">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </main>
  );
};

export default connect(mapCarsToProps)(cars);
