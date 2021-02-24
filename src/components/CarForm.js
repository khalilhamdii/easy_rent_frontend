import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

const CarForm = props => {
  const { formStatus, handleAddCarClick, handleAddCar } = props;
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => {
    handleAddCar(data);
    handleAddCarClick();
  };
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
              Add a new car
            </h4>
            <button
              onClick={handleAddCarClick}
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
                />
                {errors.model && errors.model.type === 'required' && (
                  <span className="text-danger">This is required</span>
                )}
                {errors.model && errors.model.type === 'minLength' && (
                  <span className="text-danger">Minimum Length is 4</span>
                )}
              </div>
              <div className="form-group col-6">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  COLOR:
                </label>
                <input
                  name="color"
                  ref={register({
                    required: true,
                    maxLength: 10,
                    minLength: 2,
                  })}
                  className="form-control"
                  type="text"
                  placeholder="Please enter car color..."
                />
                {errors.color && errors.color.type === 'required' && (
                  <span className="text-danger">This is required</span>
                )}
              </div>
              <div className="form-group col-6">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  BODY STYLE:
                </label>
                <input
                  name="bodyStyle"
                  ref={register({
                    required: true,
                    maxLength: 10,
                    minLength: 2,
                  })}
                  className="form-control"
                  type="text"
                  placeholder="Please enter car body style..."
                />
                {errors.bodyStyle && errors.bodyStyle.type === 'required' && (
                  <span className="text-danger">This is required</span>
                )}
              </div>
              <div className="form-group col-6">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  PRICE PER DAY:
                </label>
                <input
                  name="pricePerDay"
                  type="number"
                  ref={register({
                    required: true,
                    min: 5,
                  })}
                  className="form-control"
                  placeholder="Please enter car price per day..."
                />
                {errors.pricePerDay
                  && errors.pricePerDay.type === 'required' && (
                    <span className="text-danger">This is required</span>
                )}
              </div>
              <div className="form-group col-6">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  DOORS:
                </label>
                <input
                  name="doors"
                  type="number"
                  ref={register({
                    required: true,
                    min: 2,
                  })}
                  className="form-control"
                  placeholder="Please enter the number of doors..."
                />
                {errors.doors && errors.doors.type === 'required' && (
                  <span className="text-danger">This is required</span>
                )}
              </div>
              <div className="form-group col-6">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  LUGGAGES:
                </label>
                <input
                  name="luggages"
                  type="number"
                  ref={register({
                    required: true,
                    min: 0,
                  })}
                  className="form-control"
                  placeholder="Please enter the number of luggages..."
                />
                {errors.luggages && errors.luggages.type === 'required' && (
                  <span className="text-danger">This is required</span>
                )}
              </div>
              <div className="form-group col-6">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  SEATS:
                </label>
                <input
                  name="seats"
                  type="number"
                  ref={register({
                    required: true,
                    min: 2,
                  })}
                  className="form-control"
                  placeholder="Please enter the number of seats..."
                />
                {errors.seats && errors.seats.type === 'required' && (
                  <span className="text-danger">This is required</span>
                )}
              </div>
              <div className="form-group col-6">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  EMISSION CLASS:
                </label>
                <input
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
                {errors.emissionsClass
                  && errors.emissionsClass.type === 'required' && (
                    <span className="text-danger">This is required</span>
                )}
              </div>
              <div className="form-group col-6">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  TRANSMISSION:
                </label>
                <input
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
                {errors.transmission
                  && errors.transmission.type === 'required' && (
                    <span className="text-danger">This is required</span>
                )}
              </div>
              <div className="form-group col-6">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  ENGINE:
                </label>
                <input
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
                {errors.engine && errors.engine.type === 'required' && (
                  <span className="text-danger">This is required</span>
                )}
              </div>
              <div className="form-group col-6">
                <label className="text-muted" style={{ fontWeight: 'bold' }}>
                  RENT DEPOSIT:
                </label>
                <input
                  name="rentDeposit"
                  type="number"
                  ref={register({
                    required: true,
                    min: 50,
                  })}
                  className="form-control"
                  placeholder="Please enter the rent deposit amount..."
                />
                {errors.rentDeposit
                  && errors.rentDeposit.type === 'required' && (
                    <span className="text-danger">This is required</span>
                )}
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
                {errors.carImg && errors.carImg.type === 'required' && (
                  <span className="text-danger">This is required</span>
                )}
              </div>
              <div className="col-12 text-right">
                <button
                  onClick={handleAddCarClick}
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

CarForm.propTypes = {
  formStatus: PropTypes.bool.isRequired,
  handleAddCarClick: PropTypes.func.isRequired,
  handleAddCar: PropTypes.func.isRequired,
};
export default CarForm;
