import React from 'react';
import { ErrorMessage } from 'formik'
import FormTextField from '../FormFields/FormTextField';
import FormRadioButton from '../FormFields/FormRadioButton';
import { FormHelperText } from '@material-ui/core';
import FormCheckBox from '../FormFields/FormCheckBox';

const checkBoxValues = ['Reading Books', 'Eating', 'Guitar', 'Surfing']

const PersonalData = () => {
    return (
        <>

            {/* FIRST NAME */}
            <div className='field'>
                <FormTextField
                    name='firstName'
                    label='First Name'
                />
            </div>

            {/* LAST NAME */}
            <div className='field'>
                <FormTextField
                    name='lastName'
                    label='Last Name'
                />
            </div>


            {/* EMAIL */}
            <div className='field'>
                <FormTextField
                    name='email'
                    label='Email Address'
                />
            </div>

            {/* PHONE */}
            <div className='field'>
                <FormTextField
                    name='phone'
                    label='Phone'
                />
            </div>

            <div className='field'>
                <div className='label'>Gender</div>
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
            </div>

            <div className='field'>
                <div className='label'>Hobbies</div>
                {
                    checkBoxValues.map((value, index) => (
                        <FormCheckBox
                            label={value}
                            name='hobbies'
                            value={value}
                            type='checkbox'
                            key={index}
                        />
                    ))
                }

            </div>
        </>
    );
}

export default React.memo(PersonalData);