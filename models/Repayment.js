const mongoose = require("mongoose");

const repaymentSchema = new mongoose.Schema({
  loanId: { type: mongoose.Schema.Types.ObjectId, ref: "Loan" },
  amount: Number,
  date: Date
});

module.exports = mongoose.model("Repayment", repaymentSchema);
