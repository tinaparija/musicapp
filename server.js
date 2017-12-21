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
          path: "/api/moods/:id/songs",
          description: "displays all songs in a given mood"
        },
        {
          method: "POST",
          path: "/api/moods",
          description: "adds moods to existing set"
        },
        {
          method: "POST",
          path: "/api/moods/:id/songs",
          description: "adds songs to existing mood"
        },
        {
          method: "PUT",
          path: "/api/moods/:moodId/songs/:id",
          description: "finds a single song and takes in edits"
        },
        {
          method: "DELETE",
          path: "/api/moods/:moodId",
          description: "deletes a single mood"
        },
        {
          method: "DELETE",
          path: "/api/moods/moodId/songs/:id",
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

// displays all moods
app.get('/api/moods', function (req, res) {
  db.Mood.find({}, function(err, moods) {
      res.json(moods);
  });
});

//displays a single mood by id
app.get('/api/moods/:id', function (req, res) {
  db.Mood.findOne({_id:req.params.id}, function(err, mood){
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(mood);
    });
});

// displays all songs in a given mood
app.get('/api/moods/:id/songs', function (req, res) {
  db.Mood.findById(req.params.id, function(err, mood){
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(mood.songs);
    });
});


// adds moods to existing set
app.post('/api/moods', function (req, res){
  var newMood = db.Mood({
  	name: req.body.name,
  	color: req.body.color,
  	description: req.body.description,
  	imageURL: req.body.imageURL,
  	imageSpeed: req.body.imageSpeed,
  	songs: req.body.songs,
    });

  newMood.save(function(err, newMood){
    if(err) {return console.log(err);}
    console.log("saved new mood: ", newMood);
  });
      res.json(newMood);
});

// adds songs to a mood

app.post('/api/moods/:moodId/songs', function (req, res){
  let song = new db.Song({
      name: req.body.name,
      artist: req.body.artist,
      url: req.body.url,
      notes: req.body.notes
  });

  let moodId = req.params.moodId;
  db.Mood.findById(moodId, function (err, foundMood) {
    if (err) {console.log('error', err)};
    foundMood.songs.push(song);
    foundMood.save();
    res.json(foundMood);
  })
});

app.put('/api/moods/:moodId/songs/:id', function(req, res) {
  let moodId = req.params.moodId;
  let songId = req.params.id;
  db.Mood.findOne({_id: moodId}, function(err, foundMood) {
    let foundSong = foundMood.songs.id(songId);
    foundSong.notes = req.body.notes;
    foundMood.save(function(err, saved) {
      if (err) {console.log('error ', err)}
      res.json(saved);
    });
  });
});

// deletes a single mood
app.delete('/api/moods/:id', function(req, res) {
  console.log('deleting id: ', req.params.id);
  db.Mood.remove({_id: req.params.id}, function(err) {
    if (err) { return console.log(err); }
    console.log("removal of id=" + req.params.id  + " successful.");
    res.status(200).send();
  });
});

// deletes a song from a mood

app.delete('/api/moods/:moodId/songs/:id', function (req, res){
  var moodId = req.params.moodId;
  var songId = req.params.id;

  db.Mood.findOne({_id:moodId}, function (err, foundMood){
    if(err){console.log(error, err);}

    var foundSong = foundMood.songs.id(songId);
    foundSong.remove();

    foundMood.save(function(err, saved){
      if(err) {console.log('error', err);}
      res.json(saved);
    });
  });
});



/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/')
})
