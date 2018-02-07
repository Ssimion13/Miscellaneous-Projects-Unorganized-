


var ask = require('readline-sync');


//character creation:

//pokemon objects
var charmander = {
  name: "Charmander",
  level: 5,
  levelCounter: 0,
  type: "Fire",
  elementalAttack: "Ember",
  attack: 40,
  defense: 20,
  defaultHP: 50,
  HP: 50
};

var squirtle = {
  name: "Squirtle",
  type: "Water",
  elementalAttack: "Bubble",
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
  elementalAttack: "Razor Leaf",
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
  elementalAttack: "Ember",
  attack: 30,
  defense: 10,
  defaultHP: 30,
  HP: 30
},

 polywag = {
  name: "Polywag",
  type: "Water",
  elementalAttack: "Bubble",
  attack: 20,
  defense: 20,
  defaultHP: 35,
  HP: 35
},

 oddish = {
  name: "Oddish",
  type: "Grass",
  elementalAttack: "Razor Leaf",
  attack: 20,
  defense: 15,
  defaultHP: 30,
  HP: 30
}];
//////////////////////////////


//Opening Text

console.log("           _.----.        ____         ,'  _\  ___    ___       ____   ____      ");
console.log("      _,-'       `.     |    |  /`.   \,-'    |   \  /   |     |    \  |   `.    ");
console.log("      \      __   \     '-.  | /   `.  ___    |    \/    |    '-.   \  |   ||    ");
console.log("       \.    \ \   |  __  |  |/    ,','_  `.   |          | __  |     \|   ||    ");
console.log("        \-\    \/   /,' _`.|      ,' / / / /   |          ,' _`.|      \   |     ");
console.log("         \-\     ,-'/  /   \    ,'   | \/ / ,`.|         /  /   \  |    \    ||    ");
console.log("          \-\    \ |   \_/  |   `-.  \    `'  /|  |    ||   \_/  | |\  |      ||    ");
console.log("           \-\    \ \      /       `-.`.___,-' |  |\  /| \      /  | \ |      ||    ");
console.log("            \-\    \ `.__,'|  |`-._    `|      |__| \/ |  `.__,'|  |   |  ||    ");
console.log("             \-\_.-'       |__|    `-._ |            '-.|     '-.|    ----     ");

var nameAsk = ask.question("\n\nHello there! Welcome to the world of Pokémon! My name is Oak! People call me the Pokémon Prof! \n This world is inhabited by creatures called Pokémon! For some people, Pokémon are pets. Other use them for fights. Myself… I study Pokémon as a profession. \n First, what is your name?\n");

var rivalAsk = ask.question("Right! So your name is " + nameAsk + "! \nI have a grandson. He's been your rival since you were a baby. …Erm, what is his name again?\n");





console.log("That's right! I remember now! His name is " + rivalAsk + " !\n" + nameAsk + "!\n Your very own Pokémon legend is about to unfold! A world of dreams and adventures with Pokémon awaits! Let's go!")
console.log("Oh yeah, before I forget, your rival ain't in this game. Your name won't be mentioned more than like, one time if you're really bad. Sorry!");

console.log("\n\n Go ahead and choose a pokemon, don't worry tho your rival who isn't in this game will no doubt pick your counter");



/////////////

var pokemon = [charmander, squirtle, bulbasaur];

var playerPokemon = "";
var playerItems = ["Items:", "Potion"];



var goal = 0;
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

////////////////////////


