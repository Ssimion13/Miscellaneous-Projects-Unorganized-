const express = require("express");
const characterRoutes = express.Router();
const Character = require("../mongoose/character")


characterRoutes.post("/", (req,res)=> {
  const newCharacter = new Character(req.body);
  newCharacter.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(201).send(newCharacter);
  })
})

characterRoutes.get("/", (req,res) => {
  //Character.find() will find everything
  //.find always returns an array, even an empty one or only one with one index in it

  /* Character.find({isGoodGuy: true},(err, characters) => {
    if (err) return res.status(500).send(err);
    return res.send(characters);
})
*/
})
characterRoutes.get("/:id", (req,res) => {
  Character.findById(req.params.id, (err, character)) =>{
   if (err) return res.status(500).send(err);
   return res.send(character);

  })
})

characterRoutes.put("/:id", (req,res)=> {
  Character.findByIdAndUpdate(req.params.id,req.body, (err, updatedCharacter) => {
    if (err) return res.status(500).send(err);
    return res.send(updatedCharacter)
  }



})

characterRoutes.delete("/:id", (req,res)=> {
  Character.findByIdAndRemove(req.params.id, (err, removedCharacter) => {
    if (err) return res.status(500).send(err);
   return res.status(202).send(removedCharacter);
  }


})




module.exports = characterRoutes;
