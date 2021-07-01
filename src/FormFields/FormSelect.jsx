import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { useField, useFormikContext } from 'formik'

// for SELECT we have to handle onChange method by ourself

const FormSelect = ({ name, options, ...otherProps }) => {


    const [field, meta] = useField(name)
    const { setFieldValue } = useFormikContext

    const HandleChange = (e) => {
        setFieldValue(e.target.value)
    }

    const SelectConfig = {
        select: true,
        fullWidth: true,
        variant: 'outlined',
        onChange: HandleChange,
        ...field,
        ...otherProps,
    }

    if (meta && meta.touched && meta.error) {
        console.log()
        SelectConfig.error = true;
        SelectConfig.helperText = meta.error
    }

    return (
        <TextField {...SelectConfig} >
            {Object.values(options).map((option, index) => (
                <MenuItem key={index} value={option}>
                    {option}
                </MenuItem>
            ))}
        </TextField>
    );
}

export default FormSelect;