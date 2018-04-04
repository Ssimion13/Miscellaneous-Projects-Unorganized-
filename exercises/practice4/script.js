function noDuplicates(arr){
var emptyArray = [];
for( let i = 0 ; i < arr.length; i++) {

  if(emptyArray.indexOf(arr[i]) === -1) {
      emptyArray.push(arr[i]);
  }
}
return emptyArray;
}



console.log(noDuplicates([1,3,3,3,1,5,6,7,8,1])) //=> [1, 3, 5, 6, 7, 8]
