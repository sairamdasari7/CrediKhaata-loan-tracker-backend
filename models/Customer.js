const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  phone: String,
  address: String,
  trustScore: Number,
  creditLimit: Number
});

module.exports = mongoose.model("Customer", customerSchema);
