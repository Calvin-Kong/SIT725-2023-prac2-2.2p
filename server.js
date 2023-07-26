let express = require("express");
let app = express();
let port = 3000;

app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// fetch input from index.html
app.get("/multiplyResult", (req, res) => {
  let result = req.query.result;

  console.log("Result is", result);
  res.send(result);
  // print out result in server page
});

app.get("/divideResult", (req, res) => {
  let result = req.query.result;

  console.log("Result is", result);
  res.send(result);
  // print out result in server page
});

app.get("/sumResult", (req, res) => {
  let result = req.query.result;

  console.log("Result is", result);
  res.send(result);
  // print out result in server page
});

app.get("/subtractResult", (req, res) => {
  let result = req.query.result;
  res.send(result);
  // print out result in server page
});

app.listen(port, () => {
  console.log("Server running, listenting to port: " + port);
});
