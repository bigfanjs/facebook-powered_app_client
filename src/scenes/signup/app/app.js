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
    return (
      <div className="signup_container">
        <Form onSubmit={this.handleSubmit} />
        <span>{ this.props.error }</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.user.error
});
export default connect(mapStateToProps)(Signup);