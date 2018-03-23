const mongoose = require('mongoose');
const express = require('express');
const urlRoutes = express.Router();
const URL = require("../models/urls.js");

urlRoutes.get('/', (req,res) => {
  URL.find( (err, url) => {
    if (err) return res.status(500).send(err);
    return res.send(url);
  })
})

urlRoutes.post('/', (req,res) => {
 const newURL = new URL(req.body);
 newURL.save (err => {
    if (err) return res.status(500).send(err);
    return res.status(201).send(newURL);
 })
})


urlRoutes.put('/:id', (req,res) => {
  URL.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,updatedURL) => {
    if (err) return res.status(500).send(err);
    return res.send(updatedURL);
  })
})

urlRoutes.delete('/:id', (req,res) => {
  URL.findByIdAndRemove(req.params.id, (err, deletedURL) => {
    if (err) return res.status(500).send(err);
    return res.status(202).send(deletedURL);
  })
})


module.exports = urlRoutes;
