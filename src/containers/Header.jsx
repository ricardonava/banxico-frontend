import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import HeaderLogo from '../components/HeaderLogo';
import CurrencyInput from '../components/CurrencyInput';

// const Header = () => (
//   <header>
//     <HeaderLogo />
//     <CurrencyInput />
//   </header>
// );

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//   },
// });

const Header = () => (
  <header>
    <Grid container direction="column">
      <Grid item>
        <HeaderLogo />
      </Grid>
      <Grid item>
        <CurrencyInput />
      </Grid>
    </Grid>
  </header>
);

export default Header;
