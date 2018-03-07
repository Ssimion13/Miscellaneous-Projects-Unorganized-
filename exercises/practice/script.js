/*var altPairs=function(str) {
  console.log((str[0] + str[1] + str[4] + str[5] + str[8] + str[9]))
  return (str[0] + str[1] + str[4] + str[5] + str[8] + str[9]);
}

altPairs("Chikoritaasad");


var withoutEnd2 = function(str) {

  var string = str;
  if( str.length < 2) {
    return ""
  }
  var newString = ""
  for(let i = 1; i < str.length - 1; i++){
    newString += string[i];
  }
console.log(newString)
return newString
}



var middleTwo=function(str) {
  if (typeof str !== "string" && !str.match(/[a-z]/i)) {
    return str
  }
  let string = str;
  if (string.length === 2){
    return string;
  }
  let middle2 = string.length/2;
  let middlepart = string.substring(middle2-1, middle2+1);
  return middlepart;

}

console.log(middleTwo("Helloaaaaa"))


var endsLy=function(str) {
  if(str[str.length -1] === "y" && str[str.length -2] === "l"){
    return true;
  } else {
    return false;
  }
}


*/
