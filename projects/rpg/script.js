


var ask = require('readline-sync');


//character creation:

//pokemon objects
var charmander = {
  name: "Charmander",
  level: 5,
  levelCounter: 0,
  type: "Fire",
  attack: 40,
  defense: 20,
  defaultHP: 50,
  HP: 50
};

var squirtle = {
  name: "Squirtle",
  type: "Water",
  level: 5,
  levelCounter: 0,
  attack: 20,
  defense: 40,
  defaultHP: 50,
  HP: 50
};

var bulbasaur = {
  name: "Bulbasaur",
  type: "Grass",
  levelCounter: 0,
  level: 5,
  attack: 30,
  defense: 30,
  defaultHP: 50,
  HP: 50
};

var enemyArray =[
 growlithe = {
  name: "Growlithe",
  type: "Fire",
  attack: 25,
  defense: 10,
  defaultHP: 30,
  HP: 30
},

 polywag = {
  name: "Polywag",
  type: "Water",
  attack: 10,
  defense: 20,
  defaultHP: 25,
  HP: 25
},

 oddish = {
  name: "oddish",
  type: "Grass",
  attack: 15,
  defense: 15,
  defaultHP: 25,
  HP: 25
}];

var pokemon = [charmander, squirtle, bulbasaur];
//need to change these into objects with set stats and shit....
var playerPokemon = ""
var playerItems = ["Potion"];



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


//create the dice roll for an encounter chance.
var encounterOdds = function(){
  var encounterChance = Math.floor(Math.random() * 4) + 1;
  return encounterChance;
}

console.log("\nYou must walk to Viridian City!");
console.log("\n There is tall grass in the way. ");


  while(playerPokemon.HP > 0){
    var walk = ask.question("Press w to walk, or type i to see your current inventory and pokemon. \n");

    if(walk ==="i"){
      console.log("Your pokemon's stats: " + "\n Attack: " + playerPokemon.attack + "\n Defense: " + playerPokemon.defense + "\n Health Points: " + playerPokemon.HP);
      console.log("Your current items: " + playerItems);
    }


    if(walk === "w"){
      if(encounterOdds() === (3 || 4)){
        console.log("You hear rustling in the grass!\n")
        var enemyPokemon = chooseEnemy(enemyArray);
        console.log("A wild " + enemyPokemon.name + " appeared!");


        while(playerPokemon.HP > 0 && enemyPokemon.HP > 0){
        var battleDecision = battleChoice();
          while(battleDecision !== "1" && battleDecision !== "2" && battleDecision !== "3"){
             console.log("Please put a correct input!")
             battleDecision = battleChoice();
          }
          if(battleDecision === "1"){
            console.log(playerPokemon.name + " attacks!\n")
            enemyPokemon.HP -= fighting(playerPokemon, enemyPokemon);
            console.log(enemyPokemon.name + " HP remaining: " + enemyPokemon.HP);
          }

          if(battleDecision === "2"){

            for(var i = 0; i <playerItems.length; i++){
              console.log((i) + ".): " + playerItems[i]);
            }
        var itemQuestion = ask.question("What Item would you like to use? \n");

             if(playerItems[itemQuestion] === "Potion"){
                if(playerPokemon.HP + 20 >= playerPokemon.defaultHP){
                  playerPokemon.HP = playerPokemon.defaultHP;
                } else {
                  playerPokemon.HP += 20;
                }
              console.log(playerPokemon.name + "'s HP is now " + playerPokemon.HP + "!")
              playerItems.splice(playerItems.indexOf("Potion"), 1);
            }
            if(playerItems[itemQuestion] === "Super Potion"){
               if(playerPokemon.HP + 50 >= playerPokemon.defaultHP){
                 playerPokemon.HP = playerPokemon.defaultHP;
               } else {
                 playerPokemon.HP += 50;
               }
             console.log(playerPokemon.name + "'s HP is now " + playerPokemon.HP + "!")
             playerItems.splice(playerItems.indexOf("Super Potion"), 1);
           }
           if(playerItems[itemQuestion] === "Rare Candy"){
             levelup();
            playerItems.splice(playerItems.indexOf("Rare Candy"), 1);
          }
          }



          if(battleDecision === "3"){
            var runAway = running();
            if(runAway){
              break;
          }
        }

        console.log("The wild \n" + enemyPokemon.name + " attacks!\n")
        playerPokemon.HP -= fighting(enemyPokemon,playerPokemon);
        console.log(playerPokemon.name + " HP remaining: " + playerPokemon.HP);

        if(playerPokemon.HP <= 0){
          console.log(playerPokemon.name + " Has fainted! You black out!\n");
          break;
        }
        if(enemyPokemon.HP <=0){
          playerPokemon.levelCounter ++;
          console.log(enemyPokemon.name + " Has fainted! \n");
          var rewards = createItem();
          console.log("You got " + rewards + " !");
          playerItems.push(rewards);

          if(levelCounter === 3){
            levelup();
          }
        }

      }
    enemyPokemon.HP = enemyPokemon.defaultHP;

        } else {
        console.log("You continue walking.\n");
        //maybe add a counter that raises so you eventually reach something?
      }
    } else {
      console.log("\nPlease press w.")
    }
  }





/////////////////////////////////////////////////////////////////// Function Line

function createItem(){
  var Items = ["Potion", "Super Potion","Rare Candy",];
  var diceRoll = Math.floor(Math.random() * 3);
  return Items[diceRoll];


//use a variable to hold % chances of getting items. We'll use the items Potion, Super Potion, Antidote (does nothing yet) and Escape Rope (does nothing)


}




function confirm(){
  var confirmation = ask.question("Are you sure? y/n \n");
  while(confirmation !== "y" && confirmation !== "n")
   confirmation = ask.question("Are you sure? y/n \n");
    if(confirmation === "y"){
      return true;
    } else if (confirmation ==="n") {
      return false;
    }

}

function chooseEnemy(array){
  var enemy =  Math.floor(Math.random() * 3);
  return array[enemy];
}

function battleChoice (){
  var battleQuestion = ask.question("What will you do? \n 1.) Fight \n 2.) Item \n 3.) Run \n")
  return battleQuestion;

}


function fighting(attacker,defender){
  //take a random
  var totalDamage = 0;
  var minAttack = Math.floor(Math.random() * (attacker.attack / 2));
  var maxAttack = Math.floor(Math.random() * attacker.attack);
  var attackDamage = Math.floor(minAttack + maxAttack) / 2;
  console.log("Your Damage: " + attackDamage);
   totalDamage = attackDamage * (1 - (defender.defense * .01));
   console.log("Your Total Damage:" + totalDamage);
   return totalDamage;

}

function running(){
  var runningChance = Math.floor(Math.random() * 2) + 1;
  if(runningChance === 1){
    console.log("You ran away!");
    return true;
  } else {
    console.log("You weren't fast enough to run!");
  return false;
}
}

function levelup(){
playerPokemon.level ++;
playerPokemon.attack += (playerPokemon.attack * .10);
playerPokemon.defense += (playerPokemon.defense * .10);
playerPokemon.defaultHP += (playerPokemon.defaultHP * .10);
playerPokemon.levelCounter = 0;

console.log(playerPokemon.name + " is now Level" + playerPokemon.level + "!")
console.log(playerPokemon);
}


//Fighting System:
//Start with console log that logs that you found a wild XX. Ensure that you grab the values of the current pokemon
//as well as the current enemy.
//Give the user options: Fight or run
//If fight, run a fight function that takes the attack of the source and the defense of the attacked
