import React from 'react';
import { Box, Typography, Grid, IconButton, Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', py: 4, mt: 10 }}>
      <Grid container spacing={3} justifyContent="center">
        
        {/* Connect with Us Section */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              border: '1px solid #555',
              borderRadius: '12px',
              p: 2,
              textAlign: 'center',
             
            }}
          >
            <Typography variant="subtitle1" sx={{ color: '#1E90FF', mb: 1 ,fontSize:'1.1rem'}}>
              CONNECT WITH US
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0.5, fontSize: '0.9rem', marginLeft:'2' }}>
              <PhoneIcon fontSize="small" />   +91 9567843340
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0.5, fontSize: '0.9rem' }}>
              <EmailIcon fontSize="small" />   info@deepnetsoft.com
            </Typography>

          </Box>
        </Grid>

        {/* Logo and Social Media Section */}
        <Grid item xs={12} md={1} textAlign="center">
          <Box
            sx={{
              border: '1px solid #555',
              borderRadius: '12px',
              p: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', color: '#1E90FF', mb: '0.5rem' ,fontSize: '1.2rem'}}
            >
              DEEP NET SOFT
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
              <IconButton href="#" color="inherit" size="small">
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton href="#" color="inherit" size="small">
                <TwitterIcon fontSize="small"/>
              </IconButton>
              <IconButton href="#" color="inherit"size="small">
                <InstagramIcon fontSize="small"/>
              </IconButton>
              <IconButton href="#" color="inherit"size="small">
                <LinkedInIcon fontSize="small"/>
              </IconButton>
            </Box>
          </Box>
        </Grid>

        {/* Find Us Section */}
        <Grid item xs={12} md={2}>
          <Box
            sx={{
              border: '1px solid #555',
              borderRadius: '12px',
              p: 2,
              textAlign: 'center',
            }}
          >
            <Typography variant="subtitle1" sx={{ color: '#1E90FF', mb: 1 }}>
              FIND US
            </Typography>
            <Typography variant="body2">
              <LocationOnIcon fontSize="small"  />
              First Floor, Geo Infopark, Infopark <br/> EXPY, Kakkanad
            </Typography>
          </Box>
        </Grid>

      </Grid>

      {/* Bottom Divider */}
      <Divider sx={{ backgroundColor: '#555', marginY: 2 }} />

      <Box sx={{ textAlign: 'left', width: '100%', pl: 2 }}>
        <Typography variant="caption" sx={{ color: '#555', fontSize: '0.8rem' }}>
          © 2025 Deep Net Soft. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
