import React, {Component} from 'react';
import {connect} from 'react-redux';

import Form from '../form';
import {signinUser} from '../../../actions/user';

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
      <div>
        <Form onSubmit={this.handleSubmit} />
        <span style={{color: 'red'}}>{ this.props.error }</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.user.error
});
export default connect(mapStateToProps)(Signin);