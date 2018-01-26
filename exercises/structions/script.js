//remaining methods: indexof/lastindexof, slice,



/*  function censorship(str) {
  var food = "Hey, "
   if( str.match("Burger King")){
     var betterFood = food.concat(str.replace("Burger King", "Farmer Boys"));
     console.log(betterFood)
     return betterFood;
   } else {
     console.log(str);
     return str;
   }

 }

censorship("Burger King is definitely the best restaurant.");

*/
/*
function pointless(str){
  var shortString = str.substr(5);
 console.log(shortString);
}

function angry(str){
  var angrier = str.toUpperCase();
  var emphasis = angrier.split(" ");
  console.log(emphasis);
}
*/
function removeExcitement(str){
  console.log(str.length -1);
  console.log(str.lastIndexOf("!"))
  if(str.lastIndexOf("!") === str.length - 1) {
    var nope = str.slice(str, str.length -1);
    console.log(nope);
  }
}

function getItDone(str){
  var indices = str.indexOf("Hey");
  console.log(indices);
}

getItDone("whats up? Hey, listen!");
// angry("what are you doing in my swamp!");

//removeExcitement("What are you up to!");
