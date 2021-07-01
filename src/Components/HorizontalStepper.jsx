// ----------important propos for formik other than NAME which links our whole form
// 1-initial StaticRange
// 2-validation isSchema
// 3-onsubmit

// ----------TWO IMPORTANT TECHNIQUES TO HANDLE DATA
// 1- either use <Formik> </Formik> wrapper in every step separately and then handle initialValues, validationSchema & onSubmit for every step
//  and submit data from each step separately
// 2- or you can use <Formik> </Formik> wrapper on parent component and handle everything from parent component

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import PersonalData from './PersonalData';
import BookingInfo from './BookingInfo';
import Address from './Address';
import { Formik, Form } from 'formik'
import ValidationSchemaFile from './ValidationSchemaFile';


const useStyles = makeStyles((theme) => ({
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Personal Data', 'Address', 'Booking Information'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return <PersonalData />;
        case 1:
            return <Address />;
        case 2:
            return <BookingInfo />;
        default:
            return 'Unknown stepIndex';
    }
}

export default function HorizontalStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const currentSchema = ValidationSchemaFile[activeStep]



    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: '',
        hobbies: '',
        addresslineone: '',
        addresslinetwo: '',
        city: '',
        state: '',
        country: '',
        arrivaldate: '',
        departuredate: '',
        message: ''
    }


    const HandleSubmit = (values, { resetForm }) => {
        if (activeStep === getSteps().length - 1) {
            console.log('these are form values', values)
            resetForm()
        }
        else {
            handleNext()
        }
    }

    return (
        <>
            <Container maxWidth="sm">
                <Formik initialValues={initialState} validationSchema={currentSchema} onSubmit={HandleSubmit}>
                    <Form>
                        <Card>
                            <Stepper activeStep={activeStep} alternativeLabel className='stepperContainer'>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                            <div className='formContainer'>
                                {activeStep === steps.length ? (
                                    <div>
                                        <Typography className={classes.instructions}>All steps completed</Typography>
                                    </div>
                                ) : (
                                    <Container maxWidth='sm'>
                                        <Typography component={'div'} className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                        <div className='buttonContainer'>
                                            <Button
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                                className={classes.backButton}
                                            >
                                                Back
                                            </Button>

                                            <Button variant="contained" color="primary" type='submit'>
                                                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                            </Button>
                                        </div>
                                    </Container>
                                )}
                            </div>
                        </Card>
                    </Form>
                </Formik>
            </Container>
        </>
    );
}