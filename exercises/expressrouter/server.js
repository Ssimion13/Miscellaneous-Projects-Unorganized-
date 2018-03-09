const express = require("express");
const app = express();
const bodyParser = require("body-parser");


  //routes
app.use("/movies", require("./routes/movies"));
app.use("/songs",  require("./routes/songs"));
app.use(bodyParser.json());
//set up the movie and song routes as middleware, like bodyparser.


const songs = [{
  fName: "Billy",
  lName: "Mays",
  age: 55,
  living: false
},
{
 fName: "Vince",
 lName: "From Shamwow",
 age: 34,
 living: true
}
];








app.listen(8000, () => {
  console.log("listening on port 8000");
})
