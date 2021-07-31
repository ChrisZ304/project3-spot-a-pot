const mongoose = require('mongoose');

const { Schema } = mongoose;

const pinSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  color: {
    type: String,
    required: true,
    trim: true
  }
});

const Pin = mongoose.model('Pin', pinSchema);

module.exports = Pin;
