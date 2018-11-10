import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import CurrencyInput from '../components/CurrencyInput';
import CurrencyCard from '../components/CurrencyCard';

const styles = theme => ({
  root: {
    backgroundColor: '#f4f7f6',
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  main: {
    width: '960px',
    margin: theme.spacing.unit * 3,
  },
});

const Main = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <main className={classes.main}>
        <CurrencyInput />
        <Grid container spacing={8} justify="center">
          {[1, 2, 3, 4, 5, 6].map(() => (
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <CurrencyCard />
            </Grid>
          ))}
        </Grid>
      </main>
    </div>
  );
};

Main.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Main);
