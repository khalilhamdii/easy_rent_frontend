import React, { useState } from 'react';
import { connect } from 'react-redux';
import { mapCarsToProps } from '../helpers/index';
import CarCard from '../components/CarCard';
import CarForm from '../components/CarForm';
const Cars = (props) => {
  const [formStatus, setFormStatus] = useState(false);
  const { cars } = props;
  const handleAddCarClick = () => {
    setFormStatus(!formStatus);
  };

  const handleAddCar = (data) => {
    console.log(data);
    // const rent = {
    //   ...data,
    //   pricePerDay: car.pricePerDay,
    //   status: 'Pending',
    // };
    // apiAddRent(rent, user_id, addRent);
  };
  return (
    <>
      <main className="container">
        <div className="text-center mt-5">
          <h4 style={{ fontWeight: 'bold' }}>AVAILABLE CARS</h4>
          <h6 className="text-muted">Please select a car model</h6>
        </div>
        <div className="text-right">
          <button
            onClick={handleAddCarClick}
            className="btn rounded-pill btn-customized"
          >
            <i className="fa fa-plus mr-2"></i>Add new car
          </button>
        </div>
        <div className="row mb-5">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </main>
      <CarForm
        formStatus={formStatus}
        handleAddCarClick={handleAddCarClick}
        handleAddCar={handleAddCar}
      />
    </>
  );
};

export default connect(mapCarsToProps)(Cars);
