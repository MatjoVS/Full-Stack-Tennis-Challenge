const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },

  password: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },

  utr: {
    type: Number,
    range: {
      min: {
        type: Number,
        min: 0,
      },
      max: {
        type: Number,
        max: 15,
      },
    },
    required: true,
  },

  favoriteSurface: [
    {
      type: String,
      enum: [
        "clay-court",
        "grass-court",
        "fast-hard-court",
        "slow-hard-court",
        "indoor-hard-court",
        "indoor-clay-court",
      ],
    },
  ],
  gameStyle: [
    {
      type: String,
      enum: [
        "undecided",
        "serve-and-volleyer",
        "agressive-baseliner",
        "counter-puncher",
        "all-around",
      ],
      default: "undecided",
    },
  ],

  time: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
