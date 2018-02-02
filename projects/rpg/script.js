//RPG START

/* character creation
walking
running from a fight
fighting
enemy creation
attacking enemy
enemy attacking
enemy dying (including dropping an item)
character dying
*/




//character creation:
function confirm(){
  var confirmation = ask.question("Are you sure? y/n \n");
    if(confirmation === "y"){
      return true;
    } else {
      return false;
    }
}
//pokemon objects
var charmander = {
  name: "Charmander",
  type: "Fire",
  attack: 40,
  defense: 20
}

var squirtle = {
  name: "Squirtle",
  type: "Water",
  attack: 20,
  defense: 40
}

var bulbasaur = {
  name: "Bulbasaur",
  type: "Grass",
  attack: 30,
  defense: 30
}

var pokemon = [charmander, squirtle, bulbasaur];
//need to change these into objects with set stats and shit....
var playerPokemon = ""


var ask = require('readline-sync');

var pDecision = "0";


while(pDecision === "0"){
var pokemonChoice = ask.question("Choose a Pokemon!\n 1.) Charmander\n 2.) Squirtle\n 3.) Bulbasaur\n Enter the pokemon you wish by typing the number.\n");
var confirmPokemon = confirm();
     if(confirmPokemon) {
       console.log("Congratulations, you received " + pokemon[parseInt(pokemonChoice) - 1].name + "!" );
       playerPokemon = pokemon[parseInt(pokemonChoice)-1];
       pDecision = "1";
     }

}
console.log("\nThese are the stats of your pokemon! ")
console.log(playerPokemon);
