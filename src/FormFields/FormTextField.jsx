import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useField } from 'formik';

export default function FormTextField({ name, ...otherprops }) {
  const [field, meta] = useField(name)

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