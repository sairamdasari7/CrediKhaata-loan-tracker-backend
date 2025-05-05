const Repayment = require("../models/Repayment");
const Loan = require("../models/Loan");

exports.recordRepayment = async (req, res) => {
  try {
    const { loanId, amount, date } = req.body;
    const loan = await Loan.findById(loanId);
    if (!loan) return res.status(404).json({ message: "Loan not found" });

    const repayment = await Repayment.create({ loanId, amount, date });
    loan.balance -= amount;
    if (loan.balance <= 0) loan.status = "paid";
    await loan.save();

    res.status(201).json({ repayment, updatedBalance: loan.balance });
  } catch (err) {
    res.status(400).json({ message: "Repayment error", error: err.message });
  }
};
