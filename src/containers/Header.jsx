import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import HeaderLogo from '../components/HeaderLogo';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: theme.palette.background.paper,
  },
});

const Header = (props) => {
  const { classes } = props;

  return (
    <header className={classes.root}>
      <AppBar position="relative" className={classes.header}>
        <Toolbar>
          <HeaderLogo />
        </Toolbar>
      </AppBar>
    </header>
  );
};

Header.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Header);
