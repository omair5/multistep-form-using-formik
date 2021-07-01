import * as yup from 'yup';

const validationSchemaFile = [
    yup.object().shape({
        firstName: yup.string().required('This Field Is Required'),
        lastName: yup.string().required('This Field Is Required'),
        email: yup.string().email('Invalid Email Address').required('This Field Is Required'),
        phone: yup.number().integer().typeError('Please Enter A Valid Phone Number').required('This Field Is Required'),
        gender: yup.string().required('This Field Is Required'),
    }),
    yup.object().shape({
        addresslineone: yup.string().required('This Field Is Required'),
        city: yup.string().required('This Field Is Required'),
        state: yup.string().required('This Field Is Required'),
        country: yup.string().required('This Field Is Mandatory'),
    })
]
export default validationSchemaFile