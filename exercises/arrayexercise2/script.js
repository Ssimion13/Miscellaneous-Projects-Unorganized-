


function byAge(arr){
  const alphaArr =  arr.sort(function(a,b){
     if(a.lastName > b.lastName) return 1;
     if(a.lastName < b.lastName) return -1;
     return 0;
  }
)

return alphaArr.filter(function(obj){
  return obj.age > 18;
}
)
}



var newArray = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },{
    firstName: "Morty",
    lastName: "Smith",
    age: 13
  },{
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  }
];

var peopleArray = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },{
    firstName: "Morty",
    lastName: "Smith",
    age: 13
  },{
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  }
];
var beast = byAge(peopleArray);
console.log(beast);



function toDisplayInHTML(arr){
  arr.forEach(function(element){
    console.log(`<li> ${element.firstName} ${element.lastName} is ${element.age} </li>`)
  });

}

toDisplayInHTML(beast);
