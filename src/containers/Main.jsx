import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

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

// const Main = (props) => {
//   const { classes } = props;

//   return (
//     <div className={classes.root}>
//       <main className={classes.main}>
//         <CurrencyInput type="number" label="MXN" />
//         <Grid container spacing={8} justify="center">
//           {[1, 2, 3, 4, 5, 6].map(() => (
//             <Grid item xs={12} sm={6} md={4} lg={4}>
//               <CurrencyCard />
//             </Grid>
//           ))}
//         </Grid>
//       </main>
//     </div>
//   );
// };

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      axiosCurrencies: [{}],
      currencies: {},
    };
  }
  componentDidMount() {
    axios
      .get('https://lit-ridge-70436.herokuapp.com/')
      .then(response => {
        const axiosCurrencies = Object.entries(response.data).map(currency => ({
          name: currency[0],
          value: currency[1].value,
          description: currency[1].description,
          period: currency[1].period,
          series: currency[1].series,
        }));

        this.setState({ axiosCurrencies });
      })
      .catch(error => console.log(error));
  }

  handleCurrencyInput = event => {
    const { axiosCurrencies } = this.state;
    const { value } = event.target;
    this.setState({
      currencies: {
        [axiosCurrencies[0].name]: (value / axiosCurrencies[0].value).toFixed(2),
        [axiosCurrencies[1].name]: (value / axiosCurrencies[1].value).toFixed(2),
        [axiosCurrencies[2].name]: (value / axiosCurrencies[2].value).toFixed(2),
        [axiosCurrencies[3].name]: (value / axiosCurrencies[3].value).toFixed(2),
        [axiosCurrencies[4].name]: (value / axiosCurrencies[4].value).toFixed(2),
        [axiosCurrencies[5].name]: (value / axiosCurrencies[5].value).toFixed(2),
      },
    });
  };

  render() {
    const { axiosCurrencies, currencies } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <main className={classes.main}>
          <CurrencyInput onChange={this.handleCurrencyInput} type={'number'} />
          <Grid container spacing={8} justify="center">
            {axiosCurrencies.map(currency => (
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <CurrencyCard
                  currencyName={currency.name}
                  currencyValue={currency.value}
                  currencyDescription={currency.description}
                  currencyResult={currencies[currency.name] || '0.00'}
                  currencyPeriod={currency.period}
                />
              </Grid>
            ))}
          </Grid>
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Main);
