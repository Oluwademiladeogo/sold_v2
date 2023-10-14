require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
//using classes and controllers soon
app.use("/", (require("./routes/index")))
app.use("/login", require("./routes/login"))
app.use("/cart", require("./routes/cart"))

module.exports = app