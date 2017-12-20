var mongoose = require("mongoose");

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/musicapp", {useMongoClient: true});
mongoose.Promise = global.Promise; 


module.exports.Song = require("./song.js");
module.exports.Mood = require("./mood.js");
