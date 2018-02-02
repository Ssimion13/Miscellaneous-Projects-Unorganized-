
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var noCaps = "abcdefghijklmnopqrstuvwxyz";



function antiCaps(str){

  var newString = "";
  for(var i = 0; i < str.length; i++){
  if(isLower(str[i])){
    newString += str[i].toUpperCase();
  }
  if(isCaps(str[i])){
    newString += str[i].toLowerCase();

  }
}
console.log(newString);

}

antiCaps('racEcar');

function isCaps(letter){

  return letter === letter.toUpperCase();

}

function isLower (letter){

  return letter === letter.toLowerCase();
}
