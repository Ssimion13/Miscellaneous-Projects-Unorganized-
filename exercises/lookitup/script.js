var ask = require("readline-sync");

var dictionary = {
  42: "The meaning of life, the universe, and everything"
}




function addWords(object){
  var newWord = "";
  var definition = "";
  var userConfirm = "";
  var checkWords = "";
  var checker = "";
  var wantedWord = "";
var checkpoint = false;



  while(userConfirm !== "n"){
   newWord = ask.question("What word would you like to add? ");

   definition = ask.question("What does the word mean? ");
   object[newWord] = definition;

   userConfirm = ask.question("Would you like to add another word? Press n if no. ");
  }
   checkWords = ask.question("Would you like to look up a word you have added? Type 'y' if yes ");
   if(checkWords === "y"){
     wantedWord = ask.question("What is the name of the word? ")
     console.log("Your word is " + wantedWord + "; it means " + object[wantedWord] + ".");
   }
  }


addWords(dictionary);
