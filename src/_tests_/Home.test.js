import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import Home from '../components/Home';
import store from './test_store/index';

describe('rendered Home', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>,
  );

  test('has Text element', () => {
    const element = screen.getByText(/LATEST MODELS/i);
    expect(element).toBeInTheDocument();
  });
});
