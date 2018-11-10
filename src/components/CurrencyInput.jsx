import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing.unit * 1,
    backgroundColor: 'white',
  },
  textField: {
    width: '100%',
  },
});

const CurrencyInput = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <TextField
        id="standard-number"
        label="MXN"
        value=""
        // onChange={this.handleChange('age')}
        type="number"
        className={classes.textField}
        variant="outlined"
      />
    </div>
  );
};

CurrencyInput.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(CurrencyInput);
