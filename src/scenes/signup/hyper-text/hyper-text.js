import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './hyper-text.css';

class HyperText extends Component {
  render() {
    return (
      <p className="signin_hypertext">
        Already have an account?
        <Link to="/signin" className="hyper-link">SIGN IN</Link>
      </p>
    );
  }
}

export default HyperText;