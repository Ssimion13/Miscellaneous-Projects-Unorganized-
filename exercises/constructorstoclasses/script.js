
class Clown {
  constructor(name, shoeSize, isScary){
    this.name = name;
    this.shoeSize = shoeSize;
    this.isScary = isScary;
  }
}

const superclown = new Clown("bees",12, true);
console.log(superclown);


class HangmanGame {
  constructor(word, guessesUntilLose){
    this.word = word;
    this.guessesUntilLose = guessesUntilLose;
  }
 wrongGuess() {
   this.guessesUntilLose--;
 }
}
const maybe = new HangmanGame("Seven", 5);
maybe.wrongGuess();

console.log(maybe.guessesUntilLose);


class Media {
  constructor(title, duration){
    this.title = title;
    this.duration = duration;
    this.isPlaying = false;
  }
  play(){
    this.isPlaying = true;
  }
  stop(){
    this.isPlaying = false;
  }
}

class Song extends Media{
  constructor(title, duration, artist){
    super(title,duration)
    this.artist = artist;
  }
}
