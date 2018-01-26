
var removeA = function(str){
 var empty = "";
  for (var i = 0; i < str.length; i++){
    if( str.charAt(i) !== "A" && str.charAt(i) !== "a"){
      empty += str.charAt(i);
    }
  }
  console.log(empty);
}
