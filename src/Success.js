import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Success() {
  const history = useHistory();
  const handleClickBack = () => history.push("/");

  const headings = {
    marginTop: 50,
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

  return (
    <React.Fragment>
      <div>
        <text style={headings}>SUCCESS!</text>
      </div>
      <div style={backButton}>
        <Button
          variant="contained"
          color=""
          fullWidth="True"
          onClick={handleClickBack}
        >
          RETURN TO HOME
        </Button>
      </div>
    </React.Fragment>
  );
}
