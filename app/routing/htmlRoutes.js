var path = require('path');
var express = require('express');

var app = express();

// EXPORTS THE APP OBJECT SO THAT IT IS AVAILABLE FOR ALL OTHER JAVASCCRIPT FILES TO IMPORT
module.exports = function(app) {
  app.use("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });
}
