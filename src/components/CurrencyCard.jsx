import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  pos: {
    marginBottom: 12,
  },
};

const CurrencyCard = (props) => {
  const {
    classes, currencyResult, currencyValue, currencyPeriod, currencyName,
  } = props;
  return (
    <Card className={classes.card} elevation="1" square="true">
      <CardContent>
        <Typography component="p">{currencyPeriod}</Typography>
        <Typography variant="h4" component="h2">
          {currencyResult}
          {' '}
          {currencyName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {currencyValue}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Mas Informacion
        </Button>
      </CardActions>
    </Card>
  );
};

CurrencyCard.propTypes = {
  classes: PropTypes.shape().isRequired,
  currencyResult: PropTypes.string.isRequired,
  currencyValue: PropTypes.string.isRequired,
  currencyPeriod: PropTypes.string.isRequired,
  currencyName: PropTypes.string.isRequired,
};

export default withStyles(styles)(CurrencyCard);
