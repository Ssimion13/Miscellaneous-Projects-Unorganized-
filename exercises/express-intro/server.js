
const express = require("express");

//this app is a new server with new methods in it.
const app = express();
const sports = [
  {
    name: "Tennis"
  },
  {
    name: "Basketball"
  }
]
//REQuest, RESponse
app.get("/", (req, res) => {
    res.send(sports)
    //response.data is whatever is in this in the parentheses
//res.send converts it into JSON
})
//you can choose a large number of ports you can use
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
