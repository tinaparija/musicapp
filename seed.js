// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var moods_list =
[{
	name: "Funky",
	color: "#FF5733",
	description: "Songs that make you want to get up and groove.",
	imageURL: "https://ak4.picdn.net/shutterstock/videos/6062744/thumb/1.jpg",
	imageSpeed: 20,
	songs:[
		  	{
		  		name: "Breakdance Lesson",
		  		artist: "Kaytranada",
		  		url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/252290297",
					notes: ""
		  	},
		  	{
		  		name: "Love Strong",
		  		artist: "Moon Boots",
		  		url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/92187982",
					notes: ""
		  	},
		  	{
		  		name: "Stayin' Alive",
		  		artist: "The Bee Gees",
		  		url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/140102039",
					notes: ""
		  	}]
},
{
	name: "Depressed",
	color: "#696969",
	description: "Songs to cry to.",
	imageURL: "https://ak4.picdn.net/shutterstock/videos/6062744/thumb/1.jpg",
	imageSpeed: 20,
	songs: [
		  	{
		  		name: "Fool Of Me",
		  		artist: "Say Lou Lou",
		  		url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/90432050",
					notes: ""
		  	},
		  	{
		  		name: "Shadow's Song",
		  		artist: "Foxes in Fiction",
		  		url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/157001778",
					notes: ""
		  	},
		  	{
		  		name: "Armchairs",
		  		artist: "Andrew Bird",
		  		url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/19536882",
					notes: ""
		  	}]
},
{
	name: "Angry",
	color: "#DB0000",
	description: "Songs that make you want to scream.",
	imageURL: "https://ak4.picdn.net/shutterstock/videos/6062744/thumb/1.jpg",
	imageSpeed: 20,
	songs: [
		  	{
		  		name: "One Step Closer",
		  		artist: "Linkin Park",
		  		url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/7723321",
					notes: ""
		  	},
		  	{
		  		name: "Coming Undone",
		  		artist: "Korn",
		  		url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/113927942",
					notes: ""
		  	},
		  	{
		  		name: "MakeDamnSure",
		  		artist: "Taking Back Sunday",
		  		url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/220647601",
					notes: ""
		  	}]
},
{
	name: "Calm",
	color: "#6B67D8",
	description: "Songs to help you chill out.",
	imageURL: "https://ak4.picdn.net/shutterstock/videos/6062744/thumb/1.jpg",
	imageSpeed: 20,
	songs: [
		  	{
		  		name: "Clouds",
		  		artist: "Imagined Herbal Flows",
		  		url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/180519630",
					notes: ""
		  	},
		  	{
		  		name: "Love Undone",
		  		artist: "Lost Midas",
		  		url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/104171442",
					notes: ""
		  	},
		  	{
		  		name: "California Analogue Dream",
		  		artist: "Vondelpark",
		  		url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/82549966",
					notes: ""
		  	}]
}];

db.Mood.remove({}, function(err, moods){
	db.Song.remove({}, function (err, songs) {
		moods_list.forEach(function(moods) {
			db.Song.create(moods.songs, function (err, savedSongs) {
				moods.songs = savedSongs;
				db.Mood.create(moods, function (err, savedList){
					console.log("saved list", savedList.name)
				});
			});
		});
	});
});
