/* globals FB */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Async from './components/async-component';
import PrivateRoute from './components/private-route';
import {getLoginStatus} from './actions/fb-login-status';

import './App.css';

const Home = Async(() => import('./scenes/home'));
const Signin = Async(() => import('./scenes/signin'));
const Signup = Async(() => import('./scenes/signup'));

class App extends Component {
  componentWillMount() {
    window.fbAsyncInit = () => {
      FB.init({
        appId            : '325131021294419',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v2.10'
      });

      this.props.dispatch(getLoginStatus());
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
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
export default connect(mapStateToProps)(App);