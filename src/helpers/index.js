export const mapRentsToProps = (state) => {
  const { rentsReducer } = state;
  return { rents: rentsReducer.rents };
};

export const mapCarsToProps = (state) => {
  const { carsReducer } = state;
  return { cars: carsReducer.cars };
};
