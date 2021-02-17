import React from 'react';
import { connect } from 'react-redux';
import { mapRentsToProps } from '../helpers/index';
const Panel = (props) => {
  const { rents } = props;
  return (
    <div className="container d-flex flex-column mt-5">
      <h4>Admin panel</h4>
      <div className="table-responsive mt-5">
        <table className="table">
          <thead>
            <tr>
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
                <td>{rent.status ? 'Rented' : 'Pending'}</td>
                <td>{rent.user_name}</td>
                <td>{rent.model}</td>
                <td>{rent.pickUp_date}</td>
                <td>{rent.return_date}</td>
                <td>{rent.location}</td>
                <td>
                  <div className="text-center">
                    <a href="#" style={{ color: '#97BF0F' }}>
                      <i className="fa fa-check mr-2" />
                    </a>
                    <a href="#" style={{ color: '#97BF0F' }}>
                      <i className="fa fa-remove mr-2" />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default connect(mapRentsToProps)(Panel);
// export default Panel;
