import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Papers from './Papers';
import Grid from '@mui/material/Grid';
import PieChart from './PieChart';
import LineChart from './LineChart';
import SimpleLineChart from './SimpleLineChart'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
 
  color: theme.palette.text.secondary,
}));


export default function AutoGrid() {
  return (
    <>
    <Box sx={{ flexGrow: 1,pt:1, }}>
      <Grid container spacing={3}>
        <Grid item xs="12" md="4">
          <Item>
          <Box>
      
        <Papers/>
      
            </Box> 
          </Item>
        </Grid>
        <Grid item xs="12" md="4">
        <Item>

            <PieChart/>

        </Item>
         
        </Grid>
        <Grid item xs>
          <Item>
            <PieChart/>
          </Item>
        </Grid>
      </Grid>
    </Box>

          <Box sx={{ flexGrow: 1,pt:3, }}>
              <Grid container spacing={3}>
                <Grid item xs="12" md="6">
                  <Item>
                  <Box>

                <LineChart/>

                    </Box> 
                  </Item>
                </Grid>
                <Grid item xs>
                <Item>
                <SimpleLineChart/>
                </Item>
                
                </Grid>
                
              </Grid>
          </Box>
          </>
            );
          }
