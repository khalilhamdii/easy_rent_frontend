import React from 'react';
import { connect } from 'react-redux';
import { mapRentsToProps } from '../helpers';

const Profil = (props) => {
  const { rents, session } = props;
  const userRents = rents.filter((rent) => rent.user_id === session.user_id);
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
            {userRents.map((rent) => (
              <tr key={rent.id}>
                <td>{rent.status ? 'Rented' : 'Pending'}</td>
                <td>{rent.model}</td>
                <td>{rent.pickUpDate}</td>
                <td>{rent.pickUpTime}</td>
                <td>{rent.returnDate}</td>
                <td>{rent.returnTime}</td>
                <td>7 days</td>
                <td>$105</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default connect(mapRentsToProps)(Profil);
