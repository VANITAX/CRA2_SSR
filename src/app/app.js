import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import './app.module.scss';
import Page from './components/page';

const App = () => (
  <div id="app">
    <div id="content">
      <Page id="homepage" >
        <h1>HelloWorld</h1>
      </Page>
    </div>
  </div>
)

export default connect(state=>state)(App);
