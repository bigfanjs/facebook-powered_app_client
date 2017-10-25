import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import Button from 'material-ui/Button';

import TextField from '../../../components/render-field';
import { required, email, minLength, maxLength } from '../../../services/validations';

class Form extends Component {
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
        <Button
          type="submit"
          color="primary"
          raised>
          Submit
        </Button>
      </form>
    );
  }
}

export default reduxForm({form: 'signin'})(Form);