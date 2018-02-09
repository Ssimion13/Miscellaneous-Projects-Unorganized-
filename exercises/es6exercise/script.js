/*
 let name = 'John';
 let age = 101;
 const pets = ["cat", "dog"]

const petObjects = []

for (let i = 0; i < pets.length; i++){
  const pet = {type: pets[i]}
  let name;
  if (pets[i] === "cat"){
     name = "fluffy";
    } else {
     name = "spot"
  }
  console.log(pet.name);
  pet.name = name
  petObjects.push(pet)
}

console.log(petObjects);


const vegetables = carrots.map(carrot => ({type: "carrot", name: carrot}));
console.log(vegetables);




var people = [1,2,3,4,5]
var person = "friendly";
friends = people.filter(person => !!person.friendly);

doMathSum = (a,b) => a + b;
console.log(doMathSum(1,2))

const produceProduct = (a,b) => a * b;
console.log(produceProduct(2,4));

*/

const makeSentence = (firstName,lastName,age) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
console.log(makeSentence("Billy","$$$$", "Here!"));

let animals =["Chiahauhua", "beagle", "tentacruel"]



const dogs = animals.filter(animal=> animal.type === "dog");

const welcome = (location, name) => `Hi ${name}! Welcome to ${location}. I hope you enjoyed your stay. Please ask the president of ${location} if you need anything.`;
console.log(welcome("The Matrix", "Neo"));
