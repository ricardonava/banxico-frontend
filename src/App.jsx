import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Header from './containers/Header';
import Main from './containers/Main';
import Footer from './containers/Footer';

const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
