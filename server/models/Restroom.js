const mongoose = require('mongoose');

const { Schema } = mongoose;

const restroomSchema = new Schema({
  location: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  stalls: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.RestroomId,
    ref: 'Category',
    required: true
  }
});

const Restroom = mongoose.model('Restroom', restroomSchema);

module.exports = Restroom;
