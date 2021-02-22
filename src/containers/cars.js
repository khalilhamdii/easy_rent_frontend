import React, { useState } from 'react';
import { connect } from 'react-redux';
import { mapCarsToProps } from '../helpers/index';
import CarCard from '../components/CarCard';
import CarForm from '../components/CarForm';
import { apiAddCar } from '../axios';
import { addCar } from '../actions/index';
const Cars = (props) => {
  const [formStatus, setFormStatus] = useState(false);
  const { cars, session } = props;
  const handleAddCarClick = () => {
    setFormStatus(!formStatus);
  };

  const handleAddCar = (data) => {
    const car = { ...data, carImg: data.carImg[0] };
    const formData = new FormData();
    formData.append('model', car.model);
    formData.append('color', car.color);
    formData.append('bodyStyle', car.bodyStyle);
    formData.append('pricePerDay', car.pricePerDay);
    formData.append('doors', car.doors);
    formData.append('luggages', car.luggages);
    formData.append('seats', car.seats);
    formData.append('emissionsClass', car.emissionsClass);
    formData.append('transmission', car.transmission);
    formData.append('engine', car.engine);
    formData.append('rentDeposit', car.rentDeposit);
    formData.append('carImg', car.carImg);
    apiAddCar(formData, props.addCar);
  };
  return (
    <>
      <main className="container">
        <div className="text-center mt-5">
          <h4 style={{ fontWeight: 'bold' }}>AVAILABLE CARS</h4>
          <h6 className="text-muted">Please select a car model</h6>
        </div>
        {session.isLoggedIn && session.user.role === 'ADMIN' ? (
          <div className="text-right">
            <button
              onClick={handleAddCarClick}
              className="btn rounded-pill btn-customized"
            >
              <i className="fa fa-plus mr-2"></i>Add new car
            </button>
          </div>
        ) : null}
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

export default connect(mapCarsToProps, { addCar })(Cars);
