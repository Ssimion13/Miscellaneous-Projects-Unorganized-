//import function
const firstLastOverAge = require("./script").firstLastOverAge;
const subtract = require("./script").subtract;
const sum = require("./script").sum;
const chai = require("chai");
const assert = chai.assert;




//most programs assume that .js is at the end.
//without a path, it will assume it's in a node module folder, which is why we need ./
//pulled in function ,sample array, ready for testing.
const people = [
    {
        firstName: "Jerry",
        lastName: "Gergich",
        age: 52
    },
    {
        firstName: "Leslie",
        lastName: "Knope",
        age: 40
    },
    {
        firstName: "Tommy",
        lastName: "Haverford",
        age: 10
    },
    {
        firstName: "Ronny",
        lastName: "Swanson",
        age: 7
    }
]

//use a third party testing library:
//pull in chai library, but chai must be installed in folder AFAIK
//chai.assert is a chai library used for testing.
//assert.equal(1,1) --asserted value  versus actual value;
//other methods exist as well, eg. notequal, strictequal, isabove, isatleast, isNotNaN, etc. A lot of stuff.
/* mocha is looking for describe and it to make it work:
New unit tests always start with a describe function:
describe("Higher order functions"), () => { }) Callback functions
*/

describe("Higher order functions", () => {
  it("it should be a sum of numbers", () => {
    assert.equal(sum([1,2]), 3);
    assert.equal(sum([-1,-1]), -2);
  });
  it("Should return a number", () => {
    assert.typeOf(sum([1,2]), "number");
  });

  it("should return the difference of numbers in an array", () => {
    assert.equal(subtract([1,2]), -1)
  });
  it("should correctly filter people and display full names", () => {
    assert.deepEqual(firstLastOverAge(people, 10), ["Jerry Gergich", "Leslie Knope", "Tommy Haverford", "Ronny Swanson"]);
    assert.deepEqual(firstLastOverAge(people, 20), ["Jerry Gergich", "Leslie Knope", "Tommy Haverford", "Ronny Swanson"]);
    assert.deepEqual(firstLastOverAge(people, 50), ["Jerry Gergich", "Leslie Knope", "Tommy Haverford", "Ronny Swanson"]);
    assert.deepEqual(firstLastOverAge(people, 80), ["Jerry Gergich", "Leslie Knope", "Tommy Haverford", "Ronny Swanson"]);

    //when we assert, it creates a new array in memory, and since they are, it isn't the same array which means it doesn't accept them as the same.
    //we use deepEqual instead. This checks inside of the arrays for similarities.
  });


});
