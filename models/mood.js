var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MoodSchema = new Schema({
  name: String,
  color: String, 
  description: String, 
  image: String, 
  imageSpeed: Number, 
  songs: {
    type: Schema.Types.ObjectId,
    ref: 'Song'
  }   
});


var Mood = mongoose.model('Mood', MoodSchema);
module.exports = Mood;
