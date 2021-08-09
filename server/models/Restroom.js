const mongoose = require("mongoose");

const { Schema } = mongoose;

const restroomSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  accessible: {
    type: Boolean,
    required: true,
    trim: true,
  },
  comment: {
    type: String,
  },
  distance: {
    type: Number,
  },
  bearing: {
    type: String,
  },
});

const Restroom = mongoose.model("Restroom", restroomSchema);

module.exports = Restroom;
