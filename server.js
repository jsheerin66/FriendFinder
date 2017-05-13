// REQUIREMENTS
// bodyParser is used to process information from the document's body
var bodyParser = require('body-parser');
// express is the bare bones/ shell of the node server
var express = require('express');

// PORT IN USE
// specifying to use 8080 or restate the port in the terminal
// are there other ports? what is the difference between ports?
var PORT = 8080 || process.argv[2];

// CREATING EXPRESS SERVER
// app instantiates (like a cup of ramen soup) the server
var app = express();

// PLUGGING IN MIDDLEWARE
// body parser is set up as middleware
// is this specific to my code or can be copy and pasted to achieve same result on diff apps?

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// EXPRESS ROUTES
// using the / path to deliver a string
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// TESTING THE EXPRESS ROUTE
// app.get('/', function (req, res) {
//   res.send('Justin\'s World');
// })

// EXPRESS'S LISTENING COMPONENT
// allows the server to run on localhost at whichever port was specified
app.listen(PORT, function() {
  console.log("NOW LISTENING AT PORT: ", PORT);
});
