var path = require('path');
var express = require('express');
var friends = require('../data/friends');
var app = express();

// EXPORTS THE APP OBJECT SO THAT IT IS AVAILABLE FOR ALL OTHER JAVASCCRIPT FILES TO IMPORT
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body);
  });
}
