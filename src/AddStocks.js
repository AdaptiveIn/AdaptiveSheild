import React from "react";
import { Button, FormControl, TextField } from "@material-ui/core";
import { UpdateStockList } from "./UpdateStockList";
import { useHistory } from "react-router-dom";
import {sendList} from './Accountsummary'

const dict = [];
export default function AddStocks() {
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
  var isThere = false
  const [ticker, setName] = React.useState("Controlled");
  const [quant, setQuant] = React.useState("Controlled");
  const data = sendList()
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
    UpdateStockList(dict);
    console.log("data:",data[0][0])
    for(var i = 0; i < data.length; i++){
      if(data[i][0] === ticker){
        isThere = true
      }
    }
    if(isThere === true){
      alert(`${ticker} is already there, use update tab to update the quantity`)
    }
    else{
      alert(`${quant} stocks of ${ticker} added to your portfolio`)
    }
    console.log("dict:",dict);
    history.push("/");
  }
  return (
    <React.Fragment>
      <div style={headings2}>
        <p>ENTER STOCK DATA</p>
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
