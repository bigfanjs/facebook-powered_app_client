import React, { Component } from 'react';
import {connect} from 'react-redux';

import {signoutUser} from '../../actions/user';

class componentName extends Component {
  constructor(props) {
    super(props);
    this.handleSignout = this.handleSignout.bind(this);
  }

  handleSignout() {
    localStorage.removeItem('jwt');
    this.props.dispatch(signoutUser());
  }

  render () {
    return (
      <div>
        <span>Home Page(Private)</span>
        <button onClick={this.handleSignout}>Logout</button>
      </div>
    );
  }
}

export default connect()(componentName);