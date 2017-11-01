/* globals FB */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Async from './components/async-component';
import PrivateRoute from './components/private-route';
import {load} from './actions/fb-javascript-sdk';
import {getLoginStatus} from './actions/fb-login';

import './App.css';

const Home = Async(() => import('./scenes/home'));
const Signin = Async(() => import('./scenes/signin'));
const Signup = Async(() => import('./scenes/signup'));

class App extends Component {
  componentWillMount() {
    const {getStatus, loadSDK} = this.props;

    loadSDK().then(() => {
      this.initiateSDK();
      getStatus();
    });
  }

  initiateSDK() {
    FB.init({
      appId: '325131021294419',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v2.10'
    });
  }

  render() {
    const {verifying, loading} = this.props;

    if (loading && verifying) {
      return <span>...loading</span>;
    }

    return (
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  verifying: state.user.status === 'verify'
});
const mapDispatchToProps = (dispatch) => ({
  getStatus() {
    dispatch(getLoginStatus());
  },
  loadSDK() {
    return dispatch(load());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(App);