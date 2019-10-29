const express = require("express");
const router = express.Router();
const Score = require("../models/Scores");

// Récupérer un score
router.get("/", async (req, res) => {
  try {
    const scores = await Score.find();
    res.json(scores);
  } catch (err) {
    res.json({ message: err });
  }
});

// Soumettre un score
router.post("/", async (req, res) => {
  const score = new Score({
    score: req.body.score,
    id: req.body.id
  });

  try {
    const savedScore = await score.save();
    res.json(savedScore);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update d'un score
router.patch("/:scoreId", async (req, res) => {
  try {
    const updatedScore = await Score.updateOne(
      { id: req.params.scoreId },
      { $set: { score: req.body.score } }
    );

    res.json(updatedScore);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
