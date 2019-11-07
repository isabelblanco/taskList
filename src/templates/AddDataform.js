import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function UncontrolledTextField() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="owner"
          label="Owner"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="contact"
          label="Contact"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="house"
          label="House"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="kind"
          label="Type"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="details"
          label="Details"
          className={classes.textField}
          margin="normal"
        />
      </div>
    </form>
  );
}
