import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Async from './components/async-component';
import PrivateRoute from './components/private-route';

import './App.css';

const Home = Async(() => import('./scenes/home'));
const Signin = Async(() => import('./scenes/signin'));

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
        </div>
      </Router>
    );
  }
}

export default App;