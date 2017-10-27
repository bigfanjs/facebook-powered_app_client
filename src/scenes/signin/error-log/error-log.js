import React from 'react';
import {connect} from 'react-redux';

import './error-log.css';

const ErrorLog = ({error}) => {
  if (!error) return null;

  return <span className="siginin_error_log">{ error }</span>;
};

const mapStateToProps = (state) => ({
  error: state.user.error
});
export default connect(mapStateToProps)(ErrorLog);