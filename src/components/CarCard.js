import React from 'react';
import carImg from '../assets/images/download.jpeg';

const CarCard = () => {
  return (
    <div className="card col-3" style={{ borderStyle: 'none' }}>
      <img className="card-img-top w-100 d-block" src={carImg} />
      <div className="card-body" style={{ padding: '0px' }}>
        <h4 className="card-title" style={{ fontSize: '14px' }}>
          Kia Rio 2017
        </h4>
        <p className="text-muted" style={{ fontSize: '12px' }}>
          white, sedan, 4 doors, luggages: 3, petrol, automatic, front-wheel
          drive, euro 6<br />
        </p>
      </div>
    </div>
  );
};

export default CarCard;
