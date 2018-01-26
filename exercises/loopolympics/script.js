//preliminary 1

/* for(var i = 0; i < 10; i++){
  console.log(i);
}
*/
/* for(var i = 9; i >= 0; i--){
  console.log(i);
}
*/

/* var fruit = ["banana", "orange", "apple", "kiwi"]

  for( var i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
  }
*/

//Bronze

/* var array = [];

for( var i = 0; i < 10; i++){
  array.push(i);
}
console.log( array); */

/* for( var i = 0; i <= 100; i++){
  if( i % 2 === 0 ){
    console.log(i);
  }
}; */

/* var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

for( var i = 1; i < fruit.length; i += 2){
  console.log(fruit[i]);
}
*/

//silver
var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

/* for( var i = 0; i < peopleArray.length ; i++){
  console.log(peopleArray[i].name);
} */
/* var array1 = [];
var array2 = [];

for ( var i = 0; i < peopleArray.length; i++) {
  if( i % 2 !== 0){
    array1.push(peopleArray[i])
  } else {
    array2.push(peopleArray[i])
    }
  }

console.log(array1);
console.log(array2);
*/

//Gold Medal
/* var array = [];
for( var i = 0; i < 3; i++){
  array.push([0,0,0]);

} */

/* var array = [];
for( var i = 0; i < 3; i++){
  array.push([i,i,i]);

}
*/

/* var array = [];
for( var i = 0; i < 3; i++){
     array.push([]);
  for( var j = 0; j< 3; j++){
     array[i].push(j);

}
}

console.log(array);
*/

var grid = [
  [0, "a", 2],
  [0, "a", 2],
  [0, "a", 2]
];



for (var i = 0; i < grid.length; i++){
  for (var j = 0; j < grid[i].length; j++) {
    if( typeof grid[i][j] === "number"  ){
      grid[i][j] = "x";
    }
  }
}
console.log (grid);

//GOT ER DUN
