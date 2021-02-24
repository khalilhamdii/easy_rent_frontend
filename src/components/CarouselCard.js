import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CarouselCard = (props) => {
  const { car } = props;
  return (
    <div className="card mx-2" style={{ borderStyle: 'none' }}>
      <img className="card-img-top w-100 d-block" src={car.carImg} />
      <div className="card-body" style={{ padding: '0px' }}>
        <h4 className="card-title" style={{ fontSize: '14px' }}>
          <Link to={`/cars/${car.id}`} style={{ color: '#97BF0F' }}>
            {car.model}
          </Link>
        </h4>
        <p className="text-muted" style={{ fontSize: '12px' }}>
          {`${car.color}, ${car.bodyStyle}, luggages: ${car.luggages}, ${car.transmission}, ${car.emissionsClass}`}
          <br />
        </p>
      </div>
    </div>
  );
};

CarouselCard.propTypes = {
  car: PropTypes.shape({
    model: PropTypes.string,
    carImg: PropTypes.string,
    color: PropTypes.string,
    bodyStyle: PropTypes.string,
    luggages: PropTypes.string,
    transmission: PropTypes.string,
    emissionsClass: PropTypes.string,
  }).isRequired,
};

export default CarouselCard;
