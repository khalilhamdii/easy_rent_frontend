import React from 'react';
import { Link } from 'react-router-dom';
const CarCard = (props) => {
  const { car } = props;
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
      <div className="card">
        <img className="card-img-top" src={car.car_img} alt={`${car.model}`} />
        <div className="card-block p-2">
          <h4 className="card-title text-truncate mt-3">{car.model}</h4>
          <div className="meta">
            <h6>{`Price per day : ${car.price_per_day}`}</h6>
          </div>
        </div>
        <div className="card-footer text-success ">
          {car.color}
          <Link
            to={`/cars/${car.id}`}
            className="btn btn-secondary float-right btn-sm"
          >
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
