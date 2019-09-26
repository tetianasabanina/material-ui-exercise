import React from 'react';
import ContactForm from './ContactForm';
import CheckBox from './CheckBox';
import Grid from '@material-ui/core/Grid';

const Footer = (props) => {

    return (
        <div>
            <Grid container 
                direction="row"
                justify="center"
                alignItems="center">
                <Grid item xs={12} md={4}>
                    <CheckBox/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <ContactForm/>
                </Grid>
            </Grid>
        </div>
    )
}



export default Footer;