import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ContactForm() {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        maxWidth: '640px',
        margin: '0 auto',
      }}
    >
      <TextField
        id="filled-basic"
        label="Naam"
        variant="filled"
        fullWidth
        margin="normal"
      />
      <TextField
        id="filled-basic"
        label="E-mail"
        variant="filled"
        fullWidth
        margin="normal"
      />
      <TextField
        id="filled-multiline-static"
        label="Bericht"
        multiline
        fullWidth
        rows={16}
        variant="filled"
        margin="normal"
      />
    </Box>
  );
}
