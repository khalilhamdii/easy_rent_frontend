import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { mapRentsToProps, differenceInDays } from '../helpers';
import { addRents, removeRent } from '../actions/index';
import { apiGetUserRents, apiRemoveRent } from '../axios/index';

const Profil = (props) => {
  const { rents, session } = props;
  const { id } = session.user;
  const loginStatus = session.isLoggedIn;
  useEffect(() => {
    if (loginStatus) {
      apiGetUserRents(id, props.addRents);
    }
  }, [loginStatus]);

  const handleRentRemove = (id) => {
    apiRemoveRent(id, props.removeRent);
  };
  return (
    <div className="container d-flex flex-column mt-5 ">
      <h4>My rented cars</h4>
      <div className="table-responsive mt-5" style={{ textAlign: 'center' }}>
        <table className="table">
          <thead>
            <tr style={{ fontSize: 12 }}>
              <th></th>
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
                  <td>
                    <div className="text-center">
                      <button
                        className="btn btn-link"
                        type="button"
                        onClick={() => handleRentRemove(rent.id)}
                        style={{ color: '#97BF0F' }}
                      >
                        <i className="fa fa-trash-o mr-2" />
                      </button>
                    </div>
                  </td>
                  <td>{rent.status}</td>
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

export default connect(mapRentsToProps, { addRents, removeRent })(Profil);
