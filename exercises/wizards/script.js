var wizardMaker = function(age, alignment, likesToParty){
  this.age = age,
  this.alignment = alignment,
  this.likesToParty = likesToParty
  this.ageAnnouncement = function(){
    console.log("I am " + this.age + " years old!");
  }
  this.alignmentAnnouncement = function(){
    console.log("I am a " + this.alignment + " wizard!")
  }
}


var Charles = new wizardMaker(13, "light", true);
console.log(Charles);

console.log(Charles.age);
