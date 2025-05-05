const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const {
  getSummary, getOverdueCustomers
} = require("../controllers/summaryController");

router.use(auth);
router.get("/", getSummary);
router.get("/overdue", getOverdueCustomers);

module.exports = router;
