import React, { Component } from "react";
import StockChart from "./graphs";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function ConfirmationScreen() {
  const history = useHistory();
  const handleClickConfirm = () => history.push("/Success");
  const handleClickBack = () => history.push("/ShieldSetup");
  const headings = {
    marginTop: -5,
    fontSize: 70,
    textAlign: "center",
    color: "#16697a",
    fontFamily: "Helvetica",
    background: "rgba(232, 236, 241, 0.5)",
  };
  const TC = {
    textAlign: "center",
    fontSize: 40,
    fontFamily: "Helvetica",
    paddingTop: 30,
    color: "#ffa62b",
  };
  const TCcontent = {
    textAlign: "justify",
    paddingTop: 20,
    fontFamily: "Helvetica",
    paddingLeft: 20,
    paddingRight: 20,
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

  return (
    <React.Fragment>
      <div style={headings}>
        <text>SUMMARY</text>
      </div>
      <div>
        <StockChart />
      </div>
      <div style={TC}>
        <text>TERMS & CONDITIONS</text>
      </div>
      <div style={TCcontent}>
        <text>
          These terms and conditions outline the rules and regulations for the
          use of Company Name's Website, located at Website.com. By accessing
          this website we assume you accept these terms and conditions. Do not
          continue to use Website Name if you do not agree to take all of the
          terms and conditions stated on this page.
        </text>
      </div>
      <div style={confirmButton}>
        <Button variant="contained" color="primary" fullWidth="True" onClick = {handleClickConfirm}>
          AGREE
        </Button>
      </div>
      <div style={backButton}>
        <Button variant="contained" color="" fullWidth="True" onClick = {handleClickBack}>
          GO BACK
        </Button>
      </div>
    </React.Fragment>
  );
}
