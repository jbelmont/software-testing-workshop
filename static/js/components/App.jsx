import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from '../store/store';

import CodeCraftsmanship from './CodeCraftsmanship.jsx';
import Main from './Main.jsx';
import UserDetails from './UserDetails.jsx';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={CodeCraftsmanship}></IndexRoute>
      </Route>
      <Route path="/user/:id" component={UserDetails}></Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('reduxWorkshopContainer'));