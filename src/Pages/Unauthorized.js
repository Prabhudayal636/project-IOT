import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Button,Typography,Box} from '@mui/material';

const Unauthorized=() =>{
     const Navigate=useNavigate();
     const handleBackHome= ()=> Navigate('/Dashboard');
     return (
        <Box
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        height="100vh" 
        flexDirection="column"
      >
        <img 
          src="https://cdn-icons-png.flaticon.com/512/103/103085.png" 
          alt="Unauthorized Access" 
          style={{ width: '150px', marginBottom: '20px' }} 
        />
        <Typography 
          variant="h4" 
          color="error" 
          align="center" 
          gutterBottom
        >
          Unauthorized Access
        </Typography>
        <Typography 
          variant="body1" 
          color="textSecondary" 
          align="center" 
          gutterBottom
        >
          You do not have permission to access this page.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleBackHome}
          sx={{ mt: 2 }}
        >
          Back to Home
        </Button>
      </Box>
     );
};
export default Unauthorized ;