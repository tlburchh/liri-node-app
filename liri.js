require("dotenv").config();

var Spotify = require("node-spotify-api");
var spotify = new Spotify({id:process.env.SPOTIFY_ID, secret:process.env.SPOTIFY_SECRET});
// var client = new Twitter(keys.twitter);

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
    spotify.search({ type: 'track', query: option2 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
              
      console.log(JSON.stringify(data, null, 2)); 
      });
}else if (option === movie){
    //omdb access code
}else if (option === doThis){
    //do-what-i-say access code
}

