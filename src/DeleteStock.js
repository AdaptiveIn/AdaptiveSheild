export function DeleteStock(ticker) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain");

  var raw = JSON.stringify({
    stock_ticker: ticker[0],
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://7yseqgoxea.execute-api.us-east-1.amazonaws.com/dev/delete-stocks",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => console.log("error", error));
}
