import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

const CarEditForm = props => {
  const {
    editFormStatus, handleEditCarClick, handleEditCar, car,
  } = props;
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    handleEditCar(data);
    handleEditCarClick();
  };
  return (
    <div
      className="modal fade show"
      role="dialog"
      tabIndex={-1}
      style={{
        display: editFormStatus ? 'block' : 'none',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header" style={{ background: '#97BF0F' }}>
            <h4 className="modal-title" style={{ color: 'white' }}>
              Add a new car
            </h4>
            <button
              onClick={handleEditCarClick}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body ">
            <form
              className="d-flex flex-wrap "
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-group col-6">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  MODEL:
                </label>
                <input
                  name="model"
                  ref={register({
                    required: true,
                    maxLength: 20,
                    minLength: 4,
                  })}
                  className="form-control"
                  type="text"
                  placeholder="Please enter car model"
                  defaultValue={car.model}
                />
              </div>
              <div className="form-group col-6">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  COLOR:
                </label>
                <input
                  defaultValue={car.color}
                  name="color"
                  ref={register({
                    required: true,
                    maxLength: 10,
                    minLength: 3,
                  })}
                  className="form-control"
                  type="text"
                  placeholder="Please enter car color..."
                />
              </div>
              <div className="form-group col-6">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  BODY STYLE:
                </label>
                <input
                  defaultValue={car.bodyStyle}
                  name="bodyStyle"
                  ref={register({
                    required: true,
                    maxLength: 20,
                    minLength: 4,
                  })}
                  className="form-control"
                  type="text"
                  placeholder="Please enter car body style..."
                />
              </div>
              <div className="form-group col-6">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  PRICE PER DAY:
                </label>
                <input
                  defaultValue={car.pricePerDay}
                  name="pricePerDay"
                  type="number"
                  ref={register({
                    required: true,
                    min: 5,
                  })}
                  className="form-control"
                  placeholder="Please enter car price per day..."
                />
              </div>
              <div className="form-group col-6">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  DOORS:
                </label>
                <input
                  defaultValue={car.doors}
                  name="doors"
                  type="number"
                  ref={register({
                    required: true,
                    min: 2,
                  })}
                  className="form-control"
                  placeholder="Please enter the number of doors..."
                />
              </div>
              <div className="form-group col-6">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  LUGGAGES:
                </label>
                <input
                  defaultValue={car.luggages}
                  name="luggages"
                  type="number"
                  ref={register({
                    required: true,
                    min: 0,
                  })}
                  className="form-control"
                  placeholder="Please enter the number of luggages..."
                />
              </div>
              <div className="form-group col-6">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  SEATS:
                </label>
                <input
                  defaultValue={car.seats}
                  name="seats"
                  type="number"
                  ref={register({
                    required: true,
                    min: 2,
                  })}
                  className="form-control"
                  placeholder="Please enter the number of seats..."
                />
              </div>
              <div className="form-group col-6">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  EMISSION CLASS:
                </label>
                <input
                  defaultValue={car.emissionsClass}
                  name="emissionsClass"
                  type="text"
                  ref={register({
                    required: true,
                    maxLength: 20,
                    minLength: 4,
                  })}
                  className="form-control"
                  placeholder="Please enter the emission class type..."
                />
              </div>
              <div className="form-group col-6">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  TRANSMISSION:
                </label>
                <input
                  defaultValue={car.transmission}
                  name="transmission"
                  type="text"
                  ref={register({
                    required: true,
                    maxLength: 20,
                    minLength: 4,
                  })}
                  className="form-control"
                  placeholder="Please enter transmission type..."
                />
              </div>
              <div className="form-group col-6">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  ENGINE:
                </label>
                <input
                  defaultValue={car.engine}
                  name="engine"
                  type="text"
                  ref={register({
                    required: true,
                    maxLength: 20,
                    minLength: 4,
                  })}
                  className="form-control"
                  placeholder="Please enter engine type..."
                />
              </div>
              <div className="form-group col-6">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  RENT DEPOSIT:
                </label>
                <input
                  defaultValue={car.rentDeposit}
                  name="rentDeposit"
                  type="number"
                  ref={register({
                    required: true,
                    min: 50,
                  })}
                  className="form-control"
                  placeholder="Please enter the rent deposit amount..."
                />
              </div>
              <div className="form-group col-6">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  UPLOAD CAR IMAGE:
                </label>
                <input
                  name="carImg"
                  type="file"
                  ref={register({
                    required: true,
                  })}
                  className="form-control"
                  accept="image/*"
                />
              </div>
              <div className="col-12 text-right">
                <button
                  onClick={handleEditCarClick}
                  className="btn btn-light mr-4"
                  type="button"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button className="btn btn-customized" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

CarEditForm.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    model: PropTypes.string,
    color: PropTypes.string,
    bodyStyle: PropTypes.string,
    doors: PropTypes.string,
    luggages: PropTypes.string,
    seats: PropTypes.string,
    emissionsClass: PropTypes.string,
    transmission: PropTypes.string,
    engine: PropTypes.string,
    rentDeposit: PropTypes.string,
    pricePerDay: PropTypes.string,
    carImg: PropTypes.string,
  }).isRequired,
  editFormStatus: PropTypes.bool.isRequired,
  handleEditCarClick: PropTypes.func.isRequired,
  handleEditCar: PropTypes.func.isRequired,
};
export default CarEditForm;
