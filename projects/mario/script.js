
var button = document.getElementById('finisher');
var totalCaught = 0;
var finalCost = 0;

//https://www.mariowiki.com/images/thumb/d/d8/MPSR_King_Bob-omb.png/250px-MPSR_King_Bob-omb.png
//https://www.mariowiki.com/images/thumb/6/63/CheepCheepNSMBU.png/200px-CheepCheepNSMBU.png




var goombaCost = function(){
  var goombasRemoved = parseInt(document.getElementById('goombaInput').value);
   totalCaught += goombasRemoved;
   finalCost += (5 * goombasRemoved);
}

var bombCost = function(){
  var bombsRemoved = parseInt(document.getElementById('bombInput').value);
   totalCaught += bombsRemoved;
   finalCost += (7 * bombsRemoved);
}

var cheepCost = function(){
  var cheepsRemoved = parseInt(document.getElementById('cheepInput').value);
   totalCaught += cheepsRemoved;
   finalCost += (11 * cheepsRemoved);
}


var totalCost = function() {
  cheepCost();
  bombCost();
  goombaCost();

  var totalOutput = document.getElementById('totalCost');
  if(isNaN(finalCost)){
    totalOutput.innerHTML = "Please insert a number into all categories."
  } else {

  totalOutput.innerHTML = "The total is " + finalCost +  ", out of " + totalCaught + " caught";
 document.body.background = "http://oyster.ignimgs.com/social/avatars/users2/34/1891375-1511702643.png"
 document.getElementById("title").style.color = "White";
 document.getElementById("title").style.backgroundColor = "Black";

  }
  finalCost = 0;
  totalCaught = 0;

}

button.addEventListener("click", totalCost);
