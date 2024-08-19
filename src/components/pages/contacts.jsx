import React from 'react';
import { Box, Typography } from '@mui/material';

const ContactPage = () => (
  <Box sx={{ padding: '4rem', textAlign: 'center' }}>
    <Typography variant="h2">Contact Us</Typography>
    <Typography variant="body1" sx={{ mt: 2 }}>
      Contact information.
    </Typography>
  </Box>
);

export default ContactPage;
