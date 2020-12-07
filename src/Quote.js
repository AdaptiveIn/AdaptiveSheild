import React, { Component } from "react";

export default class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result1: "",
    };
  }
  componentDidMount() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");

    var raw =
      '{\n    "stock_ticker": "TSLA",\n    "stock_date": "2019-11-28",\n    "stock_close": 100.43\n}\n';

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://cors-anywhere.herokuapp.com/https://7yseqgoxea.execute-api.us-east-1.amazonaws.com/dev/test2",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        this.setState({result1: result})
        console.log("Success:", result);
      })
      .catch((error) => console.log("error", error));
  }
  render() {
    return (
      <div>
        <text>${this.state.result1}</text>
      </div>
    );
  }
}
