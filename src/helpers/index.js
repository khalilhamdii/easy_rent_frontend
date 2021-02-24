export const mapRentsToProps = state => {
  const { rentsReducer, sessionReducer } = state;
  return { rents: rentsReducer.rents, session: sessionReducer.session };
};

export const mapCarsToProps = state => {
  const { carsReducer, sessionReducer } = state;
  return { cars: carsReducer.cars, session: sessionReducer.session };
};

export const mapSessionToProps = state => {
  const { sessionReducer } = state;
  return { session: sessionReducer.session };
};

export const differenceInDays = (date1, time1, date2, time2) => {
  const firstDate = new Date(`${date1} ${time1}`);
  const secondDate = new Date(`${date2} ${time2}`);
  const differenceInTime = secondDate.getTime() - firstDate.getTime();
  return Math.ceil(differenceInTime / (1000 * 3600 * 24));
};
