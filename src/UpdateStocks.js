export function UpdateStocks(StockData) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
   
  
    var raw = JSON.stringify({
      stock_ticker: StockData[0],
      stock_quantity: StockData[1],
    });
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    fetch(
        "https://7yseqgoxea.execute-api.us-east-1.amazonaws.com/dev/update-stocks",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }