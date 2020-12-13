import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


getData()
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

var rows = [];
var lyst = [];
 
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
      stockList[i]["Price"],
    ]);
  }
  for (i = 0; i < lyst.length; i++) {
    rows.push(
      createData(
        lyst[i][0],
        lyst[i][2].toFixed(2),
        (Math.random() * 2.5).toFixed(2) + 1,
        (lyst[i][1] * lyst[i][2]).toFixed(2),
        lyst[i][2] - 10,
        lyst[i][1]
      )
    );
  }
  console.log(lyst);
}



function createData(Symbol, Today, Change, Value, Last, Quantity) {
  return { Symbol, Today, Change, Value, Last, Quantity };
}

export default function AcccessibleTable() {
  const classes = useStyles();
  console.log("Rows:", rows);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="caption table">
        <caption>Stock Prices</caption>
        <TableHead>
          <TableRow>
            <TableCell align="right">Symbol</TableCell>
            <TableCell align="right">Today</TableCell>
            <TableCell align="right">Change</TableCell>
            <TableCell align="right">Value</TableCell>
            <TableCell align="right">Last</TableCell>
            <TableCell align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.Symbol}
              </TableCell>
              <TableCell align="right">{row.Today}</TableCell>
              <TableCell align="right">{row.Change}</TableCell>
              <TableCell align="right">{row.Value}</TableCell>
              <TableCell align="right">{row.Last}</TableCell>
              <TableCell align="right">{row.Quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
