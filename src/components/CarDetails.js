import React, { useState } from 'react';
import RentForm from './RentForm';
import '../assets/css/cardetails.css';
import carImg from '../assets/images/download.jpeg';

const CarDetails = () => {
  const [formStatus, setFormStatus] = useState(false);

  const handleRentClick = () => {
    setFormStatus(!formStatus);
  };
  return (
    <>
      <div className="d-flex flex-column justify-content-center pr-2 vh-100">
        <div className="d-flex justify-content-around mt-5 py-4 px-2">
          <div className="d-flex align-items-center col-7">
            <img className="w-100" src={carImg} />
          </div>
          <div className="col-4" style={{ padding: 0 }}>
            <h5 style={{ textAlign: 'right' }}>
              Kia Rio 2017
              <br />
            </h5>
            <h6 className="text-muted mb-5" style={{ textAlign: 'right' }}>
              15$/Day
              <br />
            </h6>
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
                className="btn btn-primary w-75 mb-2"
                type="button"
                style={{ background: '#97BF0F', borderStyle: 'none' }}
              >
                Rent car
                <i className="fa fa-arrow-right ml-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-100" style={{ textAlign: 'left' }}>
          <i className="fa fa-caret-left return-btn" />
        </div>
      </div>
      <RentForm formStatus={formStatus} handleRentClick={handleRentClick} />
    </>
  );
};

export default CarDetails;