console.log("\nYou must walk to Viridian City!");
console.log("\n There is tall grass in the way. ");

  while(playerPokemon.HP > 0 && goal < 20){
    var walk = ask.question("Press w to walk, or type i to see your current inventory and pokemon. \n");

    if(walk ==="i"){
      if(playerPokemon.name === "Bulbasaur"){
        //I DO NOT WANT TO INDENT THESE, IT MIGHT RUIN THEM :(
        console.log("Your pokemon's stats: " + "Name: " + playerPokemon.name + "\n Attack: " + playerPokemon.attack + "\n Defense: " + playerPokemon.defense + "\n Health Points: " + playerPokemon.HP);
console.log("               ..:;:;::;:               ");
console.log("         ..--''' '' ' ' '''--.          ");
console.log("       /' .   .'        '.   .`\        Name: " + playerPokemon.name);
console.log("      | /    /            \   '.|       Attack: " + playerPokemon.attack);
console.log("      | |   :             :    :|       Defense: "+ playerPokemon.defense);
console.log("    .'| |   :             :    :|       Hit Points "+ playerPokemon.HP);
console.log("  ,: /\ \.._\ __..===..__/_../ /`.      Max Hit Points:" + playerPokemon.defaultHP);
console.log("|'' |  :.|  `'          `'  |.'  ::.    ");
console.log("|   |  ''|    :'';          | ,  `''\   ");
console.log("|.:  \/  | /'-.`'   ':'.-'\ |  \,   |   ");
console.log("| '  /  /  | / |...   | \ |  |  |';'|   ");
console.log("  \ _ |:.|  |_\_|`.'   |_/_|  |.:| _ |    ");
console.log("  /,.,.|' \__       . .      __/ '|.,.,\  ");
console.log("      | ':`.`----._____.---'.'   |      ");
console.log("      |   `:      ----- |   |           ");
console.log("       ,-,-,            .-=,=,       ");
      } else if(playerPokemon.name === "Charmander"){
console.log("        _.----`-..                                              ");
console.log("      ,'          `.                                            ");
console.log("    ,'          __  `.                                          ");
console.log("   /|          - __   \                                         Name: " + playerPokemon.name);
console.log("  , |           / |.   .                                        Attack: " + playerPokemon.attack);
console.log("  |,|          !_.'|   |                                        Defense: " + playerPokemon.defense);
console.log(",'             '   |   |                                        Hit Points: " + playerPokemon.HP);
console.log("/              |`--'|   |                                       Max Hit Points: " + playerPokemon.defaultHP );
console.log("|                `---'   |                                      ");
console.log(".   ,                   |                       ,|.             ");
console.log("._     '           _'  |                    , ' \ `             ");
console.log("\.. ...-...___,...-----    |       __,.        ,`|   L,|        ");
console.log("|, `- .`._        _,-,.'   .  __.-'-. /        .   ,    \       ");
console.log("-:..     `. `-..--_.,.<       `-      / `.        `-/ |   .     ");
console.log("`,         -----     `.              ,'         |   |  ',,      ");
console.log("`.      '            '            /          '    |'. |/        ");
console.log("`.   |              \       _,-'           |       ''           ");
console.log("`._               \        \                .      |              ");
console.log("     |                '     \                `._  ,'            ");
console.log("     |                 '     \                 .'|              ");
console.log("     |                 .      \                | |              ");
console.log("     |                 |       L              ,' |              ");
console.log("     `                 |       |             /   '              ");
console.log("      \                |       |           ,'   /               ");
console.log("    ,' \               |  _.._ ,-..___,..-'    ,'               ");
console.log("   /     .             .      `!             ,j'                ");
console.log("  /       `.          /        .           .'/                  ");
console.log(" .          `.       /         |        _.'.'                   ");
console.log("  `.          7`'---'          |-------'_.'                     ");
console.log(" _,.`,_     _'                ,''------'                        ");
console.log("_,-_    '       `.     .'      ,\                               ");
console.log(" -- /`.         _,|     | _  _  _.|                              ");
       } else if (playerPokemon.name === "Squirtle") {
console.log("       _.-~~   ~~~-.                                         ");
console.log("      /         _   ~.                                       ");
console.log("    |#        /#     \                                       ");
console.log("    |-||      |-||    |                                      Name: " + playerPokemon.name);
console.log("    /--        --     |-.                                    Attack: " + playerPokemon.attack);
console.log("    \__   .  .        / /\_                                  Defense: " + playerPokemon.defense);
console.log("     \ ~~--___---~~/\| |   ~-.                               Hit Points: " + playerPokemon.HP);
console.log("  \.----~~--____---_)  \ \-__  \                             Max Hit Points: " + playerPokemon.defaultHP);
console.log("  ) <    |__    __\_   \ \     |                             ");
console.log("  / ~-.__ /   ~~~~   \   \ \     |                           ");
console.log("    ~-.   |     .~-.-' |    | /                              ");
console.log("     | \___|___/     / /     |                               ");
console.log("     | /   |   \     | |  /  |                               ");
console.log("     \     |   ~-___ \ \/  /                                 ");
console.log("      /\__ / `._ /   ~-\ \_/                                 ");
console.log("     /    \_____|      |`~                                   ");
console.log("     |      |    |      |                                    ");
console.log("     \     |    |      |                                     ");
console.log("     >______)   /_/\/\_\                                     ");


}


      console.log("Your current items: " + playerItems);
      itemDecision(playerItems);

    }


    if(walk === "w"){
      var encounters = encounterOdds();
      if(encounters === (3 || 4)){
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
            var useTyping = ask.question("Do you want to use " + playerPokemon.elementalAttack + " ?\n y/n ");
            if(useTyping === "y"){
              console.log(playerPokemon.name + " used " + playerPokemon.elementalAttack + " !")
              enemyPokemon.HP -= elementalFighting(playerPokemon, enemyPokemon);
              console.log(enemyPokemon.name + " HP remaining: " + enemyPokemon.HP);
            } else {
            console.log(playerPokemon.name + " attacks!\n")
            enemyPokemon.HP -= fighting(playerPokemon, enemyPokemon);
            console.log(enemyPokemon.name + " HP remaining: " + enemyPokemon.HP);
          }
        }

          if(battleDecision === "2"){
          itemDecision(playerItems);

          }

          if(battleDecision === "3"){
            var runAway = running();
            if(runAway){
              break;
          }
        }

        if(enemyPokemon.HP > 0){
        var chooseAttack = randomAttack();
        if(chooseAttack){
          console.log("The wild \n" + enemyPokemon.name + " used " + enemyPokemon.elementalAttack + " !\n")
          var elementalDamage = elementalFighting(enemyPokemon,playerPokemon);

          playerPokemon.HP -= elementalDamage;

          console.log(playerPokemon.name + " HP remaining: " + playerPokemon.HP + "\n\n");

        } else {
        console.log("The wild \n" + enemyPokemon.name + " attacks!\n")
        playerPokemon.HP -= fighting(enemyPokemon,playerPokemon);
        console.log(playerPokemon.name + " HP remaining: " + playerPokemon.HP);
        }
        }

        if(playerPokemon.HP <= 0){
          console.log(playerPokemon.name + " Has fainted!" + nameAsk + " blacked out!\n");
          break;
        }
        if(enemyPokemon.HP <=0){
          playerPokemon.levelCounter ++;
          console.log(enemyPokemon.name + " Has fainted! \n");
          var rewards = createItem();
          console.log("You got " + rewards + " !");
          playerItems.push(rewards);

          if(playerPokemon.levelCounter === 3){
            levelup();
          }
        }

      }
      //reinitialize random pokemon encounter HP so they 'respawn'
       enemyPokemon.HP = enemyPokemon.defaultHP;

        } else {
        console.log("You continue walking.\n");
        goal++;
      }
    } else {
      console.log("\nPlease press w.")
    }
  }
  if(goal >= 20){
  console.log("You made it to Viridian City! To be continued, Probably! ");
}



