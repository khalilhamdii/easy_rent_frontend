import car_1 from '../assets/images/cars/1.jpeg';
import car_2 from '../assets/images/cars/2.jpeg';

export default {
  sessionReducer: {
    session: {
      status: 'LOGGED_IN',
      user_id: '1',
      userName: 'Khalil Hamdi',
      role: 'USER',
    },
  },
  rentsReducer: {
    rents: [
      {
        id: 1,
        status: true,
        user_id: 1,
        userName: 'John Smith',
        model: 'Kia Rio',
        pickUpDate: '16/02/2020',
        returnDate: '21/02//2020',
        pickUpTime: '',
        returnTime: '',
        location: 'Agency 2',
      },
      {
        id: 2,
        status: true,
        user_id: 2,
        userName: 'John Smith',
        model: 'Golf 7',
        pickUpDate: '16/02/2020',
        returnDate: '21/02//2020',
        pickUpTime: '',
        returnTime: '',
        location: 'Agency 1',
      },
      {
        id: 3,
        status: false,
        user_id: 3,
        userName: 'John Smith',
        model: 'Seat Leon',
        pickUpDate: '16/02/2020',
        returnDate: '21/02//2020',
        pickUpTime: '',
        returnTime: '',
        location: 'Agency 3',
      },
    ],
  },
  carsReducer: {
    cars: [
      {
        id: 1,
        model: 'Kia Rio',
        color: 'White',
        body_style: 'Sedan',
        price_per_day: '15$',
        doors: '4',
        luggages: '3',
        seats: '5',
        engine: 'V',
        emissions_class: 'Euro 6',
        transmission: 'Automatic',
        rent_deposit: '300$',
        car_img: car_1,
      },
      {
        id: 2,
        model: 'Nissan Sunny',
        color: 'White',
        body_style: 'Sedan',
        price_per_day: '20$',
        doors: '4',
        luggages: '2',
        seats: '5',
        engine: 'V',
        emissions_class: 'Euro 6',
        transmission: 'Automatic',
        rent_deposit: '300$',
        car_img: car_1,
      },
      {
        id: 3,
        model: 'Kia Rio',
        color: 'White',
        body_style: 'Sedan',
        price_per_day: '15$',
        doors: '4',
        luggages: '3',
        seats: '5',
        engine: 'V',
        emissions_class: 'Euro 6',
        transmission: 'Automatic',
        rent_deposit: '300$',
        car_img: car_1,
      },
      {
        id: 4,
        model: 'Nissan Sunny',
        color: 'White',
        body_style: 'Sedan',
        price_per_day: '20$',
        doors: '4',
        luggages: '2',
        seats: '5',
        engine: 'V',
        emissions_class: 'Euro 6',
        transmission: 'Automatic',
        rent_deposit: '300$',
        car_img: car_2,
      },
      {
        id: 5,
        model: 'Kia Rio',
        color: 'White',
        body_style: 'Sedan',
        price_per_day: '15$',
        doors: '4',
        luggages: '3',
        seats: '5',
        engine: 'V',
        emissions_class: 'Euro 6',
        transmission: 'Automatic',
        rent_deposit: '300$',
        car_img: car_1,
      },
      {
        id: 6,
        model: 'Kia Rio',
        color: 'White',
        body_style: 'Sedan',
        price_per_day: '15$',
        doors: '4',
        luggages: '3',
        seats: '5',
        engine: 'V',
        emissions_class: 'Euro 6',
        transmission: 'Automatic',
        rent_deposit: '300$',
        car_img: car_1,
      },
      {
        id: 7,
        model: 'Nissan Sunny',
        color: 'White',
        body_style: 'Sedan',
        price_per_day: '20$',
        doors: '4',
        luggages: '2',
        seats: '5',
        engine: 'V',
        emissions_class: 'Euro 6',
        transmission: 'Automatic',
        rent_deposit: '300$',
        car_img: car_2,
      },
      {
        id: 8,
        model: 'Nissan Sunny',
        color: 'White',
        body_style: 'Sedan',
        price_per_day: '20$',
        doors: '4',
        luggages: '2',
        seats: '5',
        engine: 'V',
        emissions_class: 'Euro 6',
        transmission: 'Automatic',
        rent_deposit: '300$',
        car_img: car_2,
      },
      {
        id: 9,
        model: 'Kia Rio',
        color: 'White',
        body_style: 'Sedan',
        price_per_day: '15$',
        doors: '4',
        luggages: '3',
        seats: '5',
        engine: 'V',
        emissions_class: 'Euro 6',
        transmission: 'Automatic',
        rent_deposit: '300$',
        car_img: car_1,
      },
      {
        id: 10,
        model: 'Nissan Sunny',
        color: 'White',
        body_style: 'Sedan',
        price_per_day: '20$',
        doors: '4',
        luggages: '2',
        seats: '5',
        engine: 'V',
        emissions_class: 'Euro 6',
        transmission: 'Automatic',
        rent_deposit: '300$',
        car_img: car_2,
      },
    ],
  },
};
