
/* function remove_duplicates(str){
  //create empty strings to fill
  var newstr = "";
  var extras = "";
  //set a for loop that loops through the string in question
  //console.log();
  for(var i = 0; i < str.length; i++){
  //make an if statement that checks whether the current char at i matches any prior
  if(newstr.indexOf(str[i]) !== -1){
    extras += str[i];
  } else {
    newstr += str[i];
  }
}
console.log("No duplicates " + newstr + " The Extras: " + extras);
}


remove_duplicates("bookkeeper larry");
*/

var loneTeen=function(a, b) {
  if( a >= 13 && a <=19){
    a = "teen";
  }
  if( b >= 13 && b <= 19){
    b= "teen";
  }
  if( a === "teen" and b === "teen" || a !== "teen" && b !== "teen"){
    return false;
  } else {
    return true;
  }

}