/////////////////////////////////////////////////////////////////// Function Line


//Item function, calls the items available to player and removes them on use.
function itemDecision(playerItems){

for(var i = 0; i <playerItems.length; i++){
  console.log((i) + ".): " + playerItems[i]);
}
var itemQuestion = ask.question("What Item would you like to use? Or type No to cancel. \n");

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
if(itemQuestion === "No"){
  console.log("No items used....returning....\n")
}
}

//Creates a random item after an enemy pokemon is defeated.
function createItem(){
  var Items = ["Potion", "Super Potion","Rare Candy",];
  var diceRoll = Math.floor(Math.random() * 3);
  return Items[diceRoll];

//use a variable to hold % chances of getting items. We'll use the items Potion, Super Potion, and rare candies...
}

//create the dice roll for an encounter chance.
function encounterOdds(){
  var encounterChance = Math.floor(Math.random() * 4) + 1;
  return encounterChance;
}

//confirms a choice.
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
//Choose an enemy out of the enemy array at random.
function chooseEnemy(array){
  var enemy =  Math.floor(Math.random() * 3);
  return array[enemy];
}
//Takes input of player to decide what he'll do.
function battleChoice (){
  var battleQuestion = ask.question("What will you do? \n 1.) Fight \n 2.) Item \n 3.) Run \n")
  return battleQuestion;

}
//Randomly decides whether the enemy pokemon uses their elemental attack or not.
function randomAttack() {
  var eleOrNo = Math.floor(Math.random() * 2);
  if(eleOrNo === 0) {
    return true;
  } else {
    return false;
  }
}

