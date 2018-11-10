import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import FooterText from '../components/FooterText';

const styles = theme => ({
  footer: {
    // backgroundColor: '#282a2b',
    // padding: `${theme.spacing.unit * 6}px 0`,
    borderTopStyle: 'solid',
    borderTopColor: '#CE1126',
    borderTopWidth: '8px',
  },
  footerText: {
    marginLeft: theme.spacing.unit * 3,
  },
});

const Footer = (props) => {
  const { classes } = props;

  return (
    <footer className={classes.footer}>
      <div className={classes.footerText}>
        <FooterText />
      </div>
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Footer);
