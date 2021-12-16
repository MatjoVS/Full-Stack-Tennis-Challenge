var express = require("express");
var router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/sign-up", function (req, res, next) {
  const { username, password, age, utr, favoriteSurface, gameStyle } = req.body;
console.log(username)
console.log(password)
console.log(age)
console.log(utr)
console.log(favoriteSurface)
console.log(gameStyle)
  if (!username || !password || !age || !utr || !favoriteSurface) {
    res.json({
      error: "Username, Password, age, utr and favorite Surface are required. ",
    });
  }

  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const userToCreate = new User({
    username: username,
    password: hashedPassword,
    age: age,
    utr: utr,
    favoriteSurface: favoriteSurface,
    gamestyle: gameStyle || "undecided",
  });

  User.create(userToCreate)
    .then((newlyCreatedUser) => {
      console.log(newlyCreatedUser.id);

      const payload = {
        user: {
          id: newlyCreatedUser.id,
        },
      };

      jwt.sign(
        payload, //payload
        process.env.SECRET, //secret to help encrypt jwt
        { expiresIn: 3600000 }, //how long the token lasts
        (err, token) => {
          if (err) throw err;
          else {
            res.json({ token, id: newlyCreatedUser.id, success: true });
          }
        }
      );
    })
    .catch((err) => {
      console.log("Something went wrong", err);
      res.json(err);
    });
});
// res.json({ message: 'SUCCESS', user: userToCreate });

router.post("/login", (req, res) => {
  const { username, password } = req.body;
console.log(1)
  if (!username || !password) {
    res.json({ error: "Username and password are required" });
  }
console.log(2)
  User.findOne({ username: username })
    .then((foundUser) => {
      //Send back if user doesn't exist
      if (!foundUser) {
        res.json({ message: "Username not found" });
      }
console.log(3)
      //Check for proper password

      const passMatch = bcrypt.compareSync(password, foundUser.password);

      if (!passMatch) {
        res.json({ message: "Improper password" });
      }
console.log(4)
      //Sign JWT

      const payload = {
        user: {
          id: foundUser.id,
        },
      };
console.log(5)
      jwt.sign(
        payload, //payload
        process.env.SECRET, //secret to help encrypt jwt
        { expiresIn: 3600000 }, //how long the token lasts
        (err, token) => {
          if (err) throw err;
          else {
            res.json({ token, id: foundUser.id, success: true });
          }
        }
      );
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/login-test", auth, (req, res) => {
  console.log(req.user);
  User.findById(req.user.id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
