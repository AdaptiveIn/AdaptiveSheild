import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
    size: 'small'
  },
}));

function createData(Symbol, Today, Change, Value, Last, Quantity) {
  return {Symbol, Today, Change, Value, Last, Quantity};
}

const rows = [
  createData('TSLA', 2900, 2.34, 260000, 1300, 200),
  createData('AAPL', -300, -1.34, 40000, 400, 100),
];

export default function AcccessibleTable() {
  const classes = useStyles();

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
            <TableCell align = "right">Last</TableCell>
            <TableCell align = "right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
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