import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import CurrencyCard from '../components/CurrencyCard';

const styles = theme => ({
  main: {
    margin: theme.spacing.unit * 3,
  },
});

const Main = (props) => {
  const { classes } = props;

  return (
    <main className={classes.main}>
      <CurrencyCard />
    </main>
  );
};

Main.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Main);
