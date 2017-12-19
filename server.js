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
          path: "/api/:moods/songs",
          description: "all songs in a given mood"
        },
        {
          method: "POST",
          path: "/api/moods",
          description: "adds moods to existing set"
        },
        {
          method: "PUT",
          path: "/api/:moods/songs/:id",
          description: "finds a single song and takes in edits"
        },
        {
          method: "DELETE",
          path: "/api/moods/:id",
          description: "deletes a single mood"
        },
        {
          method: "DELETE",
          path: "/api/moods/songs/:id",
          description: "deletes a single song"
        }]
      }); 
  }); 

app.get('/api/moodsHardCode', function (req, res) {
  res.json({
  name: "Funky",
  color: "Orange", 
  description: "Songs that make you want to get up and groove.", 
  imageURL: "https://ak4.picdn.net/shutterstock/videos/6062744/thumb/1.jpg", 
  imageSpeed: 20, 
  songs: [
  	{
  		name: "Breakdance Lesson",
  		artist: "Kaytranada",
  		url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/252290297&amp"
  	},
  	{
  		name: "Love Strong",
  		artist: "Moon Boots",
  		url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/92187982&amp"
  	},
  	{
  		name: "Stayin' Alive",
  		artist: "The Bee Gees",
  		url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/140102039&amp"
  	}]
 })
}); 

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/')
})
