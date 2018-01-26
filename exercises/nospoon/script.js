var isThirsty = true;
var monitor = {
  color:"Black",
  swag: "Yes",
  isHD: true,
  isUseful: function(){
    if(this.isHD){
      console.log("I love HD monitors.");
    }
  }
}
monitor.isUseful();

var water = {
  isWet: true,
  mL: 250,
  source: "Tap",
  drink: function(source){
    if(this.isWet){
      console.log("I can't wait to drink " + source + " water!")
    }
  }
}
water.drink(water.source);

var charger = {
  isBulky: false,
  isCharging: true,
  chargerFor: "MacBook",
  charging: function(){
    if(this.isCharging){
      alert("Your computer is charging! How gratifying.")
    }
  }
}
charger.charging();

var user = {
  name: "Scott",
  hungry: true,
  currentTime: 915,
  sleepyTime: function(){
    if(this.currentTime <= 1230) {
      console.log("God I need more sleep in my life");
    }
  }
}
user.sleepyTime();

var projector = {
  Brand: "unknown",
  isOn: true,
  borderColor: "black",
  declare: function(brand, color){
    console.log("I like this " + color + " " + brand + " projector!");
  }
}
projector.declare(projector.borderColor, projector.Brand);

var shirt = {
  design: "Chicken Dinner",
  shirtStyle: "T-shirt",
  boughtYears: 1,
  coolStatement: function(design, style, boughtYears, years){
    var years = " ";
    if(this.boughtYears === 1){
      years = " year ago!";
    } else {
      years = " years ago!"
    }
    console.log("That's a cool " + design + " " + style + " that you bought "
    + boughtYears + years);
  }
}
shirt.coolStatement(shirt.design,shirt.shirtStyle,shirt.boughtYears, shirt.years);

var mac = {
  aesthetic: "Post-Modern",
  functionality: "Questionable",
  yearsOld: 0,
  statement: function(style, functionality, years){
    console.log("this " + style + " Mac is " + years +
  " years old and is of " + functionality + " worth");
}
  }
mac.statement(mac.aesthetic, mac.functionality, mac.yearsOld);
