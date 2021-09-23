import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import CropSquareIcon from '@mui/icons-material/CropSquare';


import {
    Chart,
    PieSeries,
    Title,
  } from '@devexpress/dx-react-chart-material-ui';
  import { Animation } from '@devexpress/dx-react-chart';
  

  const data = [
    { country: 'Russia', area: 7 ,bgcolor: 'black'},
    { country: 'Canada', area: 21 }, 
  ];

  

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    
    color: theme.palette.text.secondary,
  }));

  // const legendStyles = () => ({
  //   root: {
  //     height:'350px',
     
  //   },
  // });

  
  export default class Demo extends React.PureComponent {
    constructor(props) {
      super(props);
  
      this.state = {
        data,
      };
    }
  
    render() {
      const { data: chartData } = this.state;
  
      return (
       
          

              <Grid container spacing={1}>
              <Grid item xs={12} md={7}>
              
                    <div style={{ width: '100%' }}>
                     
                      <Box sx={{ p: 1,pb:0, flexGrow: 1, }}>
                      <h3 className="title1">Booking vs Earning</h3>
                      </Box>
                      </div>
                <Chart 
                    data={chartData}
                   sx={{pt:0,}} >

                       
                  <PieSeries 
                    valueField="area"
                    argumentField="country"
                  />
                
                  <Animation />
               </Chart>
              
              </Grid>
              <Grid item xs={12} md={5}>
                
                <Box  sx={{mt:10}} >
       
       
                        <Box sx={{}}>
                          <Typography variant="h5" component="h2">
                            <b>100</b>
                          </Typography>
                        </Box>
                        
                        <Box sx={{ }}>
                          <Typography variant="subtitle4" gutterBottom>
                          TOTAL CHARGERS
                          </Typography>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'row', pt:1,}}>
                        <Box sx={{
                            width: 10,
                            height: 10,
                            mt:0.6,
                            mr:1,
                           
                            bgcolor: '#57B8FF'}}/> 
                          <Typography color="#57B8FF" variant="subtitle2" component="h2">
                        <>
                            
                        <b>100</b></>
                          </Typography>
                        </Box>
                        
                        <Box sx={{pt:0,ml:2, }}>
                          <Typography  variant="body2" gutterBottom>
                          Available
                          </Typography>
                        </Box>

                        <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <Box sx={{
                            width: 10,
                            height: 10,
                            mt:0.6,
                            mr:1,
                           
                            bgcolor: '#A7EEDE'}}/> 
                          <Typography color="#A7EEDE" variant="subtitle2" component="h2">
                        <>
                            
                        <b>100</b></>
                          </Typography>
                        </Box>
                        
                        <Box sx={{pt:0,ml:2, }}>
                          <Typography variant="body2" gutterBottom>
                          Unvailable
                          </Typography>
                        </Box>


                        
                </Box>
              
              </Grid>
              
              </Grid>
        
      );
    }
  }
  

// export default function Types() {
//     return (
//       <Box sx={{ width: '100%', maxWidth: 500 }}>
//        <Typography variant="h6" gutterBottom component="div">
//        Chargers Availability
//       </Typography>
//       <Chart
//             data={chartData}
//           >
//             <PieSeries
//               valueField="area"
//               argumentField="country"
//             />
           
//             <Animation />
//           </Chart>
        
      
//     </Box>
//   );
// }