import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';  
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import MenuItem from '@mui/material/MenuItem';


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
               <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 1,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                // letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
             DEEP NET SOFT
            </Typography>
          </Box>

          {/* Menu Icon for Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />  {/* Hamburger Icon */}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography>Home</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography>Menu</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography>Make a Reservation</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography>Contact Us</Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Logo for Mobile */}
       
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
             DEEP NET SOFT
          </Typography>

          {/* Menu items for larger screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                '&:hover': {
                    color: '#1976D2', // Blue on hover
                },
              }}
            >
              Home
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                '&:hover': {
                    color: '#1976D2', // Blue on hover
                },
              }}
            >
              Menu
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                '&:hover': {
                  color: '#1976D2', // Blue on hover
                },
              }}
            >
              Make a Reservation
            </Button>
            <Link to={'/Add'}> 
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                '&:hover': {
                  color: '#1976D2', 
                },
              }}
            >
             Add
            </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
