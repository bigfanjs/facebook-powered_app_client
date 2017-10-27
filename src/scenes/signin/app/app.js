import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';

import Form from '../form';
import HyperText from '../hyper-text';
import ErrorLog from '../error-log';
import {signinUser} from '../../../actions/user';

import './app.css';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(data) {
    this.props.dispatch(signinUser(data));
  }

  render() {
    return (
      <div className="signin_container">
        <Paper className="sigin_form">
          <Form onSubmit={this.handleSubmit} />
          <HyperText />
          <ErrorLog />
        </Paper>
      </div>
    );
  }
}

export default connect()(Signin);