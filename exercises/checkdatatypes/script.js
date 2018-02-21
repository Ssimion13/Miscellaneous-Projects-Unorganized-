function checkTypes(arr) {
const finalArr = [];
for(let i= 0; i < arr.length; i++){
  for(let j = 0; j < arr[i].length; j++){
    finalArr.push (typeof arr[i][j]);
  }
}
  let first = finalArr[0];
  return finalArr.every(item => first === item);
}

const multiD1 = [[1,2,3],["a","b","c"],[true, true, true]];
console.log(checkTypes(multiD1));
// returns false (inner arrays aren't consistent with each other's data types)

var multiD2 = [[true,false,true],[false,false,true]];
 console.log(checkTypes(multiD2))
// returns true (each inner array contains the same data type as the others)
