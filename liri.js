require("dotenv").config();

var Spotify = require("node-spotify-api");
var spotify = new Spotify({id:process.env.SPOTIFY_ID, secret:process.env.SPOTIFY_SECRET});
// var client = new Twitter(keys.twitter);
var request = require("request");
var key = require("./keys")
var fs = require("fs");
var option = process.argv[2];
var option2 = "";
var nodeArgs = process.argv;
var twitter = "my-tweets";
var spotifyThis = "spotify-this-song";
var movie = "movie-this";
var doThis = "do-what-it-says";

for (var i =3; i < nodeArgs.length; i++) {

    // Build a string with the address.
    option2 = option2 + " " + nodeArgs[i];
  }

if (option === twitter){
    //twitter access code
}else if (option === spotifyThis){
    //spotify access code
    spotify.search({ type: 'track', query: option2, limit: 2}, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        // console.log(data);
        // console.log(data.tracks.items);
        var item = data.tracks.items[0];
        // console.log(item);
        for (var i = 0; i < item.length; i++){
            console.log(item[i]);
        }
    //   console.log("Artist: " + data.tracks.items); 
      //********issues navigating to artist object************
      });
}else if (option === movie){
    //omdb access code
    request("http://www.omdbapi.com/?t="+ option2 + "&y=&plot=short&apikey="+process.env.OMDB_API , function(error, response, body) {

        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode === 200) {
    //   console.log(key.omdb.apikey);
          // Parse the body of the site and recover just the imdbRating
          // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      
          var parsedBody = JSON.parse(body);
          console.log("Title: "+ parsedBody.Title+
                    "\nRated: "+ parsedBody.Rated+
                    "\nYear: "+ parsedBody.Year+
                    "\nPlot: "+ parsedBody.Plot+
                    "\nThe movie's rating is: " + parsedBody.imdbRating);
        }
      });
      

}else if (option === doThis){
    console.log(doThis);
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
        console.log(data);
        var dataArr = data.split(",");
        console.log(dataArr);
    });
    //do-what-i-say access code
}

