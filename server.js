// server.js
// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express'),
  bodyParser = require('body-parser'),
  db = require('./models');

// generate a new express app and call it 'app'
var app = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// define a root route: localhost:3000/
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

/*
 * JSON API Endpoints
 */

app.get('/api', function (req, res) {
  res.json({
    documentationUrl: "ADD URL", 
    baseUrl: "ADD URL", // 
    endpoints: [{
          method: "GET",
          path: "/api",
          description: "describes all endpoints"
        },
        {
          method: "GET",
          path: "/api/moods",
          description: "displays all moods"
        },
        {
          method: "GET",
          path: "/api/moods/:id",
          description: "displays a single mood by id"
        },
        {
          method: "GET",
          path: "api/songs",
          description: "displays all songs by id"
        },
        {
          method: "POST",
          path: "/api/cities",
          description: "adds new cities"
        }]
      }); 
  }); 


/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/')
})
