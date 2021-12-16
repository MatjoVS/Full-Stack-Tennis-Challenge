const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  challenge: String,

  proTip: {
    type: String,
    required: true,
  },

  surface: [
    {
      type: String,
    },
  ],

  challengeLevelMin: {
    type: Number,
    range: {
      min: {
        type: Number,
        min: 0,
      },
      max: {
        type: Number,
        max: 11,
      },
    },
    required: true,
  },

  challengeLevelMax: {
    type: Number,
    range: {
      min: {
        type: Number,
        min: 3,
      },
      max: {
        type: Number,
        max: 15,
      },
    },
    required: true,
  },

  gamestyle: [
    {
      type: String,
    },
  ],

  time: {
    type: Date,
    default: Date.now,
  },
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;

//make a card that has 0-12 range to be able to use different ranges in the cards.js
