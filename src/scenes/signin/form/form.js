import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import Button from 'material-ui/Button';

import TextField from '../../../components/render-field';
import { required, email, minLength, maxLength } from '../../../services/validations';

class Form extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    if (this.props.authenticated) {
      this.context.router.history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.authenticated) {
      this.context.router.history.push('/');
    }
  }

  render() {
    const handleSubmit = this.props.handleSubmit;

    return (
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Field
          name="email"
          label="Email"
          component={TextField}
          validate={[required, email]}
        />
        <Field
          name="password"
          type="password"
          label="Password"
          component={TextField}
          validate={[required, minLength(8), maxLength(16)]}
        />
        <Button type="submit" color="primary" raised>Submit</Button>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  authenticated: state.user.status === 'authenticated',
  loading: state.user.loading
});
const FormContainer = connect(mapStateToProps)(Form);
export default reduxForm({form: 'signin'})(FormContainer);