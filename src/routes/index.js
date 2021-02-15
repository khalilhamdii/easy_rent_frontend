/* eslint-disable arrow-parens */
import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
import Home from '../components/Home';
import SideBar from '../components/SideBar';
import Login from '../components/login';

const Routes = () => {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <SideBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
// export default connect(mealsStateToProps, { addMeals })(Routes);
