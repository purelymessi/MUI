import React from 'react';
import { Box, Typography } from '@mui/material';

const HomePage = () => (
  <Box sx={{ padding: '64px', textAlign: 'center' }}>
    <Typography variant="h2">Welcome to FUNHAUS</Typography>
    <Typography variant="body1" sx={{ mt: 2 }}>
      This is the home page.
    </Typography>
  </Box>
);

export default HomePage;
