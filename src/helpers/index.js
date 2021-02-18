export const mapRentsToProps = (state) => {
  const { rentsReducer, sessionReducer } = state;
  return { rents: rentsReducer.rents, session: sessionReducer.session };
};

export const mapCarsToProps = (state) => {
  const { carsReducer, sessionReducer } = state;
  return { cars: carsReducer.cars, session: sessionReducer.session };
};

export const mapSessionToProps = (state) => {
  const { sessionReducer } = state;
  return { session: sessionReducer.session };
};

export const differenceInDays = (date1, time1, date2, time2) => {
  console.log(date1);
  console.log(time1);
  console.log(date2);
  console.log(time2);
  let firstDate = new Date(`${date1} ${time1}`);
  let secondDate = new Date(`${date2} ${time2}`);
  let differenceInTime = secondDate.getTime() - firstDate.getTime();
  return Math.ceil(differenceInTime / (1000 * 3600 * 24));
};
