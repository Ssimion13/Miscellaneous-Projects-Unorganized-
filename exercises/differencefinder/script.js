function differenceFinder(arr1,arr2){
  let diffItemArray = [];
  let array1 = arr1;
  let array2 = arr2;

  for(let i = 0; i < array1.length; i++){
        if( array2.every(x => {
         return x !== array1[i]
        })) {
          diffItemArray.push(array1[i])
        }
      }
 for(let j = 0; j < array2.length; j++){
        if( array1.every(x => {
         return x !== array2[j]
        })) {
          diffItemArray.push(array2[j])
        }
}
  return diffItemArray;
}

console.log(differenceFinder([1,2,3] , [2,3,4]));
