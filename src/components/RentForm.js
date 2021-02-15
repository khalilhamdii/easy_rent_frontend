import React from 'react';

const RentForm = () => {
  return (
    <div className="modal fade show" role="dialog" tabIndex={-1}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header" style={{ background: '#97BF0F' }}>
            <h4 className="modal-title" style={{ color: 'white' }}>
              Car rent form
            </h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  FIRST AND LAST NAME:
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Please enter your name"
                />
              </div>
              <div className="form-group">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  MODEL:
                </label>
                <select className="form-control">
                  <optgroup label="This is a group">
                    <option value={12} selected>
                      This is item 1
                    </option>
                    <option value={13}>This is item 2</option>
                    <option value={14}>This is item 3</option>
                  </optgroup>
                </select>
              </div>
              <div className="form-group">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  PICK-UP DATE AND TIME:
                </label>
                <div className="d-flex">
                  <input className="form-control w-50" type="date" />
                  <input className="form-control w-50" type="time" />
                </div>
              </div>
              <div className="form-group">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  RETURN DATE AND TIME:
                </label>
                <div className="d-flex">
                  <input className="form-control w-50" type="date" />
                  <input className="form-control w-50" type="time" />
                </div>
              </div>
              <div className="form-group">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  LOCATION:
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Please enter location"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-light"
              type="button"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              className="btn btn-primary"
              type="submit"
              style={{ background: '#97BF0F', borderStyle: 'none' }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentForm;
