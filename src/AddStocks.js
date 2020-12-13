import React from "react";
import { Button, FormControl, TextField } from "@material-ui/core";
import { UpdateStockList } from "./UpdateStockList";
import { useHistory } from "react-router-dom";

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
  const [ticker, setName] = React.useState("Controlled");
  const [quant, setQuant] = React.useState("Controlled");
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
      Math.floor(Math.random() * 500 + 100),
      Math.random() * 1.5 + 1,
      Math.random() * 0.6 + 0
    );
    UpdateStockList(dict);
    console.log(dict);
    alert("Stock has been added");
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
