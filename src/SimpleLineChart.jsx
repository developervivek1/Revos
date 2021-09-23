import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@material-ui/core/Typography';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Animation } from '@devexpress/dx-react-chart';

import { confidence as data } from './demo-data2/data-visualization';

const format = () => tick => tick;
const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
});
const legendLabelStyles = theme => ({
  label: {
    paddingTop: theme.spacing(1),
    whiteSpace: 'nowrap',
  },
});
const legendItemStyles = () => ({
  item: {
    flexDirection: 'column',
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
    paddingRight: '20px',
  },
  title: {
    whiteSpace: 'pre',
  },
});

const ValueLabel = (props) => {
  const { text } = props;
  return (
    <ValueAxis.Label
      {...props}
      text={`${text}%`}
    />
  );
};

const titleStyles = {
  title: {
    whiteSpace: 'pre',
  },
};
const TitleText = withStyles(titleStyles)(({ classes, ...props }) => (
  <Title.Text {...props} className={classes.title} />
));

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
        <Box sx={{ p: 1, flexGrow: 1, display: 'flex',}}>
        <h3 className="title1">Energy Consumption
        
        </h3>

        <Stack spacing={1} alignItems="center" sx={{pl:1,borderRadius: 1}}>
      <Stack direction="row" spacing={1}>
      <Chip  label="3456" size="small" color="success" sx={{borderRadius: 1,}}/>
      
      </Stack>
      
    </Stack>
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
                        <Box sx={{ pl: 2,pb:1.90  }}>
                          <Typography variant="body2">
                              Vertical-Power(kwh)
                          </Typography>
                        </Box>
      
  </div>
     
        <Chart className="linechart1"
          data={chartData}
          
        >
          <ArgumentAxis tickFormat={format} />
          <ValueAxis
            max={50}
            labelComponent={ValueLabel}
          />

          {/* <LineSeries
            name="TV news"
            valueField="tvNews"
            argumentField="year"
          /> */}
          <LineSeries
            name="Church"
            valueField="church"
            argumentField="year"
          />
          {/* <LineSeries
            name="Military"
            valueField="military"
            argumentField="year"
          /> */}
          {/* <Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
          <Title
            text={`Confidence in Institutions in American society ${'\n'}(Great deal)`}
            textComponent={TitleText}
          /> */}
          <Animation />
        </Chart>
     </>
    );
  }
}

export default withStyles(demoStyles, { name: 'Demo' })(Demo);
