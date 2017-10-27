import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './hyper-text.css';

class HyperText extends Component {
  render() {
    return (
      <p className="signin_hypertext">
        Don't have an account?
        <Link to="/signup" className="hyper-link">SIGN UP</Link>
      </p>
    );
  }
}

export default HyperText;