var express = require("express");
var app = express();
var router = express.Router();
var request = require("request");
const bodyParser = require("body-parser");
const API_PORT = 5000;
app.use(bodyParser.json());
router.post("/getcoviddata", function (req, res, next) {
  console.log("HIT");
  //need to hit the covid api with the data provided in the request.
  var options = {
    method: "GET",
    url: "https://covidtracking.com/api/states",
    headers: {},
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    console.log("Searching for", req.body.currstate);
  });
  res.send({ covidcases: "testing" });
});

app.use("/api", router);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
