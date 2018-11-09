import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  textField: {
    width: 960,
  },
});

const CurrencyInput = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <TextField
        id="standard-number"
        label="MXN"
        value={100.5}
        // onChange={this.handleChange('age')}
        type="number"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
    </div>
  );
};

CurrencyInput.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(CurrencyInput);
