const Loan = require("../models/Loan");
const calculateStatus = require("../utils/calculateLoanStatus");

exports.createLoan = async (req, res) => {
  try {
    const loan = await Loan.create({
      ...req.body,
      userId: req.userId,
      balance: req.body.amount
    });
    res.status(201).json(loan);
  } catch (err) {
    res.status(400).json({ message: "Loan creation failed", error: err.message });
  }
};

exports.getLoans = async (req, res) => {
  const loans = await Loan.find({ userId: req.userId }).populate("customerId");
  const updatedLoans = loans.map(loan => ({
    ...loan.toObject(),
    status: calculateStatus(loan)
  }));
  res.json(updatedLoans);
};
