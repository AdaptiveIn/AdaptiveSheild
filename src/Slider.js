import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    height: 150,
    width: 50
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function VerticalSlider() {
  const classes = useStyles();
  const slider_style = {
    paddingTop: 20,
    marginRight: 30
  }

  return (
    <React.Fragment>
      <Typography id="vertical-slider" gutterBottom>
      </Typography>
      <div className={classes.root} style={slider_style}>
        <Slider
          orientation="vertical"
          getAriaValueText={valuetext}
          defaultValue={100}
		  aria-labelledby="vertical-slider"
		  max = {100}
		  min= {80}
      track="normal"
		  valueLabelDisplay="auto"
		  onChange={valuetext}
        />
      </div>
    </React.Fragment>
  );
}

export const valuet = valuetext();