import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';


import {
    Chart,
    PieSeries,
    Title,
  } from '@devexpress/dx-react-chart-material-ui';
  import { Animation } from '@devexpress/dx-react-chart';
  

  const data = [
    { country: 'Russia', area: 7 },
    { country: 'Canada', area: 21 }, 
  ];

  
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
       
          <Chart
            data={chartData}
          >
            <PieSeries
              valueField="area"
              argumentField="country"
            />
           
            <Animation />
          </Chart>
        
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