const mongoose = require('mongoose');
const express = require('express');
const dogRoutes = express.Router();
const Dog = require('../models/dogs.js');

dogRoutes.get('/', (req, res) => {
  Dog.find( (err, dogs) => {
    if (err) return res.status(500).send(err);
    return res.send (dogs)
  })
})

dogRoutes.get('/:id', (req, res) => {
  Dog.findById(req.params.id, (err, dogs) => {
    if (err) return res.status(500).send(err);
    return res.send(dogs)
  })
})

dogRoutes.post('/', (req,res) => {
  const newDog = new Dog(req.body);
  newDog.save(err => {
  if(err) return res.status(500).send(err);
  return res.status(201).send(newDog)
})
})

dogRoutes.put("/:id", (req, res) => {
  Dog.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,updatedDog) => {
    if(err) return res.status(500).send(err);
    return res.send(updatedDog);
  })
})

dogRoutes.delete("/:id", (req,res) => {
  Dog.findByIdAndRemove(req.params.id, (err, removedDog) => {
    if(err) return res.status(500).send(err);
    return res.status(202).send(removedDog)
  })
})

module.exports = dogRoutes;
