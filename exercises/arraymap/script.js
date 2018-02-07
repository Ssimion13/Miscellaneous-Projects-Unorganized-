function doubleNumbers(arr){
  return arr.map(function(x){
   return x * 2;
  }
)
}

console.log(doubleNumbers([2,5,100]));


function stringItUp(arr){
  return arr.map(function(x){
    return String(x);

  }
)
}

console.log(stringItUp([2,5,100]))


function namesOnly(arr){
  return arr.map(function(x){
    return x.name;
  }
)
};


console.log(namesOnly([
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
]) )

function makeStrings(arr){
  return arr.map(function(x){
    if(x.age < 18){
      return x.name + " cannot see the Matrix.";
    } else {
      return x.name + " can see the Matrix.";
    }
  }
)
}

console.log(makeStrings([
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
]) )



function readyToPutInTheDOM(arr){
  return arr.map(function(x){
    return "<h1>" + x.name + "</h1>" + "<h2>" + x.age + "</h2>";
  }
)
}
console.log(readyToPutInTheDOM([
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
