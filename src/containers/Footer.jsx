import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import FooterText from '../components/FooterText';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const Footer = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <FooterText />
      </footer>
    </div>
  );
};

Footer.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Footer);
