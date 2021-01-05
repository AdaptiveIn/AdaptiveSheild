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
import {Auth} from "aws-amplify";


var arr = []
export function sendList(){
  var arr1 = arr
  return arr1
}
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
  const content = {
    position: "relative",
    width: 470,
    margin: "auto",
    fontSize: 30,
    color: "#000000",
    fontWeight: "Bold",
    fontFamily: "Helvetica",
    textAlign: "Left",
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
    textAlign: "right",
  };
  const Datast2 = {
    fontSize: 20,
    color: "#0278ae",
    paddingLeft: 20,
    fontFamily: "Helvetica",
    textAlign: "right",
  };

  const addStockButton = {
    paddingTop: 20,
    textAlign: "left",
    position: "relative",
    float: "right",
    paddingBottom: 10,
  };
  const table = {
    position: "relative",
    margin: "auto",
    maxWidth: 700,
  };
  const graphSt = {
    position: "relative",
    margin: "auto",
    maxWidth: 900,
  };

  var rows2 = [];
  const [rows, setRows] = React.useState([]);
  const [sum1, setSum] = React.useState(0);
  const [prevTotal1, setPrevtotal] = React.useState(0);
  const [user, setUser] = React.useState("");
  var lyst = [];
  var prevTotal = 0;
  var sum = 0;
  getUserData()
  function loadUser(){
    return Auth.currentAuthenticatedUser({bypassCache: true});
  }
  async function getUserData(){
    try{
      const logged = await loadUser();
      console.log(logged.username)
      setUser(logged.username)
    }catch(e){
      alert(e)
    }
  }
  console.log(user)
  
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
      prevTotal =
        prevTotal + stockList[i]["Quantity"] * stockList[i]["yesterdays_close"];
    }
    setSum(sum);
    setPrevtotal(prevTotal);
    arr = lyst

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
  getData();
  if ((sum1 - prevTotal1).toFixed(2) < 0) {
    Datast2["color"] = "#EA421F";
  }
  return (
    <React.Fragment>
      <div style={headings}>
        <h1>ACCOUNT SUMMARY</h1>
      </div>
      <div style={content}>
        <table position="relative" margin="auto" width="500" border="0">
          <caption align="left">Your Balance Details:</caption>
          <br></br>
          <tr>
            <td align="Right">Advisor:</td>
            <td align="left">
              <text style={Datast}>AdvisorName Capital</text>
            </td>
          </tr>
          <tr>
            <td align="Right">Account:</td>
            <td align="left">
              <text style={Datast}>{user}</text>
            </td>
          </tr>
          <tr>
            <td align="Right">Balance:</td>
            <td align="left">
              <text style={Datast}>
                ${sum1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </text>
            </td>
          </tr>
          <tr>
            <td align="Right">Gain/Loss:</td>
            <td align="left">
              <text style={Datast2}>
                $
                {(sum1 - prevTotal1)
                  .toFixed(2)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </text>
            </td>
          </tr>
        </table>
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
        <div style={graphSt}>
          <StockChart />
        </div>
        <div style={table}>
          <Paper className={classes.root}>
            <Table className={classes.table} aria-label="caption table">
              <caption>Stock Prices</caption>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Symbol</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Last Price</TableCell>
                  <TableCell align="right">Previous Close</TableCell>
                  <TableCell align="right">Change (%)</TableCell>
                  <TableCell align="right">Market Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell align="left" component="th" scope="row">
                      {row.Symbol}
                    </TableCell>
                    <TableCell align="right">{row.Quantity}</TableCell>
                    <TableCell align="right">
                      ${row.Last.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </TableCell>
                    <TableCell align="right">
                      ${row.Previous.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </TableCell>
                    <TableCell align="right">{row.Change}%</TableCell>
                    <TableCell align="right">
                      ${row.Value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
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
        </div>
      </div>
    </React.Fragment>
  );
}
