// Express init
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

// Database setup
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

// Body parser
app.use(express.json());

// Order Route
const orderRoute = require("./routes/Orders.route");
app.use("/orders", orderRoute);

// CSV Route
const csvRoute = require("./routes/Csv.route");
app.use("/csv", csvRoute);

// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
