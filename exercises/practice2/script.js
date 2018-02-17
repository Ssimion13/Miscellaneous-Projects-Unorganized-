// Given an array of person objects, return an array of first and last names of
// everyone over 17

const firstLastOverAge = (arr, age) => {
  // filter by age (over 17)
  //map array of first and last names
  return arr
      .filter(person => person.age > age)
      .map(person => `${person.firstName} ${person.lastName}`);
}





//this allows you to separate test code from real code.
//for multuple functions you want to export out:
//You can do an array to send more than one array;
//it's also welcome to create objects.



const sum = (nums) => nums.reduce((total,num) => total + num, 0);

const subtract = (nums) => nums.reduce((total,num) => total - num);



console.log(sum([10,10]));

module.exports = {
firstLastOverAge,
sum,
subtract }
