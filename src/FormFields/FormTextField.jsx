import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useField } from 'formik';

// const useStyles = makeStyles((theme) => ({

// }));

export default function FormTextField({ name, ...otherprops }) {
  // const classes = useStyles();

  const [field, meta] = useField(name)

  console.log('textfield', field)

  const configTextField = {
    fullWidth: true,
    variant: 'outlined',
    ...otherprops,
    ...field
  }

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error
  }

  return (
    <TextField {...configTextField} />
  );
}
