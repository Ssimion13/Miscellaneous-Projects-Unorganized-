const express = require("express");
const bountyRoutes = express.Router();
const Bounty = require("../models/bounties");


bountyRoutes.get("/", (req,res) => {
  Bounty.find((err, bounties) => {
    if (err) return res.status(500).send(err);
    return res.send(bounties);
  })
})

bountyRoutes.get("/:id", (req, res) => {
  Bounty.findById(req.params.id, (err, product) => {
    if(err) return res.status(500).send(err);
    return res.send(product);
  });
});

bountyRoutes.post("/", (req,res) => {
  const newBounty = new Bounty(req.body);
  newBounty.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(201).send(newBounty);
  });
});

bountyRoutes.put("/:id", (req, res) => {
  Bounty.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,updatedBounty) => {
    if(err) return res.status(500).send(err);
    return res.send(updatedBounty);
  });
});

bountyRoutes.delete("/:id", (req, res) => {
  Bounty.findByIdAndRemove(req.params.id, (err,removedProduct) => {
    if (err) return res.status(500).send(err);
    return res.status(202).send(removedProduct)
  })
})


module.exports = bountyRoutes;
