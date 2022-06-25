// Require node_modules

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

// Configure dotenv package

require("dotenv").config();

// Set up our openweathermap API_KEY

const apiKey = `${process.env.API_KEY}`;

// Setup our express app and body-parser configurations
// Setup our javascript template view engine
app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ status: "API Working !!!" });
});

app.post("/", function (req, res) {
  // Get city name passed in the form
  let city = req.body.city;
  console.log("data", req.body);

  let url = `http://api.openweathermap.org/data/2.5/group?id=${city}&units;=metric&appid=${apiKey}`;

  // Request for data using the URL
  request(url, function (err, response, body) {
    // On return, check the json data fetched
    if (err) {
      res.render(400, { weather: null, error: "Error, please try again" });
    } else {
      let weather = JSON.parse(body);

      // We shall output it in the console just to make sure that the data being displayed is what we want
      console.log(weather);
    }
  });
});

// We shall set up our port configurations
app.listen(5000, function () {
  console.log("Weather app listening on port 5000!");
});
