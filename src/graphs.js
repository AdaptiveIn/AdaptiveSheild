import React from "react";
import Chart from "react-google-charts";
// Ref : https://developers.google.com/chart/interactive/docs/gallery/histogram
const data = [
  ["Month", "Value",],
  ["Jan", 1000],
  ["Feb", 1170],
  ["March", 660],
  ["April", 1030],
  ["May", 1050],
  ["June", 1130],
  ["July", 1150],
  ["Aug", 1130],
  ["Sep", 1170],
  ["Oct", 1230],
  ["Nov", 1260],
  ["Dec", 1030]

];
const options = {
  title: "Portfolio Performance",
  curveType: "function",
  legend: { position: "bottom" },
};
export default class StockChart extends React.Component {
  render() {
    return (
      <div className="chart">
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}