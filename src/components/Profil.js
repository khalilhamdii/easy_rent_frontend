import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { mapRentsToProps, differenceInDays } from '../helpers';
import { addRents } from '../actions/index';

const Profil = (props) => {
  const { rents, session } = props;
  const { id } = session.user;

  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/${id}/rents/`, {
        withCredentials: true,
      })
      .then((response) => {
        props.addRents(response.data);
      })
      .catch((error) => console.log('api errors:', error));
  }, []);
  return (
    <div className="container d-flex flex-column mt-5 ">
      <h4>My rented cars</h4>
      <div className="table-responsive mt-5" style={{ textAlign: 'center' }}>
        <table className="table">
          <thead>
            <tr style={{ fontSize: 12 }}>
              <th>Status</th>

              <th>Model</th>
              <th>Pick-up date</th>
              <th>Pick-up time</th>
              <th>Return date</th>
              <th>Return time</th>
              <th>Duration</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: 11 }}>
            {rents.map((rent) => {
              const duration = differenceInDays(
                rent.pickUpDate,
                rent.pickUpTime,
                rent.returnDate,
                rent.returnTime
              );
              const totalPrice =
                parseInt(duration) * parseInt(rent.pricePerDay);
              return (
                <tr key={rent.id}>
                  <td>{rent.status ? 'Rented' : 'Pending'}</td>
                  <td>{rent.model}</td>
                  <td>{rent.pickUpDate}</td>
                  <td>{rent.pickUpTime}</td>
                  <td>{rent.returnDate}</td>
                  <td>{rent.returnTime}</td>
                  <td>{duration} days</td>
                  <td>{totalPrice}$</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default connect(mapRentsToProps, { addRents })(Profil);
