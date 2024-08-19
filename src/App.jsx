import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/pages/homepage';
import AboutPage from './components/pages/about';
import ServicesPage from './components/pages/our services';
import ContactPage from './components/pages/contacts';
import photo from './assets/photo1.png';
import { Box, Button, Typography } from '@mui/material';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Box
        sx={{
          background: `url(${photo}) no-repeat center center`,
          backgroundSize: 'cover',
          color: '#FFF',
          padding: '128px 0',
          textAlign: 'center'
        }}
      >
        <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Typography variant="h1" sx={{ fontSize: '64px', margin: '0 0 32px 0' }}>
            The quick brown fox jumps over the lazy dog.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FFB400',
              color: '#FFF',
              padding: '16px 32px',
              fontSize: '20px',
              '&:hover': { backgroundColor: '#e0a500' }
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
