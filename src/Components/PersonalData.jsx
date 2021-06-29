import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik'
import * as yup from 'yup';
import FormTextField from '../FormFields/FormTextField';
import FormRadioButton from '../FormFields/FormRadioButton';
import { FormHelperText } from '@material-ui/core';
import FormCheckBox from '../FormFields/FormCheckBox';

const PersonalData = () => {
    // ----------important propos for formik other than NAME which links our whole form
    // 1-initial StaticRange
    // 2-validation isSchema
    // 3-onsubmit
    // const initialState = {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     phone: '',
    //     gender: ''
    // }
    // const validationSchema = yup.object().shape({
    //     firstName: yup.string().required('This Field Is Required'),
    //     lastName: yup.string().required('This Field Is Required'),
    //     email: yup.string().email('Invalid Email Address').required('This Field Is Required'),
    //     phone: yup.number().integer().typeError('Please Enter A Valid Phone Number').required('This Field Is Required'),
    //     gender: yup.string().required('This Field Is Required')
    // })

    // const HandleSubmit = (values) => {
    //     console.log(HandleSubmit)
    // }

    return (
        <>

            {/* FIRST NAME */}
            <FormTextField
                name='firstName'
                label='First Name'
            />

            {/* LAST NAME */}
            <FormTextField
                name='lastName'
                label='Last Name'

            />

            {/* EMAIL */}
            <FormTextField
                name='email'
                label='Email Address'

            />

            {/* PHONE */}
            <FormTextField
                name='phone'
                label='Phone'

            />

            <FormRadioButton
                label='MALE'
                name='gender'
                value='male'
                type='radio'
            />

            <FormRadioButton
                label='FEMALE'
                name='gender'
                value='female'
                type='radio'

            />

            <FormHelperText error={true}>
                <ErrorMessage name='gender' />
            </FormHelperText>

            <FormCheckBox
                label='Reading Books'
                name='hobbies'
                value='Reading Books'
                type='checkbox'
            />
            <FormCheckBox
                label='Eating'
                name='hobbies'
                value='Eating'
                type='checkbox'
            />
            <FormCheckBox
                label='Guitar'
                name='hobbies'
                value='Guitar'
                type='checkbox'
            />
            <FormCheckBox
                label='Surfing'
                name='hobbies'
                value='Surfing'
                type='checkbox'
            />
        </>
    );
}

export default React.memo(PersonalData);