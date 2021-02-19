import React, { useState } from 'react';
import RentForm from './RentForm';
import '../assets/css/cardetails.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { mapCarsToProps } from '../helpers';
import { addRent } from '../actions/index';
import axios from 'axios';

const CarDetails = (props) => {
  const [formStatus, setFormStatus] = useState(false);
  const { cars, addRent, session } = props;
  const {
    match: {
      params: { id },
    },
  } = props;
  const car = cars.filter((car) => car.id === parseInt(id))[0];
  const models = cars.map((car) => car.model);
  const uniqModels = models.filter(
    (item, index) => models.indexOf(item) === index
  );
  const info = {
    userName: session.user.userName,
    model: car.model,
  };
  const user_id = session.user.id;
  const handleRentClick = () => {
    setFormStatus(!formStatus);
  };

  const handleAddRent = (data) => {
    const rent = {
      ...data,
      pricePerDay: car.pricePerDay,
      status: false,
    };
    console.log(rent);
    axios
      .post(`http://localhost:3001/users/${user_id}/rents/`, rent, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.status === 'created') {
          addRent(rent);
        }
      })
      .catch((error) => console.log('api errors:', error.response.data));
  };

  const RentButton = () => (
    <button
      onClick={handleRentClick}
      className="btn w-75 mb-2 btn-customized"
      type="button"
    >
      Rent car
      <i className="fa fa-arrow-right ml-2" />
    </button>
  );

  const LoginLink = () => (
    <>
      <h6>Please login to rent this car</h6>
      <Link to="/login" style={{ color: '#97BF0F' }}>
        Login
      </Link>
    </>
  );
  return (
    <>
      <div className="d-flex flex-column justify-content-center pr-5 vh-100 w-100">
        <h5 style={{ textAlign: 'right' }}>
          {car.model}
          <br />
        </h5>
        <h6 className="text-muted" style={{ textAlign: 'right' }}>
          {car.pricePerDay}$/Day
          <br />
        </h6>
        <div className="d-flex justify-content-between mt-2 ">
          <div className="d-flex align-items-center ml-5 col-7">
            <img
              className="w-100"
              src={car.carImg}
              alt={car.model}
              style={{ maxWidth: '40vw' }}
            />
          </div>
          <div className="col-4" style={{ padding: 0 }}>
            <div
              className="text-center p-2"
              style={{ background: 'var(--light)', borderRadius: 15 }}
            >
              <div className="table-responsive" style={{ fontSize: 12 }}>
                <table className="table">
                  <thead>
                    <tr />
                  </thead>
                  <tbody>
                    <tr>
                      <td>COLOR</td>
                      <td>{car.color}</td>
                    </tr>
                    <tr>
                      <td>BODY STYLE</td>
                      <td>{car.bodyStyle}</td>
                    </tr>
                    <tr>
                      <td>DOORS</td>
                      <td>{car.doors}</td>
                    </tr>
                    <tr>
                      <td>
                        LUGGAGES
                        <br />
                      </td>
                      <td>{car.luggages}</td>
                    </tr>
                    <tr>
                      <td>SEATS</td>
                      <td>{car.seats}</td>
                    </tr>
                    <tr>
                      <td>
                        ENGINE
                        <br />
                      </td>
                      <td>{car.engine}</td>
                    </tr>
                    <tr>
                      <td>EMISSIONS CLASS</td>
                      <td>{car.emissionsClass}</td>
                    </tr>
                    <tr>
                      <td>TRANSMISSION</td>
                      <td>{car.transmission}</td>
                    </tr>
                    <tr>
                      <td>RENT DEPOSIT</td>
                      <td>{car.rentDeposit}$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {session.isLoggedIn ? <RentButton /> : <LoginLink />}
            </div>
          </div>
        </div>
        <div className="w-100" style={{ textAlign: 'left' }}>
          <Link to="/cars">
            <i className="fa fa-caret-left return-btn" />
          </Link>
        </div>
      </div>
      <RentForm
        formStatus={formStatus}
        handleRentClick={handleRentClick}
        handleAddRent={handleAddRent}
        uniqModels={uniqModels}
        info={info}
      />
    </>
  );
};

export default connect(mapCarsToProps, { addRent })(CarDetails);
