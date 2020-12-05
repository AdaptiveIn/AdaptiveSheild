import React, { Component } from "react";
import VerticalSlider from "./Slider";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function ShieldSetup() {
  const history = useHistory();
  const handleClickConfirm = () => history.push("/ConfirmationScreen");
  const handleClickBack= () => history.push("/");

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
    color: "#db6400",
    fontSize: 20,
    fontFamily: "Helvetica",
  };
  const rightdiv = {
    marginTop: -280,
    height: 280,
    textAlign: "right",
    marginLeft: 100,
    color: "#db6400",
    fontSize: 20,
    marginRight: 100,
    position: "relative",
    float: "right",
    fontFamily: "Helvetica",
  };
  const radios = {
    marginTop: 30,
    color: "#ffa62b",
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
    color: "#ffa62b",
  };
  const DIYcost = {
    paddingTop: 20,
    textAlign: "center",
    fontFamily: "Helvetica",
    fontSize: 30,
    fontWeight: "bold",
    color: "#db6400",
  };
  return (
    <React.Fragment>
      <div style={headings}>
        <h1>Shield Setup</h1>
      </div>
      <div style={leftdiv}>
        <text>Protection Period:</text>
        <div style={radios}>
          <input type="radio" value="Day" name="time" /> Day<br></br>
          <br></br>
          <br></br>
          <input type="radio" value="Month" name="time" /> Month<br></br>
          <br></br>
          <br></br>
          <input type="radio" value="Year" name="time" /> Year
        </div>
      </div>
      <div style={rightdiv}>
        <text>Protection Level:</text>
        <div style={slider}>
          <VerticalSlider />
        </div>
      </div>
      <div style={confirmButton}>
        <Button variant="contained" color="primary" fullWidth="True" onClick = {handleClickConfirm}>
          CONFIRM
        </Button>
      </div>
      <div style={backButton}>
        <Button variant="contained" color="" fullWidth="True" onClick = {handleClickBack}>
          GO BACK
        </Button>
      </div>
      <div style={cost}>
        <text>COST: $450</text>
      </div>
      <div style={DIYcost}>
        <text>Do It Yourself Cost: $800</text>
      </div>
    </React.Fragment>
  );
}
