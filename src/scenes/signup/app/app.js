import React, {Component} from 'react';
import {connect} from 'react-redux';

import Form from '../form';
import {signupUser} from '../../../actions/user';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(data) {
    this.props.dispatch(signupUser(data));
  }

  render() {
    return <Form onSubmit={this.handleSubmit} />;
  }
}

export default connect()(Signup);