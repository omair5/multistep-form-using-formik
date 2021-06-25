import React from 'react';
import { Formik, Form } from 'formik'
import * as yup from 'yup';
import FormTextField from '../GeneralComponents/FormTextField';

const PersonalData = () => {
    // ----------important propos for formik other than NAME which links our whole form
    // 1-initial StaticRange
    // 2-validation isSchema
    // 3-onsubmit
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    }
    const validationSchema = yup.object().shape({
        firstName: yup.string().required('This Field Is Required'),
        lastName: yup.string().required('This Field Is Required'),
        email: yup.string().email('Invalid Email Address').required('This Field Is Required'),
        phone: yup.number().integer().typeError('Please Enter A Valid Phone Number').required('This Field Is Required'),
    })

    return (
        <>
            <Formik
                initialValues={initialState}
                validationSchema={validationSchema}
            >
                <Form>
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
                </Form>
            </Formik>
        </>
    );
}

export default React.memo(PersonalData);