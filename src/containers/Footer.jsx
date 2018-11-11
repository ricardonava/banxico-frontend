import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

import FooterText from '../components/FooterText';

const styles = () => ({
  root: {
    borderTopStyle: 'solid',
    borderTopColor: '#CE1126',
    borderTopWidth: '5px',
    width: 'auto',
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

const Footer = (props) => {
  const { classes } = props;

  return (
    <footer className={classes.root}>
      <Toolbar>
        <FooterText />
      </Toolbar>
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Footer);
