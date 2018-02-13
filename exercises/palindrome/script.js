



var ask = require('readline-sync');
var string=ask.question("What string would you like to check? ");

function isPalindrome(str){

  var compareString = str.toLowerCase().split(' ').join('').replace(/!/g, '').replace(/,/g,'').replace(/[?]/g, "");
    console.log(compareString);
  var counter = 0;
  var revStr = compareString.split('').reverse().join('');
  console.log(revStr);
  for(var i = 0; i < compareString.length; i++){
    if(compareString[i] === revStr[i]){
      counter++;
    }
  }
  if(counter === compareString.length){
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}


isPalindrome(string);
