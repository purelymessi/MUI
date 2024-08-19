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
          padding: '8rem 0',
          textAlign: 'center'
        }}
      >
        <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
          <Typography variant="h1" sx={{ fontSize: '4rem', margin: '0 0 2rem 0' }}>
            The quick brown fox jumps over the lazy dog.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FFB400',
              color: '#FFF',
              padding: '0.75rem 2rem',
              fontSize: '1.2rem',
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
