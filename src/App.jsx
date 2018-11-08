import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Header from './containers/Header';
import Main from './containers/Main';
import Footer from './containers/Footer';

const styles = () => ({
  layout: {
    width: 'auto',
  },
});

const App = (props) => {
  const { classes } = props;

  return (
    <div className={classes.layout}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(App);
