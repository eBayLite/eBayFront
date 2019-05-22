import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div className="ml-2 mr-2">
        <Button
          type="button" 
          class="btn btn-warning btn-sm"
       
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
         <span className="mr-2">
             <i className="fas fa-angle-down" />
        </span>
         Mon compte
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <Link to="/accueil">
          <MenuItem onClick={this.handleClose}>Mon profil</MenuItem>
          </Link>

          <Link to="/listEnchere">
          <MenuItem onClick={this.handleClose}>Mes enchere</MenuItem>
          </Link>

          <Link to="/login">
          <MenuItem onClick={this.handleClose}>Deconnexion</MenuItem>
          </Link>

          
          
          
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;