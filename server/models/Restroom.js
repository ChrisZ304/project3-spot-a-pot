const mongoose = require('mongoose');

const { Schema } = mongoose;

const restroomSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  review: {
    type: String
  },
  image: {
    type: String
  },
  accessible: {
    type: Boolean,
    required: true,
    trim: true
  },
  unisex: {
    type: Schema.Types.RestroomId,
    ref: 'Category',
    required: true
  }, 
  
});

const Restroom = mongoose.model('Restroom', restroomSchema);

module.exports = Restroom;
