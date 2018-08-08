require("dotenv").config();

var spotify = new Spotify(MediaKeySession.spotify);
var client = new Twitter(MediaKeySession.twitter);


var option = process.argv[2];
var twitter = "my-tweets";
var spotify = "spotify-this-song";
var movie = "movie-this";
var doThis = "do-what-i-say";


if (option === twitter){
    //twitter access code
}else if (option === spotify){
    // console.log(spotify);
    //spotify access code
}else if (option === movie){
    //omdb access code
}else if (option === doThis){
    //do-what-i-say access code
}

