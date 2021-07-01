import React from 'react';
import FormDateTimePicker from '../FormFields/FormDateTimePicker';
import Grid from '@material-ui/core/Grid';
import FormTextField from '../FormFields/FormTextField';

const BookingInfo = () => {
    return (
        <>
            <div className='field'>
                <Grid container spacing={3}>
                    {/* Arrival Date */}
                    <Grid item xs={12} md={6}>
                        <div className='label'>Arrival Date</div>
                        <FormDateTimePicker
                            name='arrivaldate'

                        />
                    </Grid>
                    {/* Departure Date */}
                    <Grid item xs={12} md={6}>
                        <div className='label'>Departure Date</div>
                        <FormDateTimePicker
                            name='departuredate'

                        />
                    </Grid>
                </Grid>
            </div>

            <div className='field'>
                <div className='label'>Message</div>
                <FormTextField
                    name='message'
                    multiline
                    rows={8}

                />
            </div>

        </>
    );
}
export default React.memo(BookingInfo);