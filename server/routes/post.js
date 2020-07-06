const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const requireLogin = require("../middlewares/requireLogin");

// @DESC:   Get all posts
// @SEC:    Requires login
router.get("/posts", requireLogin,(req, res) => {
  Post.find()
    .populate("postedBy", "_id name")
    .then((posts) => res.json({ posts: posts }))
    .catch((err) => console.log(err));
});

// @DESC:   Creating a new post
// @SEC:    Requires login
router.post("/createpost", requireLogin, (req, res) => {
  const { title, body, photo } = req.body;
  if (!title || !body || !photo) {
    return res.status(422).json({ error: "Fill in all the fields" });
  }
  req.user.password = undefined;
  const post = new Post({
    title,
    body,
    photo,
    postedBy: req.user,
  });
  post
    .save()
    .then((post) => res.json({ post: post }))
    .catch((err) => console.log(err));
});

// @DESC:   Show posts created by an user
// @SEC:    Requires login
router.get("/myposts", requireLogin, (req, res) => {
  Post.find({ postedBy: req.user._id })
    .populate("postedBy", "_id name")
    .then((posts) => res.json({ posts }));
});

module.exports = router;
