


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

*/

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
