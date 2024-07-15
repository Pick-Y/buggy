import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';



function Home() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      
      <Box flex="1" bgcolor="#ef476f" display="flex" alignItems="center">
        <Container maxWidth="md">
          {/* Your map of Australia goes here */}
        </Container>
      </Box>
      <Box bgcolor="#1b9aaa" py={6} textAlign="center">
        <Typography variant="h4" gutterBottom>Create an Account</Typography>
        <Button variant="contained" color="primary" component={Link} to='create-account'>Create Account</Button>
      </Box>
      <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '20px 0' }}>
        <Typography variant="body1">© {new Date().getFullYear()} My Website. All rights reserved.</Typography>
      </footer>
    </Box>
  );
}

export default Home;
