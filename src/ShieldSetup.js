import React from "react";
// import VerticalSlider from "./Slider";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Quote from "./Quote";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import data from './quotes.json'

export default function ShieldSetup() {
  const history = useHistory();
  const handleClickConfirm = () => history.push("/ConfirmationScreen");
  const handleClickBack = () => history.push("/");
  const [selected, setName] = React.useState("Daily");
  const [quote, setPrice] = React.useState(0);
  const [diy, setDiy] = React.useState(0);
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleChange2 = (value) => {
    setPrice(value);
    setDiy((value*1.2).toFixed(2))
  };
  const useStyles = makeStyles({
    root: {
      height: 192,
      width: 50,
    },
  });
  var val = 0;
  function fetch_price(period,percent){
    if(period==='Daily'){
      var tp = data['day']
    }
    else if(period==='Day'){
      tp = data['day']
    }
    else if(period==='Week'){
      tp = data['week']
    }
    else if(period==='Month'){
      tp = data['month']
    }
    else{
      tp = data['year']
    }
    console.log(tp['shield_price'][percent])
    handleChange2(tp['shield_price'][percent])
  }
  function valuetext(value) {
    val = 100 - value;
    console.log("Value is:", val,selected);
    fetch_price(selected,val)
    // return `${value}`;
  }

  const classes = useStyles();
  const slider_style = {
    paddingTop: 30,
    marginRight: 30,
  };

  const headings = {
    marginTop: -50,
    fontSize: 40,
    textAlign: "center",
    color: "#16697a",
    fontFamily: "Helvetica",
    background: "rgba(232, 236, 241, 0.3)",
  };
  const leftdiv = {
    marginTop: 60,
    height: 280,
    textAlign: "left",
    marginLeft: 100,
    color: "#000000",
    fontSize: 20,
    fontFamily: "Helvetica",
  };
  const rightdiv = {
    marginTop: -280,
    height: 280,
    textAlign: "right",
    marginLeft: 100,
    color: "#000000",
    fontSize: 20,
    marginRight: 100,
    position: "relative",
    float: "right",
    fontFamily: "Helvetica",
  };
  const radios = {
    marginTop: 30,
    color: "#000000",
    fontSize: 18,
    marginLeft: 20,
  };

  const slider = {
    paddingTop: 15,
    paddingLeft: 30,
  };
  const confirmButton = {
    paddingTop: 70,
    textAlign: "center",
    width: 300,
    margin: "auto",
  };
  const backButton = {
    paddingTop: 20,
    margin: "auto",
    textAlign: "center",
    width: 300,
  };
  const cost = {
    paddingTop: 40,
    textAlign: "center",
    fontFamily: "Helvetica",
    fontSize: 40,
    fontWeight: "bold",
    color: "#16697a",
  };
  const DIYcost = {
    paddingTop: 20,
    textAlign: "center",
    fontFamily: "Helvetica",
    fontSize: 30,
    fontWeight: "bold",
    color: "#16697a",
  };
  return (
  
    (
      <React.Fragment>
        <div style={headings}>
          <h1>Shield Setup</h1>
        </div>
        <div style={leftdiv}>
          <text>Protection Period:</text>
          <div style={radios}>
            <input
              type="radio"
              value="Day"
              name="time"
              onChange={handleChange}
            />{" "}
            Day<br></br>
            <br></br>
            <br></br>
            <input
              type="radio"
              value="Week"
              name="time"
              onChange={handleChange}
            />{" "}
            Week<br></br>
            <br></br>
            <br></br>
            <input
              type="radio"
              value="Month"
              name="time"
              onChange={handleChange}
            />{" "}
            Month<br></br>
            <br></br>
            <br></br>
            <input
              type="radio"
              value="Year"
              name="time"
              onChange={handleChange}
            />{" "}
            Year<br></br>
          </div>
        </div>
        <div style={rightdiv}>
          <text>Protection Level:</text>
          <div style={slider}>
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
          </div>
        </div>
        <div style={cost}>
          <text>
            COST: ${quote}
          </text>
        </div>
        <div style={DIYcost}>
          <text>Do It Yourself Cost: ${diy}</text>
        </div>
        <div style={confirmButton}>
          <Button
            variant="contained"
            color="primary"
            fullWidth="True"
            onClick={handleClickConfirm}
          >
            CONFIRM
          </Button>
        </div>
        <div style={backButton}>
          <Button
            variant="contained"
            color=""
            fullWidth="True"
            onClick={handleClickBack}
          >
            GO BACK
          </Button>
        </div>
      </React.Fragment>
    )
  );
}
