import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Async from './components/async-component';
import PrivateRoute from './components/private-route';

import './App.css';

const Home = Async(() => import('./scenes/home'));
const Signin = Async(() => import('./scenes/signin'));
const Signup = Async(() => import('./scenes/signup'));

class App extends Component {
  render() {
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

export default App;