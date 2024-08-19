import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsOpen(open);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#FFF49C', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ color: '#1D2951', fontWeight: 'bold' }}>
            FUNHAUS
          </Typography>
          <IconButton edge="end" onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ color: '#1D2951' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, backgroundColor: '#FFF49C', height: '100%' }}>
          <List>
            {['Home', 'About', 'Services', 'Contact'].map((text, index) => (
              <ListItem button key={index} component={Link} to={`/${text.toLowerCase()}`} sx={{ padding: '16px', '&:hover': { backgroundColor: '#F0E4B1' } }}>
                <ListItemText primary={text} sx={{ color: '#1D2951' }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
