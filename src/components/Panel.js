import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { mapRentsToProps } from '../helpers/index';
import { addRents, removeRent } from '../actions/index';
const Panel = (props) => {
  const { rents, session } = props;
  const loginStatus = session.isLoggedIn;

  const handleRentRemove = (id) => {
    props.removeRent(id);
  };
  useEffect(() => {
    if (loginStatus) {
      axios
        .get(`http://localhost:3001/rents/`, {
          withCredentials: true,
        })
        .then((response) => {
          props.addRents(response.data);
        })
        .catch((error) => console.log('api errors:', error));
    }
  }, [loginStatus]);
  return (
    <div className="container d-flex flex-column mt-5">
      <h4>Admin panel</h4>
      <div className="table-responsive mt-5">
        <table className="table text-center">
          <thead>
            <tr>
              <th></th>
              <th>Status</th>
              <th>Name</th>
              <th>Model</th>
              <th>Pick-up date</th>
              <th>Return date</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {rents.map((rent) => (
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
                <td>{rent.status ? 'Rented' : 'Pending'}</td>
                <td>{rent.userName}</td>
                <td>{rent.model}</td>
                <td>{rent.pickUpDate}</td>
                <td>{rent.returnDate}</td>
                <td>{rent.location}</td>
                <td>
                  {!rent.status ? (
                    <>
                      <div className="text-center">
                        <button
                          type="button"
                          className="btn btn-link"
                          style={{ color: '#97BF0F' }}
                        >
                          Accept
                        </button>
                        <button
                          type="button"
                          className="btn btn-link"
                          style={{ color: '#97BF0F' }}
                        >
                          Decline
                        </button>
                      </div>
                    </>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default connect(mapRentsToProps, { addRents, removeRent })(Panel);
