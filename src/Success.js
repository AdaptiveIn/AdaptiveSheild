import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { sendPrice } from "./ShieldSetup";

export default function Success() {
  const history = useHistory();
  const price = sendPrice()
  const handleClickBack = () => history.push("/");

  const headings = {
    marginTop: 70,
    position: "relative",
    margin: "auto",
    fontSize: 40,
    textAlign: "center",
    color: "#16697a",
    fontFamily: "Helvetica",
    background: "rgba(232, 236, 241, 0.5)",
  };

  const backButton = {
    paddingTop: 200,
    margin: "auto",
    textAlign: "center",
    width: 300,
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
    maxWidth: 600,
    fontSize: 20,
  };

  return (
    <React.Fragment>
      <div style={headings}>
        <text>SHIELD CONFIRMED!</text>
      </div>
      <div style={TC}>
        <text>TERMS & CONDITIONS</text>
      </div>
      <div style={TCcontent}>
        <text>
          You are agreeing to purchase protection on the portfolio above:
          <br></br>
          <br></br>
          To a level of no less than: {price[2]}%<br></br>
          And for a loss no less than: {price[3]}%<br></br>
          For a period of: {price[1]}
          <br></br>
          For a total cost of: ${price[0]}
          <br></br>
          <br></br>
          Shield Protection Period expires on the selected date. Shield
          Protection Level specifies the level of selected protection. Shield
          Protection Payout is settled at closing on the expiration date of the
          Shield Protection Period. Calculation of Protection Payouts: The
          Shield Protection Payout equals the difference between (1) the
          aggregate market value of the holdings (see table above), inclusive of
          all dividends and other distributions during the Shield Protection
          Period, and (2) the Shield Protection Level. For example, if a
          $100,000 Portfolio experiences a crash and, at the expiration of the
          Shield Protection Period,is down by the 1987 Black Monday magnitude
          (22.6%)—and the Shield Protection Level is set at 10%—you will be paid
          the difference of 12.6% equal to $12,600. Contact Adaptive for Shield
          Redemption, prior to the end of the Shield Protection Period.
        </text>
      </div>
      <div style={backButton}>
        <Button
          variant="contained"
          color=""
          fullWidth="True"
          onClick={handleClickBack}
        >
          DISMISS
        </Button>
      </div>
    </React.Fragment>
  );
}
