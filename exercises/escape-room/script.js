var ask = require('readline-sync');
var decision = "";

console.log("You awaken in a dank cell. The door is locked, but there is a key in reach.");
console.log("There is also a hole in the wall. In the corners of your mind you feel the hole calling for your hand. \n");
  console.log("1. Open the door \n");
  console.log("2. Pick up the key \n");
  console.log("3. Put your hand in that temptuous hole \n");
  console.log("Make your choice by typing the number in. \n");



var checkpoint = false;
while(checkpoint === false){
  var choice = ask.question("\nWhat shall you do? ");
   decision = choice;
   console.log(decision);

if(decision === "1"){
  console.log("you don't have the key! ");
  }


if(decision === "2"){
  var key = true;
  checkpoint = true;
  console.log("You pick up the key.");
}

if(decision === "3"){
  console.log("The holes eats you whole. Get it? Its a pun ");
  checkpoint = true;
}
}
if(key){
  console.log("\nAt long last, you have acquired the key. Your options are now: \n")
  console.log("1. Open the door \n");
  console.log("2. Put your hand in that temptuous hole \n");
    var choice2 = ask.question("\n What shall you do? ");

  if(choice2 === "1"){
      console.log("You have escaped, congratulations!");

    }
  if(choice2 === "2"){
      console.log("The hole eats you whole and the key too, somehow. \n Alas.");

}
}
