var shopper = {
  name: "Dennis",
  age: 9001,
  isHungry: true,
  groceryCart: ["Veggies", "Milk", "Meat"]
  catchphrase: function(grocery){
    console.log("I like " + grocery);
  },
  livingStatus: true,
  isAlive: function(living){
    if(living){
        console.log("It lives!");
    }
  },

};

console.log(shopper.name);
shopper.name = "Francis";
console.log(shopper.name);
console.log(shopper.groceryCart[0]);
console.log(shopper.isHungry);
console.log(shopper.isAlive(shopper.livingStatus));
