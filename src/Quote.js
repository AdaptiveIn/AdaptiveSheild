import React, { Component } from "react";

export default class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result1: "",
    };
  }
  componentDidMount() {
    var raw = "";

    var requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://7yseqgoxea.execute-api.us-east-1.amazonaws.com/dev/quote-engine",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        this.setState({ result1: result});
        console.log("Success:", result);
      })
      .catch((error) => console.log("error", error));
  }
  render() {
    return (
      <div>
        <text>COST: ${this.state.result1.slice(17,24)}</text>
      </div>
    );
  }
}
