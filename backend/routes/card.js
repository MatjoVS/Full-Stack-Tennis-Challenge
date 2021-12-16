var express = require("express");
var router = express.Router();
const cards = require("../cards");
const Card = require("../models/Card");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.json(cards);
});

router.get("/seedDatabase", function (req, res) {
  // const cardToCreate = new Card({
  //   challenge:
  //     "Shoe lace challenge: Your shoe lace broke from sliding, what do you do? You have 90 seconds before getting hit with a code violation for time delay.",

  //   proTip:
  //     "How did you handle this challenge? You never know when this will happen, so the easiest fix is to have a backup in your bag. If this happens often take the metal spring out of a mechanical pen ",

  //   surface: ["clay-court, hard-court"],
  //   challengeLevelMin: 7,
  //   challengeLevelMax: 12,
  //   gamestyle: [
  //     "undecided",
  //     "serve-and-volleyer",
  //     "agressive-baseliner",
  //     "counter-puncher",
  //     "all-around",
  //   ],
  // });

  Card.create(cards)
    .then((newlyCreatedCard) => {
      console.log(newlyCreatedCard.id);
      res.json({ success: true });
    })
    .catch((err) => {
      console.log("Something went wrong", err);
      res.json(err);
    });
});

router.get('/find-by-id/:cardId', (req, res) =>{
  console.log('WE ARE HERE', req.params.cardId);
  Card.findById(req.params.cardId)
  .then((results) =>{
    console.log('This is what we got', results);
      res.json(results);
    })
    .catch((err) => {
      console.log('Something went wrong', err);
      res.json({ error: err.message });
  });
});
 



module.exports = router;
