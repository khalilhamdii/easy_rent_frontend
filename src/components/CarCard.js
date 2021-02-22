import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const CarCard = (props) => {
  const { car } = props;
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
      <div className="card">
        <img className="card-img-top" src={car.carImg} alt={`${car.model}`} />
        <div className="card-block p-2">
          <h4 className="card-title text-truncate mt-3">{car.model}</h4>
          <div className="text-muted">
            <h6>{`Price per day : ${car.pricePerDay}$`}</h6>
          </div>
        </div>
        <div className="card-footer ">
          {car.color}
          <Link
            to={`/cars/${car.id}`}
            className="btn btn-customized float-right btn-sm"
          >
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};

CarCard.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    model: PropTypes.string,
    carImg: PropTypes.string,
    pricePerDay: PropTypes.string,
  }).isRequired,
};

export default CarCard;
