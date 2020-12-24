import React from "react";
import StockChart from "./graphs";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function Accountsummary() {
  const history = useHistory();
  const handleClick = () => history.push("/ShieldSetup");
  const handleClick2 = () => history.push("/AddStocks");
  const handleClick3 = () => history.push("/DeleteScreen");
  const handleClick4 = () => history.push("/UpdateScreen");
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto",
    },
    table: {
      minWidth: 650,
      size: "small",
    },
  }));

  function createData(Symbol, Quantity, Last, Previous, Change, Value) {
    return { Symbol, Quantity, Last, Previous, Change, Value };
  }
  const headings = {
    marginTop: -30,
    fontSize: 30,
    textAlign: "center",
    color: "#16697a",
    fontFamily: "Helvetica",
    background: "rgba(232, 236, 241, 0.3)",
  };
  const headings2 = {
    fontSize: 40,
    marginTop: 50,
    textAlign: "center",
    color: "#000000",
    fontFamily: "Helvetica",
  };
  const content = {
    width: 300,
    paddingTop: 60,
    margin: "auto",
    fontSize: 30,
    color: "#000000",
    fontWeight: "Bold",
    fontFamily: "Helvetica",
    textAlign: "center",
  };
  const shieldButton = {
    paddingTop: 70,
    textAlign: "center",
    width: 300,
    margin: "auto",
  };
  const Datast = {
    fontSize: 20,
    color: "#0278ae",
    paddingLeft: 20,
    fontFamily: "Helvetica",
  };

  const addStockButton = {
    paddingTop: 20,
    textAlign: "left",
    position: "relative",
    float: "right",
    paddingBottom: 10,
  };
  getData();
  var rows2 = [];
  const [rows, setRows] = React.useState([]);
  const [sum1, setSum] = React.useState(0);
  const [prevTotal1, setPrevtotal] = React.useState(0)
  var lyst = [];
  var prevTotal = 0;
  var sum = 0;
  var prevSum = 0 ;

  async function getData() {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    const response = await fetch(
      "https://7yseqgoxea.execute-api.us-east-1.amazonaws.com/dev/fetch-customer-portfolio",
      requestOptions
    );
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const stockList_raw = await response.json();
    const stockList = stockList_raw["clientPortfolio"];
    for (var i = 0; i < stockList.length; i++) {
      lyst.push([
        stockList[i]["Symbol"],
        stockList[i]["Quantity"],
        stockList[i]["todays_close"],
        stockList[i]["percentage_difference"],
        stockList[i]["yesterdays_close"],
      ]);
      sum = sum + stockList[i]["Quantity"] * stockList[i]["todays_close"];
      prevTotal = prevTotal + (stockList[i]["Quantity"] * stockList[i]["yesterdays_close"])
    }
    setSum(sum);
    setPrevtotal(prevTotal);

    for (i = 0; i < lyst.length; i++) {
      rows2.push(
        createData(
          lyst[i][0],
          lyst[i][1],
          lyst[i][2].toFixed(2),
          lyst[i][4].toFixed(2),
          lyst[i][3].toFixed(2),
          (lyst[i][1] * lyst[i][2]).toFixed(2)
        )
      );
    }
    setRows(rows2);
    console.log(lyst);
  }

  const classes = useStyles();
  console.log(sum1.toFixed(2));
  console.log("Rows:", rows);

  return (
    <React.Fragment>
      <div style={headings}>
        <h1>ACCOUNT SUMMARY</h1>
      </div>
      <div style={headings2}>
        <text>Your Balance Details:</text>
      </div>
      <div style={content}>
        <text>Account:</text> <text style={Datast}>Adaptive LLP</text>
        <br></br>
        <text>Balance:</text>
        <text style={Datast}>${sum1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</text>
        <br></br>
        <text>Gain/Loss:</text>
        <text style={Datast}>${(sum1-prevTotal1).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</text>
        <br></br>
        <br></br>
      </div>
      <div style={shieldButton}>
        <Button
          variant="contained"
          color="primary"
          fullWidth={true}
          onClick={handleClick}
        >
          SHIELD ON
        </Button>
      </div>
      <div>
        <StockChart />
        <div>
          <Paper className={classes.root}>
            <Table className={classes.table} aria-label="caption table">
              <caption>Stock Prices</caption>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Symbol</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Last</TableCell>
                  <TableCell align="center">Previous Day</TableCell>
                  <TableCell align="center">Change%</TableCell>
                  <TableCell align="center">Market Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell align="center" component="th" scope="row">
                      {row.Symbol}
                    </TableCell>
                    <TableCell align="center">{row.Quantity}</TableCell>
                    <TableCell align="center">{row.Last}</TableCell>
                    <TableCell align="center">{row.Previous}</TableCell>
                    <TableCell align="center">{row.Change}</TableCell>
                    <TableCell align="center">{row.Value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      </div>
      <div style={addStockButton}>
        <Button variant="outlined" color="primary" onClick={handleClick4}>
          UPDATE STOCKS
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleClick3}>
          DELETE STOCKS
        </Button>
        <Button variant="outlined" color="primary" onClick={handleClick2}>
          ADD STOCKS +
        </Button>
      </div>
    </React.Fragment>
  );
}
