import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import AcccessibleTable from "./table";
import {sendPrice} from "./ShieldSetup"

export default function ConfirmationScreen() {
  const price = sendPrice()
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
    position: "relative",
    margin: "auto",
    textAlign: "justify",
    paddingTop: 20,
    fontFamily: "Helvetica",
    paddingLeft: 20,
    paddingRight: 20,
    maxWidth:600,
    fontSize: 20
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
  const table = {
    position: "relative",
    margin: "auto",
    maxWidth: 700
  }

  return (
    <React.Fragment>
      <div style={headings}>
        <text>SHIELD CONFIRMATION SCREEN</text>
      </div>
      <div style = {table}>
        <AcccessibleTable />
      </div>
      <div style={TC}>
        <text>TERMS & CONDITIONS</text>
      </div>
      <div style={TCcontent}>
        <text>
        You are agreeing to purchase protection on the portfolio above:<br></br><br></br>
        To a level of no less than:   {price[2]}%<br></br>
        And for a loss no less than:  {price[3]}%<br></br>
        For a period of:              {price[1]}<br></br>
        For a total cost of:          ${price[0]}<br></br><br></br>

        Shield Protection Period expires on the selected date.
        Shield Protection Level  specifies the level of selected protection.
        Shield Protection Payout is settled at closing on the expiration date of the Shield Protection Period.
        Calculation of Protection Payouts: The Shield Protection Payout equals the difference between (1) the aggregate market value of the holdings (see table above), inclusive of all dividends and other distributions during the Shield Protection Period, and (2) the Shield Protection Level. For example, if a $100,000 Portfolio experiences a crash and, at the expiration of the Shield Protection Period,is down by the 1987 Black Monday magnitude (22.6%)—and the Shield Protection Level is set at 10%—you will be paid the difference of 12.6% equal to $12,600.
        Contact Adaptive for Shield Redemption, prior to the end of the Shield Protection Period.

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
