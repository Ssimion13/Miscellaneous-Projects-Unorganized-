/* var wizards = ["Edwin Odesseiron", "Harry Potter", "Ronny the Bear", "Gandalf the Grey"]

 var i = 0;
wizards.forEach(function(element){
  console.log(wizards[i]);
i++;

});
*/


var wizards = [
  {
    name: "Edwin Odesseiron",
    age: 37,
    alignment: "lawful evil",
    isAlive: true
  },
  {
    name: "Harry Potter",
    age: 21,
    alignment: "neutral good"
  },
  {
    name: "Hermony Granger",
    age: 21,
    alignment: "lawful good"
  },
  {
    name: "Ronny the Bear",
    age: 21,
    alignment: "neutral good"
  },
  {
    name: "Gandalf",
    age: 100,
    alignment: "neutral good"
  }
]

 var i = 0;
wizards.forEach(function(name){
  console.log(wizards[i].name);
  i++;
});


  for(var j = 0; j <wizards.length; j++){
  wizards[j].isAlive = true;
  console.log(wizards[j]);
}



var newArray = [];
var k = 0;
wizards.forEach(function(alignment){
  if(wizards[k].alignment === "neutral good"){
    newArray.push(wizards[k]);
  }
  k++;
})





 var found = wizards.findIndex(function(wizards){
  return wizards.alignment === "lawful good";
});


function wizardsIsAlive(wizards){
if(wizards.isAlive){
  return true;
} else {
  return false;
}
}



function wizardsareNeutral(wizards){
  if(wizards.alignment === "neutral good"){
    return true;
  } else {
    return false;
  }
}





var n = 0;
wizards.forEach(function(alignment){
if(wizards[n].alignment === "neutral good"){
  wizards[n].isAlive = false;
}
n++;
});

console.log(wizards);



console.log(wizards.every(wizardsIsAlive));
console.log(wizards.some(wizardsIsAlive));
