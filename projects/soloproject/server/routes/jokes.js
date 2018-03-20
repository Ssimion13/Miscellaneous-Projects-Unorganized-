const mongoose = require('mongoose');
const express = require('express');
const jokeRoutes = express.Router();
const Joke = require("../models/jokes.js");


jokeRoutes.get('/', (req,res) => {
  Joke.find( (err, jokes) => {
    if (err) return res.status(500).send(err);
    return res.send(jokes);
  })
})

jokeRoutes.get('/:id', (req,res) => {
  Joke.findById(req.param.id, (err, jokes) => {
    if (err) return res.status(500).send(err);
    return res.send(jokes);
  })
})

jokeRoutes.post('/', (req,res) => {
  const newJoke = new Joke(req.body);
  newJoke.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(201).send(newJoke);
  })
})

jokeRoutes.put('/:id', (req,res) => {
  Joke.findByIdAndUpdate(req.param.id, req.body, {new:true}, (err, updatedJoke) => {
    if(err) return res.status(500).send(err);
    return res.send(updatedJoke);
  });
});

jokeRoutes.delete("/:id", (req,res) => {
  Post.findByIdAndRemove(req.params.id, (err,removedJoke) => {
    if(err) return res.status(500).send(err);
    return res.status(202).send(removedJoke);
  });
});

module.exports = jokeRoutes;
