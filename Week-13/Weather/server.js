// Require node_modules

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const e = require("express");
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

app.get("/weather/MultipleCity", function (req, res) {
  // Get city name passed in the form
  let city = req.query.city;
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = {};

  console.log("data", city, page, limit);

  let url = `http://api.openweathermap.org/data/2.5/group?id=${city}&units;=metric&appid=${apiKey}`;

  // Request for data using the URL
  request(url, function (err, response, body) {
    // On return, check the json data fetched
    if (err) {
      res.render(400, { weather: null, error: "Error, please try again" });
    } else {
      let weather = JSON.parse(body);
      if (endIndex < weather.list.length)
        results.next = {
          page: page + 1,
          limit: limit,
        };
      if (startIndex > 0) {
        results.previous = {
          page: page - 1,
          limit: limit,
        };
      }
      results.results = weather.list.slice(startIndex, endIndex);
      res.json(results);
    }
  });
});

//  By x days
app.get("/weather/City/days", function (req, res) {
  let city = req.query.city;
  let days = req.query.days;
  console.log(city, days);
  // cnt=${days}
  // London;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&cnt=${days}&appid=${apiKey}`;

  // Request for data using the URL
  request(url, function (err, response, body) {
    // On return, check the json data fetched
    if (err) {
      res.render(400, { weather: null, error: "Error, please try again" });
    } else {
      let weather = JSON.parse(body);
      res.json(weather);
      // console.log(weather);
    }
  });
});

// We shall set up our port configurations
app.listen(5000, function () {
  console.log("Weather app listening on port 5000!");
});
