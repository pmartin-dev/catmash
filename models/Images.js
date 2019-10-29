const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  id: String
});

module.exports = mongoose.model("Images", ImageSchema);
