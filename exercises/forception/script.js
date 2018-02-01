var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

var alphaArray = alphabet.split("");
var newArray = [];

for( var i = 0; i < people.length; i++){
  newArray.push(people[i]);
  for( var j = 0; j < alphaArray.length; j++){
    newArray.push(alphaArray[j]);
  }
}
console.log(newArray);
