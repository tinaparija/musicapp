var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

module.exports.Song = require("./song.js");
module.exports.Mood = require("./mood.js");
