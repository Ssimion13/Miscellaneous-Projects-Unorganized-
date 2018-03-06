function gameOfThrees(num){
  let number = Math.floor(Math.random() * 30000000);
    console.log("The number is " + number + ".")
  while (number !== 1){
   if(number % 3 === 0){
    console.log("dividing " + number + " by 3... ");
     number /= 3;
     console.log("the number is " + number)

   } else if ((number + 1) % 3 === 0){
     console.log("Adding 1 on " + number + "....")
     number += 1;
     console.log("'" + number + "'")
     number /= 3;
     console.log("Dividing by 3... the number is now " + number)
   } else if ((number - 1) % 3 === 0){
     console.log("Subtracting 1 on " + number + "....")
     number -= 1;
     console.log("'" + number + "'")
     number /= 3;
      console.log("Dividing by 3; the number is " + number)
   }
  }
  console.log("The number is now one!")
}

gameOfThrees(21123911230);
