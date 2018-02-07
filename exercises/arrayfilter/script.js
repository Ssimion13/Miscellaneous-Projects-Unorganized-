/* function fiveOrGreaterOnly(arr){
  return arr.filter(function(x){
  return x > 5;

  })
};

console.log(fiveOrGreaterOnly([3,6,8,2]));


function evensOnly(arr){
return arr.filter(function(x){
  return x % 2 === 0;
}
)
}

console.log(evensOnly([3,6,8,2]));



function fiveCharacters(arr){
  return arr.filter(function(x){
    return x.length <= 5;
  }
)
}


console.log(fiveCharacters(["dog", "wolf", "by", "family", "eaten", "camping"]) // ["by", "dog", "wolf", "eaten"]
)



function peopleWhoBelongToTheIlluminati(arr){
  return arr.filter(function(x){
    if(x.member === true){
      return x;
    }
  }
)
}


console.log(peopleWhoBelongToTheIlluminati([
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
])
);
*/

function ofAge(arr){
  return arr.filter(function(x){
     if(x.age < 18){
       return x;
     }
  }
)
}

console.log(ofAge([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
