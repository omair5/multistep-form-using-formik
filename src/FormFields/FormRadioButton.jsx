import React from 'react';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useField } from 'formik';


export default function FormRadioButton({ label, ...otherProps }) {

    const [field] = useField(otherProps)

    const radioButtonConfig = {
        label: label,
        ...field
    }

    return (
        <FormControlLabel
            control={<Radio color="primary" />}
            {...radioButtonConfig}
        />
    );
}