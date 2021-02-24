import React from 'react';
import { render, screen, waitForElement } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import Login from '../components/Login';
import store from './test_store/index';

describe('rendered Login', () => {
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
          <Login />
        </BrowserRouter>
      </Provider>,
      container,
    );
  });
  test('has Text element', () => {
    const element = screen.getAllByText(/Log In/i);
    expect(element[0]).toBeInTheDocument();
  });
});
