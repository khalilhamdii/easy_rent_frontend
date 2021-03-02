import React from 'react';
import { render, screen, waitForElement } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import Cars from '../containers/Cars';
import store from './test_store/index';

describe('rendered Home', () => {
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
          <Cars />
        </BrowserRouter>
      </Provider>,
      container,
    );
  });

  test('has Text element', () => {
    const element = screen.getAllByText('AVAILABLE CARS');
    expect(element[0]).toBeInTheDocument();
  });
});
