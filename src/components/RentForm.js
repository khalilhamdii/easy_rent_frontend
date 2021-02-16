import React from 'react';

const RentForm = (props) => {
  const { formStatus, handleRentClick } = props;

  return (
    <div
      className="modal fade show"
      role="dialog"
      tabIndex={-1}
      style={{
        display: formStatus ? 'block' : 'none',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header" style={{ background: '#97BF0F' }}>
            <h4 className="modal-title" style={{ color: 'white' }}>
              Car rent form
            </h4>
            <button
              onClick={handleRentClick}
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
              <button
                onClick={handleRentClick}
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentForm;
