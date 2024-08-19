import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Section = ({ title, content, bgColor, textColor, isCentered }) => (
  <Box sx={{ backgroundColor: bgColor, py: 8, borderBottom: `1px solid ${textColor}` }}>
    <Container>
      <Typography variant="h3" sx={{ color: textColor, textAlign: isCentered ? 'center' : 'left', mb: 4 }}>
        {title}
      </Typography>
      {content.map((paragraph, index) => (
        <Typography key={index} variant="body1" sx={{ color: textColor, mb: 2 }}>
          {paragraph}
        </Typography>
      ))}
    </Container>
  </Box>
);

export default Section;
