import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

// import { isServer } from '../store';
import Routes from './routes';

import './app.module.scss';

const App = () => (
  <div id="app">
    <div id="content">
      <Routes />
    </div>
  </div>
)

export default withRouter(connect(state=>state)(App));
