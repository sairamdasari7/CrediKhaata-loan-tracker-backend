const Customer = require("../models/Customer");

exports.addCustomer = async (req, res) => {
  try {
    const customer = await Customer.create({ ...req.body, userId: req.userId });
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ message: "Add customer failed", error: err.message });
  }
};

exports.getCustomers = async (req, res) => {
  const customers = await Customer.find({ userId: req.userId });
  res.json(customers);
};

exports.updateCustomer = async (req, res) => {
  const customer = await Customer.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    req.body,
    { new: true }
  );
  res.json(customer);
};

exports.deleteCustomer = async (req, res) => {
  await Customer.findOneAndDelete({ _id: req.params.id, userId: req.userId });
  res.json({ message: "Customer deleted" });
};
