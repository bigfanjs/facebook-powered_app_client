import React, {Component} from 'react';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import MenuIcon from 'material-ui-icons/Menu';

import {signoutUser} from '../../actions/user';

import './navbar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.handleSignout = this.handleSignout.bind(this);
  }
  
  handleSignout() {
    localStorage.removeItem('jwt');
    this.props.dispatch(signoutUser());
  }
  
  render() {
    return (
      <div className="navbar">
        <AppBar position="fixed">
          <ToolBar>
            <IconButton color="contrast" aria-label="Menu" className="navbar_menu_icon">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className="navbar_title">Albums</Typography>
            <Button color="contrast" onClick={this.handleSignout}>Logout</Button>
          </ToolBar>
        </AppBar>
      </div>
    );
  }
}

export default connect()(NavBar);