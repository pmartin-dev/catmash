const mongoose = require("mongoose");

const ScoreSchema = mongoose.Schema({
  score: {
    type: Number,
    required: true
  },
  id: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Scores", ScoreSchema);
