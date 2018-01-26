var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var counter = 0;

for ( var i = 0; i < officeItems.length; i++){
   if( officeItems[i] === "computer"){
     counter++;
   }
}
console.log(counter);


var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12
  },{
    name: "Madeline",
    age: 80
  },{
    name: "Cheryl",
    age: 22
  },{
    name: "Sam",
    age: 30
  },{
    name: "Suzy",
    age: 4
  }
];

for( var j = 0; j < peopleWhoWantToSeeMadMaxFuryRoad.length; j++){
  console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name);
  if(peopleWhoWantToSeeMadMaxFuryRoad[j].age >= 18){
    console.log( peopleWhoWantToSeeMadMaxFuryRoad[j].name + " is old enough to watch Mad Max. Let them in.")
  } else {
    console.log( peopleWhoWantToSeeMadMaxFuryRoad[j].name + " is not old enough to watch Mad Max.");
  }

}


var array1 = [2, 5, 435, 4, 3];
var array2 = [1,1,1,1,3];
var array3 = [9,3,4,2];
console.log(array1[0]);

var lights = function(array){
for( var i = 0; i < array.length; i++){
  var arrvalue = array[i];
  if( arrvalue % 2 = 0){
    console.log("lights are on");
  } else {
      console.log("lights are off")};

}
}
