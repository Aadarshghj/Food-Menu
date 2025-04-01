import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Button } from '@mui/material';

const Hero = ({menu , setMenu, items , setItems , selectedMenu , setSelectedMenu }) => {
   const clickHandler = (index) =>{
        setSelectedMenu(menu[index].name)
        setItems(menu[index].items);
    } 
    useEffect(()=>{
       
    },[items])

  return (
    <Box
      sx={{
        width: '100vw',
        height: '90vh', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        padding: { xs: 2, sm: 3 }, 
        overflowX: 'hidden', 
        boxSizing: 'border-box', 
      }}
    >
      {/* Heading */}
      <Typography
        variant="h2"
        component="h1"
        sx={{
          color: 'white',
          fontWeight: 'bold',
          marginBottom: 2,
          marginTop: 5,
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, 
          textAlign: 'center', 
          overflow: 'hidden',
          fontFamily: '"Roboto", sans-serif',
        }}
      >
        Menu
      </Typography>

      {/* Short Description */}
      <Typography
        variant="h6"
        sx={{
          color: 'lightgrey',
          marginBottom: 10,
          fontSize: { xs: '0.85rem', sm: '1rem', md: '1.2rem' },
          textAlign: 'center',
          wordBreak: 'break-word',
        }}
      >
        Please take a look at our menu featuring food, drinks, and branches. If you'd like to{' '}
        <br /> place an order, use the order online button located below the menu.
      </Typography>

      {/* Button Container in a Row (for mobile and larger screens) */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'row', sm: 'row' }, 
          gap: 2,
          justifyContent: 'center',
          flexWrap: 'wrap',
          width: '100%',
          maxWidth: '600px',
        }}
      >
        {menu.map((menuItem, index) => (
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#1A1A1A',
              padding: '10px 20px',
              '&:hover': {
                backgroundColor: '#1976D2 ', 
              },
              width: { xs: '30%', sm: 'auto' }, 
              
            }} onClick={()=>{
                clickHandler(index)
              }}
            key={index}
          >
            {menuItem.name}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Hero;
