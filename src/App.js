import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './assets/css/style.css';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import Home from './component/Home';
import Gallery from './component/Gallery';
import Contact from './component/Contact';
import ProjectDetail from './component/projectDetail';
import logo from './assets/images/main/logo2.PNG';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import DehazeIcon from '@mui/icons-material/Dehaze';

import { makeStyles } from '@mui/styles';
import whatsappIcon from './assets/images/main/whatsapp_green.png';


const useStyles = makeStyles((theme) => ({

  infoItem: {
    padding: '10px',
    textAlign: 'left',
    display: 'inline-table',
    '@media (max-width:768px)': {
      display: 'inline',
    },
    '& svg': {
      paddingRight: '10px',
    }
  },
  menuBar: {
    float: 'right',
    position: 'absolute',
    top: '14px',
    right: '50px',
    borderBottom: 'solid 2px',
    backgroundColor: '#f1f1f1',
    '@media (max-width:768px)': {
      display: 'none',
    },
    '& .Mui-selected ': {
      backgroundColor: 'black',
      transition: 'background-color 0.5s ease-in-out', // Add transition property
    },
    '& a': {
      width: '150px',
      '& .Mui-selected ': {
        color: '#e0e4e7',
        backgroundColor: 'rgba(0, 0, 0, 0)',
      },
    },
    '& span': {
      fontSize: '0.875rem',
      color: 'black',
      fontWeight: 'bold',
    },
  },
  mobileMenu: {
    display: 'none',
    position: 'absolute',
    top: '15px',
    right: '30px',

    '@media (max-width:768px)': {
      display: 'block',
    },
  },
}));

export default function App() {
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleIconClick = () => {
    window.location.href = "https://wa.me/15167557212";
  };

  const classes = useStyles();

  return (
    <Router>
      <div>
        <div className='whatsapp-icon' onClick={handleIconClick}>
          <img src={whatsappIcon} width="85px" />
        </div>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <div className='header'>
            <div className='header-bar'>
              <div className='logo-img'>
                <img src={logo} alt="Logo" width='150px' />
              </div>
              <div className={classes.mobileMenu}>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <DehazeIcon />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem component={Link} to="/" onClick={handleClose}>Home</MenuItem>
                  <MenuItem component={Link} to="/gallery" onClick={handleClose}>Gallery</MenuItem>
                  <MenuItem component={Link} to="/contact" onClick={handleClose}>Contact Us</MenuItem>
                </Menu>
              </div>
              <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                className={classes.menuBar}
              >
                <BottomNavigationAction component={Link} to="/" label="Home" />
                <BottomNavigationAction component={Link} to="/gallery" label="Gallery" />
                <BottomNavigationAction component={Link} to="/contact" label="Contact Us" />
              </BottomNavigation>
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/projectDetail/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <div className='footer'>
            <div className='footer-content'>
              <div className={classes.infoItem} style={{ width: "40%" }}>
                <p>Get In Touch :</p>
                <p>Email: architect@expert.com<br />Tel: +1 (234) 345 5678</p>
              </div>
              <div className={classes.infoItem} style={{ width: "30%" }}>
                <p>Address :</p>
                <p>123 Main Street<br />Blooklyn, NY 94158</p>
              </div>
              <div className={classes.infoItem}>
                <p>Social :</p>
                <p>
                  <LinkedInIcon />
                  <TwitterIcon />
                  <FacebookIcon />
                </p>
              </div>
            </div>
          </div>

        </Box>
      </div>
    </Router>
  );
}
