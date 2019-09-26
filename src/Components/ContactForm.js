import React, { Component } from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

class ContactForm extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}
      >
        <form style={{ width: "100%" }}>
        <Typography color="primary" variant='h6'>Contact Form</Typography>

          <FormControl margin="dense" fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" type="text" />
          </FormControl>

          <FormControl margin="dense" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="email" />
          </FormControl>

          <FormControl margin="dense" fullWidth>
            <InputLabel htmlFor="email">Message</InputLabel>
            <Input id="email" multiline rows={3} />
          </FormControl>

          <Button variant="contained" color="primary" size="medium">
            Send
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactForm;