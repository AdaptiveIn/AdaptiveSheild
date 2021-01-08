import React from "react";
import { Button, FormControl, TextField } from "@material-ui/core";
import { UpdateStocks } from "./UpdateStocks";
import { useHistory } from "react-router-dom";
import {sendList} from './Accountsummary'

const dict = [];
export default function UpdateScreen() {
  const history = useHistory();
  const form1 = {
    width: 500,
    margin: "Auto",
  };
  const headings2 = {
    fontSize: 40,
    marginTop: 50,
    textAlign: "center",
    color: "#51adcf",
    fontFamily: "Helvetica",
  };
  const [ticker, setName] = React.useState("Controlled");
  const [quant, setQuant] = React.useState("Controlled");
  const data = sendList()
  var isThere = false
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleChange2 = (event) => {
    setQuant(event.target.value);
  };
  function submitFunc() {
    dict.length = 0;
    dict.push(
      ticker,
      quant,
    );
    UpdateStocks(dict);
    for(var i = 0; i < data.length; i++){
      if(data[i][0] === ticker){
        isThere = true
      }
    }
    if(isThere === true){
      alert(`Number of stocks for ${ticker} has been updated to ${quant}`)
    }
    else{
      alert(`Stock ${ticker} does not have a position to be updated.`)
    }
    console.log(dict);
    history.push("/");
  }
  return (
    <React.Fragment>
      <div style={headings2}>
        <p>UPDATE STOCK DATA</p>
      </div>
      <div style={form1}>
        <FormControl
          fullWidth
          className="StockForm"
          noValidate
          autoComplete="on"
        >
          <TextField
            onChange={handleChange}
            color="primary"
            id="ticker"
            label="Stock Ticker"
            variant="filled"
            required={true}
          />
          <TextField
            onChange={handleChange2}
            id="quantity"
            label="Quantity"
            variant="filled"
            required={true}
            type="numeric"
          />
          <Button variant="outlined" color="primary" onClick={submitFunc}>
            Submit
          </Button>
        </FormControl>
      </div>
    </React.Fragment>
  );
}
