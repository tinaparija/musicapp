var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var SongSchema = new Schema({
  name: String,
  artist: String, 
  url: String,
});

var Song = mongoose.model('Song', SongSchema);
module.exports = Song;
