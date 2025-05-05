const moment = require("moment");

module.exports = function (loan) {
  const due = moment(loan.dueDate);
  const now = moment();
  if (loan.balance <= 0) return "paid";
  if (now.isAfter(due)) return "overdue";
  return "pending";
};
