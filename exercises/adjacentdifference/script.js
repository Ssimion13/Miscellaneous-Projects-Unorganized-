const inputArray = ["This","is","an","array","three","hey"];

function findLongestThree(arr){

  let count = 0;
  let newArray = [];

  for (let i=0; i<arr.length; i++){
    if(arr[i].length + arr[i+1].length + arr[i+2].length > count){
      count = arr[i].length + arr[i+1].length + arr[i+2].length;

      newArray = [arr[i], arr[i+1], arr[i+2]];

    }
  }
  return newArray;
}

console.log(findLongestThree(inputArray));
