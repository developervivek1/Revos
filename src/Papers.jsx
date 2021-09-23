import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import logo from './images/ic-sessions.svg';
import Typography from '@mui/material/Typography';



const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
   
  };

export default function SimplePaper() {
  return (
    <Box
    sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
        
          width: '45%' ,
          height: 120,
        },
      }}
    >
      <Paper elevation={0} sx={{ ...commonStyles, borderColor: 'grey.300' }}>
      <Box sx={{pl:1.25}}  >
       
        <Box sx={{pt:1,}}>
        <img src={logo} alt="Logo" />
        </Box>
        <Box sx={{mb:0}}>
        <Typography variant="h5" component="h2">
         <b >12</b>
      </Typography>
        </Box>
       
        <Box sx={{ pt:0}}>
        <Typography variant="subtitle2">
        Total Charges2
      </Typography>
        </Box>
      </Box>
      </Paper>
      <Paper elevation={0} sx={{ ...commonStyles, borderColor: 'grey.300' }}>
      <Box sx={{pl:1.25}}  >
       
        <Box sx={{pt:1,}}>
        <img src={logo} alt="Logo" />
        </Box>
        <Box sx={{}}>
        <Typography variant="h5" component="h2">
         <b>50</b>
      </Typography>
        </Box>
       
        <Box sx={{ }}>
        <Typography variant="subtitle2">
        Total Booked
      </Typography>
        </Box>
      </Box>
      </Paper>
      <Paper elevation={0} sx={{ ...commonStyles, borderColor: 'grey.300' }}>
      <Box sx={{pl:1.25}}  >
       
        <Box sx={{pt:1,}}>
        <img src={logo} alt="Logo" />
        </Box>
        <Box sx={{}}>
        <Typography variant="h5" component="h2">
         <b>100</b>
      </Typography>
        </Box>
       
        <Box sx={{ }}>
        <Typography variant="subtitle2" >
        Available
      </Typography>
        </Box>
      </Box>
      </Paper>
      <Paper elevation={0} sx={{ ...commonStyles, borderColor: 'grey.300' }}>
      <Box sx={{pl:1.25}}  >
       
        <Box sx={{pt:1,}}>
        <img src={logo} alt="Logo" />
        </Box>
        <Box sx={{}}>
        <Typography variant="h5" component="h2">
         <b>50</b>
      </Typography>
        </Box>
       
        <Box sx={{ }}>
        <Typography variant="subtitle2">
        Total Users
      </Typography>
        </Box>
      </Box>
      </Paper>
    </Box>
  );
}
