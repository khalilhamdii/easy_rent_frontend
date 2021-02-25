import React from 'react';
import { render, screen, waitForElement } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import Profil from '../components/Profil';
import store from './test_store/index';

describe('rendered Profil', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  waitForElement(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Profil />
        </BrowserRouter>
      </Provider>,
      container,
    );
  });
  test('has Text element', () => {
    const element = screen.getAllByText(/My rented cars/i);
    expect(element[0]).toBeInTheDocument();
  });
});
