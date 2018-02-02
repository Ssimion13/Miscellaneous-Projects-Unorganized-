var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var index = 'undecided';

while(options[index] != 'fight bears'){
  index = ask.keyInSelect(options, "What would you like to do today?: ");
  if(options[index] === 'pick flowers'){
    console.log("You pick some flowers. You make a bouquet.");
  } else if(options[index] === 'shoot guns'){
    console.log("You shoot guns.");
  } else if(index === -1){
    console.log("no cancelling")
  }
}
console.log("You fought a bear and got beat up!");
