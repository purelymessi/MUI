import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => (
  <Box sx={{ backgroundColor: '#1D2951', py: 4 }}>
    <Container>
      <Typography variant="body2" sx={{ color: '#FFF49C', textAlign: 'center' }}>
        FUNHAUS © 2024
      </Typography>
    </Container>
  </Box>
);

export default Footer;
