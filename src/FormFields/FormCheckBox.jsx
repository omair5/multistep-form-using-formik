import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useField } from 'formik';

export default function FormCheckBox({ label, ...otherProps }) {
    const [field] = useField(otherProps)

    const configCheckBox = {
        color: 'primary',
        ...field
    }
    return (
        <FormControlLabel
            control={
                <Checkbox {...configCheckBox} />
            }
            label={label}
        />
    );
}
