import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/ToolBar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import MenuIcon from 'material-ui-icons/Menu';

import './navbar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar position="static">
        <ToolBar>
          <IconButton color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </ToolBar>
        <Typography type="title" color="inherit">Title</Typography>
        <Button color="contrast">Logout</Button>
      </AppBar>
    );
  }
}

export default NavBar;