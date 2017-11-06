import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';

import {signoutUser} from '../../../actions/user';

import './navbar.css';

class NavBar extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  
  constructor(props) {
    super(props);

    this.handleSignout = this.handleSignout.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }
  
  handleSignout() {
    localStorage.removeItem('jwt');
    this.props.dispatch(signoutUser());
  }
  
  handleBack() {
    this.context.router.history.push('/');
  }

  render() {
    return (
      <div className="navbar">
        <AppBar position="fixed">
          <ToolBar>
            <IconButton color="contrast" aria-label="Menu" className="navbar_menu_icon">
              <ArrowBackIcon onClick={this.handleBack} />
            </IconButton>
            <Typography type="title" color="inherit" className="navbar_title">Album</Typography>
            <Button color="contrast" onClick={this.handleSignout}>Logout</Button>
          </ToolBar>
        </AppBar>
      </div>
    );
  }
}

export default connect()(NavBar);