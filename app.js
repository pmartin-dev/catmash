const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
var path = require("path");
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
// app.get("/", (req, res) => {
//   res.send("API pour CatMash");
// });

// Connexion DB
mongoose.connect(
  DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connecté à la DB!")
);

// Prod
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

// Ecoute du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`J'écoute sur ${PORT}`);
});
