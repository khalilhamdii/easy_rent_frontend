/* eslint-disable arrow-parens */
import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
import Home from '../components/Home';
import SideBar from '../components/SideBar';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Cars from '../containers/cars';
import CarDetails from '../components/CarDetails';
import User from '../components/User';
import Panel from '../components/Panel';

const Routes = () => {
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
          <Route path="/user" exact component={User} />
          <Route path="/panel" exact component={Panel} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
// export default connect(mealsStateToProps, { addMeals })(Routes);
