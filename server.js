const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/customers", require("./routes/customerRoutes"));
app.use("/api/loans", require("./routes/loanRoutes"));
app.use("/api/repayments", require("./routes/repaymentRoutes"));
app.use("/api/summary", require("./routes/summaryRoutes"));

// DB + Start Server
mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
  ))
  .catch(err => console.log(err));
