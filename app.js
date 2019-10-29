const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import des routes
const imagesRoute = require("./routes/images");
const scoresRoute = require("./routes/scores");
app.use("/images", imagesRoute);
app.use("/scores", scoresRoute);

// Routes
app.get("/", (req, res) => {
  res.send("API pour CatMash");
});

// Connexion DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connecté à la DB!")
);

// Ecoute du serveur
app.listen(4000, () => {
  console.log("J'écoute sur 4000");
});
