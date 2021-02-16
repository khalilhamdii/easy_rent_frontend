import React from 'react';

const User = () => {
  return (
    <div className="container d-flex flex-column mt-5 vh-100">
      <h4>My rented cars</h4>
      <div className="table-responsive mt-5" style={{ textAlign: 'center' }}>
        <table className="table">
          <thead>
            <tr style={{ fontSize: 12 }}>
              <th>Status</th>
              <th>Name</th>
              <th>Model</th>
              <th>Pick-up date</th>
              <th>Return date</th>
              <th>Duration</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ fontSize: 11 }}>
              <td>Rented</td>
              <td>John Smith</td>
              <td>Kia Rio 2017</td>
              <td>15/02/2021</td>
              <td>
                21/02/2021
                <br />
              </td>
              <td>7 days</td>
              <td>$105</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
