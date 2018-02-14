


/* var monkeyTrouble=function(aSmile, bSmile){
  if( aSmile && bSmile){
     return true;
   } else if( !aSmile && !bSmile){
      return true;
    } else {
    return false;

}
}
*/
/* var max1020 = function(a,b){
if( a >= 10 && a <= 20 || b >=10 && b<= 20){
  if( a >= b && a<=20){
    return a;
  } else {
    if( b<=20){
    return b;
  }
  }
} else {
  return 0;
}
}
console.log(max1020(10,21));



var sumDouble=function(a ,b) {
  if(a === b){
    console.log(2 * a + b);
    return 2 * a + b;
  } else {
    return a + b;
}
}

var delDel=function(str) {
if(str[1] === "d" && str[2] === "e" && str[3] === "l"){
  newStr = str.split('');
  newStr.splice(1,3);
  newStr = newStr.join('');
  return newStr;
} else {
  return str;
}

}
console.log(delDel("sdelvasadasdasda"));



var intMax=function(a, b, c) {
 if(a >= b && a >=c ){
   return a;
   } else if (b >= a && b >= c){
     return b;
   } else if (c >= a && c >= b) {
     return c;
   }
}



var frontBack=function(str) {
  var newString = "";
  for( i= 0; i < str.length; i++){
    if(i === 0){
      newString += str[str.length - 1];
    } else if (i === str.length -1){
      newString += str[0];
    } else {
      newString += str[i];
    }
}
console.log(newString);
}
frontBack("Chocolate");



var notString=function(str) {
   if(str[0] !== "n" && str[1] !== "o" && str[2] !== "t"){
     var array = str.split("");
      array.unshift("not ");
      var newString = array.join("");
      return newString;
   } else {
     return str;
}
}

console.log(notString("Bears"));


var endUp=function(str) {
  if(str.length <= 3){
    return str.toUpperCase();
  } else {
    var caps = str.substring(str.length -3, str.length ).toUpperCase();
    return str.substring(0, str.length-3) + caps;
  }

}
console.log(endUp("bee"));

const batman = ["Batman", "Robin", "The Joker"];

const superman = ["Superman", "Lex Luthor", "Someone else"];

const combined = [...batman, ...superman + " b"];


console.log(combined);




const name = "Bob";
const eyeColor = "Hazel";
const array = [1,2,3,4,5]
const person = {
  name,
  eyeColor,
  ...array
}

console.log(person);
person.Batman = "nanananananana";

console.log(person);



console.log(`my name is ${name} and I have eyes that are ${eyeColor}.`)


var everyNth=function(str, n){
  var counter = "";
  for (var i = 0; i < str.length; i += n){
    counter += str[i];
    console.log("counter");
  }
  return counter;
}
console.log(everyNth("Whyererere", 3));


var monkeyTrouble=function(aSmile, bSmile){
  if(  (aSmile && bSmile) && (!aSmile && !bSmile)){
     return true;
  } else {
     return false;

}
}


var frontBack=function(str) {
  var front = str[0];
  var end = str[str.length -1];
  var middle = str.substring(1, str.length -1);


  return end + middle + front;

}
console.log(frontBack("Hellothere"));



var posNeg=function(a, b, negative) {

  if ( (a < 0 && b > 0) || (a > 0 && b < 0) ){
    return true;
  }
   if(negative && a > 0 && b > 0){
     return true;
   } else {
    return false;
  }

}

console.log(posNeg(-4,-5,true));





var front22=function(str) {
  if(str.length > 2){
var front2 = str[0] + str[1];
  return front2 + front22 + front2;
} else {
  return str + str + str;
}

}

console.log(front22(""))

*/
