
var greaterCheck = function(num1,num2){
  if( num1 > num2) {
    console.log(num1 + " is greater than " + num2);
  }
}
greaterCheck(5,3);


var lengthCheck = function(string, condition) {
  if( string.length === condition ){
    console.log(string + "=" + condition + " : is the length");
  }
}
lengthCheck("Cat", 3);

if("cat".length === 3){
console.log("yo");
}


if( "cat" === "dog"){
  console.log("Is the same");
} else {
  console.log("not the same");
}


var person = {
  name: "Bobby",
  age: 19
}
console.log( person.name[0]);
if( person.age > 18 && person.name[0] === "B"){
  console.log(person.name + " is allowed to go to the movie");
} else {
  console.log(person.name + " is not allowed to go to the movie");
}


if( 1 === "1"){
  console.log("loose");
} else if (1 == "1"){
  console.log("abstract");
} else {
  console.log("not equal at all");
}

if( 1 <= 2 && 2 === 4){
  console.log("yes");
}

if ( 3 * 4 > 10 && 5 + 10 > 10){
  console.log("yes");
}
var dog = "dog"
if(typeof dog === 'string'){
  console.log("Yes");
}
var hey = true;

if(typeof hey === 'boolean'){
  console.log("Yeeeee");
}
var elem = undefined;
if(!elem){
  console.log("undefined!")
}

if( "d" > 12 ){
  console.log("hey");
} else {
  console.log("yo");
}
var number = 3;
number % 2 === 0 ? console.log("Even!") : console.log("Odd");
