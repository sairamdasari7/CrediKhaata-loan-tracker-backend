const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const { createLoan, getLoans } = require("../controllers/loanController");

router.use(auth);
router.post("/", createLoan);
router.get("/", getLoans);

module.exports = router;
