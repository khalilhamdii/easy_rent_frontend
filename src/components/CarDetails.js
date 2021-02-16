import React, { useState } from 'react';
import RentForm from './RentForm';
import '../assets/css/cardetails.css';
import carImg from '../assets/images/download.jpeg';
import { Link } from 'react-router-dom';

const CarDetails = () => {
  const [formStatus, setFormStatus] = useState(false);

  const handleRentClick = () => {
    setFormStatus(!formStatus);
  };
  return (
    <>
      <div className="d-flex flex-column justify-content-center pr-5 vh-100 w-100">
        <h5 style={{ textAlign: 'right' }}>
          Kia Rio 2017
          <br />
        </h5>
        <h6 className="text-muted" style={{ textAlign: 'right' }}>
          15$/Day
          <br />
        </h6>
        <div className="d-flex justify-content-between mt-2 ">
          <div className="d-flex align-items-center ml-5 col-7">
            <img className="w-100" src={carImg} style={{ maxWidth: '40vw' }} />
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
                      <td>CONDITION</td>
                      <td>Used</td>
                    </tr>
                    <tr>
                      <td>BODY STYLE</td>
                      <td>Sedan</td>
                    </tr>
                    <tr>
                      <td>DOORS</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>
                        LUGGAGES
                        <br />
                      </td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>SEATS</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>
                        ENGINE
                        <br />
                      </td>
                      <td>V</td>
                    </tr>
                    <tr>
                      <td>BODY STYLE</td>
                      <td>Sedan</td>
                    </tr>
                    <tr>
                      <td>TRANSMISSION</td>
                      <td>Automatic</td>
                    </tr>
                    <tr>
                      <td>RENT DEPOSIT</td>
                      <td>300$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button
                onClick={handleRentClick}
                className="btn w-75 mb-2 btn-customized"
                type="button"
              >
                Rent car
                <i className="fa fa-arrow-right ml-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-100" style={{ textAlign: 'left' }}>
          <Link to="/">
            <i className="fa fa-caret-left return-btn" />
          </Link>
        </div>
      </div>
      <RentForm formStatus={formStatus} handleRentClick={handleRentClick} />
    </>
  );
};

export default CarDetails;
