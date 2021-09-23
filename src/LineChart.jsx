import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import {
  curveCatmullRom,
  line,
} from 'd3-shape';
import { scalePoint } from 'd3-scale';

import { energyConsumption as data } from './demo-data/data-visualization';





const Line = props => (
  <LineSeries.Path
    {...props}
    path={line()
      .x(({ arg }) => arg)
      .y(({ val }) => val)
      .curve(curveCatmullRom)}
  />
);

const titleStyles = {
  title: {
    textAlign: 'center',
    width: '100%',
    marginBottom: '10px',
  },
};
const Text = withStyles(titleStyles)((props) => {
  const { text, classes } = props;
  const [mainText, subText] = text.split('\\n');
  return (
    <div className={classes.title}>
      <Typography component="h3" variant="h5">
        {mainText}
      </Typography>
      <Typography variant="subtitle1">{subText}</Typography>
    </div>
  );
});

const legendStyles = () => ({
  root: {
   //height:'250px',
    display: 'flex',
    margin: 'auto',
   
    flexDirection: 'row',
  },
});
const legendLabelStyles = theme => ({
  label: {
    marginBottom: theme.spacing(1),
    whiteSpace: 'nowrap',
  },
});
const legendItemStyles = () => ({
  item: {
    flexDirection: 'column-reverse',
    
  },
});

const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const legendItemBase = ({ classes, ...restProps }) => (
  <Legend.Item className={classes.item} {...restProps} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);
const Item = withStyles(legendItemStyles, { name: 'LegendItem' })(legendItemBase);
const demoStyles = () => ({
  chart: {
    paddingRight: '30px',
   
  },
});


class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  

  render() {
    const { data: chartData } = this.state;
    const { classes } = this.props;

    

    return (
      
<>

      
                  <div style={{ width: '100%' }}>
                      <Box sx={{ display: 'flex', p: 1,  }}>
                      <Box sx={{ p: 1, flexGrow: 1, }}>
                      <h3 className="title1">Booking vs Earnings</h3>
                      </Box>

                      

                  
                  <Box sx={{   }}>
                  <FormControl sx={{ minWidth: 120, }}>
                      <InputLabel id="demo-simple-select-helper-label">This Week</InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                      
                        label="Age"
                      
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
       
                   </FormControl>
                  </Box>
                </Box>
            </div>

            <div style={{ width: '100%' }}>
                      <Box sx={{ display: 'flex', p: 1,pt:0  }}>
                      <Box sx={{ p: 1,pt:0, flexGrow: 1, display: 'flex',}}>
                      <Box sx={{ display: 'flex'}}>
                      <Box
                          sx={{
                            width: 10,
                            height: 10,
                            bgcolor: 'primary.dark',
                            mt:0.60,
                            mr:1,
                            borderRadius: '50%',
                            }}
                        />
                        <Typography variant="body2">
                          Bookings
                        </Typography>
                        </Box>
                        <Box  sx={{ml:3,display: 'flex'}}>
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            bgcolor: 'primary.dark',
                            mt:0.60,
                            mr:1,
                            borderRadius: '50%',
                            }}
                        />
                        <Typography variant="body2" >
                          Earnings
                        </Typography>
                        </Box>
                      
                      </Box>
                      </Box>
                  </div>   

        <Chart className="linechart1"
          data={chartData}
          
         
        >
          <ArgumentScale factory={scalePoint} />
          <ArgumentAxis />
          <ValueAxis />

          {/* <LineSeries
            name="Hydro-electric"
            valueField="hydro"
            argumentField="country"
            seriesComponent={Line}
          /> */}
          <LineSeries
            name="Oil"
            valueField="oil"
            argumentField="country"
            seriesComponent={Line}
          />
          <LineSeries
            name="Natural gas"
            valueField="gas"
            argumentField="country"
            seriesComponent={Line}
          />
          {/* <LineSeries
            name="Coal"
            valueField="coal"
            argumentField="country"
            seriesComponent={Line}
          /> */}
          {/* <LineSeries
            name="Nuclear"
            valueField="nuclear"
            argumentField="country"
            seriesComponent={Line}
          /> */}
          {/* <Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
          <Title
            text="Energy Consumption in 2004\n(Millions of Tons, Oil Equivalent)"
            textComponent={Text}
          /> */}
          <Animation />
        </Chart>
     </>
    );
  }
}

export default withStyles(demoStyles, {
   name: 'Demo' })
   (Demo
    );
