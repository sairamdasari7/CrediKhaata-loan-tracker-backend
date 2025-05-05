const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const {
  addCustomer, getCustomers, updateCustomer, deleteCustomer
} = require("../controllers/customerController");

router.use(auth);
router.post("/", addCustomer);
router.get("/", getCustomers);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

module.exports = router;
