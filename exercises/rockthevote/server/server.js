const express = require("express");
const app = express();
const uuid = require('uuid/v1');
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const port = process.env.PORT || 4000;

const posts = [];

app.get("/posts", (req,res) => {
  if(req.query.type) {
    return res.send(posts.find(post => post.type === req.query.type)
    )}
    res.send(posts)
})

app.get("/posts/:id", (req,res) => {
  const foundPost = posts.find(post => post.id === req.params.id);
  console.log(req.params.id);
  res.send(foundPost);
})

app.post("/posts", (req,res) => {
  req.body.id = uuid();
  console.log(req.body);
  posts.push(req.body);
  return res.send(req.body);
})

app.put("/posts/:id", (req,res) => {
  const foundPost = posts.find(post => post.id === req.params.id);
  for(let key in req.body) {
    foundPost[key] = req.body[key];
  }
  return res.send(req.body);
})

app.delete("/posts/:id", (req,res) => {
  const foundPost = posts.find(post => post.id === req.params.id);
    posts.splice(posts.indexOf(foundPost), 1)
    return res.send(req.body);
})

app.listen(port, () => {
  console.log("Listening in port 4000");
})
