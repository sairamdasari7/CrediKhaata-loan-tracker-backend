const Loan = require("../models/Loan");
const Repayment = require("../models/Repayment");
const Customer = require("../models/Customer");

exports.getSummary = async (req, res) => {
  const loans = await Loan.find({ userId: req.userId });
  const repayments = await Repayment.find().populate("loanId");

  const totalLoaned = loans.reduce((sum, l) => sum + l.amount, 0);
  const totalCollected = loans.reduce((sum, l) => sum + (l.amount - l.balance), 0);
  const overdueAmount = loans
    .filter(l => l.status === "overdue" || l.balance > 0 && new Date(l.dueDate) < new Date())
    .reduce((sum, l) => sum + l.balance, 0);

  res.json({ totalLoaned, totalCollected, overdueAmount });
};

exports.getOverdueCustomers = async (req, res) => {
  const overdueLoans = await Loan.find({
    userId: req.userId,
    dueDate: { $lt: new Date() },
    balance: { $gt: 0 }
  }).populate("customerId");

  const result = overdueLoans.map(l => ({
    customer: l.customerId.name,
    amountDue: l.balance,
    dueDate: l.dueDate
  }));

  res.json(result);
};
