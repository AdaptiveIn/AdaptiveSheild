import React from "react";
import StockChart from "./graphs";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import AcccessibleTable from "./table";

export default function ConfirmationScreen() {
  const history = useHistory();
  const handleClickConfirm = () => history.push("/Success");
  const handleClickBack = () => history.push("/ShieldSetup");
  const headings = {
    marginTop: -5,
    fontSize: 40,
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
        <text>SHIELD CONFIRMATION SCREEN</text>
      </div>
      <div>
        <AcccessibleTable />
      </div>
      <div style={TC}>
        <text>TERMS & CONDITIONS</text>
      </div>
      <div style={TCcontent}>
        <text>
          You are agreeing to purchase protection on the portfolio above. To a
          level of noless than aforementioned percentage and for a loss of no more than aforementioned percent,
          for the said period and said total cost.
        </text>
      </div>
      <div style={confirmButton}>
        <Button
          variant="contained"
          color="primary"
          fullWidth={true}
          onClick={handleClickConfirm}
        >
          AGREE
        </Button>
      </div>
      <div style={backButton}>
        <Button
          variant="contained"
          color=""
          fullWidth={true}
          onClick={handleClickBack}
        >
          GO BACK
        </Button>
      </div>
    </React.Fragment>
  );
}
