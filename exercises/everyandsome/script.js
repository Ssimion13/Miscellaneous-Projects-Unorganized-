//every function

function ayyvery (arr, callback){
  for(let i = 0; i < arr.length; i++){
    if( !callback(arr[i])) {
      return false;
    }
  }
  return true;
}


function sahm (arr, callback){
  for(let i = 0; i < arr.length; i++){
    if( callback(arr[i])) {
      return true;
    }
  }
  return false;
}

console.log(ayyvery(["Hey", "Whats good"], isString))
console.log(sahm([4,4,4, ,"Hey", NaN], isString))


function isString (input){
   return input === 4
}
