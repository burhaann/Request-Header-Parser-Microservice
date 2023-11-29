// index.js
// where your node app starts

// init project
require("dotenv").config();
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.get("/api/whoami", function (req, res) {
  const ipAddress = req.ip; // Getting the IP address from the request
  const ip = req.headers["x-forwarded-for"];
  const language = req.headers["accept-language"]; // Getting the preferred language from the headers
  const software = req.headers["user-agent"]; // Getting the software information from the headers

  const response = {
    ipaddress: ipAddress,
    language: language,
    software: software,
  };

  res.json(response);

  console.log(req.headers);
  console.log(req.rawHeaders);
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
