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
  		url: '<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/252290297&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>',
			notes: ""
  	},
  	{
  		name: "Love Strong",
  		artist: "Moon Boots",
  		url: '<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/92187982&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>',
			notes: ""
  	},
  	{
  		name: "Stayin' Alive",
  		artist: "The Bee Gees",
  		url: '<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/140102039&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>',
			notes: ""
  	}
	]
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
		  		url: '<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/90432050&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>',
					notes: ""
		  	},
		  	{
		  		name: "Shadow's Song",
		  		artist: "Foxes in Fiction",
		  		url: '<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/157001778&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>',
					notes: ""
		  	},
		  	{
		  		name: "Armchairs",
		  		artist: "Andrew Bird",
		  		url: '<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/19536882&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>',
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
		  		url: '<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/7723321&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>',
					notes: ""
		  	},
		  	{
		  		name: "Coming Undone",
		  		artist: "Korn",
		  		url: '<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/113927942&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>',
					notes: ""
		  	},
		  	{
		  		name: "MakeDamnSure",
		  		artist: "Taking Back Sunday",
		  		url: '<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/220647601&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>',
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
		  		url: '<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/180519630&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>',
					notes: ""
		  	},
		  	{
		  		name: "Love Undone",
		  		artist: "Lost Midas",
		  		url: '<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/104171442&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>',
					notes: ""
		  	},
		  	{
		  		name: "California Analogue Dream",
		  		artist: "Vondelpark",
		  		url: '<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/82549966&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>',
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
