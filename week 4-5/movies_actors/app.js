var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models/index.js");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));


console.log(db.Person)

app.get("/", function (req, res) {
  res.render("posts/new.ejs");
});