import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    height: 200,
    width: 50,
  },
});
var val = 0;

export default function VerticalSlider() {

  function valuetext(value) {
    val = 100 - value;
    console.log("Value is:", val);
    // return `${value}`;
  }

  const classes = useStyles();
  const slider_style = {
    paddingTop: 20,
    marginRight: 30,
  };

  return (
    <React.Fragment>
      <Typography id="vertical-slider" gutterBottom></Typography>
      <div className={classes.root} style={slider_style}>
        <Slider
          orientation="vertical"
          getAriaValueText={valuetext}
          defaultValue={100}
          aria-labelledby="vertical-slider"
          max={100}
          min={80}
          track="normal"
          valueLabelDisplay="on"
          // onChange={valuetext}
          // onChangeCommitted={valuetext}
        />
      </div>
    </React.Fragment>
  );
}


