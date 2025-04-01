import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Box, Typography, Grid, Divider, Button } from '@mui/material';
function Menu({menu , setMenu, items , setItems , selectedMenu , setSelectedMenu }) {
   
    
  return (
    <Box
    sx={{
      backgroundColor: '#000',
      color: '#fff',
      padding: '2rem',
      borderRadius: '8px',
      margin: '2rem auto',
      maxWidth: '800px',
      border: '1px solid #fff',
      textAlign: 'center',
    }}
  >
    {/* Title */}
    <Typography
      variant="h4"
      gutterBottom
      sx={{
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: '1rem',
        letterSpacing: '2px',
      }}
    >
         {
           selectedMenu && <>{selectedMenu}</>
       }

    </Typography>
    <Divider sx={{ backgroundColor: '#fff', margin: '0.5rem auto', width: '30%' }} />

    {/* Menu Items */}
    <Box sx={{ marginTop: '2rem' }}>
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            margin: '1rem 0',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                textAlign: 'left',
                flex: 1,
              }}
            >
              {item.name}
            </Typography>
            <Box
              sx={{
                flex: 1,
                borderBottom: '1px dotted #fff',
                marginX: '1rem',
                height: '1px',
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                textAlign: 'right',
                whiteSpace: 'nowrap',
              }}
            >
              {item.price}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.9rem',
              textAlign: 'left',
              opacity: 0.8,
              marginTop: '0.3rem',
              marginLeft: '0.5rem',
            }}
          >
            {item.description}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
  )
}

export default Menu

