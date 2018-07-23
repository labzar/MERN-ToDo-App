import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    position: "fixed",
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const AppNavBar = props => {
  const { classes } = props;
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.flex}>
          ToDo App
          </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

AppNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppNavBar);