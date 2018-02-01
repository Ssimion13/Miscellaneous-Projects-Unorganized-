
var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];


var songLyrics = function(lyrics) {
    console.log(lyrics.join(" "));


              };


var songLyricsReversal = function(lyrics) {
  lyrics.reverse();
  console.log(lyrics.join(" "));
  return lyrics.join(" ");


};

var songLyrics2 = function(lyrics){
  var counter = 0;
  var superLyrics = ""
  for(var i = 0; i < lyrics.length; i++){
    if( counter % 2 === 0) {
      superLyrics += lyrics[i] + " ";
    }
    counter++;
  }
  console.log(superLyrics);
  return superLyrics;
}

//OR do return lyrics.reverse().join();



var songLyrics3 = function(lyrics){
  var counter = 0;
  var superDuperLyrics = ""
  console.log(superDuperLyrics);
  for(var i = 0; i < lyrics.length; i++){
    if( i % 2 === 0) {
      superDuperLyrics += lyrics[i + 1] + " ";
    } else {
      superDuperLyrics += lyrics[i - 1] + " ";
        }
    counter++;
  }
  console.log(superDuperLyrics);
}

//reverses every two words, that is to say, when i % 2 === 0, we put the word ahead of the normal word there.

songLyrics3(lyrics);
//songLyrics(lyrics);
//songLyricsReversal(lyrics);
//songLyrics2(lyrics);
