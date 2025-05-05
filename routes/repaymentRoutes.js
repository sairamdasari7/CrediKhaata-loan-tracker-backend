const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const { recordRepayment } = require("../controllers/repaymentController");

router.use(auth);
router.post("/", recordRepayment);

module.exports = router;
