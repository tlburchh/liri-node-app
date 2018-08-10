require("dotenv").config();

var Spotify = require("node-spotify-api");
var spotify = new Spotify({id:process.env.SPOTIFY_ID, secret:process.env.SPOTIFY_SECRET});
// var client = new Twitter(keys.twitter);
// var omdbkey = new Omdb(keys.omdb);
var omdb = require("omdb");
var option = process.argv[2];
var option2 = "";
var nodeArgs = process.argv
var twitter = "my-tweets";
var spotifyThis = "spotify-this-song";
var movie = "movie-this";
var doThis = "do-what-i-say";

for (var i =3; i < nodeArgs.length; i++) {

    // Build a string with the address.
    option2 = option2 + " " + nodeArgs[i];
  }

if (option === twitter){
    //twitter access code
}else if (option === spotifyThis){
    //spotify access code
    spotify.search({ type: 'track', query: option2, limit: 5 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        // console.log(data);
        // console.log(data.tracks.items);
        // var spotData = (JSON.stringify(data, null, 2))
      console.log("Artist: " + data.tracks.items.artists); 
      //********issues navigating to artist object************
      });
}else if (option === movie){
    //omdb access code
    omdb.search(option2, function(err, movies) {
        if(err) {
            return console.error(err);
        }
     
        if(movies.length < 1) {
            return console.log('No movies were found!');
        }
     
        movies.forEach(function(movie) {
            console.log('%s (%d)', movie.title, movie.year);
        });
    });
}else if (option === doThis){
    //do-what-i-say access code
}

