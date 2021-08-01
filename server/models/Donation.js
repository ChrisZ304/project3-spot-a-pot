const mongoose = require("mongoose");

const { Schema } = mongoose;

const donationSchema = new Schema({
  donationDate: {
    type: Date,
    default: Date.now,
  },
  dollarAmt: [
    {
      //type:
      //ref:
    },
  ],
});

const Donation = mongoose.model("Donation", donationSchema);

module.exports = Donation;
