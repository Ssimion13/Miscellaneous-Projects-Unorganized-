const array = ["Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."]

var newArray = array.join("").split(" ");

//create a for loop that loops through the thing
//need to return an array of words that appear more than once
   let returnArray = [];
for( let i = 0; i < newArray.length; i++){

   var  checkyIndex = newArray[i];
   for (let j = 1; j < newArray.length; j++){

     if(newArray[j+2] === checkyIndex){
       returnArray.push(newArray[j]);
     }
   }
}

console.log(returnArray);
