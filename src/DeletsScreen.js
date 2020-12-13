import React from "react";
import { Button, FormControl, TextField } from "@material-ui/core";
import { DeleteStock } from "./DeleteStock";
import { useHistory } from "react-router-dom";

const dict = [];
export default function DeleteScreen() {
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

  const handleChange = (event) => {
    setName(event.target.value);
  };

  function submitFunc() {
    dict.length = 0;
    dict.push(
      ticker
    );
    DeleteStock(dict);
    console.log(dict);
    alert("Stock has been deleted");
    history.push("/");
  }
  return (
    <React.Fragment>
      <div style={headings2}>
        <p>ENTER TICKER NAME</p>
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
          <Button variant="outlined" color="primary" onClick={submitFunc}>
            Submit
          </Button>
        </FormControl>
      </div>
    </React.Fragment>
  );
}
