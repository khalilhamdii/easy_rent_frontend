import carImgTest from '../../assets/images/cars/1.jpeg';

const initialState = {
  sessionReducer: {
    session: {
      isLoggedIn: true,
      user: {
        id: 1,
        userName: 'khalil Hamdi',
        role: 'USER',
      },
    },
  },
  carsReducer: {
    cars: [
      {
        id: 1,
        model: 'Kia Rio',
        color: 'White',
        bodyStyle: 'Sedan',
        pricePerDay: '15',
        doors: '4',
        luggages: '3',
        seats: '5',
        engine: 'V',
        emissionsClass: 'Euro 6',
        transmission: 'Automatic',
        rentDeposit: '300',
        carImg: carImgTest,
      },
      {
        id: 2,
        model: 'Kia Rio',
        color: 'White',
        bodyStyle: 'Sedan',
        pricePerDay: '15',
        doors: '4',
        luggages: '3',
        seats: '5',
        engine: 'V',
        emissionsClass: 'Euro 6',
        transmission: 'Automatic',
        rentDeposit: '300',
        carImg: carImgTest,
      },
      {
        id: 3,
        model: 'Kia Rio',
        color: 'White',
        bodyStyle: 'Sedan',
        pricePerDay: '15',
        doors: '4',
        luggages: '3',
        seats: '5',
        engine: 'V',
        emissionsClass: 'Euro 6',
        transmission: 'Automatic',
        rentDeposit: '300',
        carImg: carImgTest,
      },
    ],
  },
};

export default initialState;
