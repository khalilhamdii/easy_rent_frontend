export const mapRentsToProps = (state) => {
  const { rentsReducer } = state;
  return { rents: rentsReducer.rents };
};

export const mapCarsToProps = (state) => {
  const { carsReducer, sessionReducer } = state;
  return { cars: carsReducer.cars, session: sessionReducer.session };
};

export const mapSessionToProps = (state) => {
  const { sessionReducer } = state;
  return { session: sessionReducer.session };
};
