/* globals FB */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Async from './components/async-component';
import PrivateRoute from './components/private-route';
import LoadingIndicator from './components/loading-indicator';
import {load} from './actions/fb-javascript-sdk';
import {getLoginStatus} from './actions/fb-login';

import './App.css';

const Home = Async(() => import('./scenes/home'));
const Signin = Async(() => import('./scenes/signin'));
const Signup = Async(() => import('./scenes/signup'));
const Album = Async(() => import('./scenes/album'));

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
    const {status, loading} = this.props;

    if (status == null) return null;

    if (loading) {
      return <LoadingIndicator />;
    }

    return (
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/albums/:id" component={Album} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  status: state.user.status
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