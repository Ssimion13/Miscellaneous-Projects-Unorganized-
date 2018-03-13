const {assert} = require("chai");

//Test Suite
describe("vowelRemover", () => {
  it("should pull all vowels out", () => {
      //deepEqual checks if every item is the same
    assert.deepEqual(vowelRemover("Pickle Rick!"), {str: "pcklrck!", vowels: "iei"}
    assert.deepEqual(vowelRemover("I am a coconut"), {str: "mccnt!", vowels: "Iaaoou"}
  });
});

function vowelRemover(str) {
  let vowels = "";
  let remainder = "";
  let vowelList = "aeiou"

  for(let i = 0; i<str.length; i++){
        if(vowelList.indexOf(str[i]) !== -1){
            vowels += str[i];
        } else {
          remainder += str[i];
        }
  }
  remainder = remainder.replace(/\s+/g, '').toLowerCase();
  return {
    str: remainder,
    vowels: vowels

  }
}

console.log(vowelRemover("Pickle Rick"));


describe()
