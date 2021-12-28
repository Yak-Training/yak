import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from './Button';

export default function ContactForm() {
  return (
    <Box
      as="form"
      name="contact-form"
      method="POST"
      data-netlify="true"
      action="/bedankt"
      netlify-honeypot="bot-field"
      sx={{
        maxWidth: '640px',
        margin: '24px auto',
      }}
    >
      <input
        type="hidden"
        name="form-name"
        value="contact-form"
      />
      <TextField
        id="filled-basic"
        label="Naam"
        variant="filled"
        name="name"
        fullWidth
        margin="normal"
      />
      <TextField
        id="filled-basic"
        label="E-mail"
        variant="filled"
        name="email"
        fullWidth
        margin="normal"
      />
      <TextField
        id="filled-multiline-static"
        label="Bericht"
        multiline
        name="message"
        fullWidth
        rows={16}
        variant="filled"
        margin="normal"
      />
      <Button type="submit" variant="contained">
        Verstuur
      </Button>
    </Box>
  );
}
