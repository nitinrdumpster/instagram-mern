const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");
const { JWT_SECRET } = require("../keys");
const requireLogin = require("../middlewares/requireLogin");

router.get("/", (req, res) => {
  res.send("Hello world !");
});

//  @DESC: Creating an user account
//  @SEC:  Public route
router.post("/signup", (req, res) => {
  // Destructuring name, email and password from body
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(422).json({ error: "Fill in all the fields" });
  }
  User.findOne({ email })
    .then((savedUser) => {
      // If user already exists, throw an error
      if (savedUser) {
        return res.status(422).json({ error: "User already exists" });
      }
      // Creating new user if doesn't exist
      bcrypt.hash(password, 12).then((hashedPassword) => {
        const user = new User({
          name,
          email,
          password: hashedPassword,
        });
        user
          .save()
          .then((user) => res.json({ message: "New user created" }))
          .catch((err) => console.log(err));
      });
    })
    .catch((err) => console.log(err));
});

//  @DESC: Logging into an user account
//  @SEC:  Public route
router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Fill in all the fields" });
  }
  User.findOne({ email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "Invalid email or password" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          //res.json({ message: "Successfully logged in" });
          const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
		  const { _id, name, email } = savedUser;
          res.json({ token, user:{ _id, name, email } });
        } else {
          return res.status(422).json({ error: "Invalid email or password" });
        }
      })
      .catch((err) => console.log(err));
  });
});

module.exports = router;
