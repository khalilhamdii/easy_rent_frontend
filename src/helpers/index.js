export const mapRentsToProps = (state) => {
  const { rentsReducer } = state;
  return { rents: rentsReducer.rents };
};
