import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useField } from 'formik';

export default function FormDateTimePicker({ name, ...otherProps }) {

    const [field, meta] = useField(name)

    const DateTimeConfig = {
        type: "date",
        fullWidth: true,
        variant: 'outlined',
        ...otherProps,
        ...field,
        InputLabelProps: {
            shrink: true
        },
    }

    if (meta && meta.touched && meta.error) {
        DateTimeConfig.error = true;
        DateTimeConfig.helperText = meta.error
    }

    return (
        <TextField {...DateTimeConfig} />
    );
}
