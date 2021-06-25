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
    var a = JSON.parse(response.body);
    console.log("Searching for", req.body.currstate);
    for (state in a) {
      console.log(a[state]);
      if (a[state].state == req.body.currstate) {
        //in the state we want data from
        res.send({ covidcases: a[state].positive });

        break;
      }
    }
  });
});

app.use("/api", router);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
