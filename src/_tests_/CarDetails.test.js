import React from 'react';
import { render, screen, waitForElement } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import CarDetails from '../components/CarDetails';
import store from './test_store/index';

describe('rendered CarDetails', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  const match = {
    params: { id: '1' },
  };

  test('has Text element', () => {
    waitForElement(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CarDetails match={match} />
          </BrowserRouter>
        </Provider>,
        container,
      );
    });

    const element = screen.getByText(/Rent car/i);
    expect(element).toBeInTheDocument();
  });
});
