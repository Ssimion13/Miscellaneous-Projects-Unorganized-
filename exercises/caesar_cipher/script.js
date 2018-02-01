

var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters to the right would you like to shift? '));

var alphabet = "abcdefghijklmnopqrstuvwxyz";

//create a for loop that runs the length of the string,
//we need to find a way to shift past z


var changedInput = "";

while(isNaN(shift)){
  console.log("Please insert a number");
  var shift = parseInt(readline.question('How many letters to the right would you like to shift? '));
}
for( var i = 0; i < input.length; i ++){
  var currentIndex = input[i];
    if( alphabet.search(currentIndex) === -1){
      changedInput += input[i];
    } else {
    var foundAlphabet = alphabet.indexOf(input[i])
       var changedIndex = Number(foundAlphabet) + parseInt(shift) % 26 ;
       console.log(changedIndex);
       if( changedIndex > 25){
         changedIndex -= 26;
       }
       changedInput += alphabet[changedIndex];
   }
}
   console.log(changedInput);
