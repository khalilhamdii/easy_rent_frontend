import React from 'react';
import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import store from './test_store/index';
import App from '../components/App';
import Home from '../components/Home';
import Cars from '../containers/Cars';
import Profil from '../components/Profil';
import SideBar from '../components/SideBar';

const { act } = TestRenderer;
describe('Snapshots', () => {
  it('renders App correctly', () => {
    let tree;
    act(() => {
      tree = TestRenderer.create(<App />).toJSON();
    });

    expect(tree).toMatchSnapshot();
  });

  it('renders Home correctly', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders SideBar correctly', () => {
    act(() => {
      const tree = TestRenderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <SideBar />
          </BrowserRouter>
        </Provider>,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  it('renders Cars correctly', () => {
    act(() => {
      const tree = TestRenderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <Cars />
          </BrowserRouter>
        </Provider>,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  it('renders Profil correctly', () => {
    act(() => {
      const tree = TestRenderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <Profil />
          </BrowserRouter>
        </Provider>,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
