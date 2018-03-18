const express = require('express');
const postRoutes = express.Router();
const Post =  require('../models/posts.js');

postRoutes.get('/', (req, res) => {
  Post.find( (err, posts) => {
    if (err) return res.status(500).send(err);
    return res.send(posts);
  });
});

postRoutes.get('/:id', (req,res) => {
  Post.findById(req.params.id, (err, posts) => {
    if (err) return res.status(500).send(err);
    return res.send(posts);
  });
});

postRoutes.post('/', (req,res) => {
  const newPost = new Post(req.body);
  newPost.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(201).send(newPost);
  })
})

postRoutes.put("/:id", (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body, {new:true},
  (err,updatedPost) => {
    if(err) return res.status(500).send(err);
    return res.send(updatedPost);
  });
});

postRoutes.delete("/:id", (req, res) => {
  Post.findByIdAndRemove(req.params.id, (err, removedPost) => {
    if(err) return res.status(500).send(err);
    return res.status(202).send(removedProduct)
  });
});


module.exports = postRoutes;
