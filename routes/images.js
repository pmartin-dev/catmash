const express = require("express");
const router = express.Router();
const Image = require("../models/Images");

// Récupérer une image
router.get("/", async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (err) {
    res.json({ message: err });
  }
});

// Soumettre une image
router.post("/", async (req, res) => {
  const image = new Image({
    url: req.body.url,
    id: req.body.id
  });

  try {
    const savedImage = await image.save();
    res.json(savedImage);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update d'une image
router.patch("/:imageId", async (req, res) => {
  try {
    const updatedImage = await Image.updateOne(
      { _id: req.params.imageId },
      { $set: { title: req.body.title } }
    );

    res.json(updatedImage);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
