const database = [
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jill", lastName: "Johnson", age: 20},
    {firstName: "Jill", lastName: "Smith", age: 100},
    {firstName: "Jack", lastName: "White", age: 2}
];


function filterDatabase(term, arr){
  console.log(term);
  var resultarray = [];
  for(key in arr){
    if(arr.includes(term)){
      resultarray.push(key);
    }
  }
return resultarray
}

console.log(filterDatabase({ firstName: 'Jack', lastName: 'Smith', age: 2 },database));
