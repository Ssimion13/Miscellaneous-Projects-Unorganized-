var fizzBuzz = function(max){
  for( var i = 1; i < max + 1; i++){
    if( i % 3 === 0 && i % 5 === 0){
      console.log("Fizz Buzz")
    }

    if(i % 3 === 0 && i % 5 !== 0){
      console.log("Fizz")

     }
    if(i % 5 === 0 && i % 3 !== 0){
      console.log("Buzz")
    }


    if( i % 3 !== 0 && i % 5 !== 0){
      console.log(i);
    }


  }
}

fizzBuzz(100);
