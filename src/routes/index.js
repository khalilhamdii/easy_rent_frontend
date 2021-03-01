import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCars } from '../actions/index';
import { mapSessionToProps } from '../helpers/index';
import Home from '../components/Home';
import SideBar from '../components/SideBar';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Cars from '../containers/Cars';
import CarDetails from '../components/CarDetails';
import Profil from '../components/Profil';
import Panel from '../components/Panel';
import { apiGetCars } from '../axios';

const Routes = props => {
  const { addCars } = props;
  useEffect(() => {
    apiGetCars(addCars);
  }, []);
  return (
    <BrowserRouter>
      <div
        className="d-flex"
        style={{
          position: 'relative',
        }}
      >
        <SideBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/cars" exact component={Cars} />
          <Route path="/cars/:id" exact component={CarDetails} />
          <Route path="/profil" exact component={Profil} />
          <Route path="/panel" exact component={Panel} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

Routes.propTypes = {
  session: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
    user: PropTypes.shape({
      id: PropTypes.number,
      userName: PropTypes.string,
      role: PropTypes.string,
    }),
  }).isRequired,
  addCars: PropTypes.func.isRequired,
};

export default connect(mapSessionToProps, {
  addCars,
})(Routes);
