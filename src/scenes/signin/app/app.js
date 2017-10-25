import React, {Component} from 'react';
import {connect} from 'react-redux';

import Form from '../form';
import {signinUser} from '../../../actions/user';

class Signin extends Component {
  handleSubmit(data) {
    this.props.dispatch(signinUser(data));
  }

  render() {
    return <Form onSubmit={this.handleSubmit} />;
  }
}

export default connect()(Signin);