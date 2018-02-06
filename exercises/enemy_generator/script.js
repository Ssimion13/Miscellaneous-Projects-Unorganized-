function EnemyGenerator(type,hitPoints,defense){
  this.Type = type,
  this.HitPoints = hitPoints,
  this.Defense = defense
}


var enemyType = ["Ancient Dragon", "Prowler", "Mighty Grunt"];

function chooseEnemy() {
  var enemyChoice = Math.floor(Math.random() * 3);
  blah = enemyType[enemyChoice]
  return enemyType[enemyChoice];
}
var blah = "";

var HP = 0;
function hitPointCalculator(){

if(blah === "Ancient Dragon"){
    HP = Math.floor(Math.random()* 20) + 80;
  } else if (blah === "Prowler"){
  HP = Math.floor(Math.random() * 29) + 50;
} else if (blah === "Mighty Grunt"){
  HP = Math.floor(Math.random() * 29) + 20;
}

return HP;
}

function defenseCalc() {
  defense = HP * 3;
  return defense;
}


var enemy1 = new EnemyGenerator(chooseEnemy(), hitPointCalculator(), defenseCalc())
var enemy2 = new EnemyGenerator(chooseEnemy(), hitPointCalculator(), defenseCalc())
var enemy3 = new EnemyGenerator(chooseEnemy(), hitPointCalculator(), defenseCalc())
console.log(enemy1);

 var enemies = [];
for(i = 0 ; i <100; i ++){
enemies.push(new EnemyGenerator(chooseEnemy(), hitPointCalculator(), defenseCalc()));

}
console.log(enemies);
