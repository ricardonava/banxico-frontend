import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

import HeaderLogo from '../components/HeaderLogo';

const styles = () => ({
  root: {
    backgroundColor: '#282a2b',
    borderBottomStyle: 'solid',
    borderBottomColor: '#006847',
    borderBottomWidth: '5px',
  },
});

const Header = (props) => {
  const { classes } = props;

  return (
    <header className={classes.root}>
      <Toolbar>
        <HeaderLogo />
      </Toolbar>
    </header>
  );
};

Header.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Header);
