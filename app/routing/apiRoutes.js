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
    for(var i = 0; i < req.body.scores.length; i++){
      req.body.scores[i] = parseInt(req.body.scores[i])
    }
    for(var i = 0; i < friends.length; i++){
      console.log("===============");
      console.log(friends[i].name);
      console.log("===============");
      for (var j = 0; j < 10; j++) {
        console.log(friends[i].scores[j]);
      }
    }
    friends.push(req.body);
    var hanky = {
      name: "Mr. hanky",
      photo: "http://rs152.pbsrc.com/albums/s169/cokacola151/mrhanky.gif~c200"
    }
    res.json(hanky);
  });
}
