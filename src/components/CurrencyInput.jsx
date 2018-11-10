import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    // display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing.unit * 1,
    backgroundColor: 'white',
  },
  textField: {
    width: '100%',
  },
});

const CurrencyInput = ({
  classes, type, label, onChange,
}) => (
  <div className={classes.root}>
    <TextField
      type={type}
      label={label}
      onChange={onChange}
      className={classes.textField}
      variant="outlined"
    />
  </div>
);

CurrencyInput.propTypes = {
  classes: PropTypes.shape().isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default withStyles(styles)(CurrencyInput);
