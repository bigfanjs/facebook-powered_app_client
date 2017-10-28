import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';

import Form from '../form';
import HyperText from '../hyper-text';
import ErrorLog from '../error-log';
import {signupUser} from '../../../actions/user';

import './app.css';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(data) {
    this.props.dispatch(signupUser(data));
  }

  render() {
    return (
      <div className="signup_container">
        <Paper className="signup_form">
          <Form onSubmit={this.handleSubmit} />
          <HyperText />
          <ErrorLog />
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.user.error
});
export default connect(mapStateToProps)(Signup);