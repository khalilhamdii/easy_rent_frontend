import React from 'react';

const Panel = () => {
  return (
    <div className="container d-flex flex-column mt-5 vh-100">
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
            <tr>
              <td>Cell 1</td>
              <td>Cell 2</td>
              <td>Cell 2</td>
              <td>Cell 2</td>
              <td>Cell 2</td>
              <td>Cell 2</td>
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
            <tr>
              <td>Cell 1</td>
              <td>Cell 2</td>
              <td>Cell 2</td>
              <td>Cell 2</td>
              <td>Cell 2</td>
              <td>Cell 2</td>
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
            <tr>
              <td>Cell 1</td>
              <td>Cell 2</td>
              <td>Cell 2</td>
              <td>Cell 2</td>
              <td>Cell 2</td>
              <td>Cell 2</td>
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
            <tr>
              <td>Cell 1</td>
              <td>Cell 2</td>
              <td>Cell 2</td>
              <td>Cell 2</td>
              <td>Cell 2</td>
              <td>Cell 2</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Panel;
