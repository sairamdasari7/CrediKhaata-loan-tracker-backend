const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  item: String,
  amount: Number,
  issueDate: Date,
  dueDate: Date,
  frequency: String,
  interest: Number,
  graceDays: Number,
  status: { type: String, default: "pending" },
  balance: Number
});

module.exports = mongoose.model("Loan", loanSchema);
