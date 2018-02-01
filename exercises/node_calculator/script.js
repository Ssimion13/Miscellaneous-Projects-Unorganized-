var ask = require('readline-sync');

var number1 = ask.question('Please insert the first number. ');

var number2 = ask.question('Please insert the second number ');


var whichFunction = ask.question('What kind of math would you like to perform? (addition, subtraction, multiplication, division)? ');


switch(whichFunction){

  case "addition":
    addition(number1, number2);
    break;

  case "subtraction":
    subtraction(number1, number2);
    break;

  case "multiplication":
  multiplication(number1, number2);
  break;

  case "division":
  division(number1, number2);
  break;

  default:
   console.log("Please insert a correct operation.");
   break;

}

function addition(num1, num2){
var result = parseInt(num1) + parseInt(num2);
 console.log(result);
  return num1 + num2;
}

function subtraction(num1,num2){
  var result = parseInt(num1) - parseInt(num2);
   console.log(result);
    return num1 - num2;
  }

function multiplication(num1, num2){
  var result = parseInt(num1) * parseInt(num2);
   console.log(result);
    return num1 * num2;
  }

function division(num1, num2){
  var result = parseInt(num1) / parseInt(num2);
   console.log(result);
    return num1 / num2;
  }