//Takes the attacking and defending pokemon objects. Takes a random number from 0-50% of their attack power and one that's from 0-100% to give a random value.
//Subtracts this from the defense value in percentages. (eg. 10 defense is 10%). Returns the attack value.
function fighting(attacker,defender){
  //take a random
  var totalDamage = 0;
  var minAttack = Math.floor(Math.random() * (attacker.attack / 2));
  var maxAttack = Math.floor(Math.random() * attacker.attack);
  var attackDamage = Math.floor(minAttack + maxAttack) / 2;
   totalDamage = attackDamage * (1 - (defender.defense * .01));
   console.log(attacker.name + " dealt " + totalDamage + " damage to " + defender.name + " !");
   return Math.floor(totalDamage);

}
//Same as above, but if a pokemon has a type advantage, their damage is doubled; if weak, damage is halved.
  function elementalFighting(attacker,defender){
  //take a random
  var totalElementalDamage = 0;
  var minAttack = Math.floor(Math.random() * (attacker.attack / 2));
  var maxAttack = Math.floor(Math.random() * attacker.attack);
  var attackDamage = Math.floor(minAttack + maxAttack) / 2;

  totalElementalDamage = attackDamage * (1 - (defender.defense * .01));
  if ((attacker.type === "Fire" && defender.type === "Grass") || (attacker.type === "Water" && defender.type === "Fire") || (attacker.type === "Grass" && defender.type === "Water")
  )  {
     console.log("It's super effective!\n");
     totalElementalDamage *= 2;
   console.log(attacker.name + " dealt " + totalElementalDamage + " damage to " + defender.name + " !");
   } else {
   console.log("It's not very effective...\n");
   totalElementalDamage *= 0.5;
   console.log(attacker.name + " dealt " + totalElementalDamage + " damage to " + defender.name + " !");
}
return Math.floor(totalElementalDamage);
}

//takes a random number, one or two; if one, battle ends, if two, battle continues.

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
//Upon the use of Rare Candy or the defeat of 3 pokemans, a pokemon levels up (level + 1) and gains 10% of the value of all their stats.
function levelup(){
playerPokemon.level ++;
playerPokemon.attack += (playerPokemon.attack * .10);
playerPokemon.defense += (playerPokemon.defense * .10);
playerPokemon.defaultHP += (playerPokemon.defaultHP * .10);
playerPokemon.levelCounter = 0;

console.log(playerPokemon.name + " is now Level " + playerPokemon.level + "!")
console.log(playerPokemon);
}


//Fighting System:
//Start with console log that logs that you found a wild XX. Ensure that you grab the values of the current pokemon
//as well as the current enemy.
//Give the user options: Fight or run
//If fight, run a fight function that takes the attack of the source and the defense of the attacked
