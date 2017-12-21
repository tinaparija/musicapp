var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  Song = require('./song')

var MoodSchema = new Schema({
  name: String,
  color: String, 
  description: String, 
  imageURL: String, 
  imageSpeed: Number, 
  songs: [Song.schema]  
});

var Mood = mongoose.model('Mood', MoodSchema);
module.exports = Mood;

