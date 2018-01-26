var user = {
  name: "Jesus",
  age: 2017,
  religion: "Jewish",
  isSonOfGod: true,
  apostles: [
    {
      name: "John",
      age: 2011,
      religion: "Christian",
      hasGospel: true
    },
   {
      name: "Paul",
      age: 2012,
      religion: "Christian",
      hasGospel: true
    },
    {
      name: "Matthew",
      age: 2012,
      religion: "Christian",
      hasGospel: true
    },
    {
      name: "Judas",
      age: 2008,
      isBribed: true,
      religion: "Jewish",
      willBetray: function(bribed, isSonOfGod){
        if(bribed && isSonOfGod){
          console.log("Jesus is over here!");
          user.apostles[3].isInHell = true;
        }
      }
    }
  ],
  gentiles: [
    {

      name: "Pontius Pilate",
      occupation: "Prefect",
      religion: "Greco-Roman Pantheon",
      judgeOf: "Jerusalem"

  }
]
};

console.log(user.apostles[3].willBetray(user.apostles[3].isBribed, user.isSonOfGod));
for ( var i = 0; i < 3; i++ ){
   console.log(user.apostles[i]);
   user.apostles[i].hasBible = true;
   console.log(user.apostles);
};

user.gentiles[0].hasKilledJesus = "Yes";
console.log(user.gentiles);
