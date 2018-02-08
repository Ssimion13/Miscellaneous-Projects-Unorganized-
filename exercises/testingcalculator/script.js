function division(var1,var2){
  if(var2 !== 0){
   throw new RangeError("var2 cannot be zero");
} else {
  return var1/var2;
}
}

function multiplication(var1,var2){
  return var1 * var2;
}

describe("A Multiplation Function", function(){
  assert(multiplication(2,1), 2);
  assert(multiplication(-2,1), 2);
  assert(multiplication(6,5),31);
});


describe("A division function", function() {
  assert(division(1,1),1)
})
function assert(actual, expected) {
    if (actual !== expected) {
        throw new Error("Asserted that " + actual + " would equal " + expected);
    } else {
        console.log("Test Passed. Actual: " + actual + ", expected: " + expected);
    }
}

function describe(message, function() ) {
    console.log("\n" + message);
    try {
        testFunction();
    } catch(err) {
        console.log("Test FAILED: " + err.message);
    }
}

)
