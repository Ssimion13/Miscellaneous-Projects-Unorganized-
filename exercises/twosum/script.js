function twoSum (arr, goal) {


  //create for loop
  //check through array for two numbers that add together to the goal number
  const goalNum = goal;
  const goalArray = [];
  for(let i = 0; i < arr.length; i++){
    for (let j = 1; j < arr.length; j++){
      if(arr[j] + arr[i] === goalNum ){
         return [i, j]

      }

    }


}
console.log("No matches");
}
console.log(twoSum([1,2, 0, 5, 7,3], 4));
console.log(twoSum([1,2,3], 3));
console.log(twoSum([1,2,3], 4));
console.log(twoSum([1,2,3, 8, 4], 12));
