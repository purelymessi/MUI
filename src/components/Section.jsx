import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Section = ({ title, content, bgColor, textColor, isCentered }) => (
  <Box sx={{ backgroundColor: bgColor, py: 8 }}>
    <Container>
      <Typography variant="h1" sx={{ color: textColor, textAlign: isCentered, mb: 4 }}>
        {title}
      </Typography>
      {content.map((paragraph, index) => (
        <Typography key={index} variant="body2" sx={{ color: textColor, mb: 2 }}>
          {paragraph}
        </Typography>
      ))}
    </Container>
  </Box>
);

export default Section;
